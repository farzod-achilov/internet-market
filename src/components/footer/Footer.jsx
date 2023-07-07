import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Footer.scss";
import { AuthContext } from "../../context/AuthContent";

export default function Footer() {
  const pages = ["Categories", "Cart", "Profile"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { setHome } = useContext(AuthContext);

  const handleCloseNavMenu = (page, evt) => {
    setAnchorElNav(null);

    if (page === "/") {
      navigate("/home");
      setHome(true);
    }

    const element = evt.target;
    if (element.classList.contains("active")) {
      element.classList.remove("active");
      setHome(false);
    } else {
      var activeElements = document.getElementsByClassName("active");
      for (var i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove("active");
      }
      element.classList.add("active");
    }
    navigate(`/${page.toLowerCase()}`);
  };
  function setPathName(page) {
    location.pathname === `/${page.toLowerCase()}`;
    if (page === "/") {
      location.pathname === "/home";
    }
  }

  return (
    <>
      <div className="layout__footer">
        <footer>
          <div className="container">
            <div className="footer">
              <nav>
                <button
                  className={`active `}
                  id={`${anchorElNav}`}
                  type="button"
                  onClick={(evt) => handleCloseNavMenu("/", evt)}
                  onSelect={setPathName("/")}
                >
                  Home
                </button>

                {pages.map((page) => (
                  <button
                    id={page}
                    type="button"
                    onSelect={setPathName(page)}
                    onClick={(evt) => handleCloseNavMenu(page, evt)}
                    key={page}
                  >
                    {page}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
