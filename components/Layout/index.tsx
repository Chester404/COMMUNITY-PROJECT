import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, title = "Community Project", pageTitle = "" }) => {
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
