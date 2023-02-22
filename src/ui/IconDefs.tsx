import { HTMLProps } from "react";

type Props = {} & HTMLProps<SVGSVGElement>;

const Icons = {
  "chevron-right": ({ ...props }: Props) => (
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path className="path path-stroked" d="M 5.5 2.5 L 11 8 L 5.5 13.5" />
    </svg>
  ),
};

export default Icons;
