import React, { ComponentPropsWithoutRef, useEffect } from 'react';
import { nowrap } from './AutoResizeText.css';

type Props = {
  className?: string;
  text: string;
  style?: React.CSSProperties;
};
export const AutoResizeText = ({ className, text, style }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const elm = ref.current;
  useEffect(() => {
    if (!elm) return;

    // 文字列がはみ出していたら縮小する
    while (elm.scrollWidth > elm.clientWidth) {
      const fontSize = parseFloat(getComputedStyle(elm).fontSize.replace('px', ''));
      // elm.style.fontSize = `${fontSize * elm.clientWidth / elm.scrollWidth}px`;
      elm.style.fontSize = `${fontSize - 1}px`;
    }
  }, [text, elm]);
  return (
    <div style={style} ref={ref} className={`${className} ${nowrap}`}>
      {text}
    </div>
  );
};
