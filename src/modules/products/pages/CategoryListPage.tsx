// // src/modules/products/CategoryListPage.tsx
// import React, { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../../store/hooks";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchCategories } from "../categorySlice";
// import { FiShoppingBag } from "react-icons/fi";

// export default function CategoryListPage() {
//   const dispatch = useAppDispatch();
//   const { categories, status } = useAppSelector(
//     (state) => state.productCategory
//   );
//   const { storeId } = useParams<{ storeId: string }>();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (status === "idle") dispatch(fetchCategories());
//   }, [status, dispatch]);

//   const handleCategoryClick = (categoryName: string) => {
//     navigate(
//       `/stores/store-products/${storeId}/category-list/${categoryName.toLowerCase()}`
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
//           <h1 className="text-3xl md:text-4xl font-bold mb-2">
//             Product Categories
//           </h1>
//           <p className="text-emerald-100 text-lg">
//             Select a category to manage products
//           </p>
//         </div>

//         {status === "loading" ? (
//           <div className="flex justify-center items-center py-20 bg-white rounded-xl shadow-lg">
//             <div className="flex flex-col items-center">
//               <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
//               <p className="mt-4 text-gray-600">Loading categories...</p>
//             </div>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {categories.map((category) => (
//               <div
//                 key={category.id}
//                 onClick={() => handleCategoryClick(category.name)}
//                 className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-all duration-200 hover:shadow-xl hover:-translate-y-2"
//               >
//                 <div className="h-40 bg-gray-100 flex items-center justify-center">
//                   <img
//                     src={category.image}
//                     alt={category.name}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>
//                 <div className="p-4">
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {category.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// CategoryListPage.tsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiArrowLeft,
  FiPlus,
  FiToggleLeft,
  FiToggleRight,
} from "react-icons/fi";

interface Category {
  id: string;
  name: string;
  image: string;
}

interface SubCategory {
  id: string;
  name: string;
  image: string;
  status: boolean;
}

const mockCategories: Category[] = [
  { id: "1", name: "Veg", image: "https://picsum.photos/seed/veg/100/100.jpg" },
  {
    id: "2",
    name: "Non Veg",
    image: "https://picsum.photos/seed/nonveg/100/100.jpg",
  },
  {
    id: "3",
    name: "Restaurants",
    image: "https://picsum.photos/seed/restaurants/100/100.jpg",
  },
  {
    id: "4",
    name: "Eggs",
    image: "https://picsum.photos/seed/eggs/100/100.jpg",
  },
  {
    id: "5",
    name: "Dairy Foods",
    image: "https://picsum.photos/seed/dairy/100/100.jpg",
  },
  {
    id: "6",
    name: "Fruits & Vegetables",
    image: "https://picsum.photos/seed/fruits/100/100.jpg",
  },
  {
    id: "7",
    name: "Bakery & Sweets",
    image: "https://picsum.photos/seed/bakery/100/100.jpg",
  },
  {
    id: "8",
    name: "Home Foods",
    image: "https://picsum.photos/seed/home/100/100.jpg",
  },
  {
    id: "9",
    name: "Diet",
    image: "https://picsum.photos/seed/diet/100/100.jpg",
  },
];

const mockSubCategories: Record<string, SubCategory[]> = {
  "1": [
    {
      id: "1-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "1-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
    {
      id: "1-3",
      name: "Legumes (చిక్కుళ్ళు)",
      image: "https://picsum.photos/seed/legumes/100/100.jpg",
      status: false,
    },
    {
      id: "1-4",
      name: "Lentils/Pulses (పప్పులు)",
      image: "https://picsum.photos/seed/lentils/100/100.jpg",
      status: true,
    },
  ],
  "2": [
    {
      id: "2-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "2-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
    {
      id: "2-3",
      name: "Legumes (చిక్కుళ్ళు)",
      image: "https://picsum.photos/seed/legumes/100/100.jpg",
      status: false,
    },
    {
      id: "2-4",
      name: "Lentils/Pulses (పప్పులు)",
      image: "https://picsum.photos/seed/lentils/100/100.jpg",
      status: true,
    },
  ],
  "3": [
    {
      id: "3-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "3-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  "4": [
    {
      id: "4-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "4-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  "5": [
    {
      id: "5-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "5-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  "6": [
    {
      id: "6-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "6-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  "7": [
    {
      id: "7-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "7-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  "8": [
    {
      id: "8-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "8-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  "9": [
    {
      id: "9-1",
      name: "Seeds (విత్తనాలు)",
      image: "https://picsum.photos/seed/seeds/100/100.jpg",
      status: true,
    },
    {
      id: "9-2",
      name: "Nuts (గింజలు)",
      image: "https://picsum.photos/seed/nuts/100/100.jpg",
      status: true,
    },
  ],
  // Add more subcategories for other categories as needed
};

export default function CategoryListPage() {
  const { storeId } = useParams<{ storeId: string }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>("1");
  const [subCategories, setSubCategories] = useState<SubCategory[]>(
    mockSubCategories["1"]
  );

  const handleCategoryClick = (categoryId: string) => {
    setActiveCategory(categoryId);
    setSubCategories(mockSubCategories[categoryId] || []);
  };

  const toggleSubCategoryStatus = (subCategoryId: string) => {
    setSubCategories(
      subCategories.map((sub) =>
        sub.id === subCategoryId ? { ...sub, status: !sub.status } : sub
      )
    );
  };

  const handleSubCategoryClick = (subCategoryId: string) => {
    const subCategory = subCategories.find((sub) => sub.id === subCategoryId);
    if (subCategory) {
      navigate(
        `/stores/store-products/${storeId}/category/${activeCategory}/subcategory/${subCategoryId}/products`
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl shadow-xl p-6 md:p-8 mb-8 text-white">
          <div className="flex items-center">
            <button
              onClick={() => navigate(`/stores/store-products/${storeId}`)}
              className="mr-4 p-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg hover:bg-white/30 transition-all duration-200"
            >
              <FiArrowLeft className="text-lg" />
            </button>
            <h1 className="text-3xl md:text-4xl font-bold">
              Product Categories
            </h1>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Select Category
            </h2>

            {/* Horizontal Scrolling Container */}
            <div className="relative">
              {/* Gradient fade indicators for scroll */}
              {/* <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div> */}

              {/* Scrollable Container */}
              <div className="overflow-x-auto scrollbar-hide pb-2">
                <div
                  className="flex space-x-2"
                  style={{ minWidth: "max-content" }}
                >
                  {mockCategories.map((category) => (
                    <div
                      key={category.id}
                      onClick={() => handleCategoryClick(category.id)}
                      className={`relative flex-shrink-0 cursor-pointer transition-all duration-300 transform  ${
                        activeCategory === category.id ? "scale-105" : ""
                      }`}
                    >
                      <div
                        className={`p-4 rounded-xl transition-all duration-300 ${
                          activeCategory === category.id ? "" : ""
                        }`}
                      >
                        <div className="flex flex-col items-center min-w-[100px]">
                          <div className="relative mb-3">
                            <div
                              className={`h-16 w-16 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 ${
                                activeCategory === category.id
                                  ? "bg-white/20"
                                  : "bg-gray-100"
                              }`}
                            >
                              <img
                                src={category.image}
                                alt={category.name}
                                className="h-12 w-12 rounded-full object-cover"
                              />
                            </div>
                            {activeCategory === category.id && (
                              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-md">
                                <svg
                                  className="h-4 w-4 text-emerald-500"
                                  fill="currentColor"
                                  viewBox="0 0 20 20"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </div>
                            )}
                          </div>
                          <span
                            className={`text-sm font-medium text-center transition-all duration-300 ${
                              activeCategory === category.id
                                ? "text-gray-800"
                                : "text-gray-800"
                            }`}
                          >
                            {category.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Subcategories */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-lg font-semibold text-gray-800">
              {mockCategories.find((cat) => cat.id === activeCategory)?.name}{" "}
              Subcategories
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
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
                {subCategories.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-16 text-center">
                      <div className="flex flex-col items-center">
                        <h3 className="mt-2 text-lg font-medium text-gray-900">
                          No subcategories found
                        </h3>
                      </div>
                    </td>
                  </tr>
                ) : (
                  subCategories.map((subCategory) => (
                    <tr
                      key={subCategory.id}
                      className="hover:bg-gray-50 transition-colors duration-150"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <img
                          src={subCategory.image}
                          alt={subCategory.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </td>
                      <td
                        onClick={() => handleSubCategoryClick(subCategory.id)}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      >
                        {subCategory.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() =>
                            toggleSubCategoryStatus(subCategory.id)
                          }
                          className="flex items-center"
                        >
                          {subCategory.status ? (
                            <FiToggleRight className="h-6 w-6 text-emerald-500" />
                          ) : (
                            <FiToggleLeft className="h-6 w-6 text-gray-400" />
                          )}
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleSubCategoryClick(subCategory.id)}
                          className="text-emerald-600 hover:text-emerald-900 transition-colors duration-150"
                        >
                          View Products
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
