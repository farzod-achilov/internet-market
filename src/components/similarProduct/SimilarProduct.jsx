import { useSimilarProducts } from "../../pages/products/queries";
import Card from "../card/Card";
import loading from "../../assets/loading.svg";

export default function SimilarProduct() {
  const { data, isLoading, error } = useSimilarProducts({
    limit: 10,
  });
  return (
    <>
      {isLoading && (
        <img src={loading} width={100} height={100} alt="loading" />
      )}
      {error && <small>{error.toString()}</small>}
      <div className="product__similar-content">
        {data?.data?.slice(0, 21).map((res) => (
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
    </>
  );
}
