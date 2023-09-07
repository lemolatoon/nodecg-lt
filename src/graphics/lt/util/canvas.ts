export function multiply(
  canvasContext: CanvasRenderingContext2D,
  color: [number, number, number, number],
  width: number,
  height: number,
) {
  const imageData = canvasContext.getImageData(0, 0, width, height);
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    data[i] *= color[0] / 255; // red
    data[i + 1] *= color[1] / 255; // green
    data[i + 2] *= color[2] / 255; // blue
  }
  canvasContext.putImageData(imageData, 0, 0);
}
