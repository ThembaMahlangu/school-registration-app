import { loginProps, registerProps, userProps } from "@/props";
import { SetStateAction } from "react";

// type loginProps = {
//   email: string;
//   password: string;
// };
// type registerProps = {
//   name: string;
//   organization: string;
//   email: string;
//   password: string;
//   confirmation: string;
// };

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
