import React from 'react';
import { Background } from '../Background';
import { LeftBox } from '../LeftBox';
import { BottomBox } from '../BottomBox';

export const App = () => {
  const verticalRatio = 1 / 5;
  const horizontalRatio = 4 / 5;
  return (
    <>
      <Background verticalRatio={verticalRatio} horizontalRatio={horizontalRatio} />
      <LeftBox verticalRatio={verticalRatio} />
      <BottomBox horizontalRatio={horizontalRatio} />
    </>
  );
};
