import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    const target = event.target as typeof event.target & {
      email: { value: string };
      password: { value: string };
    };
  
    const email = target.email.value;
    const password = target.password.value;
  
    axios.post('http://localhost:8000/api/users/login', {
      email,
      password
    })
    .then((response) => {
      localStorage.setItem('authToken', response.data.token);
      console.log(response.data);
      // redirect the user to dashboard page
      window.location.href = '/dashboard';
    })
    .catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <div className="flex h-screen">
        <div className=" hidden w-[50%] md:block ">
          <Link href="/" className="absolute left-10">
            <Logo />
          </Link>
          <div className="h-full w-full ">
            <Image
              className=" h-[100%] w-full object-contain"
              src="/assets/login.png"
              alt="login"
              width={2000}
              height={300}
            />
          </div>
          <div></div>
        </div>
        <section className="flex flex-1 flex-col bg-[#2221]">
          <div className="lg-pr-20 flex  h-20 items-center justify-between px-6 md:pr-10">
            <Link href="/" className="md:invisible">
              <Logo />
            </Link>
            <Link href="/auth/signup" className="">
              <Button radius="10px" label="Sign up" color="#7E22CE" />
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center ">
            <div className="flex   w-full flex-col   rounded-md  border-gray-700 p-6 sm:w-[90%] lg:w-[30em]">
              <div className="">
                <h2 className="pb-4 text-2xl font-medium capitalize text-purple-700">
                  login to continue
                </h2>
              </div>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input placeholder="Email" name="email" label="Email" type="email" />
                <Input
                  placeholder="password"
                  label="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                />

                <div className="mb-1" />
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    name="password"
                    onChange={() => {
                      setShowPassword((prev) => !prev);
                    }}
                    id=""
                  />
                  <label htmlFor="password">View Password</label>
                </div>
                <Button
                  label="LOGIN"
                  radius="10px"
                  color="#7E22CE"
                  // textColor=""
                  width="100%"
                />
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
