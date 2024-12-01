import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./App";
import GuestLayout from "./GuestLayout";
import Login from "./views/login/login";
import DashBoard from "./views/Dashboard/Dashboard"; 
import Home from "./views/Home/Home";
import Tracking from "./views/Tracking/Tracking";
import AddPackage from "./views/AddPackage/AddPackage";

// import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to={"/DashBoard"} />,
      },
      {
        path: "/DashBoard",
        element: <DashBoard />,
      },
      {
        path: "/AddPackage",
        element: <AddPackage />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/Tracking",
        element: <Tracking />,
      },
    ],
  },
]);

export default router;
