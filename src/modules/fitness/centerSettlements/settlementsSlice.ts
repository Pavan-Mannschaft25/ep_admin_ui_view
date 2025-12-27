// src/modules/fitness/settlements/settlementsSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface CenterSettlement {
  id: string;
  date: string;
  fitnessCenterName: string;
  fitnessCenterId: string;
  totalBookings: number;
  centerAmount: number;
  tax: number;
  totalAmount: number;
  settlementDate: string;
  settlementId: string;
  paymentType: "Cash" | "Card" | "Online" | "Wallet";
  status: "Pending" | "Completed" | "Failed" | "Processing";
}

export interface FitnessCenterSettlement {
  id: string;
  sNo: number;
  date: string;
  totalBookings: number;
  totalAmount: number;
  paymentStatus: "Pending" | "Completed" | "Failed" | "Processing";
  transactionDate: string;
  transactionId: string;
}

interface SettlementsState {
  centerSettlements: CenterSettlement[];
  fitnessCenterSettlements: FitnessCenterSettlement[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock center settlements
const generateCenterSettlements = (): CenterSettlement[] => {
  const centers = [
    "FitLife Premium",
    "PowerZone Gym",
    "Zen Wellness Hub",
    "AquaFit Centre",
    "Elite Fitness Club",
  ];

  const paymentTypes: CenterSettlement["paymentType"][] = [
    "Cash",
    "Card",
    "Online",
    "Wallet",
  ];

  const statuses: CenterSettlement["status"][] = [
    "Pending",
    "Completed",
    "Failed",
    "Processing",
  ];

  const settlements: CenterSettlement[] = [];

  // Generate 20 mock settlements
  for (let i = 1; i <= 20; i++) {
    const centerName = centers[Math.floor(Math.random() * centers.length)];
    const centerId = (centers.indexOf(centerName) + 1).toString();
    const daysFromNow = Math.floor(Math.random() * 30) - 15; // From 15 days ago to 15 days from now
    const date = new Date(Date.now() + daysFromNow * 86400000)
      .toISOString()
      .slice(0, 10);

    const settlementDaysFromNow =
      daysFromNow + Math.floor(Math.random() * 7) + 1; // Settlement 1-7 days after booking
    const settlementDate = new Date(
      Date.now() + settlementDaysFromNow * 86400000
    )
      .toISOString()
      .slice(0, 10);

    const totalBookings = Math.floor(Math.random() * 50) + 10;
    const centerAmount =
      totalBookings * (Math.floor(Math.random() * 2000) + 1000);
    const tax = Math.round(centerAmount * 0.18 * 100) / 100; // 18% tax
    const totalAmount = centerAmount + tax;

    settlements.push({
      id: i.toString(),
      date,
      fitnessCenterName: centerName,
      fitnessCenterId: centerId,
      totalBookings,
      centerAmount,
      tax,
      totalAmount,
      settlementDate,
      settlementId: `STL${1000 + i}`,
      paymentType:
        paymentTypes[Math.floor(Math.random() * paymentTypes.length)],
      status: statuses[Math.floor(Math.random() * statuses.length)],
    });
  }

  return settlements;
};

// Function to generate mock fitness center settlements
const generateFitnessCenterSettlements = (): FitnessCenterSettlement[] => {
  const settlements: FitnessCenterSettlement[] = [];

  // Generate 15 mock settlements
  for (let i = 1; i <= 15; i++) {
    const daysFromNow = Math.floor(Math.random() * 30) - 15; // From 15 days ago to 15 days from now
    const date = new Date(Date.now() + daysFromNow * 86400000)
      .toISOString()
      .slice(0, 10);

    const transactionDaysFromNow =
      daysFromNow + Math.floor(Math.random() * 7) + 1; // Transaction 1-7 days after booking
    const transactionDate = new Date(
      Date.now() + transactionDaysFromNow * 86400000
    )
      .toISOString()
      .slice(0, 10);

    const totalBookings = Math.floor(Math.random() * 50) + 10;
    const totalAmount =
      totalBookings * (Math.floor(Math.random() * 2000) + 1000);

    const paymentStatuses: FitnessCenterSettlement["paymentStatus"][] = [
      "Pending",
      "Completed",
      "Failed",
      "Processing",
    ];

    settlements.push({
      id: i.toString(),
      sNo: i,
      date,
      totalBookings,
      totalAmount,
      paymentStatus:
        paymentStatuses[Math.floor(Math.random() * paymentStatuses.length)],
      transactionDate,
      transactionId: `TXN${10000 + i}`,
    });
  }

  return settlements;
};

const initialState: SettlementsState = {
  centerSettlements: generateCenterSettlements(),
  fitnessCenterSettlements: generateFitnessCenterSettlements(),
  status: "idle",
  error: null,
};

// Async thunk for fetching center settlements
export const fetchCenterSettlements = createAsyncThunk(
  "settlements/fetchCenterSettlements",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.centerSettlements;
  }
);

// Async thunk for fetching fitness center settlements
export const fetchFitnessCenterSettlements = createAsyncThunk(
  "settlements/fetchFitnessCenterSettlements",
  async (centerId: string) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    // In a real app, you would filter by centerId
    return initialState.fitnessCenterSettlements;
  }
);

const settlementsSlice = createSlice({
  name: "settlements",
  initialState,
  reducers: {
    updateSettlementStatus: (
      state,
      action: PayloadAction<{ id: string; status: CenterSettlement["status"] }>
    ) => {
      const settlement = state.centerSettlements.find(
        (s) => s.id === action.payload.id
      );
      if (settlement) {
        settlement.status = action.payload.status;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCenterSettlements.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCenterSettlements.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.centerSettlements = action.payload;
      })
      .addCase(fetchCenterSettlements.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch settlements";
      })
      .addCase(fetchFitnessCenterSettlements.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFitnessCenterSettlements.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fitnessCenterSettlements = action.payload;
      })
      .addCase(fetchFitnessCenterSettlements.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch fitness center settlements";
      });
  },
});

export const { updateSettlementStatus } = settlementsSlice.actions;
export default settlementsSlice.reducer;
