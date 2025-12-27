// src/modules/fitness/bookings/components/AddBookingModal.tsx
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { addCentre, FitnessCentre } from "../../centres/centresSlice";
import { addBooking, Booking } from "../../centerBookings/bookingsSlice";
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

interface AddBookingModalProps {
  onClose: () => void;
  centerId?: string;
  centerName?: string;
}

const AddBookingModal: React.FC<AddBookingModalProps> = ({
  onClose,
  centerId = "",
  centerName = "",
}) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<Booking>>({
    bookingNo: `BK${1000 + (Date.now() % 10000)}`,
    bookingDate: new Date().toISOString().slice(0, 10),
    bookingTime: "09:00",
    bookingAmount: 2000,
    customerName: "",
    phone: "",
    email: "",
    centerId,
    centerName,
    centerAddress: "",
    coupon: "",
    status: "Confirmed",
    paymentMode: "Online",
    centerRating: 4.0,
    trainerRating: 4.0,
    offer: "",
    trainer: "",
  });

  const [centers, setCenters] = useState<FitnessCentre[]>([]);
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
    // In a real app, you would fetch centers from the store or API
    // For now, we'll use mock data
    const mockCenters: FitnessCentre[] = [
      {
        id: "1",
        name: "FitLife Premium",
        image: "",
        address: "123, Marine Drive",
        city: "Mumbai",
        state: "Maharashtra",
        phone: "+91 9876543210",
        email: "info@fitlifepremium.com",
        facilities: [],
        operatingHours: {
          monday: "05:00-23:00",
          tuesday: "05:00-23:00",
          wednesday: "05:00-23:00",
          thursday: "05:00-23:00",
          friday: "05:00-23:00",
          saturday: "06:00-22:00",
          sunday: "06:00-22:00",
        },
        manager: "Rajesh Kumar",
        totalCapacity: 500,
        currentMembers: 387,
        established: "2018-05-15",
        status: "Active",
        rating: 4.5,
        membershipPlans: 5,
        description: "",
        website: "",
        socialMedia: {},
        created: "",
      },
      {
        id: "2",
        name: "PowerZone Gym",
        image: "",
        address: "456, Nehru Place",
        city: "Delhi",
        state: "Delhi",
        phone: "+91 9876543211",
        email: "contact@powerzonegym.com",
        facilities: [],
        operatingHours: {
          monday: "05:30-22:30",
          tuesday: "05:30-22:30",
          wednesday: "05:30-22:30",
          thursday: "05:30-22:30",
          friday: "05:30-22:30",
          saturday: "06:00-21:00",
          sunday: "06:00-21:00",
        },
        manager: "Priya Sharma",
        totalCapacity: 300,
        currentMembers: 245,
        established: "2019-03-20",
        status: "Active",
        rating: 4.2,
        membershipPlans: 3,
        description: "",
        website: "",
        socialMedia: {},
        created: "",
      },
      {
        id: "3",
        name: "Zen Wellness Hub",
        image: "",
        address: "789, Koramangala",
        city: "Bangalore",
        state: "Karnataka",
        phone: "+91 9876543212",
        email: "hello@zenwellness.com",
        facilities: [],
        operatingHours: {
          monday: "06:00-21:00",
          tuesday: "06:00-21:00",
          wednesday: "06:00-21:00",
          thursday: "06:00-21:00",
          friday: "06:00-21:00",
          saturday: "07:00-20:00",
          sunday: "07:00-20:00",
        },
        manager: "Amit Patel",
        totalCapacity: 150,
        currentMembers: 98,
        established: "2020-08-10",
        status: "Active",
        rating: 4.8,
        membershipPlans: 4,
        description: "",
        website: "",
        socialMedia: {},
        created: "",
      },
      {
        id: "4",
        name: "AquaFit Centre",
        image: "",
        address: "321, Besant Nagar",
        city: "Chennai",
        state: "Tamil Nadu",
        phone: "+91 9876543213",
        email: "info@aquafit.com",
        facilities: [],
        operatingHours: {
          monday: "05:00-22:00",
          tuesday: "05:00-22:00",
          wednesday: "05:00-22:00",
          thursday: "05:00-22:00",
          friday: "05:00-22:00",
          saturday: "06:00-21:00",
          sunday: "06:00-21:00",
        },
        manager: "Neha Gupta",
        totalCapacity: 200,
        currentMembers: 167,
        established: "2017-11-25",
        status: "Maintenance",
        rating: 4.3,
        membershipPlans: 3,
        description: "",
        website: "",
        socialMedia: {},
        created: "",
      },
      {
        id: "5",
        name: "Elite Fitness Club",
        image: "",
        address: "654, Salt Lake",
        city: "Kolkata",
        state: "West Bengal",
        phone: "+91 9876543214",
        email: "contact@elitefitness.com",
        facilities: [],
        operatingHours: {
          monday: "05:00-23:00",
          tuesday: "05:00-23:00",
          wednesday: "05:00-23:00",
          thursday: "05:00-23:00",
          friday: "05:00-23:00",
          saturday: "05:00-23:00",
          sunday: "05:00-23:00",
        },
        manager: "Vikram Singh",
        totalCapacity: 800,
        currentMembers: 623,
        established: "2016-04-05",
        status: "Active",
        rating: 4.7,
        membershipPlans: 6,
        description: "",
        website: "",
        socialMedia: {},
        created: "",
      },
    ];

    setCenters(mockCenters);

    // If centerId is provided, update the center name and address
    if (centerId) {
      const center = mockCenters.find((c) => c.id === centerId);
      if (center) {
        setFormData((prev) => ({
          ...prev,
          centerId: center.id,
          centerName: center.name,
          centerAddress: `${center.address}, ${center.city}, ${center.state}`,
        }));
      }
    }
  }, [centerId]);

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
        centerAddress: `${center.address}, ${center.city}, ${center.state}`,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newBooking: Booking = {
      id: Date.now().toString(),
      bookingNo: formData.bookingNo || `BK${1000 + (Date.now() % 10000)}`,
      bookingDate:
        formData.bookingDate || new Date().toISOString().slice(0, 10),
      bookingTime: formData.bookingTime || "09:00",
      bookingAmount: formData.bookingAmount || 2000,
      customerName: formData.customerName || "",
      phone: formData.phone || "",
      email: formData.email || "",
      centerId: formData.centerId || "",
      centerName: formData.centerName || "",
      centerAddress: formData.centerAddress || "",
      coupon: formData.coupon,
      status: (formData.status as Booking["status"]) || "Confirmed",
      paymentMode: (formData.paymentMode as Booking["paymentMode"]) || "Online",
      centerRating: formData.centerRating || 4.0,
      trainerRating: formData.trainerRating,
      offer: formData.offer,
      trainer: formData.trainer,
      created: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    dispatch(addBooking(newBooking));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add New Booking</h2>
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
                disabled={!!centerId} // Disable if centerId is provided
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:bg-gray-100"
              >
                <option value="">Select Center</option>
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
              Add Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBookingModal;
