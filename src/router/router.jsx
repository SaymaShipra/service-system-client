import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";

import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../components/UpdateService";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/signin",
        Component: SignIn,
      },

      {
        path: "/addService",
        Component: AddService,
      },
      {
        path: "services",
        loader: () => fetch("http://localhost:3000/services"),
        Component: Services,
      },
      {
        path: "services/:id",
        Component: ServiceDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/services/${params.id}`),
      },

      {
        path: "/myServices",
        Component: MyServices,
      },
      {
        path: "/updateService/:id",
        element: <UpdateService />,
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:3000/services/${params.id}`
          );
          return res.json();
        },
      },
    ],
  },
]);

export default router;
