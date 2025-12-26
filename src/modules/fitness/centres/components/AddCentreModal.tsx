// src/modules/fitness/centres/components/AddCentreModal.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import {
  addCentre,
  FitnessCentre,
  OperatingHours,
  SocialMedia,
} from "../centresSlice";
import {
  FiX,
  FiMapPin,
  FiPhone,
  FiMail,
  FiGlobe,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";

interface AddCentreModalProps {
  onClose: () => void;
}

const AddCentreModal: React.FC<AddCentreModalProps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<Partial<FitnessCentre>>({
    name: "",
    address: "",
    city: "",
    state: "",
    phone: "",
    email: "",
    facilities: [],
    operatingHours: {
      monday: "06:00-22:00",
      tuesday: "06:00-22:00",
      wednesday: "06:00-22:00",
      thursday: "06:00-22:00",
      friday: "06:00-22:00",
      saturday: "07:00-21:00",
      sunday: "07:00-21:00",
    },
    manager: "",
    totalCapacity: 100,
    currentMembers: 0,
    established: new Date().toISOString().slice(0, 10),
    status: "Active",
    rating: 4.0,
    membershipPlans: 3,
    description: "",
    website: "",
    socialMedia: {},
  });

  const [facilityOptions] = useState([
    "Gym",
    "Swimming Pool",
    "Yoga Studio",
    "Sauna",
    "Steam Room",
    "Spa",
    "Cardio Area",
    "Weight Training",
    "Group Classes",
    "Personal Training",
    "Nutrition Counseling",
    "Physical Therapy",
    "Child Care",
    "Juice Bar",
    "Lockers",
  ]);

  const [cityOptions] = useState([
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Pune",
    "Hyderabad",
    "Ahmedabad",
  ]);

  const [stateOptions] = useState([
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Tamil Nadu",
    "West Bengal",
    "Maharashtra",
    "Telangana",
    "Gujarat",
  ]);

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

  const handleOperatingHoursChange = (day: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      operatingHours: {
        ...(prev.operatingHours as OperatingHours),
        [day]: value,
      },
    }));
  };

  const handleSocialMediaChange = (platform: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      socialMedia: {
        ...(prev.socialMedia as SocialMedia),
        [platform]: value,
      },
    }));
  };

  const handleFacilityToggle = (facility: string) => {
    setFormData((prev) => {
      const facilities = prev.facilities || [];
      const newFacilities = facilities.includes(facility)
        ? facilities.filter((f) => f !== facility)
        : [...facilities, facility];
      return { ...prev, facilities: newFacilities };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newCentre: FitnessCentre = {
      id: Date.now().toString(),
      name: formData.name || "",
      image: `https://picsum.photos/seed/centre${Date.now()}/100/100.jpg`,
      address: formData.address || "",
      city: formData.city || "",
      state: formData.state || "",
      phone: formData.phone || "",
      email: formData.email || "",
      facilities: formData.facilities || [],
      operatingHours: formData.operatingHours as OperatingHours,
      manager: formData.manager || "",
      totalCapacity: formData.totalCapacity || 100,
      currentMembers: formData.currentMembers || 0,
      established:
        formData.established || new Date().toISOString().slice(0, 10),
      status: (formData.status as FitnessCentre["status"]) || "Active",
      rating: formData.rating || 4.0,
      membershipPlans: formData.membershipPlans || 3,
      description: formData.description || "",
      website: formData.website || "",
      socialMedia: formData.socialMedia || {},
      created: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    dispatch(addCentre(newCentre));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Add New Fitness Centre</h2>
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
                Centre Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Manager Name
              </label>
              <input
                type="text"
                name="manager"
                value={formData.manager}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <FiMapPin className="inline mr-1" />
                Address
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select City</option>
                {cityOptions.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="">Select State</option>
                {stateOptions.map((state) => (
                  <option key={state} value={state}>
                    {state}
                  </option>
                ))}
              </select>
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
                <FiGlobe className="inline mr-1" />
                Website
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Established Date
              </label>
              <input
                type="date"
                name="established"
                value={formData.established}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Capacity
              </label>
              <input
                type="number"
                name="totalCapacity"
                value={formData.totalCapacity}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Members
              </label>
              <input
                type="number"
                name="currentMembers"
                value={formData.currentMembers}
                onChange={handleChange}
                min="0"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Membership Plans
              </label>
              <input
                type="number"
                name="membershipPlans"
                value={formData.membershipPlans}
                onChange={handleChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating (1-5)
              </label>
              <input
                type="number"
                name="rating"
                value={formData.rating}
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
                Status
              </label>
              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Facilities
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {facilityOptions.map((facility) => (
                <div key={facility} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`facility-${facility}`}
                    checked={formData.facilities?.includes(facility) || false}
                    onChange={() => handleFacilityToggle(facility)}
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor={`facility-${facility}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {facility}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Operating Hours
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {Object.entries(formData.operatingHours || {}).map(
                ([day, hours]) => (
                  <div key={day}>
                    <label className="block text-xs text-gray-600 mb-1 capitalize">
                      {day}
                    </label>
                    <input
                      type="text"
                      value={hours}
                      onChange={(e) =>
                        handleOperatingHoursChange(day, e.target.value)
                      }
                      placeholder="e.g., 06:00-22:00"
                      className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-emerald-500"
                    />
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Social Media
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="flex items-center">
                <FiFacebook className="mr-2 text-blue-600" />
                <input
                  type="text"
                  placeholder="Facebook handle"
                  value={formData.socialMedia?.facebook || ""}
                  onChange={(e) =>
                    handleSocialMediaChange("facebook", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="flex items-center">
                <FiInstagram className="mr-2 text-pink-600" />
                <input
                  type="text"
                  placeholder="Instagram handle"
                  value={formData.socialMedia?.instagram || ""}
                  onChange={(e) =>
                    handleSocialMediaChange("instagram", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="flex items-center">
                <FiTwitter className="mr-2 text-blue-400" />
                <input
                  type="text"
                  placeholder="Twitter handle"
                  value={formData.socialMedia?.twitter || ""}
                  onChange={(e) =>
                    handleSocialMediaChange("twitter", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
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
              Add Centre
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCentreModal;
