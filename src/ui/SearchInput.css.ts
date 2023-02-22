import { createVar, style } from "@vanilla-extract/css";

const borderColor = createVar();

export const wrapper = style({
  alignItems: "center",
  backgroundColor: "white",
  border: `1px solid ${borderColor}`,
  borderRadius: "4px",
  display: "flex",
  gap: "4px",
  vars: {
    [borderColor]: "transparent",
  },
  selectors: {
    "&:focus-within": {
      vars: {
        [borderColor]: "#55a8fe",
      },
    },
  },
});

export const input = style({
  backgroundColor: "transparent",
  border: "none",
  outline: "none",
  alignSelf: "stretch",
});
