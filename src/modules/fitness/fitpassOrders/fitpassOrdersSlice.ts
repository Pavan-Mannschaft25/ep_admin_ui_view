// src/modules/fitness/fitpassOrders/fitpassOrdersSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface FitPassOrder {
  id: string;
  orderDate: string;
  userId: string;
  planName: string;
  planId: string;
  orderType: "New" | "Renewal" | "Upgrade";
  amountPaid: number;
  discountApplied: number;
  creditsIssued: number;
  creditsUsed: number;
  creditsBalance: number;
  creditValue: number;
  liabilityAmount: number;
  orderStatus: "Active" | "Pending" | "Failed" | "Cancelled";
  paymentStatus: "Paid" | "Pending" | "Failed" | "Refunded";
  paymentMode: string;
  gatewayTransactionId: string;
  referredBy: "Trainer" | "Organic";
  trainerId?: string;
  trainerName?: string;
  referralCode?: string;
  commissionPercentage?: number;
  commissionAmount?: number;
  commissionStatus?: "Pending" | "Paid" | "Failed";
  highUnusedCredits: boolean;
  repeatReferral: boolean;
  promoUsed: boolean;
  onHold: boolean;
}

interface FitPassOrdersState {
  orders: FitPassOrder[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock FitPass orders
const generateFitPassOrders = (): FitPassOrder[] => {
  const planNames = [
    "Weekly Wellness",
    "Monthly Fitness",
    "Quarterly Dance",
    "Yearly Pro",
    "Weekly Meditation",
    "Monthly Yoga",
    "Quarterly HIIT",
    "Yearly Elite",
    "Weekly Zumba",
    "Monthly CrossFit",
  ];

  const orders: FitPassOrder[] = [];

  // Generate mock data
  for (let i = 1; i <= 100; i++) {
    const planName = planNames[Math.floor(Math.random() * planNames.length)];
    const orderTypeOptions: ("New" | "Renewal" | "Upgrade")[] = [
      "New",
      "Renewal",
      "Upgrade",
    ];
    const orderType =
      orderTypeOptions[Math.floor(Math.random() * orderTypeOptions.length)];
    const orderStatusOptions: (
      | "Active"
      | "Pending"
      | "Failed"
      | "Cancelled"
    )[] = ["Active", "Pending", "Failed", "Cancelled"];
    const orderStatus =
      orderStatusOptions[Math.floor(Math.random() * orderStatusOptions.length)];
    const paymentStatusOptions: ("Paid" | "Pending" | "Failed" | "Refunded")[] =
      ["Paid", "Pending", "Failed", "Refunded"];
    const paymentStatus =
      paymentStatusOptions[
        Math.floor(Math.random() * paymentStatusOptions.length)
      ];
    const referredBy = Math.random() > 0.5 ? "Trainer" : "Organic";
    const hasTrainer = referredBy === "Trainer";

    const creditsIssued = Math.floor(Math.random() * 100) + 10;
    const creditsUsed = Math.floor(creditsIssued * (0.2 + Math.random() * 0.7)); // 20-90% used
    const creditsBalance = creditsIssued - creditsUsed;
    const creditValue = Math.floor(Math.random() * 100) + 50;
    const liabilityAmount = creditsBalance * creditValue;

    const amountPaid = Math.floor(Math.random() * 5000) + 500;
    const discountApplied =
      Math.random() > 0.7 ? Math.floor(Math.random() * 1000) + 100 : 0;

    // Generate a random date within the last 90 days
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 90));
    const orderDate = date.toISOString().slice(0, 10);

    const highUnusedCredits = creditsBalance > creditsIssued * 0.7; // More than 70% unused
    const repeatReferral = hasTrainer && Math.random() > 0.9; // 10% chance if has trainer
    const promoUsed = Math.random() > 0.8; // 20% chance
    const onHold =
      orderStatus === "Pending" ||
      paymentStatus === "Pending" ||
      Math.random() > 0.95; // 5% chance or if pending

    const commissionPercentage = hasTrainer
      ? Math.floor(Math.random() * 20) + 5
      : undefined;
    const commissionAmount =
      hasTrainer && commissionPercentage
        ? amountPaid * (commissionPercentage / 100)
        : undefined;
    const commissionStatus =
      hasTrainer && commissionAmount
        ? Math.random() > 0.3
          ? "Paid"
          : "Pending"
        : undefined;

    orders.push({
      id: `ORD${i.toString().padStart(6, "0")}`,
      orderDate,
      userId: `USR${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(5, "0")}`,
      planName,
      planId: `PLN${Math.floor(Math.random() * 100)
        .toString()
        .padStart(3, "0")}`,
      orderType,
      amountPaid,
      discountApplied,
      creditsIssued,
      creditsUsed,
      creditsBalance,
      creditValue,
      liabilityAmount,
      orderStatus,
      paymentStatus,
      paymentMode: Math.random() > 0.5 ? "Credit Card" : "UPI",
      gatewayTransactionId: `TXN${Math.floor(Math.random() * 1000000)
        .toString()
        .padStart(7, "0")}`,
      referredBy,
      trainerId: hasTrainer
        ? `TRN${Math.floor(Math.random() * 1000)
            .toString()
            .padStart(3, "0")}`
        : undefined,
      trainerName: hasTrainer
        ? `Trainer ${Math.floor(Math.random() * 50) + 1}`
        : undefined,
      referralCode: hasTrainer
        ? `REF${Math.floor(Math.random() * 10000)
            .toString()
            .padStart(5, "0")}`
        : undefined,
      commissionPercentage,
      commissionAmount,
      commissionStatus,
      highUnusedCredits,
      repeatReferral,
      promoUsed,
      onHold,
    });
  }

  return orders;
};

const initialState: FitPassOrdersState = {
  orders: generateFitPassOrders(),
  status: "idle",
  error: null,
};

// Async thunk for fetching FitPass orders
export const fetchFitPassOrders = createAsyncThunk(
  "fitpassOrders/fetchFitPassOrders",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.orders;
  }
);

const fitpassOrdersSlice = createSlice({
  name: "fitpassOrders",
  initialState,
  reducers: {
    updateOrderStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "Active" | "Pending" | "Failed" | "Cancelled";
      }>
    ) => {
      const { id, status } = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.orderStatus = status;
      }
    },
    updatePaymentStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "Paid" | "Pending" | "Failed" | "Refunded";
      }>
    ) => {
      const { id, status } = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.paymentStatus = status;
      }
    },
    updateCommissionStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "Pending" | "Paid" | "Failed";
      }>
    ) => {
      const { id, status } = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.commissionStatus = status;
      }
    },
    holdOrder: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.onHold = true;
        order.orderStatus = "Pending";
      }
    },
    releaseOrder: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.onHold = false;
        order.orderStatus = "Active";
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFitPassOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFitPassOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchFitPassOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch FitPass orders";
      });
  },
});

export const {
  updateOrderStatus,
  updatePaymentStatus,
  updateCommissionStatus,
  holdOrder,
  releaseOrder,
} = fitpassOrdersSlice.actions;
export default fitpassOrdersSlice.reducer;
