import { createVar, style } from "@vanilla-extract/css";

const bgColor = createVar();

export const menubar = style({
  display: "grid",
  gridAutoFlow: "column",
  userSelect: "none",
  justifyContent: "start",

  vars: {
    [bgColor]: "#F5F5F7",
  },
});

export const menubaritem = style({
  backgroundColor: bgColor,
  borderRadius: "2px",
  fontSize: "14px",
  padding: "0.25rem 0.5rem",
  position: "relative",

  selectors: {
    "&:is-active": {},
    "&:hover, &.is-active": {
      backgroundColor: "#aaa",
    },
  },
});

export const menubarmenu = style({
  position: "absolute",
  top: "2rem",
  left: 0,
  backgroundColor: bgColor,
});
