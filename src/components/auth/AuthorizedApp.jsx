import { useContext } from "react";
import { AuthContext } from "../../context/AuthContent";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Home from "../../pages/home/Home";

function AuthorizedApp() {
  const { home } = useContext(AuthContext);

  return (
    <>
      <div className="layout">
        <Header />
        <div className="layout__main">
          {home === true ? <Home /> : <Outlet />}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AuthorizedApp;
