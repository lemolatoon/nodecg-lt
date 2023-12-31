import React, { useEffect, useLayoutEffect } from 'react';
import { nowrap } from './AutoResizeText.css';
import stringWidth from 'string-width';

type Props = {
  className?: string;
  text: string;
  style?: React.CSSProperties;
};
export const AutoResizeText = ({ className, text, style }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [width, setWidth] = React.useState(0);
  useEffect(() => {
    const elm = ref.current;
    if (!elm || width == 0) return;

    const fontSize = `min(${(width / stringWidth(text)) * 2 - 2}px, 55px)`;
    elm.style.fontSize = fontSize;
  }, [ref.current, text, width]);

  useLayoutEffect(() => {
    const elm = ref.current;
    if (!elm) return;
    const obs = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
    obs.observe(elm);

    return () => obs.disconnect();
  }, [ref.current]);
  return (
    <div style={style} ref={ref} className={`${nowrap} ${className}`}>
      {text}
    </div>
  );
};
