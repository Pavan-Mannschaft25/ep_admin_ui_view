// src/modules/fitness/bookings/components/EditBookingModal.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { editBooking, Booking } from "../../centerBookings/bookingsSlice";
import {
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
  FiCalendar,
  FiClock,
  FiCreditCard,
  FiTag,
  FiUser,
  FiStar,
} from "react-icons/fi";

interface EditBookingModalProps {
  booking: Booking;
  onClose: () => void;
}

const EditBookingModal: React.FC<EditBookingModalProps> = ({
  booking,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<Booking>>({});

  const [centers] = useState([
    { id: "1", name: "FitLife Premium", address: "123, Marine Drive, Mumbai" },
    { id: "2", name: "PowerZone Gym", address: "456, Nehru Place, Delhi" },
    {
      id: "3",
      name: "Zen Wellness Hub",
      address: "789, Koramangala, Bangalore",
    },
    { id: "4", name: "AquaFit Centre", address: "321, Besant Nagar, Chennai" },
    { id: "5", name: "Elite Fitness Club", address: "654, Salt Lake, Kolkata" },
  ]);

  const [trainers] = useState([
    "John Smith",
    "Sarah Johnson",
    "Michael Chen",
    "Emma Williams",
    "James Rodriguez",
    "Olivia Taylor",
    "David Martinez",
    "Sophia Anderson",
  ]);

  const [offers] = useState([
    "New Member Discount",
    "Summer Special",
    "Weekend Offer",
    "Corporate Package",
    "Student Discount",
    "Senior Citizen Discount",
  ]);

  const paymentModes: Booking["paymentMode"][] = [
    "Cash",
    "Card",
    "Online",
    "Wallet",
  ];

  const statuses: Booking["status"][] = [
    "Confirmed",
    "Pending",
    "Cancelled",
    "Completed",
  ];

  useEffect(() => {
    setFormData(booking);
  }, [booking]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleCenterChange = (centerId: string) => {
    const center = centers.find((c) => c.id === centerId);
    if (center) {
      setFormData((prev) => ({
        ...prev,
        centerId: center.id,
        centerName: center.name,
        centerAddress: center.address,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedBooking: Booking = {
      id: booking.id,
      bookingNo: formData.bookingNo || booking.bookingNo,
      bookingDate: formData.bookingDate || booking.bookingDate,
      bookingTime: formData.bookingTime || booking.bookingTime,
      bookingAmount:
        formData.bookingAmount !== undefined
          ? formData.bookingAmount
          : booking.bookingAmount,
      customerName: formData.customerName || booking.customerName,
      phone: formData.phone || booking.phone,
      email: formData.email || booking.email,
      centerId: formData.centerId || booking.centerId,
      centerName: formData.centerName || booking.centerName,
      centerAddress: formData.centerAddress || booking.centerAddress,
      coupon: formData.coupon,
      status: (formData.status as Booking["status"]) || booking.status,
      paymentMode:
        (formData.paymentMode as Booking["paymentMode"]) || booking.paymentMode,
      centerRating:
        formData.centerRating !== undefined
          ? formData.centerRating
          : booking.centerRating,
      trainerRating:
        formData.trainerRating !== undefined
          ? formData.trainerRating
          : booking.trainerRating,
      offer: formData.offer,
      trainer: formData.trainer,
      created: booking.created,
    };

    dispatch(editBooking(updatedBooking));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Edit Booking</h2>
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
                Booking No
              </label>
              <input
                type="text"
                name="bookingNo"
                value={formData.bookingNo}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiCalendar className="inline mr-1" />
                Booking Date
              </label>
              <input
                type="date"
                name="bookingDate"
                value={formData.bookingDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiClock className="inline mr-1" />
                Booking Time
              </label>
              <input
                type="time"
                name="bookingTime"
                value={formData.bookingTime}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Booking Amount (₹)
              </label>
              <input
                type="number"
                name="bookingAmount"
                value={formData.bookingAmount}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Customer Name
              </label>
              <input
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiPhone className="inline mr-1" />
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiMail className="inline mr-1" />
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Fitness Center
              </label>
              <select
                name="centerId"
                value={formData.centerId}
                onChange={(e) => handleCenterChange(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {centers.map((center) => (
                  <option key={center.id} value={center.id}>
                    {center.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiMapPin className="inline mr-1" />
                Center Address
              </label>
              <input
                type="text"
                name="centerAddress"
                value={formData.centerAddress}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiTag className="inline mr-1" />
                Coupon Code
              </label>
              <input
                type="text"
                name="coupon"
                value={formData.coupon}
                onChange={handleChange}
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiCreditCard className="inline mr-1" />
                Payment Mode
              </label>
              <select
                name="paymentMode"
                value={formData.paymentMode}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                {paymentModes.map((mode) => (
                  <option key={mode} value={mode}>
                    {mode}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiStar className="inline mr-1" />
                Center Rating (1-5)
              </label>
              <input
                type="number"
                name="centerRating"
                value={formData.centerRating}
                onChange={handleChange}
                required
                min="1"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiStar className="inline mr-1" />
                Trainer Rating (1-5)
              </label>
              <input
                type="number"
                name="trainerRating"
                value={formData.trainerRating}
                onChange={handleChange}
                min="1"
                max="5"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiTag className="inline mr-1" />
                Offer / Plan
              </label>
              <select
                name="offer"
                value={formData.offer}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Offer</option>
                {offers.map((offer) => (
                  <option key={offer} value={offer}>
                    {offer}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiUser className="inline mr-1" />
                Trainer
              </label>
              <select
                name="trainer"
                value={formData.trainer}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select Trainer</option>
                {trainers.map((trainer) => (
                  <option key={trainer} value={trainer}>
                    {trainer}
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
              Update Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookingModal;
