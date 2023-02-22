import React, { FunctionComponent, PropsWithChildren } from "react";
import { stack, layer } from "./Stack.css";

type LayerProps = PropsWithChildren<{
  x?: number;
  y?: number;
}>;

const Layer: FunctionComponent<LayerProps> = ({ x, y, children }) => {
  const transform = { transform: `translate(${x || 0}, ${y || 0}px)` };
  return (
    <div className={layer} style={x || y ? transform : undefined}>
      {children}
    </div>
  );
};

type Props = PropsWithChildren<{}>;

type ImageStackComponent = FunctionComponent<Props> & {
  Layer: FunctionComponent<LayerProps>;
};

const Stack: ImageStackComponent = ({ children }) => {
  return <div className={stack}>{children}</div>;
};

Stack.Layer = Layer;

export default Stack;
