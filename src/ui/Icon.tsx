import { style } from "@vanilla-extract/css";
import { HTMLProps } from "react";
import { svgStyle } from "./Icon.css";
import Icons from "./IconDefs";

type Props = {
  icon: keyof typeof Icons;
  size?: number;
} & HTMLProps<SVGSVGElement>;

const Icon = ({ icon, size = 12, ...props }: Props) => {
  const Fn = Icons[icon];
  return Fn({
    className: svgStyle,
    width: `${size}px`,
    height: `${size}px`,
    ...props,
  });
};

export default Icon;
