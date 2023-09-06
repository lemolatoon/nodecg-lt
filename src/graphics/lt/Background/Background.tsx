import React, { useEffect } from "react";
import { background, canvas } from "./Background.css";

export const Background = () => {
    const ref = React.useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = ref.current;
        console.log(canvas);
        console.log(canvas?.toDataURL())
        if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.fillStyle = "skyblue";
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
        }
    }, [ref.current]);
    const canvasProps = {
        width: window.innerWidth,
        height: window.innerHeight,
    };
    const dataUrl = ref.current?.toDataURL();
    const imgStyle = {
        maskImage: `image(url(${dataUrl}), skyblue)`,
    };
    return (
    <>
        <canvas {...canvasProps} ref={ref} className={canvas} />
        <img style={imgStyle} className={background} src="assets/lt_background.png" />
    </>
    );
}