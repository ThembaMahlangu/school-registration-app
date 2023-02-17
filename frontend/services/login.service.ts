import { AppContext } from "@/context/app.context";
import { IAppContextType } from "@/interfaces";
import { loginProps } from "@/props";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [btn, setBtn] = useState<string>("LOGIN");
  const { setUserData } = useContext<IAppContextType | null>(
    AppContext,
  ) as IAppContextType;

  const router = useRouter();
  useEffect(() => {
    sessionStorage.setItem("loggedIn", "false");
  }, []);
  const verifyUser = async (data: loginProps) => {
    setIsLoading(true);
    setBtn("VERIFYING...");
    setError(false);
    try {
      const response = await axios.post(
        `http://localhost:8000/api/users/login`,
        data,
      );
      const userInfo = await axios.get(
        `http://localhost:8000/api/users/${response.data.userId}`,
      );
      if (userInfo?.data) {
        setUserData(userInfo?.data);
        console.log(userInfo?.data)
        console.log("user is active");
        sessionStorage.setItem("loggedIn", "true");
        sessionStorage.setItem("userId", response.data.userId);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("userInfo", JSON.stringify(userInfo?.data));
        router.push("/dash");
      } else {
        console.log("user is not active");
        sessionStorage.setItem("loggedIn", "false");
      }
    } catch (error: any) {
      setError(true);
      console.log(error);
      setBtn("TRY AGAIN");

      console.log(error?.response?.data?.message);
      if (error?.response?.data?.message) {
        setErrorMsg(error?.response?.data?.message);
        toast.error(error?.response?.data?.message);
      } else if (error?.response?.data?.errors[0]) {
        setErrorMsg(error?.response?.data?.errors[0].msg);
        toast.error(error?.response?.data?.errors[0].msg);
      }
    }
    setIsLoading(false);
  };

  return { isLoading, error, setErrorMsg, btn, errorMsg, verifyUser };
};

export default useLogin;
