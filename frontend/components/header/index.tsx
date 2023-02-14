import { ROUTES } from "@/constants/navbar.routes";
import Link from "next/link";
import Button from "../button/Button";
import Logo from "../logo/Logo";

const Header = () => {
  return (
    <header className=" sticky top-0 h-20 w-full bg-[#BAE6FD] ">
      <div className="mx-auto flex h-full max-w-7xl px-6 items-center justify-between">
        <Link href="/" className=" h-full">
          <Logo />
        </Link>
        <nav className="flex gap-6">
          {ROUTES.map((route) => {
            const { link, name } = route;
            return (
              <Link key={name} href={link} className="capitalize">
                {name}
              </Link>
            );
          })}
        </nav>
        <Button radius="10px" label="Get Started" color="#7E22CE"/>
      </div>
    </header>
  );
};

export default Header;
