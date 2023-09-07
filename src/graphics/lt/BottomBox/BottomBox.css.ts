import { style } from '@vanilla-extract/css';

export const wrapper = style({
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  display: 'grid',
  gridTemplateColumns: '1fr 5px 3fr',
});

const fontCommon = {
  color: 'white',
  fontWeight: 'bold',
};

export const textsWrapper = style({
  display: 'grid',
  gridTemplateRows: '40px 1fr',
});

export const textHeader = style({
  ...fontCommon,
  fontSize: '40px',
  margin: 'auto',
  marginLeft: '16px',
});

export const mainText = style({
  ...fontCommon,
  fontSize: '50px',
  margin: 'auto',
  marginLeft: '64px',
});

export const bar = style({
  backgroundColor: 'white',
  width: '5px',
  height: '90%',
  borderRadius: '5px',
  margin: 'auto',
});
