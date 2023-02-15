import Link from "next/link";
import Button from "../button/Button";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className=" sticky top-0 h-20 w-full bg-[#BAE6FD] ">
      <div className="mx-auto flex h-full px-4 md:px-10 lg:px-2 max-w-6xl items-center justify-between">
        <Link href="/" className=" h-full">
          <Logo />
        </Link>
        {/* <nav className="flex gap-6">
          {ROUTES.map((route) => {
            const { link, name } = route;
            return (
              <Link key={name} href={link} className="capitalize">
                {name}
              </Link>
            );
          })}
        </nav> */}
        <div className="flex gap-8">
          <Button
            radius="10px"
            label="Sign in"
            color="#2221"
            textColor="#222"
          />
          <div className="hidden md:block">
            <Button radius="10px" label="Sign up" color="#7E22CE" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
