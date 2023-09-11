import React, { useEffect, useState } from "react";

function Layout({ children, className = "" }) {
  const [mode, setMode] = useState();
  useEffect(() => {
    let theme = window.localStorage.getItem("theme");
    setMode(theme);
  }, []);
  return (
    <div
      className={`w-full h-full inline-block z-0 ${
        mode === "dark" ? "background_main_dark" : "background_main"
      } p-32 xl:p-24 lg:p-16 mb:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
}

export default Layout;
