

import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Register",
    path: "/register",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
   },

   {
    title: "Favoties",
    path: "/movies",
    icon: <IoIcons.IoIosHeart />,
    cName: "nav-text",
   },

   {
    title: "SignIn",
    path: "/signin",
    icon: <IoIcons.IoIosPerson />,
    cName: "nav-text",
   },

   {
    title: "Search",
    path: "/moviespage",
    icon: <IoIcons.IoIosSearch />,
    cName: "nav-text",
   },

   {
    title: "WatchLists",
    path: "/users",
    icon: <IoIcons.IoIosTv />,
    cName: "nav-text",
   },


];