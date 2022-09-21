import "./Container.css";
import { ContainerProps } from "./Container.types";

export function Container({ children }: ContainerProps): JSX.Element {
  return <div className="container">{children}</div>;
}
