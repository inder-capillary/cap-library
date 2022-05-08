/* eslint-disable */
export const drawHeadingText = ({ context, x, y, height, text }) => {
  context.beginPath();
  context.fillStyle = "#ffff";
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
    color: "#2466ea"
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

export const drawRoundRect = ({
  context,
  x,
  y,
  width,
  height,
  radius: radiusParam,
  openLeft,
  openRight,
  fillStyle,
  mouseX,
  mouseY
}) => {
  let radius = {
    tl: radiusParam,
    tr: radiusParam,
    br: radiusParam,
    bl: radiusParam
  };

  if (openLeft) {
    radius = { ...radius, tl: 0, bl: 0 };
  }

  if (openRight) {
    radius = { ...radius, tr: 0, br: 0 };
  }

  context.beginPath();
  context.fillStyle = fillStyle;

  context.moveTo(x + radius.tl, y);
  context.lineTo(x + width - radius.tr, y);

  context.quadraticCurveTo(x + width, y, x + width, y + radius.tr);

  context.lineTo(x + width, y + height - radius.br);

  context.quadraticCurveTo(
    x + width,
    y + height,
    x + width - radius.br,
    y + height
  );

  context.lineTo(x + radius.bl, y + height);

  context.quadraticCurveTo(x, y + height, x, y + height - radius.bl);

  context.lineTo(x, y + radius.tl);

  context.quadraticCurveTo(x, y, x + radius.tl, y);

  if (mouseX) {
    return context.isPointInPath(mouseX, mouseY);
  }

  context.fill();
  context.closePath();
};

export const doEllipsis = ({ context, text, maxWidth }) => {
  let returnText;
  if (context.measureText(text)["width"] < maxWidth) {
    return text;
  } else {
    const textArray = `${text}`.split("");
    textArray.forEach((item, index) => {
      const sliceText =
        textArray.slice(0, textArray.length - index).join("") + "abc";
      if (
        context.measureText(sliceText)["width"] <= maxWidth &&
        returnText === undefined
      ) {
        returnText =
          textArray.slice(0, textArray.length - index).join("") + "...";
      }
    });
    return returnText || "";
  }
};

export const drawRoundRectWithText = ({
  context,
  x,
  y,
  width,
  height,
  bgColor,
  borderRadius = 5,
  text,
  color,
  textPadding,
  openLeft,
  openRight,
  mouseX,
  mouseY
}) => {
  context.beginPath();
  const isPointInRoundRectPath = drawRoundRect({
    context,
    x,
    y,
    width,
    height,
    radius: borderRadius,
    openLeft,
    openRight,
    fillStyle: bgColor,
    mouseX,
    mouseY
  });

  if (mouseX) {
    return isPointInRoundRectPath;
  }

  context.fillStyle = color;
  context.textAlign = "start";
  context.scale(1, 1);

  context.fillText(
    doEllipsis({
      context,
      text,
      maxWidth: width - textPadding
    }),
    x + textPadding,
    y + 16
  );

  context.closePath();
};
