import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const Outline = ({ children, extraClass }) => {
  const { dark } = useContext(AppContext);
  return (
    <section
      className={`items-center rounded-lg  border  ${
        dark ? "border-gray-700" : "border-gray-200"
      } ${extraClass}`}
    >
      {children}
    </section>
  );
};

export default Outline;
