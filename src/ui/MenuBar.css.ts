import { style } from "@vanilla-extract/css";
import { bgColor } from "./Menu.css";

export const menubar__wrapper = style({
  background: bgColor,
  display: "flex",
  gap: "1rem",
  vars: {
    [bgColor]: "#f5f5f7",
  },
});

export const menubar = style({
  display: "grid",
  gridAutoFlow: "column",
  userSelect: "none",
  justifyContent: "start",

});

export const menubaritem = style({
  padding: "2px 0.5rem",
});

export const menubarmenu = style({
  position: "absolute",
  top: "2rem",
  left: 0,
});
