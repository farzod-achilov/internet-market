import { Swiper, SwiperSlide } from "swiper/react";
import PropTypes from "prop-types";
import cart from "../../assets/cart.png";

import "swiper/css";
import "swiper/css/pagination";
import "./Card.scss";

import { Pagination } from "swiper/modules";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Card({ data, imgs, title, price, id }) {
  const [btnName, setBtnName] = useState("add");
  const [product, setProduct] = useState();

  Card.propTypes = {
    imgs: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

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

  return (
    <>
      <div id={id} className="products__card">
        <Swiper
          pagination={true}
          className="mySwiper"
          modules={[Pagination]}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
        >
          {imgs?.map((img) => (
            <>
              <SwiperSlide key={img}>
                <img
                  key={img}
                  width={320}
                  height={320}
                  src={img}
                  alt="img
            "
                />
              </SwiperSlide>
            </>
          ))}
        </Swiper>
        <h2>{title}</h2>
        <h3>{price}$</h3>
        <div className="btn-wrapper">
          <button
            id={id}
            className="btn-cart"
            onClick={handleAddtoCart}
            type="button"
          >
            {btnName === "add" ? <img src={cart} alt="cart" /> : "added"}
          </button>
          <button className="btn-more" type="button">
            <Link to={`/products/${id}`}>Show More</Link>
          </button>
        </div>
      </div>
    </>
  );
}
