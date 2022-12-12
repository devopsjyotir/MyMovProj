import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  createRoutesFromElements,
} from "react-router-dom";

import Home from './pages/Home'

import Navbar from "./components/Navbar";
import "./App.css";
import Register from "./pages/Register";
import { Provider } from "react-redux";
import allReducers from './reducers'
import {createStore} from 'redux'
import Movies from "./pages/Movies";

const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route element={<AppLayout />}>
//       <Route path="/" element={<Home />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/reports" element={<Reports />} />
//     </Route>
//   )
// );

const store = createStore(
  allReducers,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
)

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
         path: "register",
         element: <Register />,
       },

       {
        path: "movies",
        element: <Movies />,
      },
      // {
      //   path: "reports",
      //   element: <Reports />,
      // },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <RouterProvider router={router} />
  </Provider>
);

