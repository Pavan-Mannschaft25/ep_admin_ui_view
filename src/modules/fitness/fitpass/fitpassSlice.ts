// // src/modules/fitness/fitpass/fitpassSlice.ts
// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// export interface FitPassPlan {
//   id: string;
//   name: string;
//   image: string;
//   duration: string; // Weekly, Monthly, Yearly
//   credits: number;
//   price: number;
//   originalPrice?: number;
//   noExpiry: boolean;
//   validityDays?: number;
//   activities: string[]; // yoga, zumba, gym, meditation, etc.
//   onlineSessions: boolean;
//   offlineSessions: boolean;
//   tags: string[]; // Popular, New, Limited, etc.
//   status: "Active" | "Inactive";
//   created: string;
// }

// interface FitPassState {
//   plans: FitPassPlan[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // Function to generate mock FitPass plans
// const generateFitPassPlans = (): FitPassPlan[] => {
//   const durations = ["Weekly", "Monthly", "Quarterly", "Yearly"];
//   const activities = [
//     "Yoga",
//     "Zumba",
//     "Gym",
//     "Meditation",
//     "Pilates",
//     "CrossFit",
//     "Swimming",
//     "Dance",
//     "Boxing",
//     "Cycling",
//   ];
//   const tags = ["Popular", "New", "Limited", "Premium", "Basic"];

//   const plans: FitPassPlan[] = [];

//   // Add sample data
//   plans.push({
//     id: "1",
//     name: "Weekly Wellness",
//     image: "https://picsum.photos/seed/fitpass1/100/100.jpg",
//     duration: "Weekly",
//     credits: 10,
//     price: 29.99,
//     originalPrice: 39.99,
//     noExpiry: false,
//     validityDays: 7,
//     activities: ["Yoga", "Meditation", "Pilates"],
//     onlineSessions: true,
//     offlineSessions: false,
//     tags: ["Popular"],
//     status: "Active",
//     created: "2024-01-15 10:30:00",
//   });

//   plans.push({
//     id: "2",
//     name: "Monthly Fitness",
//     image: "https://picsum.photos/seed/fitpass2/100/100.jpg",
//     duration: "Monthly",
//     credits: 30,
//     price: 79.99,
//     noExpiry: false,
//     validityDays: 30,
//     activities: ["Gym", "Zumba", "CrossFit", "Swimming"],
//     onlineSessions: true,
//     offlineSessions: true,
//     tags: ["Popular", "Premium"],
//     status: "Active",
//     created: "2024-01-20 14:15:00",
//   });

//   plans.push({
//     id: "3",
//     name: "Yearly Pro",
//     image: "https://picsum.photos/seed/fitpass3/100/100.jpg",
//     duration: "Yearly",
//     credits: 500,
//     price: 499.99,
//     originalPrice: 799.99,
//     noExpiry: true,
//     activities: [
//       "Yoga",
//       "Zumba",
//       "Gym",
//       "Meditation",
//       "Pilates",
//       "CrossFit",
//       "Swimming",
//       "Dance",
//     ],
//     onlineSessions: true,
//     offlineSessions: true,
//     tags: ["Premium", "Limited"],
//     status: "Active",
//     created: "2024-02-01 09:00:00",
//   });

//   plans.push({
//     id: "4",
//     name: "Quarterly Dance",
//     image: "https://picsum.photos/seed/fitpass4/100/100.jpg",
//     duration: "Quarterly",
//     credits: 50,
//     price: 149.99,
//     noExpiry: false,
//     validityDays: 90,
//     activities: ["Dance", "Zumba", "Boxing"],
//     onlineSessions: false,
//     offlineSessions: true,
//     tags: ["New"],
//     status: "Active",
//     created: "2024-02-10 16:45:00",
//   });

//   plans.push({
//     id: "5",
//     name: "Weekly Meditation",
//     image: "https://picsum.photos/seed/fitpass5/100/100.jpg",
//     duration: "Weekly",
//     credits: 7,
//     price: 19.99,
//     noExpiry: false,
//     validityDays: 7,
//     activities: ["Meditation", "Yoga"],
//     onlineSessions: true,
//     offlineSessions: false,
//     tags: ["Basic"],
//     status: "Active",
//     created: "2024-02-15 11:20:00",
//   });

//   // Generate additional mock data
//   for (let i = 6; i <= 50; i++) {
//     const duration = durations[Math.floor(Math.random() * durations.length)];
//     const numActivities = Math.floor(Math.random() * 4) + 2;
//     const selectedActivities: string[] = [];

//     for (let j = 0; j < numActivities; j++) {
//       let activity;
//       do {
//         activity = activities[Math.floor(Math.random() * activities.length)];
//       } while (selectedActivities.includes(activity));
//       selectedActivities.push(activity);
//     }

//     const numTags = Math.floor(Math.random() * 2) + 1;
//     const selectedTags: string[] = [];

//     for (let j = 0; j < numTags; j++) {
//       let tag;
//       do {
//         tag = tags[Math.floor(Math.random() * tags.length)];
//       } while (selectedTags.includes(tag));
//       selectedTags.push(tag);
//     }

//     const isOnline = Math.random() > 0.3;
//     const isOffline = Math.random() > 0.3;
//     const hasOriginalPrice = Math.random() > 0.5;

//     let validityDays;
//     let noExpiry = false;

//     if (duration === "Weekly") validityDays = 7;
//     else if (duration === "Monthly") validityDays = 30;
//     else if (duration === "Quarterly") validityDays = 90;
//     else {
//       noExpiry = Math.random() > 0.5;
//       if (!noExpiry) validityDays = 365;
//     }

//     plans.push({
//       id: i.toString(),
//       name: `${duration} ${selectedActivities[0]} Plan`,
//       image: `https://picsum.photos/seed/fitpass${i}/100/100.jpg`,
//       duration,
//       credits: Math.floor(Math.random() * 100) + 10,
//       price: Math.floor(Math.random() * 200) + 20,
//       originalPrice: hasOriginalPrice
//         ? Math.floor(Math.random() * 300) + 50
//         : undefined,
//       noExpiry,
//       validityDays,
//       activities: selectedActivities,
//       onlineSessions: isOnline,
//       offlineSessions: isOffline,
//       tags: selectedTags,
//       status: Math.random() > 0.2 ? "Active" : "Inactive",
//       created: new Date(
//         Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
//       )
//         .toISOString()
//         .slice(0, 19)
//         .replace("T", " "),
//     });
//   }

//   return plans;
// };

// const initialState: FitPassState = {
//   plans: generateFitPassPlans(),
//   status: "idle",
//   error: null,
// };

// // Async thunk for fetching FitPass plans
// export const fetchFitPassPlans = createAsyncThunk(
//   "fitpass/fetchFitPassPlans",
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return initialState.plans;
//   }
// );

// const fitpassSlice = createSlice({
//   name: "fitpass",
//   initialState,
//   reducers: {
//     addPlan: (state, action: PayloadAction<FitPassPlan>) => {
//       state.plans.push({ ...action.payload, id: Date.now().toString() });
//     },
//     editPlan: (state, action: PayloadAction<FitPassPlan>) => {
//       const index = state.plans.findIndex((p) => p.id === action.payload.id);
//       if (index !== -1) state.plans[index] = action.payload;
//     },
//     deletePlan: (state, action: PayloadAction<string>) => {
//       state.plans = state.plans.filter((p) => p.id !== action.payload);
//     },
//     toggleFitPassStatus: (state, action: PayloadAction<string>) => {
//       const plan = state.plans.find((p) => p.id === action.payload);
//       if (plan) {
//         plan.status = plan.status === "Active" ? "Inactive" : "Active";
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchFitPassPlans.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchFitPassPlans.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.plans = action.payload;
//       })
//       .addCase(fetchFitPassPlans.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch FitPass plans";
//       });
//   },
// });

// export const { addPlan, editPlan, deletePlan, toggleFitPassStatus } =
//   fitpassSlice.actions;
// export default fitpassSlice.reducer;

// src/modules/fitness/fitpass/fitpassSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface FitPassPlan {
  id: string;
  name: string;
  description?: string;
  image: string;
  duration: string; // Weekly, Monthly, Yearly
  credits: number;
  price: number;
  originalPrice?: number;
  creditValue?: number; // Value of each credit in rupees
  noExpiry: boolean;
  validityDays?: number;
  autoRenew: boolean;
  maxCreditsPerDay?: number;
  maxClassesPerDay?: number;
  onlineSessions: boolean;
  offlineSessions: boolean;
  eligibleFitnessCategories?: string[]; // Categories this plan applies to
  trainerCommission?: number; // Percentage
  commissionValidity?: number; // In months
  commissionCap?: number; // In rupees
  planCategory: "Entry" | "Popular" | "Premium";
  status: "Draft" | "Active" | "Paused";
  visibleToUsers: boolean;
  featuredPlan: boolean;
  totalSubscribers?: number;
  activeSubscribers?: number;
  expiredSubscribers?: number;
  renewalRate?: number;
  totalRevenue?: number;
  creditsIssued?: number;
  creditsUsed?: number;
  creditsBalance?: number;
  deferredLiability?: number;
  totalCommissionPaid?: number;
  pendingCommission?: number;
  topReferringTrainers?: string[];
  created: string;
}

interface FitPassState {
  plans: FitPassPlan[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock FitPass plans
const generateFitPassPlans = (): FitPassPlan[] => {
  const durations = ["Weekly", "Monthly", "Quarterly", "Yearly"];
  const activities = [
    "Yoga",
    "Zumba",
    "Gym",
    "Meditation",
    "Pilates",
    "CrossFit",
    "Swimming",
    "Dance",
    "Boxing",
    "Cycling",
  ];
  const tags = ["Popular", "New", "Limited", "Premium", "Basic"];
  const planCategories: ("Entry" | "Popular" | "Premium")[] = [
    "Entry",
    "Popular",
    "Premium",
  ];
  const statuses: ("Draft" | "Active" | "Paused")[] = [
    "Draft",
    "Active",
    "Paused",
  ];

  const plans: FitPassPlan[] = [];

  // Add sample data
  plans.push({
    id: "1",
    name: "Weekly Wellness",
    description: "Perfect for beginners looking to start their fitness journey",
    image: "https://picsum.photos/seed/fitpass1/100/100.jpg",
    duration: "Weekly",
    credits: 10,
    price: 29.99,
    originalPrice: 39.99,
    creditValue: 3,
    noExpiry: false,
    validityDays: 7,
    autoRenew: false,
    maxCreditsPerDay: 2,
    maxClassesPerDay: 1,
    onlineSessions: true,
    offlineSessions: false,
    eligibleFitnessCategories: ["Yoga", "Meditation", "Pilates"],
    trainerCommission: 10,
    commissionValidity: 1,
    commissionCap: 500,
    planCategory: "Entry",
    status: "Active",
    visibleToUsers: true,
    featuredPlan: false,
    totalSubscribers: 125,
    activeSubscribers: 98,
    expiredSubscribers: 27,
    renewalRate: 65,
    totalRevenue: 3748.75,
    creditsIssued: 1250,
    creditsUsed: 856,
    creditsBalance: 394,
    deferredLiability: 1182,
    totalCommissionPaid: 374.88,
    pendingCommission: 0,
    topReferringTrainers: ["John Doe", "Jane Smith"],
    created: "2024-01-15 10:30:00",
  });

  plans.push({
    id: "2",
    name: "Monthly Fitness",
    description: "Comprehensive fitness plan for regular gym-goers",
    image: "https://picsum.photos/seed/fitpass2/100/100.jpg",
    duration: "Monthly",
    credits: 30,
    price: 79.99,
    creditValue: 2.67,
    noExpiry: false,
    validityDays: 30,
    autoRenew: true,
    maxCreditsPerDay: 3,
    maxClassesPerDay: 2,
    onlineSessions: true,
    offlineSessions: true,
    eligibleFitnessCategories: ["Gym", "Zumba", "CrossFit", "Swimming"],
    trainerCommission: 15,
    commissionValidity: 3,
    commissionCap: 1000,
    planCategory: "Popular",
    status: "Active",
    visibleToUsers: true,
    featuredPlan: true,
    totalSubscribers: 342,
    activeSubscribers: 287,
    expiredSubscribers: 55,
    renewalRate: 78,
    totalRevenue: 27356.58,
    creditsIssued: 10260,
    creditsUsed: 7432,
    creditsBalance: 2828,
    deferredLiability: 7548.76,
    totalCommissionPaid: 4103.49,
    pendingCommission: 156.25,
    topReferringTrainers: ["Mike Johnson", "Sarah Williams"],
    created: "2024-01-20 14:15:00",
  });

  plans.push({
    id: "3",
    name: "Yearly Pro",
    description: "Ultimate fitness package for dedicated fitness enthusiasts",
    image: "https://picsum.photos/seed/fitpass3/100/100.jpg",
    duration: "Yearly",
    credits: 500,
    price: 499.99,
    originalPrice: 799.99,
    creditValue: 1,
    noExpiry: true,
    autoRenew: true,
    maxCreditsPerDay: 10,
    maxClassesPerDay: 5,
    onlineSessions: true,
    offlineSessions: true,
    eligibleFitnessCategories: [
      "Yoga",
      "Zumba",
      "Gym",
      "Meditation",
      "Pilates",
      "CrossFit",
      "Swimming",
      "Dance",
    ],
    trainerCommission: 20,
    commissionValidity: 12,
    commissionCap: 5000,
    planCategory: "Premium",
    status: "Active",
    visibleToUsers: true,
    featuredPlan: true,
    totalSubscribers: 156,
    activeSubscribers: 142,
    expiredSubscribers: 14,
    renewalRate: 85,
    totalRevenue: 77998.44,
    creditsIssued: 78000,
    creditsUsed: 45632,
    creditsBalance: 32368,
    deferredLiability: 32368,
    totalCommissionPaid: 15599.69,
    pendingCommission: 1250.75,
    topReferringTrainers: ["Alex Brown", "Taylor Davis"],
    created: "2024-02-01 09:00:00",
  });

  plans.push({
    id: "4",
    name: "Quarterly Dance",
    description: "Specialized plan for dance enthusiasts",
    image: "https://picsum.photos/seed/fitpass4/100/100.jpg",
    duration: "Quarterly",
    credits: 50,
    price: 149.99,
    creditValue: 3,
    noExpiry: false,
    validityDays: 90,
    autoRenew: false,
    maxCreditsPerDay: 5,
    maxClassesPerDay: 3,
    onlineSessions: false,
    offlineSessions: true,
    eligibleFitnessCategories: ["Dance", "Zumba", "Boxing"],
    trainerCommission: 12,
    commissionValidity: 3,
    commissionCap: 1500,
    planCategory: "Popular",
    status: "Active",
    visibleToUsers: true,
    featuredPlan: false,
    totalSubscribers: 87,
    activeSubscribers: 76,
    expiredSubscribers: 11,
    renewalRate: 72,
    totalRevenue: 13049.13,
    creditsIssued: 4350,
    creditsUsed: 3124,
    creditsBalance: 1226,
    deferredLiability: 3678,
    totalCommissionPaid: 1565.9,
    pendingCommission: 234.5,
    topReferringTrainers: ["Chris Lee", "Jordan Miller"],
    created: "2024-02-10 16:45:00",
  });

  plans.push({
    id: "5",
    name: "Weekly Meditation",
    description: "Focus on mindfulness and mental wellness",
    image: "https://picsum.photos/seed/fitpass5/100/100.jpg",
    duration: "Weekly",
    credits: 7,
    price: 19.99,
    creditValue: 2.86,
    noExpiry: false,
    validityDays: 7,
    autoRenew: false,
    maxCreditsPerDay: 1,
    maxClassesPerDay: 1,
    onlineSessions: true,
    offlineSessions: false,
    eligibleFitnessCategories: ["Meditation", "Yoga"],
    trainerCommission: 8,
    commissionValidity: 1,
    commissionCap: 300,
    planCategory: "Entry",
    status: "Paused",
    visibleToUsers: false,
    featuredPlan: false,
    totalSubscribers: 43,
    activeSubscribers: 12,
    expiredSubscribers: 31,
    renewalRate: 45,
    totalRevenue: 859.57,
    creditsIssued: 301,
    creditsUsed: 187,
    creditsBalance: 114,
    deferredLiability: 326.04,
    totalCommissionPaid: 68.77,
    pendingCommission: 0,
    topReferringTrainers: ["Sam Wilson"],
    created: "2024-02-15 11:20:00",
  });

  // Generate additional mock data
  for (let i = 6; i <= 20; i++) {
    const duration = durations[Math.floor(Math.random() * durations.length)];
    const numActivities = Math.floor(Math.random() * 4) + 2;
    const selectedActivities: string[] = [];

    for (let j = 0; j < numActivities; j++) {
      let activity;
      do {
        activity = activities[Math.floor(Math.random() * activities.length)];
      } while (selectedActivities.includes(activity));
      selectedActivities.push(activity);
    }

    const numTags = Math.floor(Math.random() * 2) + 1;
    const selectedTags: string[] = [];

    for (let j = 0; j < numTags; j++) {
      let tag;
      do {
        tag = tags[Math.floor(Math.random() * tags.length)];
      } while (selectedTags.includes(tag));
      selectedTags.push(tag);
    }

    const isOnline = Math.random() > 0.3;
    const isOffline = Math.random() > 0.3;
    const hasOriginalPrice = Math.random() > 0.5;
    const planCategory =
      planCategories[Math.floor(Math.random() * planCategories.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const isVisible = status !== "Draft";
    const isFeatured = Math.random() > 0.7;

    let validityDays;
    let noExpiry = false;

    if (duration === "Weekly") validityDays = 7;
    else if (duration === "Monthly") validityDays = 30;
    else if (duration === "Quarterly") validityDays = 90;
    else {
      noExpiry = Math.random() > 0.5;
      if (!noExpiry) validityDays = 365;
    }

    const totalSubscribers = Math.floor(Math.random() * 500) + 20;
    const activeSubscribers = Math.floor(
      totalSubscribers * (0.6 + Math.random() * 0.3)
    );
    const expiredSubscribers = totalSubscribers - activeSubscribers;
    const renewalRate = Math.floor(Math.random() * 40) + 50;
    const price = Math.floor(Math.random() * 200) + 20;
    const credits = Math.floor(Math.random() * 100) + 10;
    const creditValue = price / credits;
    const totalRevenue = totalSubscribers * price;
    const creditsIssued = totalSubscribers * credits;
    const creditsUsed = Math.floor(creditsIssued * (0.5 + Math.random() * 0.4));
    const creditsBalance = creditsIssued - creditsUsed;
    const deferredLiability = creditsBalance * creditValue;

    plans.push({
      id: i.toString(),
      name: `${duration} ${selectedActivities[0]} Plan`,
      description: `A ${duration.toLowerCase()} plan focused on ${selectedActivities.join(
        ", "
      )}`,
      image: `https://picsum.photos/seed/fitpass${i}/100/100.jpg`,
      duration,
      credits,
      price,
      originalPrice: hasOriginalPrice
        ? Math.floor(Math.random() * 300) + 50
        : undefined,
      creditValue,
      noExpiry,
      validityDays,
      autoRenew: Math.random() > 0.5,
      maxCreditsPerDay: Math.floor(Math.random() * 5) + 1,
      maxClassesPerDay: Math.floor(Math.random() * 3) + 1,
      onlineSessions: isOnline,
      offlineSessions: isOffline,
      eligibleFitnessCategories: selectedActivities,
      trainerCommission: Math.floor(Math.random() * 15) + 5,
      commissionValidity: Math.floor(Math.random() * 6) + 1,
      commissionCap: Math.floor(Math.random() * 2000) + 500,
      planCategory,
      status,
      visibleToUsers: isVisible,
      featuredPlan: isFeatured,
      totalSubscribers,
      activeSubscribers,
      expiredSubscribers,
      renewalRate,
      totalRevenue,
      creditsIssued,
      creditsUsed,
      creditsBalance,
      deferredLiability,
      totalCommissionPaid: totalRevenue * 0.1,
      pendingCommission: Math.random() * 500,
      topReferringTrainers: [`Trainer ${i}`, `Trainer ${i + 1}`],
      created: new Date(
        Date.now() - Math.floor(Math.random() * 90) * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  return plans;
};

const initialState: FitPassState = {
  plans: generateFitPassPlans(),
  status: "idle",
  error: null,
};

// Async thunk for fetching FitPass plans
export const fetchFitPassPlans = createAsyncThunk(
  "fitpass/fetchFitPassPlans",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.plans;
  }
);

const fitpassSlice = createSlice({
  name: "fitpass",
  initialState,
  reducers: {
    addPlan: (state, action: PayloadAction<FitPassPlan>) => {
      state.plans.push({ ...action.payload, id: Date.now().toString() });
    },
    editPlan: (state, action: PayloadAction<FitPassPlan>) => {
      const index = state.plans.findIndex((p) => p.id === action.payload.id);
      if (index !== -1) state.plans[index] = action.payload;
    },
    deletePlan: (state, action: PayloadAction<string>) => {
      state.plans = state.plans.filter((p) => p.id !== action.payload);
    },
    toggleFitPassStatus: (state, action: PayloadAction<string>) => {
      const plan = state.plans.find((p) => p.id === action.payload);
      if (plan) {
        if (plan.status === "Active") {
          plan.status = "Paused";
        } else if (plan.status === "Paused") {
          plan.status = "Active";
        } else {
          plan.status = "Active";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFitPassPlans.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFitPassPlans.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.plans = action.payload;
      })
      .addCase(fetchFitPassPlans.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch FitPass plans";
      });
  },
});

export const { addPlan, editPlan, deletePlan, toggleFitPassStatus } =
  fitpassSlice.actions;
export default fitpassSlice.reducer;
