import { style } from '@vanilla-extract/css';

export const wrapper = style({
  padding: '16px',
  paddingLeft: '32px',
  paddingBottom: '8px',
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  display: 'grid',
  gridTemplateColumns: '30% 40px calc(100% - 30% - 40px)',
  overflow: 'hidden',
});

const fontCommon: Parameters<typeof style>[0] = {
  fontWeight: 'bold',
  color: 'white',
  marginRight: '8px',
};

export const row = style({
  marginTop: '64px',
  height: '125px',
});

export const overflowHidden = style({
  overflow: 'hidden',
});

export const font = style({
  ...fontCommon,
  fontSize: '55px',
  lineHeight: 0,
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
