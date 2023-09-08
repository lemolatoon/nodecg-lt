import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '16px',
  paddingLeft: '32px',
  paddingBottom: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  display: 'grid',
  gridTemplateColumns: '30% 40px 4fr',
});

const fontCommon: Parameters<typeof style>[0] = {
  fontWeight: 'bold',
  color: 'white',
  whiteSpace: 'nowrap',
};

export const font = style({
  ...fontCommon,
  marginTop: '32px',
  fontSize: '55px',
});

export const headerFont = style({
  ...fontCommon,
  fontSize: '30px',
});

export const bar = style({
  backgroundColor: 'white',
  marginLeft: '16px',
  marginRight: '16px',
  borderRadius: '10px',
});
