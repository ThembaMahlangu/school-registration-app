import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/assets/logo/logo_light.png"
        width={300}
        height={400}
        alt="logo"
        className="h-20 w-[200px] object-cover"
      />
    </>
  );
};

export default Logo;
