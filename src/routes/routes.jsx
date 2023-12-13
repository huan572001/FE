import { DashboardOutlined } from "@ant-design/icons";
import React, { lazy } from "react";
import routerLinks from "@/utils/router-links";
export const routeStaff = [
  {
    label: "Order",
    path: routerLinks("Order"),
    component: React.lazy(() => import("@/pages/Order")),
    key: "/",
  },
];
const routes = [
  {
    label: "dashboard",
    path: routerLinks("Dashboard"),
    component: React.lazy(() => import("@/pages/Chart")),
    key: "/",
  },
  {
    label: "Profile",
    path: routerLinks("Profile"),
    component: React.lazy(() => import("@/pages/Dashboard/Dashboard")),
    key: "/",
  },

  {
    label: "Staff",
    path: routerLinks("Staff"),
    component: React.lazy(() => import("@/pages/Staff")),
    key: "/",
  },
  {
    label: "CreateStaff",
    path: routerLinks("CreateStaff"),
    component: React.lazy(() => import("@/pages/Staff/Create")),
    key: "/",
  },
  {
    label: "EditStaff",
    path: routerLinks("EditStaff"),
    component: React.lazy(() => import("@/pages/Staff/Create")),
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
    component: React.lazy(() => import("@/pages/Category/Create")),
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

  {
    label: "Suppliers",
    path: routerLinks("Suppliers"),
    component: React.lazy(() => import("@/pages/Suppliers")),
    key: "/",
  },
  {
    label: "CreateSuppliers",
    path: routerLinks("CreateSuppliers"),
    component: React.lazy(() => import("@/pages/Suppliers/Create")),
    key: "/",
  },
  {
    label: "EditSuppliers",
    path: routerLinks("EditSuppliers"),
    component: React.lazy(() => import("@/pages/Suppliers/Create")),
    key: "/",
  },

  {
    label: "Activities",
    path: routerLinks("Activities"),
    component: React.lazy(() => import("@/pages/Activities")),
    key: "/",
  },
  {
    label: "CreateActivities",
    path: routerLinks("CreateActivities"),
    component: React.lazy(() => import("@/pages/Activities/Create")),
    key: "/",
  },
  {
    label: "EditActivities",
    path: routerLinks("EditActivities"),
    component: React.lazy(() => import("@/pages/Activities/Create")),
    key: "/",
  },

  {
    label: "Unit",
    path: routerLinks("Unit"),
    component: React.lazy(() => import("@/pages/Unit")),
    key: "/",
  },
  {
    label: "CreateUnit",
    path: routerLinks("CreateUnit"),
    component: React.lazy(() => import("@/pages/Unit/Create")),
    key: "/",
  },
  {
    label: "EditUnit",
    path: routerLinks("EditUnit"),
    component: React.lazy(() => import("@/pages/Unit/Create")),
    key: "/",
  },

  {
    label: "Banner",
    path: routerLinks("Banner"),
    component: React.lazy(() => import("@/pages/Banner")),
    key: "/",
  },
  {
    label: "CreateBanner",
    path: routerLinks("CreateBanner"),
    component: React.lazy(() => import("@/pages/Banner/Create")),
    key: "/",
  },
  {
    label: "EditBanner",
    path: routerLinks("EditBanner"),
    component: React.lazy(() => import("@/pages/Banner/Create")),
    key: "/",
  },

  {
    label: "Environments",
    path: routerLinks("Environments"),
    component: React.lazy(() => import("@/pages/Environments")),
    key: "/",
  },
  {
    label: "CreateEnvironments",
    path: routerLinks("CreateEnvironments"),
    component: React.lazy(() => import("@/pages/Environments/Create")),
    key: "/",
  },
  {
    label: "EditEnvironments",
    path: routerLinks("EditEnvironments"),
    component: React.lazy(() => import("@/pages/Environments/Create")),
    key: "/",
  },

  {
    label: "Product",
    path: routerLinks("Product"),
    component: React.lazy(() => import("@/pages/Product")),
    key: "/",
  },
  {
    label: "CreateProduct",
    path: routerLinks("CreateProduct"),
    component: React.lazy(() => import("@/pages/Product/Create")),
    key: "/",
  },
  {
    label: "Product",
    path: routerLinks("EditProducts"),
    component: React.lazy(() => import("@/pages/Product/Create")),
    key: "/",
  },
  {
    label: "Product",
    path: routerLinks("ViewProducts"),
    component: React.lazy(() => import("@/pages/Product/Create")),
    key: "/",
  },

  {
    label: "CreateOrderProduct",
    path: routerLinks("CreateOrderProduct"),
    component: React.lazy(() => import("@/pages/orderMaterials/create")),
    key: "/",
  },
  {
    label: "OrderProduct",
    path: routerLinks("OrderProduct"),
    component: React.lazy(() => import("@/pages/orderMaterials")),
    key: "/",
  },
  // {
  //   label: "ViewOrderProduct",
  //   path: routerLinks("ViewOrderProduct"),
  //   component: React.lazy(() => import("@/pages/Product/Create")),
  //   key: "/",
  // },
];
export default routes;
