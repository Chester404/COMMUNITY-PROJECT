import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

const verifyLogin = (
  router: NextRouter
): { verified: boolean; path: string } => {
  let lStorage = window.localStorage.getItem("cp-a");
  lStorage = JSON.parse(lStorage);
  if (lStorage == null || lStorage == undefined) {
    if (router.pathname.includes("/blog")) {
      return { verified: false, path: "" };
    }
    if (router.pathname.includes("/marketplace")) {
      return { verified: false, path: "" };
    }
    if (router.pathname === "/") {
      return { verified: false, path: "" };
    }
    // if (router.pathname.includes("/auth/verificationcode")) {
    // }
    // if (router.pathname.includes("/auth/verificationcode")) {
    // }
  }
  return { verified: true, path: "" };
};

const Layout = ({ children, title = "Community Project", pageTitle = "" }) => {
  const router = useRouter();
  useEffect(() => {
    const rs = verifyLogin(router);
    console.log(rs);
    if (!rs.verified) {
      router.push("/auth/login");
    }
  });

  return (
    <>
      <Header title={title} />
      <div className="parent" style={{ paddingBottom: 40 }}>
        <Navbar />
        <div className="container" style={{ marginTop: 40 }}>
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
