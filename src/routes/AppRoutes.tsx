import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Products } from "../pages/Products";
import { Index } from "../pages/index";
import { Introduction } from "../pages/Introduction";
import { ErrorBoundary } from "../components/ErrorBoundary";
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
        {
          path:"*",
          element:<ErrorBoundary title="Upss.... Error" error="404" description="Pagina no encontrada por favor verifica la direccion o intenta volver al inicio"/>,
        }
      ],
    },
  ],
  {
    basename: "/PARCEROS-FOOD",
  }
);