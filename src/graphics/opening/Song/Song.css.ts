import { fontFace, style } from '@vanilla-extract/css';

export const wrapper = style({
  backgroundColor: 'rgba(118, 187, 180, 0.6)',
  height: '60px',
});

const gothic16 = fontFace({
  src: 'url("../fonts/DotGothic16/DotGothic16-Regular.ttf") format("truetype")',
});

export const songName = style({
  color: 'white',
  fontSize: '40px',
  fontFamily: gothic16,
});
