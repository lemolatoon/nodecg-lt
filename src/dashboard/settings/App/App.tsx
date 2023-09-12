import React from 'react';
import { Table } from '../Table';
import { OpeningStateForm } from '../OpeningStateForm';
import { margin16 } from './App.css';
import { SongNameStateForm } from '../SongNameStateForm';

export const App = () => {
  return (
    <div>
      <h1>管理画面だよ！</h1>
      <SongNameStateForm className={margin16} />
      <OpeningStateForm className={margin16} />
      <Table className={margin16} />
    </div>
  );
};
