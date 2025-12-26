// src/modules/franchise/franchise-locations/components/DeleteLocationModal.tsx
import React, { useState } from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { deleteLocationAsync, Location } from "../franchiseLocationsSlice";
import { FiX, FiTrash2 } from "react-icons/fi";
import { toast } from "react-toastify";

interface DeleteLocationModalProps {
  location: Location;
  onClose: () => void;
}

export default function DeleteLocationModal({
  location,
  onClose,
}: DeleteLocationModalProps) {
  const dispatch = useAppDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);

    try {
      await dispatch(deleteLocationAsync(location.id)).unwrap();

      toast.success("Location deleted successfully!");
      onClose();
    } catch (error) {
      toast.error("Failed to delete location. Please try again.");
      console.error("Error deleting location:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4 p-6">
        <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
          <FiTrash2 className="h-6 w-6 text-red-600" />
        </div>
        <h3 className="text-lg font-semibold text-center text-gray-900 mb-2">
          Delete Location
        </h3>
        <p className="text-center text-gray-600 mb-6">
          Are you sure you want to delete the location in{" "}
          <span className="font-semibold">
            {location.areaName}, {location.city}
          </span>
          ? This action cannot be undone.
        </p>
        <div className="flex justify-center space-x-3">
          <button
            onClick={onClose}
            disabled={isDeleting}
            className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 transition-colors duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className={`px-4 py-2 bg-red-600 text-white rounded-lg transition-all duration-200 flex items-center ${
              isDeleting ? "opacity-70 cursor-not-allowed" : "hover:bg-red-700"
            }`}
          >
            {isDeleting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
