import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile/Profile";
import CategoriesPage from "../pages/categories-page/CategoriesPage";
import Products from "../pages/products/Products";
import Home from "../pages/home/Home";
import Product from "../pages/products/Product";
import Cart from "../pages/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
