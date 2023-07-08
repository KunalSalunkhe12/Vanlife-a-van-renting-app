import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import "../server";
import VanDetail, { loader as vanDetailsLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, {
  loader as hostVanDetailsLoader,
} from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./components/NotFound";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
        loader: vansLoader,
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
        loader: vanDetailsLoader,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: hostVansLoader,
          },
          {
            path: "vans/:id",
            element: <HostVanDetails />,
            loader: hostVanDetailsLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
              },
            ],
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
