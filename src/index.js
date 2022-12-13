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
import { useState } from "react";






const AppLayout = () => {

  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  
  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }


return(
  <>
  
    <Navbar 
    authenticated={authenticated}
    user={user}
    handleLogOut={handleLogOut}
    />
  
    <Outlet />
  </>
)
};


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

