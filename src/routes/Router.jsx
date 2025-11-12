import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import Register from "../components/Register";
import Login from "../components/Login";
import AllModels from "../Pages/AllModels";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../Pages/modelDetails";
import UpdateModel from "../Pages/UpdateModel";
import MyModels from "../Pages/MyModels";
import ModelPurchase from "../Pages/ModelPurchase";
import ErrorPage from "../Pages/ErrorPage";

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
        path: "/add-model",
        element: (
          <PrivateRoute>
            <AddModel></AddModel>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/my-models",
        element: (
          <PrivateRoute>
            <MyModels></MyModels>
          </PrivateRoute>
        ),
      },
      {
        path: "/model-purchase-page",
        element: (
          <PrivateRoute>
            <ModelPurchase></ModelPurchase>
          </PrivateRoute>
        ),
      },
      {
        path: "/model-details/:id",
        element: (
          <PrivateRoute>
            <ModelDetails></ModelDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/update-model/:id",
        element: (
          <PrivateRoute>
            <UpdateModel></UpdateModel>
          </PrivateRoute>
        ),
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
    path: "*",
    Component: ErrorPage,
  },
]);
