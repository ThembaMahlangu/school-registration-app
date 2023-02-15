import { FC, ReactNode } from "react";

type pageProps = {
  children: ReactNode;
};

const PageLayout: FC<pageProps> = ({ children }) => {
  return (
    <>
      <div className="mx-auto flex min-h-screen w-full flex-1 flex-col bg-[#BAE6FD] ">
        {children}
      </div>
    </>
  );
};

export default PageLayout;
