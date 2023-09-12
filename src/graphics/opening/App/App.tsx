import React from 'react';
import { background, info, song, title, wrapper } from './App.css';
import { Info } from '../Info';
import { Song } from '../Song';
import { OpeningPageState } from '../../../types';
import { useReplicant } from 'use-nodecg';
import { exhaustivenessCheck } from '../../../util';
import { MainMessageText } from '../MainMessageText';
import '../global.css';

export const App = () => {
  const [openingPageState] = useReplicant<OpeningPageState>('openingPageState', { state: 'opening' } as const, {
    defaultValue: { state: 'opening' as const },
  });
  return (
    <>
      {/* <img className={background} src={'./assets/background.png'} /> */}
      <video className={background} autoPlay loop muted playsInline src={'./assets/trains.mp4'} />
      <div className={wrapper}>
        <div className={title}>KCS Conference</div>
        <Inner state={openingPageState.state} />
        <Song className={song} />
      </div>
    </>
  );
};

const Inner = ({ state }: OpeningPageState) => {
  switch (state) {
    case 'opening':
      return (
        <>
          <Info className={info} />
        </>
      );
      break;
    case 'thankyou':
      return <MainMessageText text="THANK YOU FOR WATCHING!"></MainMessageText>;
      break;
    case 'waiting':
      return <MainMessageText text="PLEASE WAIT FOR STREAMING..."></MainMessageText>;
      break;
    default:
      exhaustivenessCheck(state);
  }
};
