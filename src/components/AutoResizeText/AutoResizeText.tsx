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
  const elm = ref.current;
  useEffect(() => {
    if (!elm || width == 0) return;

    console.log({
      elm,
      width,
      scrollWidth: elm.scrollWidth,
      clientWidth: elm.clientWidth,
    });
    const fontSize = `min(${(width / stringWidth(text)) * 1.7}px, 55px)`;
    console.log({ fontSize });
    elm.style.fontSize = fontSize;
  }, [text, width]);

  useLayoutEffect(() => {
    if (!elm) return;
    const obs = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
    obs.observe(elm);

    return () => obs.disconnect();
  }, [elm]);
  return (
    <div style={style} ref={ref} className={`${nowrap} ${className}`}>
      {text}
    </div>
  );
};
