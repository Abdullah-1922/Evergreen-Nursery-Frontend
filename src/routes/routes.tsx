import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AllProducts from "../pages/AllProducts";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/products",
    element: <AllProducts/>,
  },
]);
