import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import "../server";
import VanDetail, { loader as vanDetailsLoader } from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import HostVans, { loader as hostVansLoader } from "./pages/Host/HostVans";
import HostVanDetails, {
  loader as hostVanDetailsLoader,
} from "./pages/Host/HostVanDetails";
import HostVanInfo from "./pages/Host/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos";
import NotFound from "./components/NotFound";
import Error from "./pages/Error";
import Login, { action as loginAction } from "./pages/Login";
import { requireAuth } from "./utils";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
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
        errorElement: <Error />,
      },
      {
        path: "vans/:id",
        element: <VanDetail />,
        loader: vanDetailsLoader,
        errorElement: <Error />,
      },
      {
        path: "host",
        element: <HostLayout />,
        loader: () => requireAuth(),
        children: [
          {
            index: true,
            element: <HostVans />,
            loader: hostVansLoader,
            errorElement: <Error />,
          },
          {
            path: ":id",
            element: <HostVanDetails />,
            loader: hostVanDetailsLoader,
            errorElement: <Error />,
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
