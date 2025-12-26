// src/modules/fitness/classBookings/components/FitnessCenterSummaryModal.tsx
import React, { useMemo } from "react";
import { ClassBookingOrder } from "../classBookingsSlice";
import {
  FiX,
  FiActivity,
  FiDollarSign,
  FiTrendingUp,
  FiUsers,
  FiXCircle,
} from "react-icons/fi";
import { FaIndianRupeeSign } from "react-icons/fa6";

interface FitnessCenterSummaryModalProps {
  orders: ClassBookingOrder[];
  onClose: () => void;
}

const FitnessCenterSummaryModal: React.FC<FitnessCenterSummaryModalProps> = ({
  orders,
  onClose,
}) => {
  // Calculate summary data for each fitness center
  const fitnessCenterSummary = useMemo(() => {
    const centersMap = new Map();

    orders.forEach((order) => {
      const centerName = order.fitnessCenterName;

      if (!centersMap.has(centerName)) {
        centersMap.set(centerName, {
          name: centerName,
          totalClassesConducted: 0,
          totalBookings: 0,
          totalCreditsConsumed: 0,
          totalTrainerPayout: 0,
          totalPlatformMargin: 0,
          cancelledClasses: 0,
        });
      }

      const center = centersMap.get(centerName);
      center.totalClassesConducted += 1;
      center.totalBookings += order.bookingsCount;
      center.totalCreditsConsumed += order.totalCreditsConsumed;
      center.totalTrainerPayout += order.trainerTotalPayout;
      center.totalPlatformMargin += order.platformMargin;

      if (order.orderStatus === "Cancelled") {
        center.cancelledClasses += 1;
      }
    });

    // Convert to array and calculate cancellation rate
    return Array.from(centersMap.values())
      .map((center) => ({
        ...center,
        cancellationRate:
          center.totalClassesConducted > 0
            ? (center.cancelledClasses / center.totalClassesConducted) * 100
            : 0,
      }))
      .sort((a, b) => b.totalBookings - a.totalBookings); // Sort by total bookings
  }, [orders]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Fitness Center Summary</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Fitness Center Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Classes Conducted
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Credits Consumed
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Trainer Payout
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Platform Margin
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Cancellation Rate
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fitnessCenterSummary.map((center, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {center.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiActivity className="text-emerald-500 mr-2" />
                        <span className="text-sm text-gray-900">
                          {center.totalClassesConducted}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiUsers className="text-blue-500 mr-2" />
                        <span className="text-sm text-gray-900">
                          {center.totalBookings}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {center.totalCreditsConsumed}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FaIndianRupeeSign className="text-emerald-500 mr-1" />
                        <span className="text-sm text-gray-900">
                          {center.totalTrainerPayout.toFixed(2)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <FiDollarSign className="text-blue-500 mr-1" />
                        <span className="text-sm text-gray-900">
                          {center.totalPlatformMargin.toFixed(2)}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {center.cancellationRate > 20 ? (
                          <FiXCircle className="text-red-500 mr-2" />
                        ) : (
                          <FiTrendingUp className="text-emerald-500 mr-2" />
                        )}
                        <span
                          className={`text-sm font-medium ${
                            center.cancellationRate > 20
                              ? "text-red-600"
                              : "text-gray-900"
                          }`}
                        >
                          {center.cancellationRate.toFixed(1)}%
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Summary Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-full">
                  <FiActivity className="h-5 w-5 text-blue-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Total Centers</p>
                  <p className="text-lg font-medium text-gray-900">
                    {fitnessCenterSummary.length}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-emerald-100 p-2 rounded-full">
                  <FiDollarSign className="h-5 w-5 text-emerald-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">Total Platform Margin</p>
                  <p className="text-lg font-medium text-gray-900">
                    ₹
                    {fitnessCenterSummary
                      .reduce(
                        (sum, center) => sum + center.totalPlatformMargin,
                        0
                      )
                      .toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-amber-100 p-2 rounded-full">
                  <FiTrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <div className="ml-3">
                  <p className="text-sm text-gray-500">
                    Average Cancellation Rate
                  </p>
                  <p className="text-lg font-medium text-gray-900">
                    {(
                      fitnessCenterSummary.reduce(
                        (sum, center) => sum + center.cancellationRate,
                        0
                      ) / fitnessCenterSummary.length
                    ).toFixed(1)}
                    %
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessCenterSummaryModal;
