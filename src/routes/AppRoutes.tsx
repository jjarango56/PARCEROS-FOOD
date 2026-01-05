import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Products } from "../pages/Products";
import { Index } from "../pages/index";
import { Introduction } from "../pages/Introduction";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <Index
              logo="logo.jpg"
              title="BIENVENIDO A PARCEROS FOOD"
              url="https://turismoantioquia.travel/wp-content/uploads/2021/12/marinilla.jpg"
              description="fondo de Marinilla"
            />
          ),
        },
        {
          path: "Introduction",
          element: <Introduction />,
          children: [
            {
              path: "Products",
              element: <Products />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: "/PARCEROS-FOOD",
  }
);