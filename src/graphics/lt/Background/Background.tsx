import React, { useEffect } from 'react';
import { background, canvas } from './Background.css';

type Props = {
  verticalRatio: number;
  horizontalRatio: number;
};
export const Background = ({ verticalRatio, horizontalRatio }: Props) => {
  const ref = React.useRef<HTMLCanvasElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    const canvas = ref.current;
    console.log(canvas);
    console.log(canvas?.toDataURL());
    if (canvas) {
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const image = imgRef.current;
        if (!image) {
          return;
        }
        if (!loaded) {
          return;
        }
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

        // Clear the reactangle for displaying lt itself
        ctx.clearRect(canvas.width * verticalRatio, 0, canvas.width, canvas.height * horizontalRatio);
      }
    }
  }, [ref.current, loaded]);
  useEffect(() => {
    const image = imgRef.current;
    if (image) {
      image.onload = () => {
        setLoaded(true);
      };
    }
  }, [imgRef.current]);
  const canvasProps = {
    width: window.innerWidth,
    height: window.innerHeight,
  };
  return (
    <>
      <canvas {...canvasProps} ref={ref} className={canvas} />
      <img ref={imgRef} className={background} src="assets/lt_background.png" />
    </>
  );
};
