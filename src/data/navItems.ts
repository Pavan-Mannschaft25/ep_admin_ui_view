// export type NavItem = {
//   id: string;
//   label: string;
//   path: string;
//   icon: string; // icon component name from react-icons/fi etc.
//   children?: NavItem[];
// };

// export const navItems: NavItem[] = [
//   { id: "nav-header", label: "Navigation", path: "/", icon: "FiList" },
//   { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: "FiHome" },
//   { id: "shop", label: "Shop Module", path: "/shop", icon: "FiShoppingCart" },
//   {
//     id: "master",
//     label: "Master Store",
//     path: "/master-store",
//     icon: "FiPackage",
//   },
//   {
//     id: "store-mgmt",
//     label: "Store Management",
//     path: "/store-management",
//     icon: "FiServer",
//   },
//   { id: "franchise", label: "Franchise", path: "/franchise", icon: "FiUsers" },
//   { id: "diet", label: "Diet Module", path: "/diet", icon: "FiHeart" },
//   {
//     id: "fitness",
//     label: "Fitness Module",
//     path: "/fitness",
//     icon: "FiActivity",
//   },
//   {
//     id: "recipes",
//     label: "Recipes Module",
//     path: "/recipes",
//     icon: "FiBookOpen",
//   },
//   { id: "cms", label: "CMS", path: "/cms", icon: "FiEdit" },
//   { id: "users", label: "Users", path: "/users", icon: "FiUser" },
//   {
//     id: "payments",
//     label: "Payments",
//     path: "/payments",
//     icon: "FiCreditCard",
//   },
//   {
//     id: "reports",
//     label: "Reports",
//     path: "/reports",
//     icon: "FiBarChart2",
//     children: [
//       {
//         id: "reports-daily",
//         label: "Daily",
//         path: "/reports/daily",
//         icon: "FiCalendar",
//       },
//       {
//         id: "reports-monthly",
//         label: "Monthly",
//         path: "/reports/monthly",
//         icon: "FiClock",
//       },
//     ],
//   },
//   { id: "settings", label: "Settings", path: "/settings", icon: "FiSettings" },

//   // duplicates / placeholders to simulate heavy list
//   {
//     id: "shop-dup-1",
//     label: "Shop Module (Alt)",
//     path: "/shop",
//     icon: "FiShoppingCart",
//   },
//   {
//     id: "shop-dup-2",
//     label: "Shop Module (Alt2)",
//     path: "/shop",
//     icon: "FiShoppingCart",
//   },
//   { id: "cms-dup", label: "CMS (Pages)", path: "/cms", icon: "FiEdit" },
//   {
//     id: "reports-dup",
//     label: "Reports (Custom)",
//     path: "/reports",
//     icon: "FiBarChart2",
//   },
//   { id: "profile", label: "Profile", path: "/profile", icon: "FiUser" },
// ];

export type NavItem = {
  id: string;
  label: string;
  path: string;
  icon: string; // icon component name from react-icons/fi etc.
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { id: "nav-header", label: "Navigation", path: "/", icon: "FiList" },
  { id: "dashboard", label: "Dashboard", path: "/dashboard", icon: "FaHome" },
  {
    id: "shop",
    label: "CMS",
    path: "/shop",
    icon: "FaShoppingCart",
    children: [
      {
        id: "categories",
        label: "Main Categories",
        path: "shop/categories",
        icon: "",
      },
      {
        id: "sub-categories",
        label: "Sub Categories",
        path: "shop/sub-categories",
        icon: "",
      },
      { id: "brands", label: "Brands", path: "shop/brands", icon: "" },
      { id: "products", label: "Products", path: "shop/products", icon: "" },
      { id: "uom", label: "UOM", path: "shop/uom", icon: "" },
      { id: "tags", label: "Product Tags", path: "shop/tags", icon: "" },
      {
        id: "store-tags",
        label: "Store Tags",
        path: "shop/store-tags",
        icon: "",
      },

      // { id: "orders", label: "Orders", path: "/orders" },
      // { id: "delivery", label: "Delivery Boys", path: "/delivery" },
    ],
  },
  {
    id: "master",
    label: "Master Store",
    path: "/master-store",
    icon: "FaStore",
  },
  {
    id: "franchise",
    label: "Franchise",
    path: "/franchise/franchise-list",
    icon: "FaNetworkWired",
    // children: [
    //   {
    //     id: "franchise-list",
    //     label: "Franchise Owners",
    //     path: "/franchise/franchise-list",
    //   },
    //   {
    //     id: "franchise-location",
    //     label: "Franchise Locations",
    //     path: "/franchise/franchise-location",
    //   },
    // ],
  },
  {
    id: "locations",
    label: "Locations",
    path: "/locations",
    icon: "FaMapMarkerAlt",
  },
  {
    id: "stores",
    label: "Stores",
    path: "/stores",
    icon: "FaShop",
    // children: [
    //   { id: "store-list", label: "Store List", path: "/stores/store-list" },
    //   {
    //     id: "store-wallet",
    //     label: "Store Wallet",
    //     path: "/stores/store-wallet",
    //   },
    //   { id: "store-payouts", label: "Payouts", path: "/stores/store-payouts" },
    //   {
    //     id: "store-analytics",
    //     label: "Analytics",
    //     path: "/stores/store-analytics",
    //   },
    // ],
  },

  {
    id: "banners",
    label: "Banners",
    path: "/banners",
    icon: "FaImage",
    children: [
      {
        id: "Home Banners",
        label: "Home Banners",
        path: "/banners/home-banners",
        icon: "",
      },
      {
        id: "Category Banners",
        label: "Category Banners",
        path: "/banners/category-banners",
        icon: "",
      },
      {
        id: "Location Banners",
        label: "Location Banners",
        path: "/banners/location-banners",
        icon: "",
      },
    ],
  },

  {
    id: "coupons",
    label: "Coupons",
    path: "/coupons",
    icon: "FaTag",
    children: [
      {
        id: "app-coupons",
        label: "App Coupons",
        path: "/coupons/app-coupons",
        icon: "",
      },
      {
        id: "store-coupons",
        label: "Store Coupons",
        path: "/coupons/store-coupons",
        icon: "",
      },
      {
        id: "location-coupons",
        label: "Location Coupons",
        path: "/coupons/location-coupons",
        icon: "",
      },
    ],
  },
  { id: "orders", label: "Orders", path: "/orders", icon: "FaBoxOpen" },
  {
    id: "users",
    label: "Users",
    path: "/users",
    icon: "FaUsers",
    children: [
      {
        id: "customers",
        label: "Customers",
        path: "/users/customers",
        icon: "",
      },
      {
        id: "franchise-owner",
        label: "Franchise Owner",
        path: "/users/franchise-owner",
        icon: "",
      },
      {
        id: "store-admins",
        label: "Store Admins",
        path: "/users/store-admins",
        icon: "",
      },
      {
        id: "delivery-boys",
        label: "Delivery Boys",
        path: "/users/delivery-boys",
        icon: "",
      },
      {
        id: "team",
        label: "Team",
        path: "/users/team",
        icon: "",
      },
    ],
  },

  {
    id: "diet",
    label: "Diet Module",
    path: "/diet",
    icon: "FaAppleAlt",
    children: [
      {
        id: "nutritionists",
        label: "Nutritionists",
        path: "/diet/nutritionists",
        icon: "",
      },
      {
        id: "diet-plans",
        label: "Diet Plans",
        path: "/diet/diet-plans",
        icon: "",
      },
      {
        id: "family-profiles",
        label: "Family Profiles",
        path: "/diet/family-profiles",
        icon: "",
      },
      { id: "labs", label: "Labs", path: "/diet/labs", icon: "" },
      {
        id: "lab-reports",
        label: "Lab Reports",
        path: "/diet/lab-reports",
        icon: "",
      },
    ],
  },
  {
    id: "fitness",
    label: "Fitness Module",
    path: "/fitness",
    icon: "FaDumbbell",
    children: [
      { id: "fitpass", label: "Fitpass Plans", path: "/fitpass", icon: "" },

      {
        id: "master-config",
        label: "Master Config",
        path: "/master-config",
        icon: "",
      },
      {
        id: "fitpass-orders",
        label: "FitPass Orders",
        path: "/fitpass-orders",
        icon: "",
      },
      {
        id: "bookings",
        label: "Class Bookings",
        path: "/class-bookings",
        icon: "",
      },
      {
        id: "fitness-centres",
        label: "Fitness Centres",
        path: "/fitness-centres",
        icon: "",
      },
      // { id: "class-management", label: "Class Management", path: "/classes" },
      { id: "rewards", label: "Rewards System", path: "/rewards", icon: "" },
      // Add these to your navigation configuration
      {
        id: "member-management",
        label: "Member Management",
        path: "/members",
        icon: "",
      },
      {
        id: "center-bookings",
        label: "Center Bookings",
        path: "/bookings",
        icon: "",
      },
      {
        id: "center-payments",
        label: "Center payments",
        path: "/center-payments",
        icon: "",
      },
      {
        id: "center-settlements",
        label: "Center Settlements",
        path: "/center-settlements",
        icon: "",
      },

      // { id: "attendance", label: "Attendance", path: "/attendance" },
    ],
  },
  {
    id: "recipes",
    label: "Recipes",
    path: "/recipes",
    icon: "FaUtensils",
    children: [
      { id: "recipe-list", label: "Recipe List", path: "/recipe-list" },
      {
        id: "recipe-categories",
        label: "Categories",
        path: "/recipe-categories",
      },
      {
        id: "recipe-hotels-list",
        label: "Recipe Hotels List",
        path: "recipe-hotels-list",
      },
      { id: "recipe-orders", label: "Recipe Orders", path: "/recipe-orders" },
      {
        id: "recipe-orders",
        label: "Recipe Payments",
        path: "/recipe-payments",
      },
      {
        id: "recipe-settlements",
        label: "Recipe Settlements",
        path: "/recipe-settlements",
      },
      {
        id: "creator-payouts",
        label: "Creator Payouts",
        path: "/creator-payouts",
      },
    ],
  },
  {
    id: "payments",
    label: "Payments",
    path: "/payments",
    icon: "FaCreditCard",
    children: [
      {
        id: "payments-overview",
        label: "Payments Overview",
        path: "/payments/payments-overview",
        icon: "",
      },
      {
        id: "store-payments",
        label: "Store Payments",
        path: "/payments/store-payments",
        icon: "",
      },
      {
        id: "franchise-payments",
        label: "Franchise Payments",
        path: "/payments/franchise-payments",
        icon: "",
      },
      {
        id: "delivery-boy-payments",
        label: "Delivery Boy Payments",
        path: "/payments/delivery-boy-payments",
        icon: "",
      },
    ],
  },
  {
    id: "settlements",
    label: "Settlements",
    path: "/settlements",
    icon: "FaMoneyCheckAlt",
    children: [
      {
        id: "store-settlements",
        label: "Store Settlements",
        path: "/settlements/store-settlements",
        icon: "",
      },
      {
        id: "db-settlements",
        label: "DB Settlements",
        path: "/settlements/db-settlements",
        icon: "",
      },
      {
        id: "fo-settlements",
        label: "FO Settlements",
        path: "/settlements/fo-settlements",
        icon: "",
      },
    ],
  },

  {
    id: "reports",
    label: "Reports",
    path: "/reports",
    icon: "FaChartBar",
    children: [
      {
        id: "sales-reports",
        label: "Sales Reports",
        path: "/sales-reports",
        icon: "",
      },
      { id: "analytics", label: "Analytics", path: "/analytics", icon: "" },
      {
        id: "performance",
        label: "Performance",
        path: "/performance",
        icon: "",
      },
    ],
  },
  { id: "settings", label: "Settings", path: "/settings", icon: "FaCog" },
];
