import { style } from '@vanilla-extract/css';

export const tableWrapper = style({
  marginTop: '32px',
  border: '1px solid #e0e0e0',
});

export const tableRow = style({
  display: 'grid',
  border: '1px solid #e0e0e0',
  gridTemplateColumns: '1fr 2fr',
  padding: '16px',

  color: 'white',
  backgroundColor: 'black',
  fontSize: '32px',
});

export const selected = style({
  backgroundColor: '#e0e0e0',
  color: 'black',
});

export const buttonReset = style({
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
  padding: 0,
  appearance: 'none',
});

export const extendWidth = style({
  width: '100%',
});
