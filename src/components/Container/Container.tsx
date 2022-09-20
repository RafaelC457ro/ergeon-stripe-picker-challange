import "./Container.css";

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps): JSX.Element {
  return <div className="container">{children}</div>;
}
