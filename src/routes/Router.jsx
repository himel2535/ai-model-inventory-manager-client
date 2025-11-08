import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home";
import AddModel from "../Pages/AddModel";
import ViewModels from "../Pages/ViewModels";

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
    ],
  },
]);
