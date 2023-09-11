import React from 'react';
import { background, info, song, title, wrapper } from './App.css';
import { Info } from '../Info';
import { Song } from '../Song';

export const App = () => {
  return (
    <>
      {/* <img className={background} src={'./assets/background.png'} /> */}
      <video className={background} autoPlay loop muted playsInline src={'./assets/trains.mp4'} />
      <div className={wrapper}>
        <div className={title}>KCS Conference</div>
        <Info className={info} />
        <Song className={song} />
      </div>
    </>
  );
};
