// src/modules/masterStore/components/DeleteComboModal.tsx
import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { deleteCombo } from "../comboSlice";
import { ProductCombo } from "../comboSlice";
import { FiX, FiTrash2 } from "react-icons/fi";

interface DeleteComboModalProps {
  combo: ProductCombo;
  onClose: () => void;
}

export default function DeleteComboModal({
  combo,
  onClose,
}: DeleteComboModalProps) {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteCombo(combo.id));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md mx-4">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Delete Combo</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <FiX className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <FiTrash2 className="h-6 w-6 text-red-600" />
          </div>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Are you sure you want to delete this combo?
            </h3>
            <p className="text-sm text-gray-500 mb-4">
              This action cannot be undone. This will permanently delete the
              combo "{combo.name}" and all of its data.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-center space-x-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
