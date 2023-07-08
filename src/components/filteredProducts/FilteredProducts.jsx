import { useSearch } from "../header/queries";
import loading from "../../assets/loading.svg";
import Card from "../card/Card";
import { useSearchParams } from "react-router-dom";

export default function FilteredProducts() {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useSearch({
    limit: 10,
    title: searchParams.get("title"),
    price_min: JSON.parse(sessionStorage.getItem("price-min")),
    price_max: JSON.parse(sessionStorage.getItem("price-max")),
  });

  return (
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
  );
}
