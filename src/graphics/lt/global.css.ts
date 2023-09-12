import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('*', {
  fontFamily: 'Bahnschrift',
});

globalStyle('#app', {
  height: '100vh',
});
