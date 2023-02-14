import { ROUTES } from "@/constants/navbar.routes";
import Link from "next/link";
import Button from "../button/Button";

const Header = () => {
  return (
    <header className="flex items-center justify-between border">
      <h1 className="text-xl font-bold uppercase">Manage</h1>
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
      <Button label="Get Started" />
    </header>
  );
};

export default Header;
