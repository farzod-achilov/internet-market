import "./Header.scss";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import Categories from "../categories/categories";
export default function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="header">
            <div className="header-top">
              <h1 className="header-top__logo">
                <a href="/">
                  <div className="logo">
                    <img src={logo} width={90} height={90} alt="logo" />
                    <h2>wild market</h2>
                  </div>
                </a>
              </h1>
              <div className="header-top__search">
                <input id="search" placeholder="Search..." type="text" />
                <label htmlFor="search">
                  <img src={search} width={30} height={30} alt="search" />
                </label>
              </div>
            </div>
            <div className="header-bottom">
              <Categories />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
