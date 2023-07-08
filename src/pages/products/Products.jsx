import Card from "../../components/card/Card";
import { useProducts } from "./queries";
import "./Products.scss";

import loading from "../../assets/loading.svg";
import { useSearchParams } from "react-router-dom";
export default function Products() {
  const { data, isLoading, error } = useProducts({
    limit: 10,
  });
  const [searchParams] = useSearchParams();

  loadSesionStorege();
  function loadSesionStorege() {
    sessionStorage.setItem(
      "categoriesId",
      JSON.stringify(searchParams.get("categories"))
    );
  }

  return (
    <>
      <div className="container">
        <div className="products">
          {isLoading && (
            <img src={loading} width={100} height={100} alt="loading" />
          )}
          {error && <small>{error.toString()}</small>}

          {data?.data?.slice(0, 30).map((res) => (
            <Card
              res={res}
              key={res.id}
              title={res.title}
              imgs={res.images}
              id={res.id}
              price={res.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}
