import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import ViewModels from "../Pages/ViewModels";
import Register from "../components/Register";
import Login from "../components/Login";
import AllModels from "../Pages/AllModels";
import PrivateRoute from "./PrivateRoute";
import ModelDetails from "../Pages/modelDetails";
import UpdateModel from "../Pages/UpdateModel";
import DeleteModel from "../Pages/DeleteModel";
import MyModels from "../Pages/MyModels";
import ModelPurchase from "../Pages/ModelPurchase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("http://localhost:3000/latest-models"),
      },
      {
        path: "/models",
        Component: AllModels,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/view-models",
        Component: ViewModels,
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
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
      },
      {
        path: "/delete-model/:id",
        element: (
          <PrivateRoute>
            <DeleteModel></DeleteModel>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/models/${params.id}`),
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
]);
