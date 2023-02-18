import { globalStyle, style } from "@vanilla-extract/css";

globalStyle("#root", {
  maxWidth: "1280px",
  margin: "0",
  padding: "8rem 15rem",
  minHeight: "100%",
});

export const bapp = style({
  minHeight: "100%",
});
