import { IAppContextType } from "@/interfaces";
import { createContext, FC, ReactNode } from "react";

export const AppContext = createContext<IAppContextType | null>(null);

type AppProps = {
  children: ReactNode;
};

export const AppProvider: FC<AppProps> = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};
