import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  return <div className="max-w-6xl flex-1 flex flex-col h-full w-full mx-auto">{children}</div>;
};

export default MainLayout;
