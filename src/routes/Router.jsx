import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import ViewModels from "../Pages/ViewModels";
import Register from "../components/Register";
import Login from "../components/Login";

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
        path: "/add-model",
        Component: AddModel,
      },
      {
        path: "/view-models",
        Component: ViewModels,
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
