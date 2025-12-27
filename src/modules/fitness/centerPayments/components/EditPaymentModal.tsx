// src/modules/fitness/payments/components/EditPaymentModal.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { editPayment, Payment } from "../centerPaymentsSlice";
import { FiX, FiCalendar, FiDollarSign, FiActivity } from "react-icons/fi";

interface EditPaymentModalProps {
  payment: Payment;
  onClose: () => void;
}

const EditPaymentModal: React.FC<EditPaymentModalProps> = ({
  payment,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<Payment>>({});

  const fitnessCenters = [
    "FitLife Premium",
    "PowerZone Gym",
    "Zen Wellness Hub",
    "AquaFit Centre",
    "Elite Fitness Club",
  ];

  const statuses: Payment["status"][] = [
    "Completed",
    "Pending",
    "Failed",
    "Refunded",
  ];

  useEffect(() => {
    setFormData(payment);
  }, [payment]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedPayment: Payment = {
      id: payment.id,
      date: formData.date || payment.date,
      fitnessCenterName:
        formData.fitnessCenterName || payment.fitnessCenterName,
      totalBookings:
        formData.totalBookings !== undefined
          ? formData.totalBookings
          : payment.totalBookings,
      centerAmount:
        formData.centerAmount !== undefined
          ? formData.centerAmount
          : payment.centerAmount,
      taxAmount:
        formData.taxAmount !== undefined
          ? formData.taxAmount
          : payment.taxAmount,
      totalAmount:
        formData.totalAmount !== undefined
          ? formData.totalAmount
          : payment.totalAmount,
      transactionDate: formData.transactionDate || payment.transactionDate,
      transactionId: formData.transactionId || payment.transactionId,
      status: (formData.status as Payment["status"]) || payment.status,
      bookingDetails: payment.bookingDetails,
    };

    dispatch(editPayment(updatedPayment));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Edit Payment</h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-100 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiCalendar className="inline mr-1" />
                Payment Date
              </label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiActivity className="inline mr-1" />
                Fitness Center
              </label>
              <select
                name="fitnessCenterName"
                value={formData.fitnessCenterName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {fitnessCenters.map((center) => (
                  <option key={center} value={center}>
                    {center}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Bookings
              </label>
              <input
                type="number"
                name="totalBookings"
                value={formData.totalBookings}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiDollarSign className="inline mr-1" />
                Center Amount
              </label>
              <input
                type="number"
                name="centerAmount"
                value={formData.centerAmount}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiDollarSign className="inline mr-1" />
                Tax Amount
              </label>
              <input
                type="number"
                name="taxAmount"
                value={formData.taxAmount}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiDollarSign className="inline mr-1" />
                Total Amount
              </label>
              <input
                type="number"
                name="totalAmount"
                value={formData.totalAmount}
                onChange={handleChange}
                required
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transaction Date
              </label>
              <input
                type="datetime-local"
                name="transactionDate"
                value={formData.transactionDate?.slice(0, 16)}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Transaction ID
              </label>
              <input
                type="text"
                name="transactionId"
                value={formData.transactionId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg hover:from-emerald-700 hover:to-teal-800 transition-all duration-200 shadow-md"
            >
              Update Payment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditPaymentModal;
