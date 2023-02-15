import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/assets/logo/logo_new.png"
        width={300}
        height={400}
        alt="logo"
        className="h-20 w-[180px] object-cover"
      />
    </>
  );
};

export default Logo;
