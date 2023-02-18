import { loginProps, registerProps, userProps } from "@/props";
import { SetStateAction } from "react";

export interface IAppContextType {
  loginForm: loginProps;
  setLoginForm: React.Dispatch<SetStateAction<loginProps>>;
  signUpForm: registerProps;
  setSignUpForm: React.Dispatch<SetStateAction<registerProps>>;
  controlSignUpForm: any;
  controlLoginForm: any;
  userData: userProps;
  setUserData: React.Dispatch<SetStateAction<userProps>>;
}
export interface IUIContextType {
  //   tone: string;
  //   setTone: React.Dispatch<SetStateAction<string>>;
}
