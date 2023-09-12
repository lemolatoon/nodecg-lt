import { style } from '@vanilla-extract/css';

export const wrapper = style({
  // position
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: '50vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',

  // font
  fontFamily: '',
  color: 'white',
  fontSize: '100px',

  // background
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
});

export const centerize = style({
  alignSelf: 'center',
});
