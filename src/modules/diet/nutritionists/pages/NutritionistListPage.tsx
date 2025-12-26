// src/modules/nutritionists/pages/NutritionistsPage.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  fetchNutritionists,
  Nutritionist,
  updateNutritionistStatus,
} from "../nutritionistSlice";
import {
  FiPlus,
  FiSearch,
  FiRefreshCw,
  FiUser,
  FiStar,
  FiUsers,
  FiEdit2,
  FiTrash2,
  FiCheck,
  FiX,
  FiClock,
  FiMapPin,
} from "react-icons/fi";
import { toast } from "react-toastify";
import AddNutritionistModal from "../components/AddNutritionistModal";
import EditNutritionistModal from "../components/EditNutritionistModal";
import DeleteNutritionistModal from "../components/DeleteNutritionistModal";

export default function NutritionistsPage() {
  const dispatch = useAppDispatch();
  const { nutritionists, status } = useAppSelector(
    (state) => state.nutritionists
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [specializationFilter, setSpecializationFilter] =
    useState<string>("all");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedNutritionist, setSelectedNutritionist] =
    useState<Nutritionist | null>(null);

  useEffect(() => {
    if (status === "idle") dispatch(fetchNutritionists());
  }, [status, dispatch]);

  const specializations = Array.from(
    new Set(nutritionists.map((n) => n.specialization))
  );
  const filteredNutritionists = nutritionists.filter((nutritionist) => {
    const matchesSearch =
      nutritionist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nutritionist.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nutritionist.specialization
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || nutritionist.status === statusFilter;
    const matchesSpecialization =
      specializationFilter === "all" ||
      nutritionist.specialization === specializationFilter;
    return matchesSearch && matchesStatus && matchesSpecialization;
  });

  const handleRefresh = () => dispatch(fetchNutritionists());
  const handleEdit = (nutritionist: Nutritionist) => {
    setSelectedNutritionist(nutritionist);
    setShowEditModal(true);
  };
  const handleDelete = (nutritionist: Nutritionist) => {
    setSelectedNutritionist(nutritionist);
    setShowDeleteModal(true);
  };
  const handleUpdateStatus = (
    nutritionist: Nutritionist,
    newStatus: Nutritionist["status"]
  ) => {
    dispatch(
      updateNutritionistStatus({ id: nutritionist.id, status: newStatus })
    );
    toast.success(`Status updated to ${newStatus}`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Inactive":
        return "bg-red-100 text-red-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active":
        return <FiCheck className="text-xs" />;
      case "Inactive":
        return <FiX className="text-xs" />;
      case "Pending":
        return <FiClock className="text-xs" />;
      default:
        return "?";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-4 md:mb-0">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center">
                <FiUser className="mr-3" />
                Nutritionists
              </h1>
              <p className="text-emerald-100 text-lg">
                Manage nutritionist profiles and information
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
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-white text-emerald-700 font-medium rounded-lg hover:bg-emerald-50 transition-all duration-200 shadow-md flex items-center gap-2"
              >
                <FiPlus className="text-lg" />
                <span>Add Nutritionist</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">
                  Total Nutritionists
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {nutritionists.length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiUser className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-emerald-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Active</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {nutritionists.filter((n) => n.status === "Active").length}
                </p>
              </div>
              <div className="bg-emerald-100 p-3 rounded-full">
                <FiCheck className="text-emerald-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {nutritionists.filter((n) => n.status === "Pending").length}
                </p>
              </div>
              <div className="bg-yellow-100 p-3 rounded-full">
                <FiClock className="text-yellow-600 text-xl" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-500 transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium">Inactive</p>
                <p className="text-3xl font-bold text-gray-800 mt-1">
                  {nutritionists.filter((n) => n.status === "Inactive").length}
                </p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <FiX className="text-red-600 text-xl" />
              </div>
            </div>
          </div>
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
                  placeholder="Search by name, email, or specialization"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Active">Active</option>
                <option value="Pending">Pending</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
            <div className="relative">
              <select
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
                value={specializationFilter}
                onChange={(e) => setSpecializationFilter(e.target.value)}
              >
                <option value="all">All Specializations</option>
                {specializations.map((spec) => (
                  <option key={spec} value={spec}>
                    {spec}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Nutritionists Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold text-gray-800">
                Nutritionists ({filteredNutritionists.length})
              </h2>
            </div>
          </div>

          {status === "loading" ? (
            <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
                <p className="mt-4 text-gray-600">Loading nutritionists...</p>
              </div>
            </div>
          ) : filteredNutritionists.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <FiUser className="h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900">
                No nutritionists found
              </h3>
              <p className="text-sm text-gray-500">
                Try adjusting your search or add a new nutritionist
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nutritionist
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Specialization
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Experience
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Patients
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rating
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredNutritionists.map((nutritionist) => (
                    <tr
                      key={nutritionist.id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <img
                            className="h-10 w-10 rounded-full object-cover"
                            src={
                              nutritionist.avatar ||
                              "https://via.placeholder.com/40"
                            }
                            alt={nutritionist.name}
                          />
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {nutritionist.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {nutritionist.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {nutritionist.specialization}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {nutritionist.experience} years
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <FiUsers className="mr-1 h-4 w-4 text-gray-400" />
                          {nutritionist.patientsCount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        <div className="flex items-center">
                          <FiStar className="mr-1 h-4 w-4 text-yellow-400 fill-current" />
                          {nutritionist.rating}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            nutritionist.status
                          )}`}
                        >
                          <span className="mr-1">
                            {getStatusIcon(nutritionist.status)}
                          </span>
                          {nutritionist.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex justify-end space-x-2">
                          {nutritionist.status === "Pending" && (
                            <button
                              onClick={() =>
                                handleUpdateStatus(nutritionist, "Active")
                              }
                              className="text-emerald-600 hover:text-emerald-900 p-1 rounded-full hover:bg-emerald-50 transition-colors duration-150"
                              title="Approve"
                            >
                              <FiCheck className="text-lg" />
                            </button>
                          )}
                          <button
                            onClick={() => handleEdit(nutritionist)}
                            className="text-emerald-600 hover:text-emerald-900 p-1 rounded-full hover:bg-emerald-50 transition-colors duration-150"
                            title="Edit"
                          >
                            <FiEdit2 className="text-lg" />
                          </button>
                          <button
                            onClick={() => handleDelete(nutritionist)}
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
          <AddNutritionistModal onClose={() => setShowAddModal(false)} />
        )}
        {showEditModal && selectedNutritionist && (
          <EditNutritionistModal
            nutritionist={selectedNutritionist}
            onClose={() => {
              setSelectedNutritionist(null);
              setShowEditModal(false);
            }}
          />
        )}
        {showDeleteModal && selectedNutritionist && (
          <DeleteNutritionistModal
            nutritionist={selectedNutritionist}
            onClose={() => {
              setSelectedNutritionist(null);
              setShowDeleteModal(false);
            }}
          />
        )}
      </div>
    </div>
  );
}
