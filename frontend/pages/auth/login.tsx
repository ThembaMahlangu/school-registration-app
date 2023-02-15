import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <div className="flex h-screen">
        <div className=" w-[50%] ">
          <div className="absolute left-10">
            <Logo />
          </div>
          <div className="h-full w-full ">
            <Image
              className=" h-[100%] w-full"
              src="/assets/login.png"
              alt="login"
              width={2000}
              height={300}
            />
          </div>
        </div>
        <section className="flex flex-1 flex-col bg-[#2221]">
          <div className="flex h-20  items-center justify-end pr-20">
            <Link href="/auth/signup">
              <Button radius="10px" label="Sign up" color="#7E22CE" />
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center ">
            <div className="flex  w-[30em]  flex-col rounded-md border-gray-700 p-6">
              <div className="">
                <h2 className="pb-4 text-2xl font-medium capitalize text-purple-700">
                  login to continue
                </h2>
              </div>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input placeholder="Email" label="Email" type="email" />
                <Input
                  placeholder="password"
                  label="password"
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
