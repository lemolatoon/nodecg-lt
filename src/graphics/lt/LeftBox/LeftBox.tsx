import React from 'react';

type Props = {
  verticalRatio: number;
};
export const LeftBox = ({ verticalRatio }: Props) => {
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${verticalRatio * 100}%`,
    height: '100%',
  } as const;
  return <div style={style}></div>;
};
