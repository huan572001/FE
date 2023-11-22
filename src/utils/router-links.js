const routerLinks = (name) => {
  const array = {
    Login: "/auth/login",
    Profile: "/profile",
    Order: "/Order",

    Staff: "/staff",
    CreateStaff: "/CreateStaff",
    EditStaff: "/EditStaff",

    Category: "/Category",
    CreateCategory: "/CreateCategory",
    EditCategory: "EditCategory",

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

    Customer: "/customer",
  };
  return array[name];
};
export default routerLinks;
