// src/modules/fitness/classes/components/DeleteClassModal.tsx
import React from "react";
import { useAppDispatch } from "../../../../store/hooks";
import { deleteClass, Class } from "../classesSlice";
import { FiX, FiTrash2 } from "react-icons/fi";

interface DeleteClassModalProps {
  classItem: Class;
  onClose: () => void;
}

const DeleteClassModal: React.FC<DeleteClassModalProps> = ({
  classItem,
  onClose,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(deleteClass(classItem.id));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
            <FiTrash2 className="h-6 w-6 text-red-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
            Delete Class
          </h3>
          <p className="text-sm text-gray-500 text-center mb-6">
            Are you sure you want to delete the "{classItem.name}" class? This
            action cannot be undone.
          </p>
          <div className="flex justify-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteClassModal;
