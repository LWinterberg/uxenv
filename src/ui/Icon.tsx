import { HTMLProps } from "react";
import Icons from "./IconDefs";

import { icon, iconColor } from "./Icon.css";

type Props = {
  name: keyof typeof Icons;
  size?: number;
  color?: string;
} & HTMLProps<SVGSVGElement>;

const cssvarRe = new RegExp(/var\((?<varname>--.*?)\)/);

const getVarName = (cssvar: string) => {
  const [, varname] = cssvarRe.exec(cssvar) || [];
  return varname;
};

const Icon = ({
  name: name,
  size = 12,
  color = "#999",
  style,
  ...props
}: Props) => {
  const varname = getVarName(iconColor);
  console.log(varname, iconColor);

  const extraStyles = { ...style, [`${getVarName(iconColor)}`]: color };

  const Fn = Icons[name];
  return Fn({
    className: icon,
    width: `${size}px`,
    height: `${size}px`,
    style: extraStyles,
    ...props,
  });
};

export default Icon;
