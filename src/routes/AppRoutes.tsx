// import React, { lazy } from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import DashboardPage from "../pages/DashboardPage";
// import UsersPage from "../pages/UsersPage";
// import SettingsPage from "../pages/SettingsPage";

// const ScrollToTop = lazy(() => import("../components/common/ScrollToTop"));

// const ShopModulePage = lazy(() => import("../pages/ShopModulePage"));
// // const MasterStorePage = lazy(() => import("../pages/MasterStorePage"));
// const StoreManagementPage = lazy(() => import("../pages/StoreManagementPage"));
// const FranchisePage = lazy(() => import("../pages/FranchisePage"));
// const DietModulePage = lazy(() => import("../pages/DietModulePage"));
// const FitnessModulePage = lazy(() => import("../pages/FitnessModulePage"));
// const RecipesModulePage = lazy(() => import("../pages/RecipesModulePage"));
// const CMSPage = lazy(() => import("../pages/CMSPage"));
// // const PaymentsPage = lazy(() => import("../pages/PaymentsPage"));
// const ReportsPage = lazy(() => import("../pages/ReportsPage"));
// const ProfilePage = lazy(() => import("../pages/ProfilePage"));

// //Not Found Page
// const NotFoundPage = lazy(() => import("../components/common/NotFound"));

// // Shop Module Pages
// const ShopProductsPage = lazy(
//   () => import("../modules/shop/pages/ShopProductsPage")
// );
// const ShopCategoryPage = lazy(
//   () => import("../modules/shop/categories/pages/CategoriesPage")
// );
// const ShopSubCategoriesPage = lazy(
//   () => import("../modules/shop/subCategories/pages/SubCategoriesPage")
// );
// const ShopBrandsPage = lazy(
//   () => import("../modules/shop/brands/pages/BrandsPage")
// );
// const ShopUOMPage = lazy(() => import("../modules/shop/uom/pages/UOMPage"));
// const ShopTagsPage = lazy(() => import("../modules/shop/tags/pages/TagsPage"));
// const StoreTagsPage = lazy(
//   () => import("../modules/shop/storeTags/pages/StoreTagsPage")
// );

// // Orders Module Page
// const OrdersPage = lazy(() => import("../modules/orders/pages/OrdersPage"));
// const StoreOrdersPage = lazy(
//   () => import("../modules/orders/pages/StoreOrdersPage")
// );
// const OrderDetailsPage = lazy(
//   () => import("../modules/orders/pages/OrderDetailsPage")
// );

// // Banners Module Pages
// const BannersPage = lazy(
//   () => import("../modules/banners/homeBanners/pages/HomeBannersPage")
// );
// const CategoryBannersPage = lazy(
//   () => import("../modules/banners/categoryBanners/pages/CategoryBannersPage")
// );
// const LocationBannersPage = lazy(
//   () => import("../modules/banners/locationBanners/pages/LocationBannersPage")
// );

// // Locations Module Page
// const LocationsPage = lazy(
//   () => import("../modules/locations/pages/LocationsPage")
// );

// // Master Store Module Pages
// // import MasterStore from "../modules/masterStore";
// const MasterStorePage = lazy(
//   () => import("../modules/masterStore/pages/MasterStorePage")
// );
// // const MonsterStorePage = lazy(
// //   () => import("../modules/mosterStores/pages/MonsterStorePage")
// // );
// // const MasterStorePage = lazy(
// //   () =>
// //     import("../modules/mosterStores/masterProducts/pages/MasterProductsPage")
// // );
// // const MasterStoreAssignmentPage = lazy(
// //   () =>
// //     import("../modules/mosterStores/storeAssignment/pages/StoreAssignmentPage")
// // );

// // Store Module Pages
// const StorePage = lazy(() => import("../modules/stores/pages/StorePage"));
// const StoreProductsPage = lazy(
//   () => import("../modules/stores/pages/StoreProductsPage")
// );
// const CategoryListPage = lazy(
//   () => import("../modules/products/pages/CategoryListPage")
// );
// const ProductPage = lazy(() => import("../modules/products/pages/ProductPage"));
// // const SubCategoryListPage = lazy(
// //   () => import("../modules/products/pages/SubCategoryListPage")
// // );
// // const ProductsListPage = lazy(
// //   () => import("../modules/products/pages/ProductsListPage")
// // );
// // const StoreListPage = lazy(
// //   () => import("../modules/stores/storeList/pages/StoreListPage")
// // );
// // const StoreWalletPage = lazy(
// //   () => import("../modules/stores/storeWallet/pages/StoreWalletPage")
// // );
// // const StoreAnalyticsPage = lazy(
// //   () => import("../modules/stores/storeAnalytics/pages/StoreAnalyticsPage")
// // );
// // const StorePayoutsPage = lazy(
// //   () => import("../modules/stores/storePayouts/pages/StorePayoutsPage")
// // );

// // Coupons Module Page
// const CouponsPage = lazy(
//   () => import("../modules/coupons/appCoupons/pages/AppCouponsPage")
// );
// const StoreCouponsPage = lazy(
//   () => import("../modules/coupons/storeCoupons/pages/StoreCouponsPage")
// );
// const LocationCouponsPage = lazy(
//   () => import("../modules/coupons/locationCoupons/pages/LocationCouponsPage")
// );

// const PaymentsPage = lazy(
//   () => import("../modules/payments/payments/pages/PaymentsPage")
// );
// const StorePaymentsPage = lazy(
//   () => import("../modules/payments/storePayments/pages/StorePaymentsPage")
// );
// const StorePaymentDetailsPage = lazy(
//   () =>
//     import("../modules/payments/storePayments/pages/StorePaymentDetailsPage")
// );
// const FrachisePaymentsPage = lazy(
//   () => import("../modules/payments/franchise/pages/FranchisePaymentsPage")
// );
// const DeliveryBoyPaymentPage = lazy(
//   () => import("../modules/payments/deliveryBoys/pages/DeliveryBoysPage")
// );

// //users Module Page
// const CustomersPage = lazy(
//   () => import("../modules/users/customers/pages/CustomersPage")
// );
// const FranchiseOwnersPage = lazy(
//   () => import("../modules/users/franchiseOwners/pages/FranchiseOwnersPage")
// );
// const StoreAdminsPage = lazy(
//   () => import("../modules/users/storeAdmins/pages/StoreAdminsPage")
// );
// const DeliveryBoysPage = lazy(
//   () => import("../modules/users/deliveryBoys/pages/DeliveryBoysPage")
// );
// const TeamPage = lazy(() => import("../modules/users/team/pages/TeamPage"));

// //Settlements Module Page
// const StoreSettlementsPage = lazy(
//   () =>
//     import("../modules/settlements/storeSettlements/pages/StoreSettlementsPage")
// );
// const DBSettlementsPage = lazy(
//   () => import("../modules/settlements/dbSettlements/pages/DBSettlementsPage")
// );
// const FOSettlementsPage = lazy(
//   () => import("../modules/settlements/foSettlements/pages/FOSettlementsPage")
// );
// const StoreSettlementDetailsPage = lazy(
//   () =>
//     import(
//       "../modules/settlements/storeSettlementDetails/pages/StoreSettlementDetailsPage"
//     )
// );

// //Franchise Module Page
// const FranchiseListPage = lazy(
//   () => import("../modules/franchise/franchiseList/pages/FranchiseListPage")
// );
// // const FranchiseLocationPage = lazy(
// //   () =>
// //     import("../modules/franchise/franchiseLocation/pages/FranchiseLocationPage")
// // );
// const FranchiseLocationsPage = lazy(
//   () =>
//     import(
//       "../modules/franchise/franchiseLocations/pages/FranchiseLocationsPage"
//     )
// );
// const StoresPage = lazy(
//   () => import("../modules/franchise/storesList/pages/StoresPage")
// );
// // import FranchiseLocationsPage from "./modules/franchise/franchise-locations/pages/FranchiseLocationsPage";
// // import StoresPage from "./modules/franchise/stores/pages/StoresPage";

// //Diet
// // import NutritionistsPage from "./modules/diet/nutritionists/pages/NutritionistsPage";
// const NutritionistsPage = lazy(
//   () => import("../modules/diet/nutritionists/pages/NutritionistListPage")
// );

// //Fitness Module page
// const FitPassPage = lazy(
//   () => import("../modules/fitness/fitpass/pages/FitPassPage")
// );
// const ClassesPage = lazy(
//   () => import("../modules/fitness/classManagement/pages/ClassesPage")
// );
// const CentresPage = lazy(
//   () => import("../modules/fitness/centres/pages/CentresPage")
// );
// const RewardsPage = lazy(
//   () => import("../modules/fitness/rewards/pages/RewardsPage")
// );
// const MembersPage = lazy(
//   () => import("../modules/fitness/members/pages/MembersPage")
// );
// const ClassBookingsPage = lazy(
//   () => import("../modules/fitness/bookings/pages/ClassBookingsPage")
// );
// const FitPassOrdersPage = lazy(
//   () => import("../modules/fitness/fitpassOrders/pages/FitPassOrdersPage")
// );
// const MasterConfigPage = lazy(
//   () => import("../modules/fitness/masterConfig/pages/MasterConfigPage")
// );

// export default function AppRoutes() {
//   return (
//     <>
//       <ScrollToTop />
//       <Routes>
//         <Route path="/" element={<Navigate to="/dashboard" replace />} />
//         <Route path="/dashboard" element={<DashboardPage />} />
//         {/* Shop Module Routes */}
//         <Route path="/shop" element={<ShopModulePage />} />
//         <Route path="/shop/products" element={<ShopProductsPage />} />
//         <Route path="/shop/categories" element={<ShopCategoryPage />} />
//         <Route
//           path="/shop/sub-categories"
//           element={<ShopSubCategoriesPage />}
//         />
//         <Route path="/shop/brands" element={<ShopBrandsPage />} />
//         <Route path="/shop/uom" element={<ShopUOMPage />} />
//         <Route path="/shop/tags" element={<ShopTagsPage />} />
//         <Route path="/shop/store-tags" element={<StoreTagsPage />} />
//         {/* Orders Module Route */}
//         <Route path="/orders" element={<OrdersPage />} />
//         <Route
//           path="/orders/store-orders/:storeId"
//           element={<StoreOrdersPage />}
//         />
//         <Route path="/orders/orderDetails/:id" element={<OrderDetailsPage />} />
//         {/* Banners Module Route */}
//         <Route path="/banners/home-banners" element={<BannersPage />} />
//         <Route
//           path="/banners/category-banners"
//           element={<CategoryBannersPage />}
//         />
//         <Route
//           path="/banners/location-banners"
//           element={<LocationBannersPage />}
//         />
//         {/* Locations Module Route */}
//         <Route path="/locations" element={<LocationsPage />} />
//         {/* Master Store Module Routes */}
//         <Route path="/master-store" element={<MasterStorePage />} />
//         {/* <Route path="/master-store" element={<MonsterStorePage />} /> */}
//         {/* <Route
//         path="/masterStore/store-assignment"
//         element={<MasterStoreAssignmentPage />}
//       /> */}
//         {/* Store Module Routes */}
//         <Route path="/stores" element={<StorePage />} />
//         <Route
//           path="stores/store-products/:storeName"
//           element={<StoreProductsPage />}
//         />
//         <Route
//           path="/stores/store-products/:storeId/category-list"
//           element={<CategoryListPage />}
//         />
//         <Route
//           path="/stores/store-products/:storeId/category/:categoryId/subcategory/:subcategoryId/products"
//           element={<ProductPage />}
//         />
//         {/* <Route
//           path="/stores/store-products/:storeId/category-list/:categoryName"
//           element={<SubCategoryListPage />}
//         />
//         <Route
//           path="/stores/store-products/:storeId/category-list/:categoryName/:subCategoryName"
//           element={<ProductsListPage />}
//         /> */}
//         {/* <Route path="/stores/store-list" element={<StoreListPage />} />
//         <Route path="/stores/store-wallet" element={<StoreWalletPage />} />
//         <Route
//           path="/stores/store-analytics"
//           element={<StoreAnalyticsPage />}
//         />
//         <Route path="/stores/store-payouts" element={<StorePayoutsPage />} /> */}
//         {/* Coupons Module Route */}
//         <Route path="/coupons/app-coupons" element={<CouponsPage />} />
//         <Route path="/coupons/store-coupons" element={<StoreCouponsPage />} />
//         <Route
//           path="/coupons/location-coupons"
//           element={<LocationCouponsPage />}
//         />
//         {/*Payments  Module Route */}
//         <Route path="/payments/payments-overview" element={<PaymentsPage />} />
//         <Route
//           path="/payments/store-payments"
//           element={<StorePaymentsPage />}
//         />
//         <Route
//           path="/payments/store-payments/:storeName"
//           element={<StorePaymentDetailsPage />}
//         />
//         <Route
//           path="/payments/franchise-payments"
//           element={<FrachisePaymentsPage />}
//         />
//         <Route
//           path="/payments/delivery-boy-payments"
//           element={<DeliveryBoyPaymentPage />}
//         />
//         {/*Users  Module Route */}
//         <Route path="/users/customers" element={<CustomersPage />} />
//         <Route
//           path="/users/franchise-owner"
//           element={<FranchiseOwnersPage />}
//         />
//         <Route path="/users/store-admins" element={<StoreAdminsPage />} />
//         <Route path="/users/delivery-boys" element={<DeliveryBoysPage />} />
//         <Route path="/users/team" element={<TeamPage />} />
//         {/*Settlements  Module Route */}
//         <Route
//           path="/settlements/store-settlements"
//           element={<StoreSettlementsPage />}
//         />
//         <Route
//           path="/settlements/db-settlements"
//           element={<DBSettlementsPage />}
//         />
//         <Route
//           path="/settlements/fo-settlements"
//           element={<FOSettlementsPage />}
//         />
//         <Route
//           path="/settlements/store-settlements/:storeName"
//           element={<StoreSettlementDetailsPage />}
//         />
//         <Route
//           path="/franchise/franchise-list"
//           element={<FranchiseListPage />}
//         />
//         {/* <Route
//           path="/franchise-locations"
//           element={<FranchiseLocationPage />}
//         /> */}
//         <Route
//           path="/franchise-locations"
//           element={<FranchiseLocationsPage />}
//         />
//         <Route path="/franchise-locations/stores" element={<StoresPage />} />
//         <Route path="/diet/nutritionists" element={<NutritionistsPage />} />
//         {/*Fitness Module Route */}
//         <Route path="/fitpass" element={<FitPassPage />} />
//         <Route path="/classes" element={<ClassesPage />} />
//         <Route path="/fitness-centres" element={<CentresPage />} />
//         <Route path="/rewards" element={<RewardsPage />} />
//         <Route path="/members" element={<MembersPage />} />
//         <Route path="/bookings" element={<ClassBookingsPage />} />
//         <Route path="/fitpass-orders" element={<FitPassOrdersPage />} />
//         <Route path="/master-config" element={<MasterConfigPage />} />

//         {/* <Route path="/master-store" element={<MasterStorePage />} /> */}
//         <Route path="/store-management" element={<StoreManagementPage />} />
//         <Route path="/franchise" element={<FranchisePage />} />
//         <Route path="/diet" element={<DietModulePage />} />
//         <Route path="/fitness" element={<FitnessModulePage />} />
//         <Route path="/recipes" element={<RecipesModulePage />} />
//         <Route path="/cms" element={<CMSPage />} />
//         <Route path="/users" element={<UsersPage />} />
//         <Route path="/payments" element={<PaymentsPage />} />
//         <Route path="/reports" element={<ReportsPage />} />
//         <Route path="/settings" element={<SettingsPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </>
//   );
// }

import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardPage from "../pages/DashboardPage";
import UsersPage from "../pages/UsersPage";
import SettingsPage from "../pages/SettingsPage";

const ScrollToTop = lazy(() => import("../components/common/ScrollToTop"));

const ShopModulePage = lazy(() => import("../pages/ShopModulePage"));
// const MasterStorePage = lazy(() => import("../pages/MasterStorePage"));
const StoreManagementPage = lazy(() => import("../pages/StoreManagementPage"));
const FranchisePage = lazy(() => import("../pages/FranchisePage"));
const DietModulePage = lazy(() => import("../pages/DietModulePage"));
const FitnessModulePage = lazy(() => import("../pages/FitnessModulePage"));
const RecipesModulePage = lazy(() => import("../pages/RecipesModulePage"));
const CMSPage = lazy(() => import("../pages/CMSPage"));
// const PaymentsPage = lazy(() => import("../pages/PaymentsPage"));
const ReportsPage = lazy(() => import("../pages/ReportsPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));

//Not Found Page
const NotFoundPage = lazy(() => import("../components/common/NotFound"));

// Shop Module Pages
const ShopProductsPage = lazy(
  () => import("../modules/shop/pages/ShopProductsPage")
);
const ShopCategoryPage = lazy(
  () => import("../modules/shop/categories/pages/CategoriesPage")
);
const ShopSubCategoriesPage = lazy(
  () => import("../modules/shop/subCategories/pages/SubCategoriesPage")
);
const ShopBrandsPage = lazy(
  () => import("../modules/shop/brands/pages/BrandsPage")
);
const ShopUOMPage = lazy(() => import("../modules/shop/uom/pages/UOMPage"));
const ShopTagsPage = lazy(() => import("../modules/shop/tags/pages/TagsPage"));
const StoreTagsPage = lazy(
  () => import("../modules/shop/storeTags/pages/StoreTagsPage")
);

// Orders Module Page
const OrdersPage = lazy(() => import("../modules/orders/pages/OrdersPage"));
const StoreOrdersPage = lazy(
  () => import("../modules/orders/pages/StoreOrdersPage")
);
const OrderDetailsPage = lazy(
  () => import("../modules/orders/pages/OrderDetailsPage")
);

// Banners Module Pages
const BannersPage = lazy(
  () => import("../modules/banners/homeBanners/pages/HomeBannersPage")
);
const CategoryBannersPage = lazy(
  () => import("../modules/banners/categoryBanners/pages/CategoryBannersPage")
);
const LocationBannersPage = lazy(
  () => import("../modules/banners/locationBanners/pages/LocationBannersPage")
);

// Locations Module Page
const LocationsPage = lazy(
  () => import("../modules/locations/pages/LocationsPage")
);

// Master Store Module Pages
// import MasterStore from "../modules/masterStore";
const MasterStorePage = lazy(
  () => import("../modules/masterStore/pages/MasterStorePage")
);
// const MonsterStorePage = lazy(
//   () => import("../modules/mosterStores/pages/MonsterStorePage")
// );
// const MasterStorePage = lazy(
//   () =>
//     import("../modules/mosterStores/masterProducts/pages/MasterProductsPage")
// );
// const MasterStoreAssignmentPage = lazy(
//   () =>
//     import("../modules/mosterStores/storeAssignment/pages/StoreAssignmentPage")
// );

// Store Module Pages
const StorePage = lazy(() => import("../modules/stores/pages/StorePage"));
const StoreProductsPage = lazy(
  () => import("../modules/stores/pages/StoreProductsPage")
);
const CategoryListPage = lazy(
  () => import("../modules/products/pages/CategoryListPage")
);
const ProductPage = lazy(() => import("../modules/products/pages/ProductPage"));
// const SubCategoryListPage = lazy(
//   () => import("../modules/products/pages/SubCategoryListPage")
// );
// const ProductsListPage = lazy(
//   () => import("../modules/products/pages/ProductsListPage")
// );
// const StoreListPage = lazy(
//   () => import("../modules/stores/storeList/pages/StoreListPage")
// );
// const StoreWalletPage = lazy(
//   () => import("../modules/stores/storeWallet/pages/StoreWalletPage")
// );
// const StoreAnalyticsPage = lazy(
//   () => import("../modules/stores/storeAnalytics/pages/StoreAnalyticsPage")
// );
// const StorePayoutsPage = lazy(
//   () => import("../modules/stores/storePayouts/pages/StorePayoutsPage")
// );

// Coupons Module Page
const CouponsPage = lazy(
  () => import("../modules/coupons/appCoupons/pages/AppCouponsPage")
);
const StoreCouponsPage = lazy(
  () => import("../modules/coupons/storeCoupons/pages/StoreCouponsPage")
);
const LocationCouponsPage = lazy(
  () => import("../modules/coupons/locationCoupons/pages/LocationCouponsPage")
);

const PaymentsPage = lazy(
  () => import("../modules/payments/payments/pages/PaymentsPage")
);
const StorePaymentsPage = lazy(
  () => import("../modules/payments/storePayments/pages/StorePaymentsPage")
);
const StorePaymentDetailsPage = lazy(
  () =>
    import("../modules/payments/storePayments/pages/StorePaymentDetailsPage")
);
const FrachisePaymentsPage = lazy(
  () => import("../modules/payments/franchise/pages/FranchisePaymentsPage")
);
const DeliveryBoyPaymentPage = lazy(
  () => import("../modules/payments/deliveryBoys/pages/DeliveryBoysPage")
);

//users Module Page
const CustomersPage = lazy(
  () => import("../modules/users/customers/pages/CustomersPage")
);
const FranchiseOwnersPage = lazy(
  () => import("../modules/users/franchiseOwners/pages/FranchiseOwnersPage")
);
const StoreAdminsPage = lazy(
  () => import("../modules/users/storeAdmins/pages/StoreAdminsPage")
);
const DeliveryBoysPage = lazy(
  () => import("../modules/users/deliveryBoys/pages/DeliveryBoysPage")
);
const TeamPage = lazy(() => import("../modules/users/team/pages/TeamPage"));

//Settlements Module Page
const StoreSettlementsPage = lazy(
  () =>
    import("../modules/settlements/storeSettlements/pages/StoreSettlementsPage")
);
const DBSettlementsPage = lazy(
  () => import("../modules/settlements/dbSettlements/pages/DBSettlementsPage")
);
const FOSettlementsPage = lazy(
  () => import("../modules/settlements/foSettlements/pages/FOSettlementsPage")
);
const StoreSettlementDetailsPage = lazy(
  () =>
    import(
      "../modules/settlements/storeSettlementDetails/pages/StoreSettlementDetailsPage"
    )
);

//Franchise Module Page
const FranchiseListPage = lazy(
  () => import("../modules/franchise/franchiseList/pages/FranchiseListPage")
);
// const FranchiseLocationPage = lazy(
//   () =>
//     import("../modules/franchise/franchiseLocation/pages/FranchiseLocationPage")
// );
const FranchiseLocationsPage = lazy(
  () =>
    import(
      "../modules/franchise/franchiseLocations/pages/FranchiseLocationsPage"
    )
);
const StoresPage = lazy(
  () => import("../modules/franchise/storesList/pages/StoresPage")
);
// import FranchiseLocationsPage from "./modules/franchise/franchise-locations/pages/FranchiseLocationsPage";
// import StoresPage from "./modules/franchise/stores/pages/StoresPage";

//Diet
// import NutritionistsPage from "./modules/diet/nutritionists/pages/NutritionistsPage";
const NutritionistsPage = lazy(
  () => import("../modules/diet/nutritionists/pages/NutritionistListPage")
);

//Fitness Module page
const FitPassPage = lazy(
  () => import("../modules/fitness/fitpass/pages/FitPassPage")
);
const ClassesPage = lazy(
  () => import("../modules/fitness/classManagement/pages/ClassesPage")
);
const CentresPage = lazy(
  () => import("../modules/fitness/centres/pages/CentresPage")
);
const RewardsPage = lazy(
  () => import("../modules/fitness/rewards/pages/RewardsPage")
);
const MembersPage = lazy(
  () => import("../modules/fitness/members/pages/MembersPage")
);
const ClassBookingsPage = lazy(
  () => import("../modules/fitness/bookings/pages/ClassBookingsPage")
);
const FitPassOrdersPage = lazy(
  () => import("../modules/fitness/fitpassOrders/pages/FitPassOrdersPage")
);
const MasterConfigPage = lazy(
  () => import("../modules/fitness/masterConfig/pages/MasterConfigPage")
);
const BookingsPage = lazy(
  () => import("../modules/fitness/centerBookings/pages/BookingsPage")
);
const CenterBookingsPage = lazy(
  () => import("../modules/fitness/centerBookings/pages/CenterBookingsPage")
);
const BookingDetailsPage = lazy(
  () => import("../modules/fitness/centerBookings/pages/BookingDetailsPage")
);
const CenterPaymentsPage = lazy(
  () => import("../modules/fitness/centerPayments/pages/CenterPaymentsPage")
);
const PaymentDetailsPage = lazy(
  () => import("../modules/fitness/centerPayments/pages/PaymentDetailsPage")
);
const CenterSettlementsPage = lazy(
  () =>
    import("../modules/fitness/centerSettlements/pages/CenterSettlementsPage")
);
const FitnessCenterSettlementsPage = lazy(
  () =>
    import(
      "../modules/fitness/centerSettlements/pages/FitnessCenterSettlementsPage"
    )
);

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        {/* Shop Module Routes */}
        <Route path="/shop" element={<ShopModulePage />} />
        <Route path="/shop/products" element={<ShopProductsPage />} />
        <Route path="/shop/categories" element={<ShopCategoryPage />} />
        <Route
          path="/shop/sub-categories"
          element={<ShopSubCategoriesPage />}
        />
        <Route path="/shop/brands" element={<ShopBrandsPage />} />
        <Route path="/shop/uom" element={<ShopUOMPage />} />
        <Route path="/shop/tags" element={<ShopTagsPage />} />
        <Route path="/shop/store-tags" element={<StoreTagsPage />} />
        {/* Orders Module Route */}
        <Route path="/orders" element={<OrdersPage />} />
        <Route
          path="/orders/store-orders/:storeId"
          element={<StoreOrdersPage />}
        />
        <Route path="/orders/orderDetails/:id" element={<OrderDetailsPage />} />
        {/* Banners Module Route */}
        <Route path="/banners/home-banners" element={<BannersPage />} />
        <Route
          path="/banners/category-banners"
          element={<CategoryBannersPage />}
        />
        <Route
          path="/banners/location-banners"
          element={<LocationBannersPage />}
        />
        {/* Locations Module Route */}
        <Route path="/locations" element={<LocationsPage />} />
        {/* Master Store Module Routes */}
        <Route path="/master-store" element={<MasterStorePage />} />
        {/* <Route path="/master-store" element={<MonsterStorePage />} /> */}
        {/* <Route
        path="/masterStore/store-assignment"
        element={<MasterStoreAssignmentPage />}
      /> */}
        {/* Store Module Routes */}
        <Route path="/stores" element={<StorePage />} />
        <Route
          path="stores/store-products/:storeName"
          element={<StoreProductsPage />}
        />
        <Route
          path="/stores/store-products/:storeId/category-list"
          element={<CategoryListPage />}
        />
        <Route
          path="/stores/store-products/:storeId/category/:categoryId/subcategory/:subcategoryId/products"
          element={<ProductPage />}
        />
        {/* <Route
          path="/stores/store-products/:storeId/category-list/:categoryName"
          element={<SubCategoryListPage />}
        />
        <Route
          path="/stores/store-products/:storeId/category-list/:categoryName/:subCategoryName"
          element={<ProductsListPage />}
        /> */}
        {/* <Route path="/stores/store-list" element={<StoreListPage />} />
        <Route path="/stores/store-wallet" element={<StoreWalletPage />} />
        <Route
          path="/stores/store-analytics"
          element={<StoreAnalyticsPage />}
        />
        <Route path="/stores/store-payouts" element={<StorePayoutsPage />} /> */}
        {/* Coupons Module Route */}
        <Route path="/coupons/app-coupons" element={<CouponsPage />} />
        <Route path="/coupons/store-coupons" element={<StoreCouponsPage />} />
        <Route
          path="/coupons/location-coupons"
          element={<LocationCouponsPage />}
        />
        {/*Payments  Module Route */}
        <Route path="/payments/payments-overview" element={<PaymentsPage />} />
        <Route
          path="/payments/store-payments"
          element={<StorePaymentsPage />}
        />
        <Route
          path="/payments/store-payments/:storeName"
          element={<StorePaymentDetailsPage />}
        />
        <Route
          path="/payments/franchise-payments"
          element={<FrachisePaymentsPage />}
        />
        <Route
          path="/payments/delivery-boy-payments"
          element={<DeliveryBoyPaymentPage />}
        />
        {/*Users  Module Route */}
        <Route path="/users/customers" element={<CustomersPage />} />
        <Route
          path="/users/franchise-owner"
          element={<FranchiseOwnersPage />}
        />
        <Route path="/users/store-admins" element={<StoreAdminsPage />} />
        <Route path="/users/delivery-boys" element={<DeliveryBoysPage />} />
        <Route path="/users/team" element={<TeamPage />} />
        {/*Settlements  Module Route */}
        <Route
          path="/settlements/store-settlements"
          element={<StoreSettlementsPage />}
        />
        <Route
          path="/settlements/db-settlements"
          element={<DBSettlementsPage />}
        />
        <Route
          path="/settlements/fo-settlements"
          element={<FOSettlementsPage />}
        />
        <Route
          path="/settlements/store-settlements/:storeName"
          element={<StoreSettlementDetailsPage />}
        />
        <Route
          path="/franchise/franchise-list"
          element={<FranchiseListPage />}
        />
        {/* <Route
          path="/franchise-locations"
          element={<FranchiseLocationPage />}
        /> */}
        <Route
          path="/franchise-locations"
          element={<FranchiseLocationsPage />}
        />
        <Route path="/franchise-locations/stores" element={<StoresPage />} />
        <Route path="/diet/nutritionists" element={<NutritionistsPage />} />
        {/*Fitness Module Route */}
        <Route path="/fitpass" element={<FitPassPage />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/fitness-centres" element={<CentresPage />} />
        <Route path="/rewards" element={<RewardsPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/class-bookings" element={<ClassBookingsPage />} />
        <Route path="/fitpass-orders" element={<FitPassOrdersPage />} />
        <Route path="/master-config" element={<MasterConfigPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/center-bookings" element={<CenterBookingsPage />} />
        <Route
          path="/booking-details/:bookingId"
          element={<BookingDetailsPage />}
        />
        <Route path="/center-payments" element={<CenterPaymentsPage />} />
        <Route
          path="/fitness-center-payments"
          element={<PaymentDetailsPage />}
        />
        <Route path="/center-settlements" element={<CenterSettlementsPage />} />
        <Route
          path="/fitness-center-settlements"
          element={<FitnessCenterSettlementsPage />}
        />

        {/* <Route path="/master-store" element={<MasterStorePage />} /> */}
        <Route path="/store-management" element={<StoreManagementPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="/diet" element={<DietModulePage />} />
        <Route path="/fitness" element={<FitnessModulePage />} />
        <Route path="/recipes" element={<RecipesModulePage />} />
        <Route path="/cms" element={<CMSPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
