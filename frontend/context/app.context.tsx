import { IAppContextType } from "@/interfaces";
import { createContext, FC, ReactNode, useState } from "react";

export const AppContext = createContext<IAppContextType | null>(null);

type AppProps = {
  children: ReactNode;
};

// type loginProps = {
//   email: string;
//   password: string;
// };
// type registerProps = {
//   deptName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };

export const AppProvider: FC<AppProps> = ({ children }) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [signUpForm, setSignUpForm] = useState({
    name: "",
    organization: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const controlSignUpForm = (event: any) => {
    const { name, value } = event.target;

    setSignUpForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        loginForm,
        signUpForm,
        setLoginForm,
        setSignUpForm,
        controlSignUpForm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
