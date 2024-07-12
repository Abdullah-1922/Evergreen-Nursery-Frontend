import { createBrowserRouter } from "react-router-dom";

import AllProducts from "../pages/AllProducts";
import ManagementPage from "../pages/ManagementPage";
import CreateProduct from "../components/ui/Management/CreateProduct";
import ManageProducts from "../components/ui/Management/ManageProducts";
import CartPage from "../pages/CartPage";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage";
import CardDetailPage from '../components/ui/card/CardDetailsPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
       path:'/',
       element:<Homepage/>
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "product/:id",
        element: <CardDetailPage/>,
      },
    ],
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/management",
    element: <ManagementPage />,
    children: [
      {
        path: "create-product",
        element: <CreateProduct />,
      },

      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        index: true,
        element: <ManageProducts />,
      },
    ],
  },
]);
