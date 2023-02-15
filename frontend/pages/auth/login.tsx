import Button from "@/components/button/Button";
import Input from "@/components/form/Input";
import Logo from "@/components/logo/Logo";
import Image from "next/image";

const login = () => {
  return (
    <>
      {/* <MainLayout> */}
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
          <div className="justify-end flex  h-20 items-center pr-20">
            <Button radius="10px" label="Sign up" color="#7E22CE" />
          </div>
          <div className="flex flex-1 flex-col items-center justify-center ">
            <div className="flex  w-[30em]  flex-col rounded-md border-gray-700 p-6">
              <div className="">
                {/* <div className="mb-1">
                  <Image
                    src="/assets/logo/logo_new.png"
                    width={300}
                    height={400}
                    alt="logo"
                    className="mx-20 h-12 w-[180px] object-cover"
                  />
                </div> */}
                <h2 className="pb-4 text-2xl font-medium capitalize text-purple-700">
                  login to continue
                </h2>
                {/* <h2></h2> */}
              </div>
              <form className="flex flex-col gap-2" action="">
                <Input placeholder="Email" label="Email" type="email" />
                <Input
                  placeholder="password"
                  label="password"
                  type="password"
                />

                <div className="mb-1" />
                <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="">View Password</label>
                </div>
                <Button
                  label="LOGIN"
                  radius="10px"
                  color="#7E22CE"
                  // textColor=""
                  width="100%"
                />
                {/* <div className=" my-2  text-center text-lg">
                <p className="text-gray-600">Don&apos;t have an account?</p>
                <Link href="/auth/signup">Sign up</Link>
              </div> */}
              </form>
            </div>
          </div>
        </section>
      </div>
      {/* </MainLayout> */}
    </>
  );
};

export default login;
