// src/modules/fitness/centerPayments/centerPaymentsSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface CenterPayment {
  id: string;
  date: string;
  fitnessCenterName: string;
  fitnessCenterId: string;
  fitnessCenterAddress: string;
  totalBookings: number;
  centerAmount: number;
  taxAmount: number;
  totalAmount: number;
  transactionDate: string;
  transactionId: string;
  status: "Pending" | "Completed" | "Failed" | "Refunded";
  bookingPayments?: BookingPayment[];
}

export interface BookingPayment {
  id: string;
  date: string;
  bookingId: string;
  bookingAmount: number;
  centerAmount: number;
  taxAmount: number;
  appShare: number;
  trainerCharges: number;
  packageCharges: number;
  platformFee: number;
  couponCost: number;
  balanceAppAmount: number;
  status: "Pending" | "Completed" | "Failed" | "Refunded";
  foAmount: number;
}

interface CenterPaymentsState {
  centerPayments: CenterPayment[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock center payments
const generateCenterPayments = (): CenterPayment[] => {
  const centers = [
    { id: "1", name: "FitLife Premium", address: "123, Marine Drive, Mumbai" },
    { id: "2", name: "PowerZone Gym", address: "456, Nehru Place, Delhi" },
    {
      id: "3",
      name: "Zen Wellness Hub",
      address: "789, Koramangala, Bangalore",
    },
    { id: "4", name: "AquaFit Centre", address: "321, Besant Nagar, Chennai" },
    { id: "5", name: "Elite Fitness Club", address: "654, Salt Lake, Kolkata" },
  ];

  const statuses: CenterPayment["status"][] = [
    "Pending",
    "Completed",
    "Failed",
    "Refunded",
  ];

  const centerPayments: CenterPayment[] = [];

  // Generate 15 mock center payments
  for (let i = 1; i <= 15; i++) {
    const center = centers[Math.floor(Math.random() * centers.length)];
    const daysFromNow = Math.floor(Math.random() * 30) - 15; // From 15 days ago to 15 days from now
    const date = new Date(Date.now() + daysFromNow * 86400000)
      .toISOString()
      .slice(0, 10);

    const totalBookings = Math.floor(Math.random() * 50) + 10;
    const centerAmount = Math.floor(Math.random() * 100000) + 20000;
    const taxAmount = Math.floor(centerAmount * 0.18); // 18% tax
    const totalAmount = centerAmount + taxAmount;

    const status =
      daysFromNow < -1
        ? "Completed"
        : daysFromNow === -1
        ? statuses[Math.floor(Math.random() * (statuses.length - 1))] // Exclude "Refunded" for recent payments
        : statuses[Math.floor(Math.random() * (statuses.length - 2))]; // Exclude "Refunded" for future payments

    // Generate booking payments for this center payment
    const bookingPayments: BookingPayment[] = [];
    for (let j = 1; j <= Math.min(totalBookings, 10); j++) {
      const bookingAmount = Math.floor(Math.random() * 5000) + 1000;
      const centerBookingAmount = Math.floor(bookingAmount * 0.7);
      const taxBookingAmount = Math.floor(centerBookingAmount * 0.18);
      const appShare = Math.floor(bookingAmount * 0.1);
      const trainerCharges = Math.floor(bookingAmount * 0.05);
      const packageCharges = Math.floor(bookingAmount * 0.08);
      const platformFee = Math.floor(bookingAmount * 0.02);
      const couponCost =
        Math.random() > 0.7 ? Math.floor(bookingAmount * 0.05) : 0;
      const balanceAppAmount = appShare + platformFee - couponCost;
      const foAmount = Math.floor(bookingAmount * 0.05);

      const bookingStatus =
        status === "Completed"
          ? "Completed"
          : status === "Failed"
          ? "Failed"
          : statuses[Math.floor(Math.random() * 2)]; // Only Pending or Completed for individual bookings

      bookingPayments.push({
        id: `BP${1000 + i}${j}`,
        date,
        bookingId: `BK${1000 + i}${j}`,
        bookingAmount,
        centerAmount: centerBookingAmount,
        taxAmount: taxBookingAmount,
        appShare,
        trainerCharges,
        packageCharges,
        platformFee,
        couponCost,
        balanceAppAmount,
        status: bookingStatus,
        foAmount,
      });
    }

    centerPayments.push({
      id: i.toString(),
      date,
      fitnessCenterName: center.name,
      fitnessCenterId: center.id,
      fitnessCenterAddress: center.address,
      totalBookings,
      centerAmount,
      taxAmount,
      totalAmount,
      transactionDate: new Date(
        Date.now() + daysFromNow * 86400000 + Math.random() * 86400000
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
      transactionId: `TXN${100000 + i}`,
      status,
      bookingPayments,
    });
  }

  return centerPayments;
};

const initialState: CenterPaymentsState = {
  centerPayments: generateCenterPayments(),
  status: "idle",
  error: null,
};

// Async thunk for fetching center payments
export const fetchCenterPayments = createAsyncThunk(
  "centerPayments/fetchCenterPayments",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.centerPayments;
  }
);

const centerPaymentsSlice = createSlice({
  name: "centerPayments",
  initialState,
  reducers: {
    // Add any reducers if needed
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCenterPayments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCenterPayments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.centerPayments = action.payload;
      })
      .addCase(fetchCenterPayments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch center payments";
      });
  },
});

export default centerPaymentsSlice.reducer;
