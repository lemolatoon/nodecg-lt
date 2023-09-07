import { globalStyle } from '@vanilla-extract/css';

globalStyle('*', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
});

globalStyle('#app', {
  height: '100vh',
});

globalStyle('li', {
  listStyle: 'none',
});

globalStyle('ul', {
  paddingLeft: 0,
});
