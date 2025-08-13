import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router";
import Spinner from "../components/Spinner";

// Layout
const RootLayout = lazy(() => import("../layouts/RootLayout"));

// Pages
const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../Register/Register"));
const SignIn = lazy(() => import("../SignIn/SignIn"));
const Services = lazy(() => import("../pages/Services"));
const ServiceDetails = lazy(() => import("../pages/ServiceDetails"));
const AddService = lazy(() => import("../pages/AddService"));
const MyServices = lazy(() => import("../pages/MyServices"));
const UpdateService = lazy(() => import("../components/UpdateService"));
const MyReviews = lazy(() => import("../pages/MyReviews"));
const NotFound = lazy(() => import("../pages/NotFound"));
const About = lazy(() => import("../pages/Home/About"));
const Contact = lazy(() => import("../pages/Home/Contact"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <RootLayout />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/register",
        element: (
          <Suspense fallback={<Spinner />}>
            <Register />
          </Suspense>
        ),
      },
      {
        path: "/signin",
        element: (
          <Suspense fallback={<Spinner />}>
            <SignIn />
          </Suspense>
        ),
      },
      {
        path: "/addService",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <AddService />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/myServices",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <MyServices />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Spinner />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Spinner />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/updateService/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <UpdateService />
            </PrivateRoute>
          </Suspense>
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
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <Services />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "services/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <ServiceDetails />
            </PrivateRoute>
          </Suspense>
        ),
        loader: ({ params }) =>
          fetch(
            `https://service-system-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <Suspense fallback={<Spinner />}>
            <PrivateRoute>
              <MyReviews />
            </PrivateRoute>
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Spinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
