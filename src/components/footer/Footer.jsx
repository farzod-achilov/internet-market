import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const pages = ["Home", "Categories", "Cart", "Profile"];
  const [anchorElNav, setAnchorElNav] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer">
            <nav>
              <ul>
                {pages.map((page) => (
                  <li
                    onClick={navigate.pathname === `/${page.toLowerCase()}`}
                    key={page.id}
                  >
                    {page}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
}
