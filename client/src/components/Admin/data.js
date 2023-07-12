module.exports.addBrandCheckBox = [
  {
    label: "Published ",
  },
  {
    label: "Popular ",
  },
  {
    label: "other",
  },
];
module.exports.addProductCheckBox = [
  { id: 1, label: "Published", isChecked: false },
  { id: 2, label: "Popular", isChecked: false },
  { id: 3, label: "Other", isChecked: false },
];
module.exports.couponTypes = [
  { id: 1, label: "Redirect", isChecked: false },
  { id: 2, label: "Code", isChecked: false },
  { id: 3, label: "Other", isChecked: false },
];
module.exports.addProductFields = [
  {
    label: "Name",
    type: "text",
    id: "name",
    name: "name",
    className: "w-1/3",
  },
  {
    label: "Code",
    type: "text",
    id: "code",
    name: "code",
    className: "w-1/3",
  },

  { label: "Link", type: "text", id: "link", name: "link", className: "w-1/3" },
  {
    label: "Badge Text",
    type: "text",
    id: "badge",
    name: "badge",
    className: "w-1/3",
  },
  {
    label: "Description",
    type: "textarea",
    id: "description",
    name: "description",
    className: "w-1/2",
  },
];
module.exports.addBrandFields = [
  {
    label: "Name",
    type: "text",
    id: "brandName",
    name: "name",
    className: "w-1/3",
  },
  {
    label: "S name",
    type: "text",
    id: "sName",
    name: "sName",
    className: "w-1/3",
  },

  { label: "Link", type: "text", id: "link", name: "link", className: "w-1/3" },

  {
    label: "Description",
    type: "textarea",
    id: "description",
    name: "description",
    className: "w-1/2",
  },
];
module.exports.navigationItems = [
  {
    id: 1,
    title: "Admin",
    icon: "logo-apple",
    link: "/",
  },
  {
    id: 2,
    title: "Dashboard",
    icon: "home-outline",
    link: "/admin",
  },
  {
    id: 3,
    title: "Add Brand",
    icon: "people-outline",
    link: "/addBrand",
  },
  {
    id: 4,
    title: "Add Product",
    icon: "chatbubble-outline",
    link: "/addProduct",
  },
  {
    id: 5,
    title: "Add Category",
    icon: "chatbubble-outline",
    link: "/addCategory",
  },
  {
    id: 6,
    title: "Add Slider",
    icon: "chatbubble-outline",
    link: "/addSlider",
  },

  // {
  //   id: 5,
  //   title: "Add Slider",
  //   icon: "help-outline",
  //   link: "/admin",
  // },
  // {
  //   id: 6,
  //   title: "Settings",
  //   icon: "settings-outline",
  //   link: "/admin",
  // },
  // {
  //   id: 7,
  //   title: "Password",
  //   icon: "lock-closed-outline",
  //   link: "/admin",
  // },
  // {
  //   id: 8,
  //   title: "Sign Out",
  //   icon: "log-out-outline",
  //   link: "/admin",
  // },
];
module.exports.languages = ["English", "Urdu"];
