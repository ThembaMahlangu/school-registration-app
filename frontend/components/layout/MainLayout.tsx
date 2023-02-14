import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return <div className="max-w-6xl h-full mx-auto">{children}</div>;
};

export default MainLayout;
