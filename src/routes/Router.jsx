import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import Register from "../components/Register";
import Login from "../components/Login";
import AllModels from "../Pages/AllModels";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../Pages/ModelDetails";
import UpdateModel from "../Pages/UpdateModel";
import MyModels from "../Pages/MyModels";
import ModelPurchase from "../Pages/ModelPurchase";
import ErrorPage from "../Pages/ErrorPage";
import Leaderboard from "../Pages/Leaderboard";
import Community from "../Pages/Community";
import AboutUs from "../Pages/AboutUs";
import DashboardHome from "../Pages/DashboardHome";
import Profile from "../Pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/models",
        Component: AllModels,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
      {
        path: "/community",
        element: <Community />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/model-details/:id",
        element: <ModelDetails></ModelDetails>,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/login",
        Component: Login,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "add-model",
        element: <AddModel />,
      },
      {
        path: "my-models",
        element: <MyModels />,
      },
      {
        path: "model-purchase-page",
        element: <ModelPurchase />,
      },
      {
        path: "update-model/:id",
        element: <UpdateModel />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/add-model",
    element: <PrivateRoute><AddModel /></PrivateRoute>
  },
  {
    path: "/my-models",
    element: <PrivateRoute><MyModels /></PrivateRoute>
  },
  {
    path: "/model-purchase-page",
    element: <PrivateRoute><ModelPurchase /></PrivateRoute>
  },
  {
    path: "/update-model/:id",
    element: <PrivateRoute><UpdateModel /></PrivateRoute>
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
