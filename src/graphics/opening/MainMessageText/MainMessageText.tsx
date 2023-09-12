import React from 'react';
import { centerize, wrapper } from './MainMessageText.css';

type Props = {
  className?: string;
  text: string;
};
export const MainMessageText = ({ className, text }: Props) => {
  return (
    <div className={`${className} ${wrapper}`}>
      <div className={centerize}>{text}</div>
    </div>
  );
};
