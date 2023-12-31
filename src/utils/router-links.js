const routerLinks = (name) => {
  const array = {
    Dashboard: "/",
    Login: "/auth/login",
    Profile: "/profile",
    Order: "/Order",

    Staff: "/staff",
    CreateStaff: "/CreateStaff",
    EditStaff: "/EditStaff",

    Category: "/Category",
    CreateCategory: "/CreateCategory",
    EditCategory: "/EditCategory",

    Special: "/specials",
    CreateSpecial: "/CreateSpecial",
    EditSpecial: "/EditSpecial",
    DeleteSpecial: "/DeleteSpecial",

    Brand: "/brands",
    CreateBrand: "/CreateBrand",
    EditBrand: "/EditBrand",

    Suppliers: "/suppliers",
    CreateSuppliers: "/CreateSuppliers",
    EditSuppliers: "/EditSuppliers",

    Activities: "/Activities",
    CreateActivities: "/CreateActivities",
    EditActivities: "/EditActivities",

    Unit: "/Unit",
    CreateUnit: "/CreateUnit",
    EditUnit: "/EditUnit",

    Banner: "/Banner",
    CreateBanner: "/CreateBanner",
    EditBanner: "/EditBanner",

    Environments: "/Environments",
    CreateEnvironments: "/CreateEnvironments",
    EditEnvironments: "/EditEnvironments",

    Product: "/Product",
    CreateProduct: "/CreateProduct",
    EditProducts: "/EditProduct",
    ViewProducts: "/ViewProduct",

    OrderProduct: "/OrderProduct",
    CreateOrderProduct: "/CreateOrderProduct",
    ViewOrderProducts: "/ViewOrderProduct",

    Customer: "/customer",
  };
  return array[name];
};
export default routerLinks;
