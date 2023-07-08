import "./Header.scss";

import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import Categories from "../categories/Categories";
import { useSearchParams } from "react-router-dom";
import getUrlParams from "../../helpers/getUrlParams";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContent";

export default function Header() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setSearch } = useContext(AuthContext);
  const elForm = useRef(null);
  loadSesionStorege();
  function loadSesionStorege() {
    sessionStorage.setItem(
      "price-min",
      JSON.stringify(searchParams.get("price-min"))
    );
    sessionStorage.setItem(
      "price-max",
      JSON.stringify(searchParams.get("price-max"))
    );
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    if (
      searchParams.get("title") ||
      searchParams.get("price-min") ||
      searchParams.get("price-max")
    ) {
      setSearch(true);
    } else {
      setSearch(false);
      setSearchParams(
        getUrlParams("title", evt.target.value, searchParams, "title")
      );
      setSearchParams(
        getUrlParams("price-max", evt.target.value, searchParams, "price-max")
      );
      setSearchParams(
        getUrlParams("price-min", evt.target.value, searchParams, "price-min")
      );
      sessionStorage.removeItem("price-min");
      sessionStorage.removeItem("price-max");
    }
  }
  return (
    <>
      <div className="layout__header">
        <header>
          <div className="container">
            <div className="header">
              <div className="header-top">
                <h1 className="header-top__logo">
                  <a href="/">
                    <div className="logo">
                      <img src={logo} width={90} height={90} alt="logo" />
                      <h2>Wild Market</h2>
                    </div>
                  </a>
                </h1>
                <div className="header-top__search">
                  <form onSubmit={handleSubmit} ref={elForm}>
                    <div className="header-top__search">
                      <input
                        id="search"
                        value={searchParams.get("title")}
                        onChange={(evt) =>
                          setSearchParams(
                            getUrlParams(
                              "title",
                              evt.target.value,
                              searchParams
                            )
                          )
                        }
                        placeholder="Search..."
                        type="text"
                      />
                      <label htmlFor="search">
                        <img src={search} width={30} height={30} alt="search" />
                      </label>
                    </div>
                    <div>
                      <div className="header-top__range">
                        <input
                          value={searchParams.get("price-min")}
                          name="price-min"
                          onChange={(evt) =>
                            setSearchParams(
                              getUrlParams(
                                "price-min",
                                evt.target.value,
                                searchParams
                              )
                            )
                          }
                          placeholder="min"
                          type="number"
                        />
                        <p>TO</p>
                        <input
                          value={searchParams.get("price-max")}
                          onChange={(evt) =>
                            setSearchParams(
                              getUrlParams(
                                "price-max",
                                evt.target.value,
                                searchParams
                              )
                            )
                          }
                          name="price-max"
                          placeholder="max"
                          type="number"
                        />
                      </div>
                    </div>
                    <button type="submit"></button>
                  </form>
                </div>
              </div>
              <div className="header-bottom">
                <Categories />
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
