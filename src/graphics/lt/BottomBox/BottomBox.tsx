import React from 'react';
import { bar, mainText, textHeader, textsWrapper, wrapper } from './BottomBox.css';
import { useReplicant } from 'use-nodecg';
import { MemberInfo } from '../../../types';

type Props = {
  horizontalRatio: number;
};
export const BottomBox = ({ horizontalRatio }: Props) => {
  const [membersInfos] = useReplicant<MemberInfo[]>('members', []);
  const [memberIndex] = useReplicant<number>('memberIndex', 0);
  const memberInfo = membersInfos[memberIndex];

  const style = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: `${100 - horizontalRatio * 100}%`,
  } as const;
  return (
    <div style={style}>
      <BottomBoxLayout memberInfo={memberInfo} />
    </div>
  );
};

type BottomBoxLayoutProps = {
  memberInfo?: MemberInfo;
};
const BottomBoxLayout = ({ memberInfo }: BottomBoxLayoutProps) => {
  const speaker = memberInfo?.speaker ?? '';
  const title = memberInfo?.title ?? '';
  return (
    <div className={wrapper}>
      <div className={textsWrapper}>
        <div className={textHeader}>Speaker</div>
        <div className={mainText}>{speaker}</div>
      </div>
      <div className={bar} />
      <div className={textsWrapper}>
        <div className={textHeader}>Title</div>
        <div className={mainText}>{title}</div>
      </div>
    </div>
  );
};
