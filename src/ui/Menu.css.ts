import { createVar, style } from "@vanilla-extract/css";

export const bgColor = createVar();

export const menuitem = style({
  backgroundColor: bgColor,
  borderRadius: "2px",
  fontSize: "0.75rem",
  fontWeight: "500",
  padding: "0.35rem 0.5rem",
  position: "relative",

  selectors: {
    "&:is-active": {},
    "&:hover, &.is-active": {
      backgroundColor: "#c4d5e4",
    },
  },
});

export const menu = style({
  backgroundColor: bgColor,
  display: "grid",
  gridAutoFlow: "row",
  position: "relative",
  userSelect: "none",

  vars: {
    [bgColor]: "#F5F5F7",
  },
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
