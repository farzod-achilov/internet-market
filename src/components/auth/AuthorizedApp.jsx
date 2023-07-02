import { useContext } from "react";
import { AuthContext } from "../../context/AuthContent";
import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";

function AuthorizedApp() {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AuthorizedApp;
