import React from 'react';
import { bar, mainText, textHeader, textsWrapper, wrapper } from './BottomBox.css';

type Props = {
  horizontalRatio: number;
};
export const BottomBox = ({ horizontalRatio }: Props) => {
  const dummySpeaker = 'lemolatoon';
  const dummyTitle = 'ミリしらgolangでdiscord botを作ってみた話';

  const style = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: `${100 - horizontalRatio * 100}%`,
  } as const;
  return (
    <div style={style}>
      <BottomBoxLayout speaker={dummySpeaker} title={dummyTitle} />
    </div>
  );
};

type BottomBoxLayoutProps = {
  speaker: string;
  title: string;
};
const BottomBoxLayout = ({ speaker, title }: BottomBoxLayoutProps) => {
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
