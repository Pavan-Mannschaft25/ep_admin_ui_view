// src/modules/franchise/franchise-locations/pages/FranchiseLocationsPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { fetchLocationsByPartner, Location } from "../franchiseLocationsSlice";
import {
  FiArrowLeft,
  FiMapPin,
  FiSearch,
  FiPlus,
  FiEdit2,
  FiTrash2,
} from "react-icons/fi";
import { useNavigate, useSearchParams } from "react-router-dom";
import AddLocationModal from "../components/AddLocationModal";
import EditLocationModal from "../components/EditLocationModal";
import DeleteLocationModal from "../components/DeleteLocationModal";

export default function FranchiseLocationsPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const manager = searchParams.get("manager") || "";

  const { locations, status } = useAppSelector(
    (state) => state.franchiseLocations
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  useEffect(() => {
    if (manager) {
      dispatch(fetchLocationsByPartner(manager));
    }
  }, [dispatch, manager]);

  // Filter locations based on search term
  const filteredLocations = locations.filter(
    (location) =>
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.areaName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationClick = (location: Location) => {
    navigate(
      `/franchise-locations/stores?locationId=${
        location.id
      }&city=${encodeURIComponent(location.city)}&area=${encodeURIComponent(
        location.areaName
      )}&manager=${encodeURIComponent(manager)}`
    );
  };

  const handleBack = () => {
    navigate("/franchise/franchise-list");
  };

  const handleEdit = (location: Location) => {
    setSelectedLocation(location);
    setShowEditModal(true);
  };

  const handleDelete = (location: Location) => {
    setSelectedLocation(location);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <button
                onClick={handleBack}
                className="mr-4 p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-200"
                aria-label="Go back"
              >
                <FiArrowLeft className="text-lg" />
              </button>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold flex items-center">
                  {/* <FiMapPin className="mr-3" /> */}
                  Locations for {manager}
                </h1>
                <p className="text-emerald-100 text-lg">
                  Manage locations and stores for this partner
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
            >
              <FiPlus className="text-lg" />
              <span>Add Location</span>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by City or Area Name"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Locations Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
            <h2 className="text-lg font-semibold text-gray-800">
              Locations ({filteredLocations.length})
            </h2>
          </div>

          {status === "loading" ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
            </div>
          ) : filteredLocations.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <FiMapPin className="h-12 w-12 text-gray-400" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No locations found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or check back later
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      S.No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      City
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Area Name
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLocations.map((location) => (
                    <tr
                      key={location.id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {location.sno}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {location.city}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleLocationClick(location)}
                          className="text-emerald-600 hover:text-emerald-800 font-medium hover:underline"
                        >
                          {location.areaName}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          <button
                            onClick={() => handleLocationClick(location)}
                            className="text-emerald-600 hover:text-emerald-900 border border-emerald-600 hover:border-emerald-900 px-3 py-1 rounded-md transition-colors duration-150"
                          >
                            View Stores
                          </button>
                          <button
                            onClick={() => handleEdit(location)}
                            className="text-emerald-600 hover:text-emerald-900 p-1 rounded-full hover:bg-emerald-50 transition-colors duration-150"
                            title="Edit"
                          >
                            <FiEdit2 className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(location)}
                            className="text-red-600 hover:text-red-900 p-1 rounded-full hover:bg-red-50 transition-colors duration-150"
                            title="Delete"
                          >
                            <FiTrash2 className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Modals */}
        {showAddModal && (
          <AddLocationModal
            partnerName={manager}
            onClose={() => setShowAddModal(false)}
          />
        )}
        {showEditModal && selectedLocation && (
          <EditLocationModal
            location={selectedLocation}
            onClose={() => {
              setSelectedLocation(null);
              setShowEditModal(false);
            }}
          />
        )}
        {showDeleteModal && selectedLocation && (
          <DeleteLocationModal
            location={selectedLocation}
            onClose={() => {
              setSelectedLocation(null);
              setShowDeleteModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
