import clsx from "clsx";
import { forwardRef, HTMLProps, PropsWithChildren } from "react";
import Icon from "./Icon";
import { input, wrapper } from "./SearchInput.css";

type Props = PropsWithChildren<{}> & HTMLProps<HTMLInputElement>;

const SearchInput = forwardRef<HTMLInputElement, Props>(
  ({ className, children, ...props }, forwardedRef) => {
    return (
      <div className={clsx(wrapper, className)}>
        <Icon name="magnifying-glass" size={18} style={{ margin: "0 2px" }} color="#ccc"/>
        <input ref={forwardedRef} className={clsx(input)} {...props}>
          {children}
        </input>
      </div>
    );
  }
);

export default SearchInput;
