import Image from "next/image";
import Button from "../button/Button";
import MainLayout from "../layout/MainLayout";

const MainView = () => {
  return (
    <>
      <div className="flex-[40em] bg-[#BAE6FD]">
        <MainLayout>
          <section className="flex lg:flex-row flex-col items-center justify-center">
            <div className="lg:w-[60%] px-2 w-[90%] pt-20">
              <h1 className="md:text-5xl text-3xl font-bold">
                Elevate Your School&apos;s Performance with Manage: Simplify
                Management, Build the Future!
              </h1>
              <p>
                Manage simplifies school management, streamlines communication,
                and elevates performance. Say goodbye to chaos and hello to a
                better future with Manage.
              </p>
              <div className="my-4 flex max-w-[500px] gap-8 flex-col md:flex-row ">
                <Button
                  label="Get Started For Free"
                  radius="5px"
                  color="#7E22CE"
                />
                <Button
                  label="Request A Demo"
                  radius="5px"
                  color="#2221"
                  textColor="#222"
                />
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
