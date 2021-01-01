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
    title: "Products",
    path: "/products",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <AiIcons.AiFillAliwangwang />,
    cName: "nav-text",
  },
  {
    title: "Supports",
    path: "/supports",
    icon: <IoIcons.IoMdPower />,
    cName: "nav-text",
  },
  {
    title: "Teams",
    path: "/teams",
    icon: <FaIcons.FaTeamspeak />,
    cName: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <AiIcons.AiFillApple />,
    cName: "nav-text",
  },
];
