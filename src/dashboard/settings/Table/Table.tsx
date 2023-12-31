import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useReplicant } from 'use-nodecg';
import { buttonReset, extendWidth, selected, tableRow, tableWrapper } from './Table.css';
import Encoding from 'encoding-japanese';
import { parse } from 'csv-parse/browser/esm/sync';
import { MemberInfo } from '../../../types';

type FormInput = {
  members: File[];
};
type Props = {
  className?: string;
};
export const Table = (props: Props) => {
  const [memberInfos, setMemberInfos] = useReplicant<MemberInfo[]>('members', [], { defaultValue: [] });
  const [memberIndex, setMemberIndex] = useReplicant<number>('memberIndex', 0, { defaultValue: 0 });
  const form = useForm<FormInput>();
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    if (!data.members) return;
    const buffer = await data.members[0].arrayBuffer();
    //文字コードをunicodeへ変換
    const conv = Encoding.convert(new Uint8Array(buffer), {
      to: 'UNICODE',
      from: 'AUTO',
    });
    const text = Encoding.codeToString(conv);
    const records: string[][] = parse(text);
    const memberInfos = records.flatMap((record) => {
      if (record.length < 2) return [];
      return [
        {
          speaker: record[0],
          title: record[1],
        },
      ];
    });
    setMemberInfos(memberInfos);
  };
  return (
    <>
      <TableLayout
        {...props}
        form={form}
        onSubmit={onSubmit}
        memberInfos={memberInfos}
        memberIndex={memberIndex}
        onClickMember={setMemberIndex}
      />
    </>
  );
};

type TableLayoutProps = {
  form: ReturnType<typeof useForm<FormInput>>;
  onSubmit: SubmitHandler<FormInput>;
  memberInfos?: MemberInfo[];
  memberIndex: number;
  onClickMember: (index: number) => void;
} & Props;
const TableLayout = ({ className, form, onSubmit, memberInfos, memberIndex, onClickMember }: TableLayoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className={className}>
        <input type="file" {...register('members')} />
        <button type="submit">反映</button>
        {memberInfos ? (
          <ul className={tableWrapper}>
            {memberInfos.map((memberInfo, index) => (
              <li key={index} className={extendWidth}>
                <button className={`${buttonReset} ${extendWidth}`} onClick={() => onClickMember(index)}>
                  <div className={index == memberIndex ? `${tableRow} ${selected}` : tableRow}>
                    <div>{memberInfo.speaker}</div>
                    <div>{memberInfo.title}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div>No members info</div>
        )}
      </form>
    </>
  );
};
