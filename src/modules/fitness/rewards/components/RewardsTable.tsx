// src/modules/rewards/components/RewardsTable.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { fetchRewards, Reward, toggleRewardStatus } from "../rewardsSlice";
import { showConfirmationModal } from "../../../../store/slices/uiSlice";
import {
  FiPlus,
  FiSearch,
  FiRefreshCw,
  FiEdit2,
  FiTrash2,
  FiFilter,
  FiCalendar,
  FiClock,
  FiTag,
  FiCheckCircle,
  FiXCircle,
  FiDownload,
  FiUpload,
  FiTrendingUp,
  FiActivity,
  FiGift,
  FiStar,
  FiEye,
  FiExternalLink,
} from "react-icons/fi";
import Pagination from "../../../../components/common/Pagination";

export const rewardsTableHeaders = [
  "Reward Name",
  "Category",
  "Points Required",
  "Partner",
  "Availability",
  "Expiry Date",
  "Actions",
];

interface RewardsTableProps {
  centreId?: string;
  centreName?: string;
  search?: string;
  categoryFilter?: string;
  partnerFilter?: string;
  availabilityFilter?: string;
  expiryFilter?: string;
  onEdit?: (reward: Reward) => void;
  onDelete?: (reward: Reward) => void;
}

const RewardsTable: React.FC<RewardsTableProps> = ({
  centreId,
  centreName,
  search = "",
  categoryFilter = "all",
  partnerFilter = "all",
  availabilityFilter = "all",
  expiryFilter = "all",
  onEdit,
  onDelete,
}) => {
  const dispatch = useAppDispatch();
  const { rewards, status } = useAppSelector((state) => state.rewards);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchRewards());
  }, [status, dispatch]);

  // Get unique values for filters
  const categories = [...new Set(rewards.map((r) => r.category))];
  const partners = [...new Set(rewards.map((r) => r.partner))];

  // Filter rewards based on search and filters
  const filteredRewards = rewards.filter((reward) => {
    const matchesSearch =
      reward.name.toLowerCase().includes(search.toLowerCase()) ||
      reward.partner.toLowerCase().includes(search.toLowerCase()) ||
      reward.id.toString().includes(search);

    const matchesCategory =
      categoryFilter === "all" || reward.category === categoryFilter;
    const matchesPartner =
      partnerFilter === "all" || reward.partner === partnerFilter;
    const matchesAvailability =
      availabilityFilter === "all" ||
      (availabilityFilter === "available" && reward.available) ||
      (availabilityFilter === "unavailable" && !reward.available);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiryDate = new Date(reward.expiryDate);
    expiryDate.setHours(0, 0, 0, 0);

    const matchesExpiry =
      expiryFilter === "all" ||
      (expiryFilter === "expired" && expiryDate < today) ||
      (expiryFilter === "expiring-soon" &&
        expiryDate >= today &&
        expiryDate <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) ||
      (expiryFilter === "valid" && expiryDate > today);

    return (
      matchesSearch &&
      matchesCategory &&
      matchesPartner &&
      matchesAvailability &&
      matchesExpiry
    );
  });

  // Calculate pagination values
  const totalItems = filteredRewards.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRewards = filteredRewards.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Reset to first page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, categoryFilter, partnerFilter, availabilityFilter, expiryFilter]);

  const handleRefresh = () => {
    dispatch(fetchRewards());
  };

  const handleView = (reward: Reward) => {
    // Open a modal or navigate to a detailed view
    console.log("View reward:", reward);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleToggleStatus = (reward: Reward) => {
    const newStatus = reward.available ? "deactivate" : "activate";

    dispatch(
      showConfirmationModal({
        title: "Confirm Status Change",
        message: `Are you sure you want to ${newStatus} reward "${reward.name}"?`,
        confirmButtonText: `Yes, ${newStatus}`,
        onConfirm: () => {
          dispatch(toggleRewardStatus(reward.id));
        },
      })
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Fitness Equipment": "bg-blue-100 text-blue-800",
      Nutrition: "bg-green-100 text-green-800",
      Apparel: "bg-purple-100 text-purple-800",
      Wellness: "bg-yellow-100 text-yellow-800",
      Services: "bg-indigo-100 text-indigo-800",
      Digital: "bg-pink-100 text-pink-800",
      Travel: "bg-teal-100 text-teal-800",
      Entertainment: "bg-red-100 text-red-800",
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  const getAvailabilityColor = (available: boolean) => {
    return available
      ? "bg-emerald-100 text-emerald-800"
      : "bg-red-100 text-red-800";
  };

  const getExpiryStatus = (expiryDate: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const expiry = new Date(expiryDate);
    expiry.setHours(0, 0, 0, 0);

    if (expiry < today) {
      return { text: "Expired", color: "bg-red-100 text-red-800" };
    } else if (expiry <= new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)) {
      return { text: "Expiring Soon", color: "bg-orange-100 text-orange-800" };
    } else {
      return { text: "Valid", color: "bg-emerald-100 text-emerald-800" };
    }
  };

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800">
          Rewards ({filteredRewards.length})
        </h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
            <FiDownload className="text-sm" />
            Export
          </button>
          <button className="px-3 py-1 bg-emerald-600 text-white text-sm rounded hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-1">
            <FiUpload className="text-sm" />
            Import
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {rewardsTableHeaders.map((header, index) => (
                <th
                  key={index}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentRewards.length === 0 ? (
              <tr>
                <td
                  colSpan={rewardsTableHeaders.length}
                  className="px-6 py-16 text-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-100 p-4 rounded-full mb-4">
                      <FiGift className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                      {filteredRewards.length === 0
                        ? "No rewards found"
                        : "No rewards on this page"}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                      {search
                        ? "Try adjusting your search to find what you're looking for"
                        : filteredRewards.length === 0
                        ? "Get started by adding a new reward"
                        : "Try a different page"}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              currentRewards.map((reward) => {
                const expiryStatus = getExpiryStatus(reward.expiryDate);
                return (
                  <tr
                    key={reward.id}
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={reward.image}
                            alt={reward.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {reward.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {reward.id}
                          </div>
                          <div className="flex items-center mt-1">
                            {reward.featured && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                                <FiStar className="mr-1 h-3 w-3" />
                                Featured
                              </span>
                            )}
                            {reward.popular && (
                              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-100 text-emerald-800">
                                <FiTrendingUp className="mr-1 h-3 w-3" />
                                Popular
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getCategoryColor(
                          reward.category
                        )}`}
                      >
                        {reward.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">
                        {reward.pointsRequired} points
                      </div>
                      {reward.originalPrice && (
                        <div className="text-sm text-gray-500 line-through">
                          ${reward.originalPrice}
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {reward.partner}
                      </div>
                      <div className="text-sm text-gray-500">
                        {reward.partnerType}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getAvailabilityColor(
                          reward.available
                        )}`}
                      >
                        {reward.available ? "Available" : "Unavailable"}
                      </span>
                      <div className="text-sm text-gray-500 mt-1">
                        {reward.stockCount} in stock
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {formatDate(reward.expiryDate)}
                      </div>
                      <span
                        className={`inline-flex px-2 py-0.5 text-xs font-medium rounded-full ${expiryStatus.color}`}
                      >
                        {expiryStatus.text}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      {/* <button
                        onClick={() => handleView(reward)}
                        className="text-emerald-600 hover:text-emerald-900 mr-2 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                        title="View Details"
                      >
                        <FiEye className="text-lg" />
                      </button> */}
                      <button
                        onClick={() => onEdit && onEdit(reward)}
                        className="text-emerald-600 hover:text-emerald-900 mr-2 transition-colors duration-150 p-1 rounded-full hover:bg-emerald-50"
                        title="Edit"
                      >
                        <FiEdit2 className="text-lg" />
                      </button>
                      <button
                        onClick={() => handleToggleStatus(reward)}
                        className="text-blue-600 hover:text-blue-900 mr-2 transition-colors duration-150 p-1 rounded-full hover:bg-blue-50"
                        title={reward.available ? "Deactivate" : "Activate"}
                      >
                        {reward.available ? (
                          <FiXCircle className="text-lg" />
                        ) : (
                          <FiCheckCircle className="text-lg" />
                        )}
                      </button>
                      <button
                        onClick={() => onDelete && onDelete(reward)}
                        className="text-red-600 hover:text-red-900 transition-colors duration-150 p-1 rounded-full hover:bg-red-50"
                        title="Delete"
                      >
                        <FiTrash2 className="text-lg" />
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            totalItems={totalItems}
            perPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default RewardsTable;
