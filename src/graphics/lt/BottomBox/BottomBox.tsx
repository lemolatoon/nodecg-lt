import React from 'react';
import { wrapper } from './BottomBox.css';

type Props = {
  horizontalRatio: number;
};
export const BottomBox = ({ horizontalRatio }: Props) => {
  const style = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    height: `${100 - horizontalRatio * 100}%`,
  } as const;
  return (
    <div style={style} className={wrapper}>
      BottomBox
    </div>
  );
};