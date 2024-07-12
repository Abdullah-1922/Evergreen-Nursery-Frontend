import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllProducts from "../pages/AllProducts";
import ManagementPage from "../pages/ManagementPage";
import CreateProduct from "../components/ui/Management/CreateProduct";
import ManageProducts from "../components/ui/Management/ManageProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <AllProducts />,
  },
  {
    path: "/management",
    element: <ManagementPage />,
    children:[

      {
        path:'create-product',
        element: <CreateProduct/>
      },
  
      {
        path:'manage-products',
        element: <ManageProducts/>
      },
      {
        index:true,
        element: <ManageProducts/>
      },
    ]
  },
]);
