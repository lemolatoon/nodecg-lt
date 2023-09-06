import { style } from '@vanilla-extract/css';

export const background = style({
  position: 'absolute',
  display: 'none',
  zIndex: -1,
  height: '100vh',
  width: '100vw',
});

export const canvas = style({
  position: 'absolute',
  zIndex: -1,

  filter: 'saturate(1.5)',
});
