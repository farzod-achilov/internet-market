import { useContext } from "react";
import { AuthContext } from "../../context/AuthContent";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function AuthorizedApp() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="layout">
        <Header />
        <div className="layout__main">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AuthorizedApp;
