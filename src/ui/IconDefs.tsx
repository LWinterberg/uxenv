import { HTMLProps } from "react";

type Props = {} & HTMLProps<SVGSVGElement>;

const Icons = {
  "chevron-right": ({ ...props }: Props) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path className="path path-stroked" d="M 5.5 2.5 L 11 8 L 5.5 13.5" />
    </svg>
  ),
  "magnifying-glass": ({ ...props }: Props) => (
    <svg viewBox="0 0 16 16" {...props}>
      <ellipse
        className="path path-stroked"
        cx="10"
        cy="7"
        rx="5"
        ry="5"
      ></ellipse>
      <path className="path path-stroked" d="M 6 11 L 2 15"></path>
    </svg>
  ),
};

export default Icons;
