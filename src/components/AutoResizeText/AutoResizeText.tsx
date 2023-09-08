import React, { useEffect } from 'react';
import { nowrap } from './AutoResizeText.css';

type Props = {
  className?: string;
  text: string;
};
export const AutoResizeText = ({ className, text }: Props) => {
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
    <div ref={ref} className={`${className} ${nowrap}`}>
      {text}
    </div>
  );
};
