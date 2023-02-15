import Link from "next/link";
import Button from "../button/Button";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className=" sticky top-0 h-20 w-full bg-[#BAE6FD] ">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-10 lg:px-2">
        <Link href="/" className=" h-full">
          <Logo />
        </Link>
        <div className="flex gap-8">
          <Link href="/auth/login">
            <Button
              radius="10px"
              label="Sign in"
              color="#2221"
              textColor="#222"
            />
          </Link>
          <div className="hidden md:block">
            <Link href="/auth/signup">
              <Button radius="10px" label="Sign up" color="#7E22CE" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
