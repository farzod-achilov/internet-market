import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Profile from "../pages/profile/Profile";
import Cart from "../pages/cart/cart";
import CategoriesPage from "../pages/categories-page/CategoriesPage";

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
    ],
  },
]);

export default router;
