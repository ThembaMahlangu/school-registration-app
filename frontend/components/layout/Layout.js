import React, { useContext, useState } from "react";
import TitleBar from "../titleBar/TitleBar";
import { useRouter } from "next/router";
import { AppContext } from "../../context/context";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  const { dark, setDark, toggleDark } = useContext(AppContext);
  const router = useRouter();

  return (
    <div
      className={`${styles.wrapper} ${
        dark ? "bg-[#222] text-white" : "bg-[#F0FFFE] text-black"
      }`}
    >
      <TitleBar dark={dark} onClick={toggleDark} />
      <div className={styles.childrenContainer}>{children}</div>
      <Footer/>
    </div>
  );
};

const styles = {
  wrapper: `flex min-h-screen font-poppins w-screen select-none flex-col overflow-hidden `,
  childrenContainer: `flex w-screen flex-1`,
};

export default Layout;
