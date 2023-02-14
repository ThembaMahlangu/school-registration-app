import { IUIContextType } from "@/interfaces";
import { createContext, FC, ReactNode } from "react";

export const UIContext = createContext<IUIContextType | null>(null);

type UIProps = {
  children: ReactNode;
};

export const UIProvider: FC<UIProps> = ({ children }) => {
  return <UIContext.Provider value={{}}>{children}</UIContext.Provider>;
};
