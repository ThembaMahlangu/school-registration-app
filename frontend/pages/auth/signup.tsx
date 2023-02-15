import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import Logo from "@/components/logo/Logo";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl
     bg-gray-200 bg-opacity-30 "
    }`,
  };
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <>
      <div className="flex h-screen">
        <div className="absolute left-10">
          <Logo />
        </div>
        <section className="flex flex-1 flex-col bg-[#2221]">
          <div className="lg-pr-20 flex  h-20 items-center justify-between px-6 md:pr-10">
            <Link href="/" className="md:invisible">
              <Logo />
            </Link>
            <Link href="/auth/login" className="">
              <Button radius="10px" label="LOGIN" color="#7E22CE" />
            </Link>
          </div>
          <div className="flex flex-1 flex-col items-center justify-center ">
            <div className="flex   w-full flex-col   rounded-md  border-gray-700 p-6 sm:w-[90%] lg:w-[30em]">
              <div className="">
                <h2 className="pb-4 text-2xl font-medium capitalize text-purple-700">
                  Sign up to continue
                </h2>
              </div>
              <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <Input
                  placeholder="Full name"
                  name="name"
                  label="Full Name"
                  type="text"
                />
                <Input placeholder="Email" label="Email" type="email" />
                <Input
                  placeholder="password"
                  label="password"
                  type={showPassword ? "text" : "password"}
                />
                <Input
                  placeholder="confirm password"
                  label="Confirm password"
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
                  label="SIGNUP"
                  radius="10px"
                  color="#7E22CE"
                  // textColor=""
                  width="100%"
                />
              </form>
            </div>
          </div>
        </section>
        <div className=" hidden w-[50%]  md:block ">
          <div className="h-full w-full ">
            <Image
              className=" h-[100%] w-full object-contain"
              src="/assets/sign_up.png"
              alt="login"
              width={2000}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
