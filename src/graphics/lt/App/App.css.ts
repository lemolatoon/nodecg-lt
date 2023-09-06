import { style } from '@vanilla-extract/css';

export const background = style({
  position: 'absolute',
  zIndex: -1,
  width: '100vw',
  height: '100vh',
  filter: 'saturate(1.5) blur(2px)',
});
