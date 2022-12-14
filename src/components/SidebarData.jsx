

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
    title: "Movies",
    path: "/movies",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
   },

   {
    title: "SignIn",
    path: "/signin",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
   },

   {
    title: "List",
    path: "/moviespage",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
   },

   {
    title: "Users",
    path: "/users",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
   },


];