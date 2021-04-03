import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-wrapper">
        <Sidebar />
        <Main>{children}</Main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
