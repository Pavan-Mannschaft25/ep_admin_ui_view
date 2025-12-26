// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { FiPackage, FiShoppingCart, FiCreditCard } from "react-icons/fi";
// import { FaIndianRupeeSign } from "react-icons/fa6";

// interface POPSTabsProps {
//   storeName: string;
//   activeTab?: string;
// }

// const POPSTabs: React.FC<POPSTabsProps> = ({
//   storeName,
//   activeTab = "products",
// }) => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const tabs = [
//     {
//       id: "products",
//       label: "Products",
//       path: `/stores/store-products/${encodeURIComponent(storeName)}`,
//       icon: <FiPackage className="w-4 h-4" />,
//       color: "emerald",
//     },
//     {
//       id: "orders",
//       label: "Orders",
//       path: `/orders/store-orders/${encodeURIComponent(storeName)}`,
//       icon: <FiShoppingCart className="w-4 h-4" />,
//       color: "blue",
//     },
//     {
//       id: "payments",
//       label: "Payments",
//       path: `/payments/store-payments/${encodeURIComponent(storeName)}`,
//       icon: <FiCreditCard className="w-4 h-4" />,
//       color: "purple",
//     },
//     {
//       id: "settlements",
//       label: "Settlements",
//       path: `/settlements/store-settlements/${encodeURIComponent(storeName)}`,
//       icon: <FaIndianRupeeSign className="w-4 h-4" />,
//       color: "amber",
//     },
//   ];

//   const handleTabClick = (path: string) => {
//     navigate(path);
//   };

//   const getColorClasses = (color: string, isActive: boolean) => {
//     const colorMap: Record<string, { active: string; inactive: string }> = {
//       emerald: {
//         active: "text-emerald-600",
//         inactive: "text-gray-500 hover:text-emerald-500",
//       },
//       blue: {
//         active: "text-blue-600",
//         inactive: "text-gray-500 hover:text-blue-500",
//       },
//       purple: {
//         active: "text-purple-600",
//         inactive: "text-gray-500 hover:text-purple-500",
//       },
//       amber: {
//         active: "text-amber-600",
//         inactive: "text-gray-500 hover:text-amber-500",
//       },
//     };

//     return isActive ? colorMap[color].active : colorMap[color].inactive;
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm mb-4 overflow-hidden">
//       <div className="flex">
//         {tabs.map((tab) => {
//           const isActive =
//             location.pathname === tab.path ||
//             (tab.id === activeTab &&
//               !tabs.some((t) => location.pathname === t.path));

//           return (
//             <button
//               key={tab.id}
//               onClick={() => handleTabClick(tab.path)}
//               className={`flex-1 flex items-center justify-center py-3 px-1 transition-all duration-200 ${
//                 isActive ? "border-b-2 border-current" : ""
//               }`}
//             >
//               <div className="flex flex-col items-center">
//                 <div className={`mb-1 ${getColorClasses(tab.color, isActive)}`}>
//                   {tab.icon}
//                 </div>
//                 <span
//                   className={`text-xs font-medium ${getColorClasses(
//                     tab.color,
//                     isActive
//                   )}`}
//                 >
//                   {tab.label}
//                 </span>
//               </div>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default POPSTabs;

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPackage, FiShoppingCart, FiCreditCard } from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

interface POPSTabsProps {
  storeName: string;
  activeTab?: string;
}

const POPSTabs: React.FC<POPSTabsProps> = ({
  storeName,
  activeTab = "products",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      id: "products",
      label: "Products",
      path: `/stores/store-products/${encodeURIComponent(storeName)}`,
      icon: <FiPackage className="w-5 h-5" />,
      color: "emerald",
    },
    {
      id: "orders",
      label: "Orders",
      path: `/orders/store-orders/${encodeURIComponent(storeName)}`,
      icon: <FiShoppingCart className="w-5 h-5" />,
      color: "blue",
    },
    {
      id: "payments",
      label: "Payments",
      path: `/payments/store-payments/${encodeURIComponent(storeName)}`,
      icon: <FiCreditCard className="w-5 h-5" />,
      color: "purple",
    },
    {
      id: "settlements",
      label: "Settlements",
      path: `/settlements/store-settlements/${encodeURIComponent(storeName)}`,
      icon: <FaIndianRupeeSign className="w-5 h-5" />,
      color: "amber",
    },
  ];

  const handleTabClick = (path: string) => {
    navigate(path);
  };

  const getColorClasses = (color: string, isActive: boolean) => {
    const colorMap: Record<string, { active: string; inactive: string }> = {
      emerald: {
        active: "text-emerald-600",
        inactive: "text-gray-500 hover:text-emerald-500",
      },
      blue: {
        active: "text-blue-600",
        inactive: "text-gray-500 hover:text-blue-500",
      },
      purple: {
        active: "text-purple-600",
        inactive: "text-gray-500 hover:text-purple-500",
      },
      amber: {
        active: "text-amber-600",
        inactive: "text-gray-500 hover:text-amber-500",
      },
    };

    return isActive ? colorMap[color].active : colorMap[color].inactive;
  };

  const getBgColorClasses = (color: string, isActive: boolean) => {
    const colorMap: Record<string, { active: string; inactive: string }> = {
      emerald: {
        active: "bg-emerald-50",
        inactive: "hover:bg-emerald-50/50",
      },
      blue: {
        active: "bg-blue-50",
        inactive: "hover:bg-blue-50/50",
      },
      purple: {
        active: "bg-purple-50",
        inactive: "hover:bg-purple-50/50",
      },
      amber: {
        active: "bg-amber-50",
        inactive: "hover:bg-amber-50/50",
      },
    };

    return isActive ? colorMap[color].active : colorMap[color].inactive;
  };

  const getBorderColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      emerald: "border-emerald-200",
      blue: "border-blue-200",
      purple: "border-purple-200",
      amber: "border-amber-200",
    };

    return colorMap[color];
  };

  return (
    <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden border border-gray-100">
      <div className="flex">
        {tabs.map((tab, index) => {
          const isActive =
            location.pathname === tab.path ||
            (tab.id === activeTab &&
              !tabs.some((t) => location.pathname === t.path));

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.path)}
              className={`flex-1 flex items-center justify-center py-4 px-2 transition-all duration-300 relative ${
                isActive
                  ? `${getBgColorClasses(tab.color, true)}`
                  : "hover:bg-gray-50"
              } ${
                index < tabs.length - 1
                  ? `border-r ${getBorderColorClasses(tab.color)}`
                  : ""
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`mb-2 transition-transform duration-200 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                >
                  {React.cloneElement(tab.icon, {
                    className: `w-5 h-5 ${getColorClasses(
                      tab.color,
                      isActive
                    )}`,
                  })}
                </div>
                <span
                  className={`text-sm font-medium transition-all duration-200 ${
                    isActive ? "font-semibold" : "font-normal"
                  } ${getColorClasses(tab.color, isActive)}`}
                >
                  {tab.label}
                </span>
              </div>
              {isActive && (
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-${tab.color}-400 to-${tab.color}-500 rounded-t-full`}
                ></div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default POPSTabs;
