import React from 'react';
import { background, info, title, wrapper } from './App.css';
import backgroundImg from './assets/background.png';
import { Info } from './Info';

export const App = () => {
  return (
    <>
      <img className={background} src={backgroundImg} />
      <div className={wrapper}>
        <div className={title}>KCS CONFERENCE</div>
        <Info className={info} />
      </div>
    </>
  );
};
