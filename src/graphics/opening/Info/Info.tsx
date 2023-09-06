import React from 'react';
import { bar, font, headerFont, wrapper } from './Info.css';

type Props = {
  className?: string;
};
export const Info = ({ className }: Props) => {
  const dummyInfos: Info[] = [
    {
      speaker: 'lemolatoon',
      title: 'ミリしらgolangでdiscord botを作ってみた話',
    },
    {
      speaker: 'BastelColor',
      title: '「かわいい」について',
    },
    {
      speaker: 'Hara.S',
      title: '組み込みシステムにおけるデバッグと動作検証',
    },
  ];
  return <InfoLayout className={className} infos={dummyInfos} />;
};

export type Info = {
  speaker: string;
  title: string;
};

type InfoLayoutProps = {
  className?: string;
  infos: Info[];
};
const InfoLayout = ({ className, infos }: InfoLayoutProps) => {
  return (
    <div className={`${wrapper} ${className}`}>
      <div className={headerFont}>Speaker</div>
      <div />
      <div className={headerFont}>Title</div>
      <div>
        {infos.map(({ speaker }, index) => (
          <div key={index} className={font}>
            {speaker}
          </div>
        ))}
      </div>
      <div className={bar} />
      <div>
        {infos.map(({ title }, index) => (
          <div key={index} className={font}>
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};
