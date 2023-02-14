import { FC, ReactNode } from "react";

type pageProps = {
  children: ReactNode;
};

const PageLayout: FC<pageProps> = ({ children }) => {
  return (
    <>
      <div className="min-h-screen w-full border max-w-6xl mx-auto">
        {children}
      </div>
    </>
  );
};

export default PageLayout;
