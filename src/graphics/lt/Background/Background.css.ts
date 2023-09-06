import { style } from "@vanilla-extract/css";

export const background = style({
    position: 'absolute',
    zIndex: -1,
    height: '100vh',
    width: '100vw'
});

const url = "https://www.ipentec.com/document/res/logo-dark-4x.png";

export const canvas = style({
    display: 'none',
    maskImage: `image(url(${url}))`
})