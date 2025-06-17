import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import Register from "../Register/Register";
import SignIn from "../SignIn/SignIn";
import Services from "../pages/Services";
import ServiceDetails from "../pages/ServiceDetails";
import AddService from "../pages/AddService";
import MyServices from "../pages/MyServices";
import UpdateService from "../components/UpdateService";
import PrivateRoute from "./PrivateRoute";
import MyReviews from "../pages/MyReviews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",

        element: <Register />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/addService",
        element: (
          <PrivateRoute>
            <AddService />
          </PrivateRoute>
        ),
      },
      {
        path: "/myServices",

        element: (
          <PrivateRoute>
            <MyServices />
          </PrivateRoute>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <PrivateRoute>
            <UpdateService />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(
            `https://service-system-server.vercel.app/services/${params.id}`
          ).then((res) => res.json()),
      },
      {
        path: "services",
        loader: () =>
          fetch("https://service-system-server.vercel.app/services"),
        element: (
          <PrivateRoute>
            <Services />
          </PrivateRoute>
        ),
      },
      {
        path: "services/:id",
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(
            `https://service-system-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
