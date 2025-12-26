// // // src/components/common/ConfirmationModal.tsx
// // import React from "react";
// // import { useAppDispatch, useAppSelector } from "../../store/hooks";
// // import { hideConfirmationModal } from "../../store/slices/uiSlice";
// // import { FiX, FiCheck } from "react-icons/fi";

// // export default function ConfirmationModal() {
// //   const dispatch = useAppDispatch();
// //   const { isVisible, title, message, confirmButtonText, onConfirm, onCancel } =
// //     useAppSelector((state) => state.ui.confirmationModal);

// //   const handleConfirm = () => {
// //     if (onConfirm) onConfirm();
// //     dispatch(hideConfirmationModal());
// //   };

// //   const handleCancel = () => {
// //     if (onCancel) onCancel();
// //     dispatch(hideConfirmationModal());
// //   };

// //   if (!isVisible) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
// //       <div className="bg-white rounded-xl shadow-2xl w-full max-w-md transform transition-all">
// //         <div className="bg-emerald-600 px-6 py-4 rounded-t-xl flex justify-between items-center border-b">
// //           <h2 className="text-xl font-semibold text-white">{title}</h2>
// //           <button
// //             onClick={handleCancel}
// //             className="text-white hover:text-gray-200"
// //           >
// //             <FiX className="text-xl" />
// //           </button>
// //         </div>
// //         <div className="p-6">
// //           <p className="text-center text-gray-800 font">{message}</p>
// //         </div>
// //         <div className="flex justify-center gap-3 px-6 pb-6">
// //           <button
// //             onClick={handleCancel}
// //             className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
// //           >
// //             Cancel
// //           </button>
// //           <button
// //             onClick={handleConfirm}
// //             className="px-5 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors duration-200 flex items-center gap-2"
// //           >
// //             <FiCheck className="text-lg" />
// //             {confirmButtonText || "Confirm"}
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // src/components/common/ConfirmationModal.tsx
// import React from "react";
// import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { hideConfirmationModal } from "../../store/slices/uiSlice";
// import { FiX, FiCheck, FiAlertTriangle, FiInfo } from "react-icons/fi";

// export default function ConfirmationModal() {
//   const dispatch = useAppDispatch();
//   const {
//     isVisible,
//     title,
//     message,
//     confirmButtonText,
//     onConfirm,
//     onCancel,
//     type,
//   } = useAppSelector((state) => state.ui.confirmationModal);

//   const handleConfirm = () => {
//     if (onConfirm) onConfirm();
//     dispatch(hideConfirmationModal());
//   };

//   const handleCancel = () => {
//     if (onCancel) onCancel();
//     dispatch(hideConfirmationModal());
//   };

//   if (!isVisible) return null;

//   // Determine icon and color based on type
//   const getModalConfig = () => {
//     switch (type) {
//       case "danger":
//         return {
//           icon: <FiAlertTriangle className="h-8 w-8" />,
//           bgColor: "bg-red-500",
//           borderColor: "border-red-500",
//           textColor: "text-red-600",
//           buttonBg: "bg-red-600 hover:bg-red-700",
//         };
//       case "warning":
//         return {
//           icon: <FiAlertTriangle className="h-8 w-8" />,
//           bgColor: "bg-amber-500",
//           borderColor: "border-amber-500",
//           textColor: "text-amber-600",
//           buttonBg: "bg-amber-600 hover:bg-amber-700",
//         };
//       case "info":
//         return {
//           icon: <FiInfo className="h-8 w-8" />,
//           bgColor: "bg-blue-500",
//           borderColor: "border-blue-500",
//           textColor: "text-blue-600",
//           buttonBg: "bg-blue-600 hover:bg-blue-700",
//         };
//       default:
//         return {
//           icon: <FiCheck className="h-8 w-8" />,
//           bgColor: "bg-emerald-500",
//           borderColor: "border-emerald-500",
//           textColor: "text-emerald-600",
//           buttonBg: "bg-emerald-600 hover:bg-emerald-700",
//         };
//     }
//   };

//   const config = getModalConfig();

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all scale-100 opacity-100">
//         {/* Header with gradient background */}
//         <div
//           className={`${config.bgColor} px-6 py-4 rounded-t-2xl flex justify-between items-center`}
//         >
//           <h2 className="text-xl font-semibold text-white">{title}</h2>
//           <button
//             onClick={handleCancel}
//             className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
//           >
//             <FiX className="text-xl" />
//           </button>
//         </div>

//         {/* Icon and message */}
//         <div className="p-6">
//           <div className="flex justify-center mb-4">
//             <div className={`${config.bgColor} bg-opacity-20 p-4 rounded-full`}>
//               <div className={`${config.textColor}`}>{config.icon}</div>
//             </div>
//           </div>
//           <p className="text-center text-gray-800 font-medium">{message}</p>
//         </div>

//         {/* Action buttons */}
//         <div className="flex justify-center gap-3 px-6 pb-6">
//           <button
//             onClick={handleCancel}
//             className="px-6 py-3 border border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleConfirm}
//             className={`px-6 py-3 rounded-xl text-white transition-all duration-200 font-medium flex items-center gap-2 shadow-md ${config.buttonBg}`}
//           >
//             <FiCheck className="text-lg" />
//             {confirmButtonText || "Confirm"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// src/components/common/ConfirmationModal.tsx
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { hideConfirmationModal } from "../../store/slices/uiSlice";
import { FiX, FiCheck, FiAlertTriangle, FiInfo } from "react-icons/fi";

export default function ConfirmationModal() {
  const dispatch = useAppDispatch();
  const {
    isVisible,
    title,
    message,
    confirmButtonText,
    onConfirm,
    onCancel,
    type,
  } = useAppSelector((state) => state.ui.confirmationModal);

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    dispatch(hideConfirmationModal());
  };

  const handleCancel = () => {
    if (onCancel) onCancel();
    dispatch(hideConfirmationModal());
  };

  if (!isVisible) return null;

  // Determine icon and color based on type
  const getModalConfig = () => {
    switch (type) {
      case "danger":
        return {
          icon: <FiAlertTriangle className="h-8 w-8" />,
          bgColor: "bg-gradient-to-br from-red-500 to-red-600",
          borderColor: "border-red-500",
          iconBg: "bg-red-100",
          iconColor: "text-red-500",
          buttonBg: "bg-red-600 hover:bg-red-700",
        };
      case "warning":
        return {
          icon: <FiAlertTriangle className="h-8 w-8" />,
          bgColor: "bg-gradient-to-br from-amber-500 to-amber-600",
          borderColor: "border-amber-500",
          iconBg: "bg-amber-100",
          iconColor: "text-amber-500",
          buttonBg: "bg-amber-600 hover:bg-amber-700",
        };
      case "info":
        return {
          icon: <FiInfo className="h-8 w-8" />,
          bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
          borderColor: "border-blue-500",
          iconBg: "bg-blue-100",
          iconColor: "text-blue-500",
          buttonBg: "bg-blue-600 hover:bg-blue-700",
        };
      default:
        return {
          icon: <FiCheck className="h-8 w-8" />,
          bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
          borderColor: "border-emerald-500",
          iconBg: "bg-emerald-100",
          iconColor: "text-emerald-500",
          buttonBg: "bg-emerald-600 hover:bg-emerald-700",
        };
    }
  };

  const config = getModalConfig();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md transform transition-all overflow-hidden">
        {/* Header with gradient background */}
        <div
          className={`${config.bgColor} px-6 py-5 flex justify-between items-center`}
        >
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <button
            onClick={handleCancel}
            className="text-white hover:text-gray-200 transition-colors duration-200 p-1 rounded-full hover:bg-white/20"
          >
            <FiX className="text-xl" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Icon and message card */}
          <div
            className={`${config.iconBg} rounded-xl p-6 mb-6 border border-gray-100`}
          >
            <div className="flex items-center">
              <div className={`${config.iconColor} mr-4`}>{config.icon}</div>
              <p className="text-gray-800 font-medium">{message}</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex justify-center gap-3">
            <button
              onClick={handleCancel}
              className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all duration-200 font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className={`px-6 py-3 rounded-lg text-white transition-all duration-200 font-medium flex items-center gap-2 shadow-md ${config.buttonBg}`}
            >
              <FiCheck className="text-lg" />
              {confirmButtonText || "Confirm"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
