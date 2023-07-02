import { useCategories } from "./queries";
import "./Categories.scss";

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
      <div className="haeder-bottom__categories">
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
