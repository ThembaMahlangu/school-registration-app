import Image from "next/image";
import Button from "../button/Button";
import MainLayout from "../layout/MainLayout";

const MainView = () => {
  return (
    <>
      <div className=" h-screen bg-[#BAE6FD]">
        <MainLayout>
          <section className="flex items-center justify-center">
            <div className="w-[60%]">
              <h1 className="text-5xl font-bold">
                School management has never been easier, With Manage everything
                get easier
              </h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
                aut dolorem quibusdam veritatis ex iste hic provident inventore!
                Eius, quos?
              </p>
              <div className="my-4 flex gap-8 ">
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
