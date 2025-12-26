// src/modules/fitness/classBookings/classBookingsSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface ClassBookingOrder {
  id: string;
  orderDate: string;
  fitnessCenterName: string;
  trainerName: string;
  trainerId: string;
  className: string;
  classId: string;
  classDate: string;
  classTime: string;
  mode: "Online" | "Offline";
  fitnessCategory: string;
  duration: number; // in minutes
  bookingsCount: number;
  creditsPerBooking: number;
  totalCreditsConsumed: number;
  averagePricePerBooking: number;
  grossBookingValue: number;
  trainerPricePerBooking: number;
  trainerTotalPayout: number;
  platformMargin: number;
  discountImpact: number;
  orderStatus: "Completed" | "Cancelled" | "No-show";
  classStatus: "Completed" | "Cancelled";
  attendanceValidated: boolean;
  payoutEligible: boolean;
  payoutWeek: string;
  lowBookingClass: boolean;
  repeatedCancellations: boolean;
  highPayout: boolean;
  payoutOnHold: boolean;
}

interface ClassBookingsState {
  orders: ClassBookingOrder[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock class booking orders
const generateClassBookingOrders = (): ClassBookingOrder[] => {
  const fitnessCenters = [
    "FitZone Central",
    "PowerHouse Gym",
    "Zen Wellness Studio",
    "ActiveLife Fitness",
    "Elite Fitness Hub",
    "Sweat & Tone",
    "Mindful Movement",
    "Urban Fitness Lab",
  ];

  const trainers = [
    "John Smith",
    "Sarah Johnson",
    "Michael Brown",
    "Emily Davis",
    "David Wilson",
    "Jessica Miller",
    "Robert Taylor",
    "Amanda Anderson",
  ];

  const classNames = [
    "Morning Yoga Flow",
    "HIIT Training",
    "Zumba Dance Party",
    "Strength Training",
    "Pilates Core",
    "Boxing Fitness",
    "Spinning Class",
    "Aqua Aerobics",
    "Meditation Session",
    "CrossFit Challenge",
  ];

  const fitnessCategories = [
    "Yoga",
    "HIIT",
    "Zumba",
    "Gym",
    "Pilates",
    "Boxing",
    "Cycling",
    "Swimming",
    "Meditation",
    "CrossFit",
  ];

  const orders: ClassBookingOrder[] = [];

  // Generate mock data
  for (let i = 1; i <= 50; i++) {
    const fitnessCenter =
      fitnessCenters[Math.floor(Math.random() * fitnessCenters.length)];
    const trainer = trainers[Math.floor(Math.random() * trainers.length)];
    const className = classNames[Math.floor(Math.random() * classNames.length)];
    const fitnessCategory =
      fitnessCategories[Math.floor(Math.random() * fitnessCategories.length)];
    const mode = Math.random() > 0.5 ? "Online" : "Offline";
    const orderStatusOptions: ("Completed" | "Cancelled" | "No-show")[] = [
      "Completed",
      "Cancelled",
      "No-show",
    ];
    const orderStatus =
      orderStatusOptions[Math.floor(Math.random() * orderStatusOptions.length)];
    const classStatus = orderStatus === "Completed" ? "Completed" : "Cancelled";
    const attendanceValidated =
      orderStatus === "Completed" ? Math.random() > 0.2 : false;
    const payoutEligible = attendanceValidated && orderStatus === "Completed";

    const bookingsCount = Math.floor(Math.random() * 20) + 5;
    const creditsPerBooking = Math.floor(Math.random() * 5) + 1;
    const totalCreditsConsumed = bookingsCount * creditsPerBooking;
    const averagePricePerBooking = Math.floor(Math.random() * 500) + 100;
    const grossBookingValue = bookingsCount * averagePricePerBooking;
    const trainerPricePerBooking = averagePricePerBooking * 0.7; // 70% goes to trainer
    const trainerTotalPayout = bookingsCount * trainerPricePerBooking;
    const platformMargin = grossBookingValue - trainerTotalPayout;
    const discountImpact =
      Math.random() > 0.7 ? Math.floor(Math.random() * 1000) + 100 : 0;

    const lowBookingClass = bookingsCount < 8;
    const highPayout = trainerTotalPayout > 5000;
    const repeatedCancellations = Math.random() > 0.9; // 10% chance
    const payoutOnHold = repeatedCancellations || Math.random() > 0.95; // 5% chance or if repeated cancellations

    // Generate a random date within the last 30 days
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    const orderDate = date.toISOString().slice(0, 10);

    // Class date is the same or after order date
    const classDate = new Date(date);
    classDate.setDate(classDate.getDate() + Math.floor(Math.random() * 7));
    const classDateStr = classDate.toISOString().slice(0, 10);

    // Generate a random time
    const hours = Math.floor(Math.random() * 12) + 6; // Between 6 AM and 6 PM
    const minutes = Math.random() > 0.5 ? "00" : "30";
    const classTime = `${hours}:${minutes}`;

    // Calculate payout week (next Friday after class date)
    const payoutDate = new Date(classDate);
    const dayOfWeek = payoutDate.getDay();
    const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7; // Days until next Friday
    payoutDate.setDate(payoutDate.getDate() + daysUntilFriday);
    const payoutWeek = payoutDate.toISOString().slice(0, 10);

    orders.push({
      id: `ORD${i.toString().padStart(5, "0")}`,
      orderDate,
      fitnessCenterName: fitnessCenter,
      trainerName: trainer,
      trainerId: `TRN${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      className,
      classId: `CLS${Math.floor(Math.random() * 1000)
        .toString()
        .padStart(3, "0")}`,
      classDate: classDateStr,
      classTime,
      mode,
      fitnessCategory,
      duration: Math.floor(Math.random() * 60) + 30, // 30-90 minutes
      bookingsCount,
      creditsPerBooking,
      totalCreditsConsumed,
      averagePricePerBooking,
      grossBookingValue,
      trainerPricePerBooking,
      trainerTotalPayout,
      platformMargin,
      discountImpact,
      orderStatus,
      classStatus,
      attendanceValidated,
      payoutEligible,
      payoutWeek,
      lowBookingClass,
      repeatedCancellations,
      highPayout,
      payoutOnHold,
    });
  }

  return orders;
};

const initialState: ClassBookingsState = {
  orders: generateClassBookingOrders(),
  status: "idle",
  error: null,
};

// Async thunk for fetching class booking orders
export const fetchClassBookingOrders = createAsyncThunk(
  "classBookings/fetchClassBookingOrders",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.orders;
  }
);

const classBookingsSlice = createSlice({
  name: "classBookings",
  initialState,
  reducers: {
    updateOrderStatus: (
      state,
      action: PayloadAction<{
        id: string;
        status: "Completed" | "Cancelled" | "No-show";
      }>
    ) => {
      const { id, status } = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.orderStatus = status;
        order.classStatus = status === "Completed" ? "Completed" : "Cancelled";
        order.attendanceValidated =
          status === "Completed" ? order.attendanceValidated : false;
        order.payoutEligible =
          status === "Completed" && order.attendanceValidated;
      }
    },
    validateAttendance: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.attendanceValidated = true;
        order.payoutEligible = order.orderStatus === "Completed";
      }
    },
    holdPayout: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.payoutOnHold = true;
        order.payoutEligible = false;
      }
    },
    releasePayout: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const order = state.orders.find((o) => o.id === id);
      if (order) {
        order.payoutOnHold = false;
        order.payoutEligible =
          order.orderStatus === "Completed" && order.attendanceValidated;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClassBookingOrders.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClassBookingOrders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.orders = action.payload;
      })
      .addCase(fetchClassBookingOrders.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message || "Failed to fetch class booking orders";
      });
  },
});

export const {
  updateOrderStatus,
  validateAttendance,
  holdPayout,
  releasePayout,
} = classBookingsSlice.actions;
export default classBookingsSlice.reducer;
