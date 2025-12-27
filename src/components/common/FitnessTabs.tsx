import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FiActivity,
  FiCalendar,
  FiCreditCard,
  FiDollarSign,
} from "react-icons/fi";

interface FitnessTabsProps {
  fitnessCenterName: string;
  fitnessCenterId?: string;
  activeTab?: string;
}

const FitnessTabs: React.FC<FitnessTabsProps> = ({
  fitnessCenterName,
  fitnessCenterId,
  activeTab = "classes",
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    {
      id: "classes",
      label: "Classes",
      path: `/classes?centre=${
        fitnessCenterId || ""
      }&centreName=${encodeURIComponent(fitnessCenterName)}`,
      icon: <FiActivity className="w-5 h-5" />,
      color: "emerald",
    },
    {
      id: "bookings",
      label: "Bookings",
      path: `/center-bookings?centerId=${
        fitnessCenterId || ""
      }&centerName=${encodeURIComponent(fitnessCenterName)}`,
      icon: <FiCalendar className="w-5 h-5" />,
      color: "blue",
    },
    {
      id: "payments",
      label: "Payments",
      path: `/fitness-center-payments?centerId=${
        // Added missing leading slash
        fitnessCenterId || ""
      }&centerName=${encodeURIComponent(fitnessCenterName)}`,
      icon: <FiCreditCard className="w-5 h-5" />,
      color: "purple",
    },
    {
      id: "settlements",
      label: "Settlements",
      path: `/fitness-center-settlements?centerId=${
        fitnessCenterId || ""
      }&centerName=${encodeURIComponent(fitnessCenterName)}`,
      icon: <FiDollarSign className="w-5 h-5" />,
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

  // Updated to check query parameters for tabs that use them
  const isActiveTab = (tab: any) => {
    if (tab.id === "classes") {
      const searchParams = new URLSearchParams(location.search);
      const pathName = location.pathname;

      // Check if the pathname matches and the centreName parameter matches
      if (
        pathName.includes(`/classes`) && // Removed the trailing slash
        searchParams.get("centreName") === fitnessCenterName
      ) {
        return true;
      }
      return false;
    } else if (
      tab.id === "bookings" ||
      tab.id === "payments" ||
      tab.id === "settlements"
    ) {
      const searchParams = new URLSearchParams(location.search);
      const pathName = location.pathname;

      // Check if the pathname matches and the centerName parameter matches
      if (pathName === `/center-bookings` && tab.id === "bookings") {
        return searchParams.get("centerName") === fitnessCenterName;
      }
      if (pathName === `/fitness-center-payments` && tab.id === "payments") {
        return searchParams.get("centerName") === fitnessCenterName;
      }
      if (
        pathName === `/fitness-center-settlements` &&
        tab.id === "settlements"
      ) {
        return searchParams.get("centerName") === fitnessCenterName;
      }
      return false;
    }
    return location.pathname === tab.path;
  };

  return (
    <div className="bg-white rounded-xl shadow-md mb-6 overflow-hidden border border-gray-100">
      <div className="flex">
        {tabs.map((tab, index) => {
          const isActive = isActiveTab(tab) || tab.id === activeTab;

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

export default FitnessTabs;
