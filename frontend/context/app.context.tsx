import { IAppContextType } from "@/interfaces";
import { createContext, FC, ReactNode, useState } from "react";

export const AppContext = createContext<IAppContextType | null>(null);

type AppProps = {
  children: ReactNode;
};

// type loginProps = {
//   email:"",
//   password:"",
// };
// type registerProps = {
//   deptName:"",
//   email:"",
//   password:"",
//   confirmPassword:"",
// };

export const AppProvider: FC<AppProps> = ({ children }) => {
  const [userData, setUserData] = useState({
    createdAt: "",
    email: "",
    name: "",
    organization: "",
    password: "",
    updatedAt: "",
    __v: null,
    _id: "",
  });
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
  const controlLoginForm = (event: any) => {
    const { name, value } = event.target;

    setLoginForm((prev) => ({
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
        controlLoginForm,
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
