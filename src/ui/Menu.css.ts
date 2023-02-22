import { createVar, style } from "@vanilla-extract/css";

export const bgColor = createVar();

export const menuitem = style({
  borderRadius: "2px",
  fontSize: "0.75rem",
  fontWeight: "500",
  padding: "0.35rem",
  position: "relative",
  margin: "0 0 0 1px",

  selectors: {
    "&:hover, &.is-active": {
      backgroundColor: "#c4d5e4",
    },
    "&.has-searchterm": {
      backgroundColor: "white",
      boxShadow: `
      0 0 4px 0 #39f1, 
      0 0 1px 1px #39ff`,
      overflow: "visible",
    },
  },
});

export const menu = style({
  backgroundColor: bgColor,
  display: "grid",
  gridAutoFlow: "row",
  position: "relative",
  userSelect: "none",
});

export const menu__strip = style({
  alignItems: "center",
  display: "flex",
  justifyContent: "space-between",
});

export const menu__list = style({
  backgroundColor: bgColor,
  border: "1px solid #3332",
  borderRadius: "2px",
  isolation: "isolate",
  left: "100%",
  lineHeight: "1.5em",
  minWidth: "10em",
  padding: "2px",
  position: "absolute",
  top: 0,
  transition: "opacity 60ms ease-in-out",
  boxShadow: `
  0 3px 36px 0 #0002, 
  0 3px 8px 0 #0002,
  0 0 0 1px #0002
  `,
  zIndex: 1,
  selectors: {
    [`& > ${menu} > &`]: {
      left: "100%",
      top: 0,
    },

    [`${menuitem}:not(.is-active) &`]: {
      opacity: 0,
      display: "none",
      transition: "opacity 120ms ease-in-out",
    },
  },
});
