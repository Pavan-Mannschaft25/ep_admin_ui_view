// src/modules/nutritionists/nutritionistSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Nutritionist {
  id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  experience: number; // in years
  status: "Active" | "Inactive" | "Pending";
  joinedDate: string;
  location: string;
  rating: number; // out of 5
  consultationFee: number;
  patientsCount?: number;
  avatar?: string;
}

interface NutritionistState {
  nutritionists: Nutritionist[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock nutritionist data
const generateNutritionists = (): Nutritionist[] => {
  const names = [
    "Dr. Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
    "Fiona Glenanne",
    "George Costanza",
    "Hannah Baker",
    "Ian Malcolm",
    "Jane Doe",
    "Kevin McCallister",
    "Laura Palmer",
    "Michael Scott",
    "Nancy Wheeler",
    "Oscar the Grouch",
  ];

  const specializations = [
    "Sports Nutrition",
    "Pediatric Nutrition",
    "Weight Management",
    "Clinical Nutrition",
    "Renal Nutrition",
    "Gerontological Nutrition",
    "Plant-Based Nutrition",
    "Gut Health",
  ];

  const locations = [
    "New York, NY",
    "Los Angeles, CA",
    "Chicago, IL",
    "Houston, TX",
    "Phoenix, AZ",
    "Philadelphia, PA",
    "San Antonio, TX",
    "San Diego, CA",
  ];

  const nutritionists: Nutritionist[] = [];

  for (let i = 1; i <= 15; i++) {
    const name = names[Math.floor(Math.random() * names.length)];
    const status =
      Math.random() > 0.2
        ? "Active"
        : Math.random() > 0.5
        ? "Pending"
        : "Inactive";

    nutritionists.push({
      id: `nutritionist-${i}`,
      name,
      email: `${name.toLowerCase().replace(" ", ".")}@example.com`,
      phone: `+1 ${Math.floor(Math.random() * 900) + 100}-${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`,
      specialization:
        specializations[Math.floor(Math.random() * specializations.length)],
      experience: Math.floor(Math.random() * 20) + 1,
      status,
      joinedDate: new Date(
        Date.now() - Math.floor(Math.random() * 5 * 365 * 24 * 60 * 60 * 1000)
      )
        .toISOString()
        .split("T")[0],
      location: locations[Math.floor(Math.random() * locations.length)],
      rating: parseFloat((Math.random() * 2 + 3).toFixed(1)), // Rating between 3.0 and 5.0
      consultationFee: Math.floor(Math.random() * 150) + 50, // Fee between $50 and $200
      patientsCount: Math.floor(Math.random() * 100) + 10,
      avatar: `https://randomuser.me/api/portraits/${
        Math.random() > 0.5 ? "women" : "men"
      }/${Math.floor(Math.random() * 70) + 1}.jpg`,
    });
  }

  return nutritionists;
};

const initialState: NutritionistState = {
  nutritionists: generateNutritionists(),
  status: "idle",
  error: null,
};

// Async thunk for fetching nutritionists
export const fetchNutritionists = createAsyncThunk(
  "nutritionists/fetchNutritionists",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return generateNutritionists();
  }
);

// Async thunk for adding a nutritionist
export const addNutritionistAsync = createAsyncThunk(
  "nutritionists/addNutritionist",
  async (nutritionistData: Omit<Nutritionist, "id">) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newNutritionist: Nutritionist = {
      ...nutritionistData,
      id: `nutritionist-${Date.now()}`,
    };

    return newNutritionist;
  }
);

// Async thunk for updating a nutritionist
export const updateNutritionistAsync = createAsyncThunk(
  "nutritionists/updateNutritionist",
  async (nutritionistData: Nutritionist) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return {
      ...nutritionistData,
    };
  }
);

// Async thunk for deleting a nutritionist
export const deleteNutritionistAsync = createAsyncThunk(
  "nutritionists/deleteNutritionist",
  async (nutritionistId: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return nutritionistId;
  }
);

const nutritionistSlice = createSlice({
  name: "nutritionists",
  initialState,
  reducers: {
    // Keep the synchronous reducers for immediate UI updates
    updateNutritionistStatus: (
      state,
      action: PayloadAction<{ id: string; status: Nutritionist["status"] }>
    ) => {
      const nutritionist = state.nutritionists.find(
        (n) => n.id === action.payload.id
      );
      if (nutritionist) {
        nutritionist.status = action.payload.status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNutritionists.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchNutritionists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nutritionists = action.payload;
      })
      .addCase(fetchNutritionists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch nutritionists";
      })
      .addCase(addNutritionistAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addNutritionistAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nutritionists.unshift(action.payload);
      })
      .addCase(addNutritionistAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to add nutritionist";
      })
      .addCase(updateNutritionistAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateNutritionistAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.nutritionists.findIndex(
          (n) => n.id === action.payload.id
        );
        if (index !== -1) {
          state.nutritionists[index] = action.payload;
        }
      })
      .addCase(updateNutritionistAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to update nutritionist";
      })
      .addCase(deleteNutritionistAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteNutritionistAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.nutritionists = state.nutritionists.filter(
          (n) => n.id !== action.payload
        );
      })
      .addCase(deleteNutritionistAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to delete nutritionist";
      });
  },
});

export const { updateNutritionistStatus } = nutritionistSlice.actions;

export default nutritionistSlice.reducer;
