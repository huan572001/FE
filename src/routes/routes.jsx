import { DashboardOutlined } from "@ant-design/icons";
import React, { lazy } from "react";
import routerLinks from "@/utils/router-links";

const routes = [
  {
    label: "dashboard",
    path: routerLinks("Dashboard"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "Profile",
    path: routerLinks("Profile"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "Order",
    path: routerLinks("Order"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "Staff",
    path: routerLinks("Staff"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "CreateStaff",
    path: routerLinks("CreateStaff"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "EditStaff",
    path: routerLinks("EditStaff"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "Category",
    path: routerLinks("Category"),
    component: React.lazy(() => import("@/pages/Category")),
    key: "/",
  },
  {
    label: "CreateCategory",
    path: routerLinks("CreateCategory"),
    component: React.lazy(() => import("@/pages/Category/Create")),
    key: "/",
  },
  {
    label: "EditCategory",
    path: routerLinks("EditCategory"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
  {
    label: "Customer",
    path: routerLinks("Customer"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },
];

export default routes;
