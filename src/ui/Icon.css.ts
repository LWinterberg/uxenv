import { createVar, globalStyle, style } from "@vanilla-extract/css";

export const iconColor = createVar();

export const icon = style({
  display: "block",

  vars: {
    [iconColor]: "#222",
  },
});

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
