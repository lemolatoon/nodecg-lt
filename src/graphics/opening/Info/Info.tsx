import React from 'react';
import { bar, font, headerFont, overflowHidden, row, wrapper } from './Info.css';
import { MemberInfo } from '../../../types';
import { useReplicant } from 'use-nodecg';
import { AutoResizeText } from '../../../components/AutoResizeText';

type Props = {
  className?: string;
};
export const Info = ({ className }: Props) => {
  const [membersInfos] = useReplicant<MemberInfo[]>('members', []);
  const [memberIndex] = useReplicant<number>('memberIndex', 0);

  const nextThreeMemberInfos = membersInfos.slice(memberIndex, memberIndex + 3);

  return <InfoLayout className={className} infos={nextThreeMemberInfos} />;
};

type InfoLayoutProps = {
  className?: string;
  infos: MemberInfo[];
};
const rowHeight = '125px';
// const rowHeight = 'auto';
const InfoLayout = ({ className, infos }: InfoLayoutProps) => {
  return (
    <div className={`${wrapper} ${className}`}>
      <div className={headerFont}>Speaker</div>
      <div />
      <div className={headerFont}>Title</div>
      <div>
        {infos.map(({ speaker }, index) => (
          <div key={index} className={row}>
            <AutoResizeText className={font} text={speaker} />
          </div>
        ))}
      </div>
      <div className={bar} />
      <div>
        {infos.map(({ title }, index) => (
          <div key={index} className={row}>
            <AutoResizeText className={font} text={title} />
          </div>
        ))}
      </div>
    </div>
  );
};
