// src/modules/fitness/rewards/RewardsPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchRewardsData,
  redeemReward,
  claimWeeklyReward,
  Reward,
  MemberRewardProgress,
} from "../rewardsSlice";
import { showConfirmationModal } from "../../../../store/slices/uiSlice";
import {
  FiGift,
  FiSearch,
  FiRefreshCw,
  FiTrendingUp,
  FiAward,
  FiShoppingBag,
  FiCheckCircle,
  FiXCircle,
  FiCalendar,
  FiUser,
  FiPercent,
  FiDollarSign,
  FiClock,
  FiFilter,
} from "react-icons/fi";
import RedeemRewardModal from "../components/RedeemRewardModal";
import Pagination from "../../../../components/common/Pagination";

export default function RewardsPage() {
  const dispatch = useAppDispatch();
  const { rewards, memberProgress, status } = useAppSelector(
    (state) => state.rewards
  );
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");
  const [selectedMember, setSelectedMember] =
    useState<MemberRewardProgress | null>(null);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null);
  const [activeTab, setActiveTab] = useState<"members" | "rewards">("members");

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  useEffect(() => {
    if (status === "idle") dispatch(fetchRewardsData());
  }, [status, dispatch]);

  // Filter rewards based on search and category
  const filteredRewards = rewards.filter((reward) => {
    const matchesSearch =
      reward.name.toLowerCase().includes(search.toLowerCase()) ||
      reward.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      categoryFilter === "all" || reward.category === categoryFilter;

    return matchesSearch && matchesCategory && reward.available;
  });

  // Filter members based on search
  const filteredMembers = memberProgress.filter((member) => {
    const matchesSearch =
      member.memberName.toLowerCase().includes(search.toLowerCase()) ||
      member.memberId.toString().includes(search);

    return matchesSearch;
  });

  // Calculate pagination values
  const totalItems =
    activeTab === "members" ? filteredMembers.length : filteredRewards.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    activeTab === "members"
      ? filteredMembers.slice(indexOfFirstItem, indexOfLastItem)
      : filteredRewards.slice(indexOfFirstItem, indexOfLastItem);

  // Reset to first page when search or filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, categoryFilter, activeTab]);

  const handleRefresh = () => {
    dispatch(fetchRewardsData());
  };

  const handleRedeemReward = (member: MemberRewardProgress, reward: Reward) => {
    setSelectedMember(member);
    setSelectedReward(reward);
    setShowRedeemModal(true);
  };

  const handleClaimWeeklyReward = (member: MemberRewardProgress) => {
    if (member.weeklyProgress >= 100 && member.availableRewards > 0) {
      dispatch(
        showConfirmationModal({
          title: "Claim Weekly Reward",
          message: `Are you sure you want to claim the weekly reward for ${member.memberName}?`,
          confirmButtonText: "Claim Reward",
          onConfirm: () => {
            dispatch(claimWeeklyReward(member.memberId));
          },
        })
      );
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return "bg-emerald-500";
    if (progress >= 75) return "bg-blue-500";
    if (progress >= 50) return "bg-yellow-500";
    return "bg-gray-300";
  };

  const getRewardCategoryColor = (category: string) => {
    switch (category) {
      case "Food":
        return "bg-green-100 text-green-800";
      case "Merchandise":
        return "bg-purple-100 text-purple-800";
      case "Service":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-orange-600 to-red-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
                Rewards Management
              </h1>
              <p className="text-orange-100 text-lg">
                Track member achievements and manage rewards
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleRefresh}
                className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-lg hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                title="Refresh"
              >
                <FiRefreshCw className="text-lg" />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Members
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {memberProgress.length}
                </p>
              </div>
              <div className="bg-orange-100 p-3 rounded-full">
                <FiUser className="text-orange-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Goals Achieved
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {memberProgress.reduce((sum, m) => sum + m.goalsAchieved, 0)}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiAward className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Available Rewards
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {memberProgress.reduce(
                    (sum, m) => sum + m.availableRewards,
                    0
                  )}
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <FiGift className="text-blue-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-purple-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Redeemed Rewards
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {memberProgress.reduce(
                    (sum, m) => sum + m.redeemedRewards,
                    0
                  )}
                </p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <FiShoppingBag className="text-purple-600 text-xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-xl shadow-lg p-1 mb-8 inline-flex">
          <button
            onClick={() => setActiveTab("members")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "members"
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Members Progress
          </button>
          <button
            onClick={() => setActiveTab("rewards")}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
              activeTab === "rewards"
                ? "bg-orange-600 text-white"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            Rewards Catalog
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder={
                    activeTab === "members"
                      ? "Search by member name or ID..."
                      : "Search rewards..."
                  }
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            {activeTab === "rewards" && (
              <div className="flex gap-3">
                <div className="relative">
                  <select
                    className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    <option value="Food">Food</option>
                    <option value="Merchandise">Merchandise</option>
                    <option value="Service">Service</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <FiFilter className="h-4 w-4" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content based on active tab */}
        {status === "loading" ? (
          <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
              <p className="mt-4 text-gray-600">Loading rewards data...</p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {activeTab === "members"
                  ? "Members Progress"
                  : "Rewards Catalog"}{" "}
                ({totalItems})
              </h2>
            </div>

            {activeTab === "members" ? (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Member
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Weekly Progress
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Goals Achieved
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Available Rewards
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Goal Achieved
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {currentItems.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-6 py-16 text-center">
                          <div className="flex flex-col items-center">
                            <div className="bg-gray-100 p-4 rounded-full mb-4">
                              <FiUser className="h-12 w-12 text-gray-400" />
                            </div>
                            <h3 className="mt-2 text-lg font-medium text-gray-900">
                              No members found
                            </h3>
                            <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                              Try adjusting your search to find what you're
                              looking for
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      currentItems.map((member) => (
                        <tr
                          key={member.memberId}
                          className="hover:bg-gray-50 transition-colors duration-150"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10">
                                <img
                                  className="h-10 w-10 rounded-full object-cover"
                                  src={member.memberImage}
                                  alt={member.memberName}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {member.memberName}
                                </div>
                                <div className="text-sm text-gray-500">
                                  ID: {member.memberId}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="w-full">
                              <div className="flex justify-between text-sm text-gray-900 mb-1">
                                <span>
                                  {member.currentWeekCalories} /{" "}
                                  {member.weeklyTarget} kcal
                                </span>
                                <span className="font-medium">
                                  {member.weeklyProgress}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                  className={`h-2 rounded-full ${getProgressColor(
                                    member.weeklyProgress
                                  )}`}
                                  style={{ width: `${member.weeklyProgress}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {member.weeklyProgress >= 100
                                  ? "Goal achieved! Reward unlocked."
                                  : `${
                                      member.weeklyTarget -
                                      member.currentWeekCalories
                                    } kcal more to unlock rewards`}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-medium">
                              {member.goalsAchieved}
                            </div>
                            <div className="text-xs text-gray-500">
                              total goals achieved
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900 font-medium">
                              {member.availableRewards}
                            </div>
                            <div className="text-xs text-gray-500">
                              available rewards
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">
                              {member.lastGoalAchieved}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => handleClaimWeeklyReward(member)}
                              disabled={
                                member.weeklyProgress < 100 ||
                                member.availableRewards <= 0
                              }
                              className="px-3 py-1 bg-orange-600 text-white text-sm rounded hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mr-2"
                              title="Claim Weekly Reward"
                            >
                              Claim Reward
                            </button>
                            <button
                              onClick={() => {
                                setSelectedMember(member);
                                setActiveTab("rewards");
                              }}
                              className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                              title="View Rewards"
                            >
                              View Rewards
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
                {currentItems.length === 0 ? (
                  <div className="col-span-full flex flex-col items-center py-16">
                    <div className="bg-gray-100 p-4 rounded-full mb-4">
                      <FiGift className="h-12 w-12 text-gray-400" />
                    </div>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">
                      No rewards found
                    </h3>
                    <p className="mt-1 text-sm text-gray-500 max-w-md mx-auto">
                      Try adjusting your search to find what you're looking for
                    </p>
                  </div>
                ) : (
                  currentItems.map((reward) => (
                    <div
                      key={reward.id}
                      className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-200"
                    >
                      <div className="h-40 overflow-hidden">
                        <img
                          src={reward.image}
                          alt={reward.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-lg font-medium text-gray-900">
                            {reward.name}
                          </h3>
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getRewardCategoryColor(
                              reward.category
                            )}`}
                          >
                            {reward.category}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {reward.description}
                        </p>
                        <div className="flex justify-between items-center mb-3">
                          <div className="flex items-center">
                            <FiTrendingUp className="text-orange-500 mr-1" />
                            <span className="text-sm font-medium text-gray-900">
                              {reward.pointsRequired} kcal
                            </span>
                          </div>
                          <div className="flex items-center">
                            <FiDollarSign className="text-green-500 mr-1" />
                            <span className="text-sm font-medium text-gray-900">
                              ₹{reward.value}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center text-xs text-gray-500 mb-3">
                          <FiClock className="mr-1" />
                          <span>Valid until: {reward.validUntil}</span>
                        </div>
                        <button
                          onClick={() =>
                            selectedMember &&
                            handleRedeemReward(selectedMember, reward)
                          }
                          disabled={
                            !selectedMember ||
                            selectedMember.availableRewards <= 0
                          }
                          className="w-full px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                          Redeem Reward
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        )}

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

      {/* Redeem Reward Modal */}
      {showRedeemModal && selectedMember && selectedReward && (
        <RedeemRewardModal
          member={selectedMember}
          reward={selectedReward}
          onClose={() => {
            setShowRedeemModal(false);
            setSelectedMember(null);
            setSelectedReward(null);
          }}
        />
      )}
    </div>
  );
}
