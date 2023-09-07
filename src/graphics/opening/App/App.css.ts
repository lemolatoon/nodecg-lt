import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});
globalStyle('#app', {
  height: '100vh',
});

export const background = style({
  position: 'absolute',
  zIndex: -1,
  width: '100vw',
  height: '100vh',
  filter: 'saturate(1.5) blur(2px)',
});

export const wrapper = style({
  display: 'flex',
  height: '100vh',
  width: '100vw',
  flexDirection: 'column',
  alignItems: 'center',
});

export const title = style({
  color: 'white',
  fontSize: '150px',
  fontWeight: 'bold',
});

export const info = style({
  alignSelf: 'flex-start',
  width: '75%',
});

export const song = style({
  marginTop: 'auto',
  marginBottom: '64px',
});
