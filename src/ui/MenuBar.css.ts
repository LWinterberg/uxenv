import { style } from "@vanilla-extract/css";
import { bgColor } from "./Menu.css";

export const menubar = style({
  background: bgColor,
  display: "grid",
  gridAutoFlow: "column",
  userSelect: "none",
  justifyContent: "start",

  vars: {
    [bgColor]: "#f5f5f7",
  },
});

export const menubaritem = style({
  borderRadius: "2px",
  fontSize: "14px",
  padding: "0.25rem 0.5rem",
  position: "relative",
});

export const menubarmenu = style({
  position: "absolute",
  top: "2rem",
  left: 0,
});
