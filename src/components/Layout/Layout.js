import React, { memo } from "react";
import Header from "../Header";

const Layout = memo(({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
});

export default Layout;
