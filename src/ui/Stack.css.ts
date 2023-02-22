import { style } from "@vanilla-extract/css";

export const stack = style({
  display: "grid",
  gridTemplateAreas: "stack",
});

export const layer = style({
  gridArea: "stack",
})