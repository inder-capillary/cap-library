/* eslint-disable */
export const drawHeadingText = ({ context, x, y, height, text }) => {
  context.beginPath();
  context.fillStyle = "#ffff";
  context.font = "12px Roboto";
  const textWidth = context.measureText(text).width;

  context.fillRect(x - textWidth / 2, y, textWidth, height);
  context.fillStyle = "#091e42";
  context.textAlign = "center";

  context.fillText(text, x, y + height);
  context.closePath();
};

export const drawCircle = ({ context, x, y, radius, color }) => {
  context.beginPath();
  context.fillStyle = color;
  context.strokeStyle = color;
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.fill();
  context.closePath();
};

export const drawDashedLines = ({ context, x, y, x1, y1 }) => {
  context.beginPath();
  context.setLineDash([5, 3]);
  context.strokeStyle = "#b3bac5";

  context.moveTo(x, y);
  context.lineTo(x1, y1);

  context.stroke();
  context.setLineDash([]);
  context.closePath();
};

export const drawTodayLine = ({ context, x, y, x1, y1, mouseX, mouseY }) => {
  context.beginPath();
  const radius = 4;
  drawCircle({
    context,
    x,
    y: y - radius,
    radius,
    color: "#2466ea",
  });
  context.strokeStyle = "#2466ea";
  context.rect;
  context.moveTo(x, y);
  context.lineTo(x1, y1);
  if (mouseX) {
    context.rect(x - 3, y, 6, y1);
    return context.isPointInPath(mouseX, mouseY);
  }
  context.stroke();
  context.closePath();
};

export const drawLineSeperator = ({ context, x, y, x1, y1 }) => {
  context.beginPath();
  context.strokeStyle = "#7a869a";

  context.moveTo(x, y);
  context.lineTo(x1, y1);

  context.stroke();
  context.closePath();
};
