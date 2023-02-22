import { createVar, globalStyle, style } from "@vanilla-extract/css";

const iconColor = createVar();

globalStyle(".path", {
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

globalStyle(".path-stroked", {
  fill: "none",
  stroke: iconColor,
});

globalStyle(".path-filled", {
  fill: iconColor,
  stroke: "none",
});

export const svgStyle = style({
  display: "block",

  vars: {
    [iconColor]: "#222",
  },
});
