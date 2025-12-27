// src/modules/fitness/bookings/BookingDetailsPage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { fetchBookings, Booking } from "../bookingsSlice";
import {
  FiArrowLeft,
  FiEdit2,
  FiTrash2,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiPhone,
  FiMail,
  FiCreditCard,
  FiTag,
  FiUser,
  FiStar,
  FiCheckCircle,
  FiXCircle,
  FiAlertCircle,
  FiDollarSign,
  FiActivity,
} from "react-icons/fi";
import EditBookingModal from "../components/EditBookingModal";
import DeleteBookingModal from "../components/DeleteBookingModal";

export default function BookingDetailsPage() {
  const navigate = useNavigate();
  const { bookingId } = useParams<{ bookingId: string }>();
  const dispatch = useAppDispatch();
  const { bookings, status } = useAppSelector((state) => state.centerBookings);
  const [booking, setBooking] = useState<Booking | null>(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchBookings());
    }
  }, [status, dispatch]);

  useEffect(() => {
    if (bookings.length > 0 && bookingId) {
      const foundBooking = bookings.find((b) => b.id === bookingId);
      if (foundBooking) {
        setBooking(foundBooking);
      }
    }
  }, [bookings, bookingId]);

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
  };

  const handleBack = () => {
    navigate("/bookings");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Confirmed":
        return "bg-emerald-100 text-emerald-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Completed":
        return "bg-blue-100 text-blue-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Confirmed":
        return <FiCheckCircle className="text-emerald-600" />;
      case "Pending":
        return <FiAlertCircle className="text-yellow-600" />;
      case "Cancelled":
        return <FiXCircle className="text-red-600" />;
      case "Completed":
        return <FiCheckCircle className="text-blue-600" />;
      default:
        return null;
    }
  };

  const getPaymentModeIcon = (mode: string) => {
    switch (mode) {
      case "Cash":
        return <FiCreditCard className="text-gray-600" />;
      case "Card":
        return <FiCreditCard className="text-blue-600" />;
      case "Online":
        return <FiCreditCard className="text-emerald-600" />;
      case "Wallet":
        return <FiCreditCard className="text-purple-600" />;
      default:
        return null;
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="fill-current text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FiStar key="half" className="text-yellow-400" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FiStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
              <p className="mt-4 text-gray-600">Loading booking details...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!booking) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <FiActivity className="h-8 w-8 text-gray-400" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Booking Not Found
            </h2>
            <p className="text-gray-600 mb-6">
              The booking you're looking for doesn't exist or has been removed.
            </p>
            <button
              onClick={handleBack}
              className="px-6 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200"
            >
              Back to Bookings
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center">
                <button
                  onClick={handleBack}
                  className="mr-4 p-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-200"
                >
                  <FiArrowLeft className="text-lg" />
                </button>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">
                    Booking Details
                  </h1>
                  <p className="text-emerald-100 text-lg">
                    Booking #{booking.bookingNo}
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="flex gap-3">
              <button
                onClick={handleEdit}
                className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiEdit2 className="text-lg" />
                <span>Edit</span>
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiTrash2 className="text-lg" />
                <span>Delete</span>
              </button>
            </div> */}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Booking Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Status Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Booking Status
              </h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {getStatusIcon(booking.status)}
                  <span
                    className={`ml-3 inline-flex px-3 py-1 text-sm font-semibold rounded-full ${getStatusColor(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="text-lg font-medium text-gray-900">
                    {booking.bookingNo}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Details Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Booking Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-4">
                    <FiCalendar className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Booking Date</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.bookingDate}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <FiClock className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Booking Time</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.bookingTime}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiDollarSign className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Booking Amount</p>
                      <p className="text-lg font-medium text-gray-900">
                        ₹{booking.bookingAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center mb-4">
                    <FiCreditCard className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Payment Mode</p>
                      <div className="flex items-center">
                        {getPaymentModeIcon(booking.paymentMode)}
                        <span className="ml-2 text-lg font-medium text-gray-900">
                          {booking.paymentMode}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <FiTag className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Coupon Code</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.coupon || "-"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiTag className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Offer / Plan</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.offer || "-"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center mb-4">
                    <FiUser className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Customer Name</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.customerName}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <FiMail className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Email Address</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.email}
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center">
                    <FiPhone className="text-emerald-600 mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Phone Number</p>
                      <p className="text-lg font-medium text-gray-900">
                        {booking.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Center & Trainer Information */}
          <div className="space-y-6">
            {/* Fitness Center Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Fitness Center
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Center Name</p>
                  <p className="text-lg font-medium text-gray-900">
                    {booking.centerName}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Center Address</p>
                  <p className="text-gray-900">{booking.centerAddress}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-2">Center Rating</p>
                  {renderStars(booking.centerRating)}
                </div>
              </div>
            </div>

            {/* Trainer Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Trainer Information
              </h2>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Trainer Name</p>
                  <p className="text-lg font-medium text-gray-900">
                    {booking.trainer || "Not assigned"}
                  </p>
                </div>
                {booking.trainerRating && (
                  <div>
                    <p className="text-sm text-gray-500 mb-2">Trainer Rating</p>
                    {renderStars(booking.trainerRating)}
                  </div>
                )}
              </div>
            </div>

            {/* Additional Information Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Additional Information
              </h2>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-gray-500">Created On</p>
                  <p className="text-gray-900">
                    {new Date(booking.created).toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Booking ID</p>
                  <p className="text-gray-900">#{booking.id}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modals */}
        {showEditModal && (
          <EditBookingModal
            booking={booking}
            onClose={() => setShowEditModal(false)}
          />
        )}
        {showDeleteModal && (
          <DeleteBookingModal
            booking={booking}
            onClose={() => setShowDeleteModal(false)}
          />
        )}
      </div>
    </div>
  );
}
