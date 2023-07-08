import { useContext } from "react";
import Products from "../products/Products";
import { AuthContext } from "../../context/AuthContent";
import FilteredProducts from "../../components/filteredProducts/FilteredProducts";

export default function Home() {
  const { search } = useContext(AuthContext);
  return search ? <FilteredProducts /> : <Products />;
}
