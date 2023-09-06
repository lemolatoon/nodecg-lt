import React from 'react';
import { background, info, song, title, wrapper } from './App.css';
import backgroundImg from './assets/background.png';
import { Info } from './Info';
import { Song } from '../../../Song';

export const App = () => {
  return (
    <>
      <img className={background} src={backgroundImg} />
      <div className={wrapper}>
        <div className={title}>KCS Conference</div>
        <Info className={info} />
        <Song className={song} />
      </div>
    </>
  );
};
