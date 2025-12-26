// // src/modules/fitness/masterConfig/masterConfigSlice.ts
// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// export interface CreditConfig {
//   id: string;
//   category: string;
//   creditValue: number; // ₹ per credit
//   platformMargin: number; // 0.4 = 40%
// }

// export interface PlanPricing {
//   id: string;
//   planName: string;
//   categories: string[];
//   trainerPrice: number;
//   margin: number;
// }

// interface MasterConfigState {
//   creditConfigs: CreditConfig[];
//   planPricings: PlanPricing[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // Function to generate mock credit configs
// const generateCreditConfigs = (): CreditConfig[] => {
//   return [
//     { id: "1", category: "Zumba", creditValue: 50, platformMargin: 0.4 },
//     { id: "2", category: "Yoga", creditValue: 70, platformMargin: 0.35 },
//     { id: "3", category: "Gym", creditValue: 60, platformMargin: 0.45 },
//     { id: "4", category: "Dance", creditValue: 50, platformMargin: 0.4 },
//     { id: "5", category: "Pilates", creditValue: 80, platformMargin: 0.35 },
//     { id: "6", category: "CrossFit", creditValue: 90, platformMargin: 0.4 },
//     { id: "7", category: "Swimming", creditValue: 100, platformMargin: 0.3 },
//     { id: "8", category: "Meditation", creditValue: 40, platformMargin: 0.25 },
//     { id: "9", category: "Boxing", creditValue: 85, platformMargin: 0.4 },
//     { id: "10", category: "Cycling", creditValue: 75, platformMargin: 0.35 },
//   ];
// };

// // Function to generate mock plan pricings
// const generatePlanPricings = (): PlanPricing[] => {
//   return [
//     {
//       id: "1",
//       planName: "Silver",
//       categories: ["Zumba"],
//       trainerPrice: 50,
//       margin: 0.4,
//     },
//     {
//       id: "2",
//       planName: "Gold",
//       categories: ["Zumba", "Gym"],
//       trainerPrice: 50,
//       margin: 0.4,
//     },
//     {
//       id: "3",
//       planName: "Platinum",
//       categories: ["Zumba", "Gym", "Yoga"],
//       trainerPrice: 100,
//       margin: 0.4,
//     },
//     {
//       id: "4",
//       planName: "Elite",
//       categories: ["Zumba", "Gym", "Yoga", "Pilates"],
//       trainerPrice: 150,
//       margin: 0.35,
//     },
//     {
//       id: "5",
//       planName: "Premium",
//       categories: ["Zumba", "Gym", "Yoga", "Pilates", "CrossFit"],
//       trainerPrice: 200,
//       margin: 0.3,
//     },
//     {
//       id: "6",
//       planName: "Basic",
//       categories: ["Meditation"],
//       trainerPrice: 30,
//       margin: 0.25,
//     },
//     {
//       id: "7",
//       planName: "Standard",
//       categories: ["Meditation", "Yoga"],
//       trainerPrice: 60,
//       margin: 0.3,
//     },
//     {
//       id: "8",
//       planName: "Advanced",
//       categories: ["Meditation", "Yoga", "Pilates"],
//       trainerPrice: 100,
//       margin: 0.35,
//     },
//     {
//       id: "9",
//       planName: "Pro",
//       categories: ["Boxing", "CrossFit"],
//       trainerPrice: 120,
//       margin: 0.4,
//     },
//     {
//       id: "10",
//       planName: "Ultimate",
//       categories: ["Boxing", "CrossFit", "Swimming"],
//       trainerPrice: 180,
//       margin: 0.35,
//     },
//   ];
// };

// const initialState: MasterConfigState = {
//   creditConfigs: generateCreditConfigs(),
//   planPricings: generatePlanPricings(),
//   status: "idle",
//   error: null,
// };

// // Async thunk for fetching credit configs
// export const fetchCreditConfigs = createAsyncThunk(
//   "masterConfig/fetchCreditConfigs",
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return initialState.creditConfigs;
//   }
// );

// // Async thunk for fetching plan pricings
// export const fetchPlanPricings = createAsyncThunk(
//   "masterConfig/fetchPlanPricings",
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return initialState.planPricings;
//   }
// );

// // Async thunk for updating credit config
// export const updateCreditConfig = createAsyncThunk(
//   "masterConfig/updateCreditConfig",
//   async (creditConfig: CreditConfig) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return creditConfig;
//   }
// );

// // Async thunk for updating plan pricing
// export const updatePlanPricing = createAsyncThunk(
//   "masterConfig/updatePlanPricing",
//   async (planPricing: PlanPricing) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return planPricing;
//   }
// );

// // Async thunk for adding credit config
// export const addCreditConfig = createAsyncThunk(
//   "masterConfig/addCreditConfig",
//   async (creditConfig: Omit<CreditConfig, "id">) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return { ...creditConfig, id: Date.now().toString() };
//   }
// );

// // Async thunk for adding plan pricing
// export const addPlanPricing = createAsyncThunk(
//   "masterConfig/addPlanPricing",
//   async (planPricing: Omit<PlanPricing, "id">) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return { ...planPricing, id: Date.now().toString() };
//   }
// );

// // Async thunk for deleting credit config
// export const deleteCreditConfig = createAsyncThunk(
//   "masterConfig/deleteCreditConfig",
//   async (id: string) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return id;
//   }
// );

// // Async thunk for deleting plan pricing
// export const deletePlanPricing = createAsyncThunk(
//   "masterConfig/deletePlanPricing",
//   async (id: string) => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return id;
//   }
// );

// const masterConfigSlice = createSlice({
//   name: "masterConfig",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // Fetch credit configs
//       .addCase(fetchCreditConfigs.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchCreditConfigs.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.creditConfigs = action.payload;
//       })
//       .addCase(fetchCreditConfigs.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch credit configs";
//       })
//       // Fetch plan pricings
//       .addCase(fetchPlanPricings.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchPlanPricings.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.planPricings = action.payload;
//       })
//       .addCase(fetchPlanPricings.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch plan pricings";
//       })
//       // Update credit config
//       .addCase(updateCreditConfig.fulfilled, (state, action) => {
//         const index = state.creditConfigs.findIndex(
//           (config) => config.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.creditConfigs[index] = action.payload;
//         }
//       })
//       // Update plan pricing
//       .addCase(updatePlanPricing.fulfilled, (state, action) => {
//         const index = state.planPricings.findIndex(
//           (pricing) => pricing.id === action.payload.id
//         );
//         if (index !== -1) {
//           state.planPricings[index] = action.payload;
//         }
//       })
//       // Add credit config
//       .addCase(addCreditConfig.fulfilled, (state, action) => {
//         state.creditConfigs.push(action.payload);
//       })
//       // Add plan pricing
//       .addCase(addPlanPricing.fulfilled, (state, action) => {
//         state.planPricings.push(action.payload);
//       })
//       // Delete credit config
//       .addCase(deleteCreditConfig.fulfilled, (state, action) => {
//         state.creditConfigs = state.creditConfigs.filter(
//           (config) => config.id !== action.payload
//         );
//       })
//       // Delete plan pricing
//       .addCase(deletePlanPricing.fulfilled, (state, action) => {
//         state.planPricings = state.planPricings.filter(
//           (pricing) => pricing.id !== action.payload
//         );
//       });
//   },
// });

// export default masterConfigSlice.reducer;

// src/modules/fitness/masterConfig/masterConfigSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface CreditConfig {
  id: string;
  category: string;
  creditValue: number; // ₹ per credit
  platformMargin: number; // 0.4 = 40%
  color?: string; // For UI representation
  icon?: string; // Icon name for category
}

export interface PlanPricing {
  id: string;
  planName: string;
  categories: string[];
  trainerPrice: number;
  margin: number;
  isActive: boolean;
  description?: string;
  features?: string[];
}

interface MasterConfigState {
  creditConfigs: CreditConfig[];
  planPricings: PlanPricing[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock credit configs with better data
const generateCreditConfigs = (): CreditConfig[] => {
  return [
    {
      id: "1",
      category: "Zumba",
      creditValue: 50,
      platformMargin: 0.4,
      color: "bg-pink-500",
      icon: "music",
    },
    {
      id: "2",
      category: "Yoga",
      creditValue: 50,
      platformMargin: 0.35,
      color: "bg-purple-500",
      icon: "heart",
    },
    {
      id: "3",
      category: "Gym",
      creditValue: 50,
      platformMargin: 0.45,
      color: "bg-red-500",
      icon: "activity",
    },
    {
      id: "4",
      category: "Dance",
      creditValue: 50,
      platformMargin: 0.4,
      color: "bg-indigo-500",
      icon: "zap",
    },
    {
      id: "5",
      category: "Pilates",
      creditValue: 60,
      platformMargin: 0.35,
      color: "bg-blue-500",
      icon: "target",
    },
    {
      id: "6",
      category: "CrossFit",
      creditValue: 75,
      platformMargin: 0.4,
      color: "bg-orange-500",
      icon: "trending-up",
    },
    {
      id: "7",
      category: "Swimming",
      creditValue: 100,
      platformMargin: 0.3,
      color: "bg-cyan-500",
      icon: "droplet",
    },
    {
      id: "8",
      category: "Meditation",
      creditValue: 40,
      platformMargin: 0.25,
      color: "bg-teal-500",
      icon: "wind",
    },
    {
      id: "9",
      category: "Boxing",
      creditValue: 80,
      platformMargin: 0.4,
      color: "bg-gray-700",
      icon: "box",
    },
    {
      id: "10",
      category: "Cycling",
      creditValue: 70,
      platformMargin: 0.35,
      color: "bg-yellow-500",
      icon: "navigation",
    },
  ];
};

// Function to generate mock plan pricings with better data
const generatePlanPricings = (): PlanPricing[] => {
  return [
    {
      id: "1",
      planName: "Silver",
      categories: ["Zumba"],
      trainerPrice: 50,
      margin: 0.4,
      isActive: true,
      description: "Perfect for beginners",
      features: ["1 Category", "Basic Support", "Mobile Access"],
    },
    {
      id: "2",
      planName: "Gold",
      categories: ["Zumba", "Gym"],
      trainerPrice: 100,
      margin: 0.4,
      isActive: true,
      description: "Most popular choice",
      features: ["2 Categories", "Priority Support", "Mobile + Web Access"],
    },
    {
      id: "3",
      planName: "Platinum",
      categories: ["Zumba", "Gym", "Yoga"],
      trainerPrice: 150,
      margin: 0.4,
      isActive: true,
      description: "Best value for money",
      features: [
        "3 Categories",
        "Premium Support",
        "All Access",
        "Personal Trainer",
      ],
    },
    {
      id: "4",
      planName: "Elite",
      categories: ["Zumba", "Gym", "Yoga", "Pilates"],
      trainerPrice: 200,
      margin: 0.35,
      isActive: true,
      description: "For fitness enthusiasts",
      features: [
        "4 Categories",
        "VIP Support",
        "All Access",
        "Personal Trainer",
        "Nutrition Plan",
      ],
    },
    {
      id: "5",
      planName: "Premium",
      categories: ["Zumba", "Gym", "Yoga", "Pilates", "CrossFit"],
      trainerPrice: 250,
      margin: 0.3,
      isActive: true,
      description: "Ultimate fitness experience",
      features: [
        "5 Categories",
        "24/7 Support",
        "All Access",
        "Personal Trainer",
        "Nutrition Plan",
        "Wellness Coaching",
      ],
    },
    {
      id: "6",
      planName: "Basic",
      categories: ["Meditation"],
      trainerPrice: 30,
      margin: 0.25,
      isActive: true,
      description: "Mindfulness starter",
      features: ["1 Category", "Email Support", "Mobile Access"],
    },
    {
      id: "7",
      planName: "Standard",
      categories: ["Meditation", "Yoga"],
      trainerPrice: 80,
      margin: 0.3,
      isActive: true,
      description: "Mind & body balance",
      features: ["2 Categories", "Standard Support", "Mobile + Web Access"],
    },
    {
      id: "8",
      planName: "Advanced",
      categories: ["Meditation", "Yoga", "Pilates"],
      trainerPrice: 120,
      margin: 0.35,
      isActive: false,
      description: "Comprehensive wellness",
      features: [
        "3 Categories",
        "Premium Support",
        "All Access",
        "Wellness Coaching",
      ],
    },
    {
      id: "9",
      planName: "Pro",
      categories: ["Boxing", "CrossFit"],
      trainerPrice: 180,
      margin: 0.4,
      isActive: true,
      description: "High intensity training",
      features: [
        "2 Categories",
        "Expert Support",
        "All Access",
        "Performance Tracking",
      ],
    },
    {
      id: "10",
      planName: "Ultimate",
      categories: ["Boxing", "CrossFit", "Swimming"],
      trainerPrice: 300,
      margin: 0.35,
      isActive: true,
      description: "Complete athletic training",
      features: [
        "3 Categories",
        "Elite Support",
        "All Access",
        "Performance Tracking",
        "Recovery Programs",
      ],
    },
  ];
};

const initialState: MasterConfigState = {
  creditConfigs: generateCreditConfigs(),
  planPricings: generatePlanPricings(),
  status: "idle",
  error: null,
};

// Async thunk for fetching credit configs
export const fetchCreditConfigs = createAsyncThunk(
  "masterConfig/fetchCreditConfigs",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.creditConfigs;
  }
);

// Async thunk for fetching plan pricings
export const fetchPlanPricings = createAsyncThunk(
  "masterConfig/fetchPlanPricings",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.planPricings;
  }
);

// Async thunk for updating credit config
export const updateCreditConfig = createAsyncThunk(
  "masterConfig/updateCreditConfig",
  async (creditConfig: CreditConfig) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return creditConfig;
  }
);

// Async thunk for updating plan pricing
export const updatePlanPricing = createAsyncThunk(
  "masterConfig/updatePlanPricing",
  async (planPricing: PlanPricing) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return planPricing;
  }
);

// Async thunk for adding credit config
export const addCreditConfig = createAsyncThunk(
  "masterConfig/addCreditConfig",
  async (creditConfig: Omit<CreditConfig, "id">) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ...creditConfig, id: Date.now().toString() };
  }
);

// Async thunk for adding plan pricing
export const addPlanPricing = createAsyncThunk(
  "masterConfig/addPlanPricing",
  async (planPricing: Omit<PlanPricing, "id">) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { ...planPricing, id: Date.now().toString() };
  }
);

// Async thunk for deleting credit config
export const deleteCreditConfig = createAsyncThunk(
  "masterConfig/deleteCreditConfig",
  async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return id;
  }
);

// Async thunk for deleting plan pricing
export const deletePlanPricing = createAsyncThunk(
  "masterConfig/deletePlanPricing",
  async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return id;
  }
);

// Async thunk for toggling plan status
export const togglePlanStatus = createAsyncThunk(
  "masterConfig/togglePlanStatus",
  async (plan: { id: string; isActive: boolean }) => {
    await new Promise((resolve) => setTimeout(resolve, 300));
    return plan;
  }
);

const masterConfigSlice = createSlice({
  name: "masterConfig",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch credit configs
      .addCase(fetchCreditConfigs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCreditConfigs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.creditConfigs = action.payload;
      })
      .addCase(fetchCreditConfigs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch credit configs";
      })
      // Fetch plan pricings
      .addCase(fetchPlanPricings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlanPricings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.planPricings = action.payload;
      })
      .addCase(fetchPlanPricings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch plan pricings";
      })
      // Update credit config
      .addCase(updateCreditConfig.fulfilled, (state, action) => {
        const index = state.creditConfigs.findIndex(
          (config) => config.id === action.payload.id
        );
        if (index !== -1) {
          state.creditConfigs[index] = action.payload;
        }
      })
      // Update plan pricing
      .addCase(updatePlanPricing.fulfilled, (state, action) => {
        const index = state.planPricings.findIndex(
          (pricing) => pricing.id === action.payload.id
        );
        if (index !== -1) {
          state.planPricings[index] = action.payload;
        }
      })
      // Add credit config
      .addCase(addCreditConfig.fulfilled, (state, action) => {
        state.creditConfigs.push(action.payload);
      })
      // Add plan pricing
      .addCase(addPlanPricing.fulfilled, (state, action) => {
        state.planPricings.push(action.payload);
      })
      // Delete credit config
      .addCase(deleteCreditConfig.fulfilled, (state, action) => {
        state.creditConfigs = state.creditConfigs.filter(
          (config) => config.id !== action.payload
        );
      })
      // Delete plan pricing
      .addCase(deletePlanPricing.fulfilled, (state, action) => {
        state.planPricings = state.planPricings.filter(
          (pricing) => pricing.id !== action.payload
        );
      })
      // Toggle plan status
      .addCase(togglePlanStatus.fulfilled, (state, action) => {
        const index = state.planPricings.findIndex(
          (pricing) => pricing.id === action.payload.id
        );
        if (index !== -1) {
          state.planPricings[index].isActive = action.payload.isActive;
        }
      });
  },
});

export default masterConfigSlice.reducer;
