import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useReplicant } from 'use-nodecg';
import { tableWrapper } from './Table.css';
import Encoding from 'encoding-japanese';
import { parse } from 'csv-parse/browser/esm/sync';

type FormInput = {
  members: File[];
};
type MemberInfo = {
  speaker: string;
  title: string;
};
export const Table = () => {
  const dummy = {
    speaker: 'lemolatoon',
    title: 'ミリしらgolangでdiscord botを作ってみた話',
  };
  const [memberInfos, setMemberInfos] = useReplicant<MemberInfo[]>('members', [dummy], { defaultValue: [dummy] });
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
      <TableLayout form={form} onSubmit={onSubmit} memberInfos={memberInfos} />
    </>
  );
};

type TableLayoutProps = {
  form: ReturnType<typeof useForm<FormInput>>;
  onSubmit: SubmitHandler<FormInput>;
  memberInfos?: MemberInfo[];
};
const TableLayout = ({ form, onSubmit, memberInfos }: TableLayoutProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="file" {...register('members')} />
        <button type="submit">反映</button>
        {memberInfos ? (
          <ul className={tableWrapper}>
            {memberInfos.map((memberInfo, index) => (
              <li key={index}>
                <div>{memberInfo.speaker}</div>
                <div>{memberInfo.title}</div>
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
