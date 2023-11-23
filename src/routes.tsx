import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Contacts } from "./pages/contacts";
import { Product } from "./pages/product";
import { NotFound } from "./pages/notfound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export { router };
