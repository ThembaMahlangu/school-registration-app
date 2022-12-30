import React, { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [messageCount, setMessageCount] = useState(0);

  const saveMode = () => {
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDark(true);
    } else {
      setDark(false);
    }
  };
  const toggleDark = () => {
    saveMode();
    let currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      setDark(false);
      localStorage.setItem("theme", "light");
    } else {
      setDark(true);
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "dark");
    } else if (localStorage.getItem("theme") === "dark") {
      setDark(true);
    } else if (localStorage.getItem("theme") === "light") {
      setDark(false);
    }
  }, [dark]);

  return (
    <AppContext.Provider
      value={{ dark, setDark, toggleDark, messageCount, setMessageCount }}
    >
      {children}
    </AppContext.Provider>
  );
};
