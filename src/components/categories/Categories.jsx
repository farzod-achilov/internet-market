import { useCategories } from "./queries";
import "./Categories.scss";
import loading from "../../assets/loading.svg";
import { useSearchParams } from "react-router-dom";
import getUrlParams from "../../helpers/getUrlParams";

export default function Categories() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, isLoading, error } = useCategories({
    limit: 10,
  });

  function handleSubmit(evt) {
    const element = evt.target;

    setSearchParams(getUrlParams("categories", evt.target.id, searchParams));
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    } else {
      var activeElements = document.getElementsByClassName("active");
      for (var i = 0; i < activeElements.length; i++) {
        activeElements[i].classList.remove("active");
      }
      element.classList.add("active");
    }
  }

  return (
    <>
      <div className="header-bottom__categories">
        {error && <small>{error.toString()}</small>}
        {isLoading && (
          <img src={loading} width={100} height={100} alt="loading" />
        )}
        {data?.data?.map((categories) => (
          <h2
            onClick={(evt) => handleSubmit(evt)}
            id={categories.id}
            key={categories.id}
          >
            {categories.name}
          </h2>
        ))}
      </div>
    </>
  );
}
