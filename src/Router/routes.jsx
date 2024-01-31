import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Pharm from "../Pages/Pharm";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/pharmacy",
      element: <Pharm />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
