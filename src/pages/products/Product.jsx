import { Swiper, SwiperSlide } from "swiper/react";
import { useProduct } from "./queries";
import { Pagination } from "swiper/modules";
import "./Product.scss";

import SimilarProduct from "../../components/similarProduct/SimilarProduct";
import loading from "../../assets/loading.svg";
import { useContext, useState } from "react";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContent";

export default function Product() {
  const { data, isLoading, error } = useProduct({
    limit: 10,
  });
  const { setHome } = useContext(AuthContext);
  const [btnName, setBtnName] = useState("add");
  const [product, setProduct] = useState();
  sessionStorage.setItem("similarId", JSON.stringify(data?.data?.category.id));

  function setItemToLocalStorage(key, value) {
    localStorage.setItem(key, value);
  }

  function handleAddtoCart() {
    if (btnName === "add") {
      setBtnName("added");
      setProduct(JSON.stringify(data));
      setItemToLocalStorage("product", product);
    } else {
      setBtnName("add");
    }
  }

  function handleSetHome() {
    setHome(true);
  }

  return (
    <>
      {error && <small>{error.toString()}</small>}
      {isLoading && (
        <img src={loading} width={100} height={100} alt="loading" />
      )}
      <div className="container">
        <div className="product">
          <div className="product__img">
            <Swiper
              pagination={true}
              className="mySwiper"
              modules={[Pagination]}
              spaceBetween={20}
              loop={true}
              slidesPerView={2}
            >
              {data?.data?.images.map((img) => (
                <>
                  <SwiperSlide key={img}>
                    <img
                      key={img}
                      width={550}
                      height={550}
                      src={img}
                      alt="img
            "
                    />
                  </SwiperSlide>
                </>
              ))}
            </Swiper>
          </div>
          <div className="product__content">
            <h2>{data?.data?.title}</h2>
            <p>{data?.data?.description}</p>
            <h3>Price: {data?.data?.price}$</h3>
            <div className="button-wrapper">
              <button
                id={data?.data?.id}
                className="btn-cart"
                onClick={handleAddtoCart}
                type="button"
              >
                {btnName === "add" ? <img src={cart} alt="cart" /> : "added"}
              </button>
              <button className="btn-more" type="button">
                <Link onClick={() => handleSetHome()} to={`/home`}>
                  Go To Home
                </Link>
              </button>
            </div>
          </div>
          <div className="product__similar">
            <h2 className="product__similar-header">Similar Products</h2>
            <SimilarProduct />
          </div>
        </div>
      </div>
    </>
  );
}
