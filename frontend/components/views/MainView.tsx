import Image from "next/image";
import Button from "../button/Button";
import MainLayout from "../layout/MainLayout";
import Link from "next/link";

const MainView = () => {
  return (
    <>
      <div className=" bg-[#BAE6FD]">
        <MainLayout>
          <section className="flex flex-col items-center justify-center md:pb-24 lg:flex-row">
            <div className="w-[90%] px-2 pt-20 lg:w-[60%]">
              <h1 className="text-3xl font-bold md:text-5xl">
                Elevate Your School&apos;s Performance with Manage: Simplify
                Management, Build the Future!
              </h1>
              <p>
                Manage simplifies school management, streamlines communication,
                and elevates performance. Say goodbye to chaos and hello to a
                better future with Manage.
              </p>
              <div className="my-4 flex max-w-[500px] flex-col gap-8 md:flex-row ">
                <Link href="/auth/login">
                  <Button
                    label="Get Started For Free"
                    radius="5px"
                    color="#7E22CE"
                  />
                </Link>
                <Link href="/auth/signup">
                <Button
                  label="Request A Demo"
                  radius="5px"
                  color="#2221"
                  textColor="#222"
                />
                </Link>
              </div>
            </div>
            <div className="">
              <Image
                alt="hero-image"
                width={550}
                height={700}
                src="/assets/hero_image.png"
                className="object-cover"
              />
            </div>
          </section>
        </MainLayout>
      </div>
    </>
  );
};

export default MainView;
