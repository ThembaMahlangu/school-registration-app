import Link from "next/link";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#222] px-2 pt-10 md:pt-16 lg:pt-20 text-white">
        <section className="mx-auto grid h-full max-w-6xl lg:px-0 px-4 md:px-10 md:grid-cols-2 lg:grid-cols-3 min-h-[200px] justify-between gap-6">
          <section className={"flex flex-col"}>
            <div className="flex-1">
              <h3 className="text-xl font-medium uppercase tracking-wider text-purple-700">
                asyncfam
              </h3>
              <p className="my-4">Manage is a product of AsyncFam</p>
              <div className="flex gap-6 pb-4">
                <FaInstagram size={28} />
                <FaTwitter size={28} />
                <FaLinkedin size={28} />
                <FaFacebookSquare size={28} />
              </div>
            </div>
            <p className="">manage@asyncfam.co.za</p>
          </section>
          <section className="flex flex-col">
            <h3 className="text-xl font-medium uppercase tracking-wider text-purple-700">
              Quick links
            </h3>
            <div className="flex flex-col mt-4 gap-3 capitalize">
              <Link href="#">about us</Link>
              <Link href="#">Contact Us</Link>
              <Link href="#">let&apos;s connect</Link>
            </div>
          </section>
          {/* <section className="flex flex-col border">
            <h3>get in touch with us for the best quality products</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus animi laboriosam quia rem itaque blanditiis
              assumenda sunt, magnam asperiores
            </p>
          </section> */}
          <section className="flex flex-col">
            <h3 className="text-xl font-medium uppercase tracking-wider text-purple-700">
              important links
            </h3>
            <div className="flex flex-col mt-4 gap-3 capitalize">
              <Link href="#">privacy policy</Link>
              <Link href="#">terms & conditions</Link>
            </div>
          </section>
        </section>
        <div className="mx-auto text-sm sm:text-md  md:text-lg lg:text-xl mt-10 flex h-20 max-w-6xl items-center justify-between border-t">
          <span>
            Copyright © 2023 | <span className="text-purple-700">MANAGE</span>
          </span>
          <span>
            Powered By{" "}
            <span className="uppercase text-purple-700">AsyncFam</span>
          </span>
        </div>
      </footer>
    </>
  );
};
export default Footer;
