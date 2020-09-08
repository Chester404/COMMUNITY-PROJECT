import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
/*import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react"; */

const MainLayout = ({
  children,
  title = "Community Project",
  pageTitle = "",
}) => {
  return (
    <>
      <Header title={title} />
      <div className="page">
        <div className="page-main">
          <Navbar />
          <div className="container content-area">{children}</div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
