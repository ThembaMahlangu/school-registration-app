import { FC, ReactNode } from "react";

type pageProps = {
  children: ReactNode;
};

const PageLayout: FC<pageProps> = ({ children }) => {
  return (
    <>
      <div className="mx-auto flex flex-1 flex-col min-h-screen w-full ">
        {children}
      </div>
    </>
  );
};

export default PageLayout;
