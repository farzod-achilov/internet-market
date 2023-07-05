import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./Footer.scss";

export default function Footer() {
  const pages = ["Categories", "Cart", "Profile"];
  const [anchorElNav, setAnchorElNav] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleCloseNavMenu = (page, evt) => {
    setAnchorElNav(null);
    if (page === "/") {
      navigate("/");
    }
    const element = evt.target;
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      var activeElements = document.getElementsByClassName("active");
      for (var i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove("active");
      }
      element.classList.add("active");
    }
    navigate(`/${page.toLowerCase()}`);
  };

  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <nav>
              <button
                className={`active `}
                id={`${anchorElNav}`}
                type="button"
                onClick={(evt) => handleCloseNavMenu("/", evt)}
                onSelect={location.pathname === "/"}
              >
                Home
              </button>

              {pages.map((page) => (
                <button
                  id={page}
                  type="button"
                  onSelect={location.pathname === `/${page.toLowerCase()}`}
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
    </>
  );
}
