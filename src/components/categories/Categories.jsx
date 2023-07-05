import { useCategories } from "./queries";
import "./Categories.scss";
import loading from "../../assets/loading.svg";

export default function Categories() {
  function handleSubmit(evt) {
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
  }

  const { data, isLoading, error } = useCategories({
    limit: 10,
  });
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
