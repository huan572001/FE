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
    label: "Special",
    path: routerLinks("Special"),
    component: React.lazy(() => import("@/pages/Special")),
    key: "/",
  },
  {
    label: "createSpecial",
    path: routerLinks("CreateSpecial"),
    component: React.lazy(() => import("@/pages/Special/createSpecial")),
    key: "/",
  },

  {
    label: "brands",
    path: routerLinks("Brand"),
    component: React.lazy(() => import("@/pages/Brands")),
    key: "/",
  },
  {
    label: "CreateBrand",
    path: routerLinks("CreateBrand"),
    component: React.lazy(() => import("@/pages/Brands/Create")),
    key: "/",
  },
  {
    label: "EditBrand",
    path: routerLinks("EditBrand"),
    component: React.lazy(() => import("@/pages/Brands/Create")),
    key: "/",
  },
];

export default routes;
