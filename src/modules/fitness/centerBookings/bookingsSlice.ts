// src/modules/fitness/bookings/bookingsSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Booking {
  id: string;
  bookingNo: string;
  bookingDate: string;
  bookingTime: string;
  bookingAmount: number;
  customerName: string;
  phone: string;
  email: string;
  centerId: string;
  centerName: string;
  centerAddress: string;
  coupon?: string;
  status: "Confirmed" | "Pending" | "Cancelled" | "Completed";
  paymentMode: "Cash" | "Card" | "Online" | "Wallet";
  centerRating: number; // 1-5
  trainerRating?: number; // 1-5
  offer?: string;
  trainer?: string;
  created: string;
}

interface BookingsState {
  bookings: Booking[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock bookings
const generateBookings = (): Booking[] => {
  const customers = [
    "Amit Sharma",
    "Priya Patel",
    "Rahul Verma",
    "Anjali Gupta",
    "Vikram Singh",
    "Neha Reddy",
    "Rohit Kumar",
    "Kavita Nair",
    "Sanjay Mishra",
    "Meera Joshi",
    "Arjun Desai",
    "Divya Malhotra",
    "Rajiv Kapoor",
    "Sunita Rao",
    "Aakash Iyer",
  ];

  const trainers = [
    "John Smith",
    "Sarah Johnson",
    "Michael Chen",
    "Emma Williams",
    "James Rodriguez",
    "Olivia Taylor",
    "David Martinez",
    "Sophia Anderson",
  ];

  const offers = [
    "New Member Discount",
    "Summer Special",
    "Weekend Offer",
    "Corporate Package",
    "Student Discount",
    "Senior Citizen Discount",
  ];

  const paymentModes: Booking["paymentMode"][] = [
    "Cash",
    "Card",
    "Online",
    "Wallet",
  ];

  const statuses: Booking["status"][] = [
    "Confirmed",
    "Pending",
    "Cancelled",
    "Completed",
  ];

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

  const bookings: Booking[] = [];

  // Generate 30 mock bookings
  for (let i = 1; i <= 30; i++) {
    const center = centers[Math.floor(Math.random() * centers.length)];
    const daysFromNow = Math.floor(Math.random() * 30) - 15; // From 15 days ago to 15 days from now
    const bookingDate = new Date(Date.now() + daysFromNow * 86400000)
      .toISOString()
      .slice(0, 10);

    // Generate random time
    const hour = Math.floor(Math.random() * 14) + 6; // Between 6:00 and 20:00
    const minute = Math.random() > 0.5 ? "00" : "30";
    const bookingTime = `${hour.toString().padStart(2, "0")}:${minute}`;

    const status =
      daysFromNow < -1
        ? "Completed"
        : daysFromNow === -1
        ? statuses[Math.floor(Math.random() * (statuses.length - 1))] // Exclude "Completed" for recent bookings
        : statuses[Math.floor(Math.random() * (statuses.length - 2))]; // Exclude "Completed" for future bookings

    const hasCoupon = Math.random() > 0.7;
    const hasOffer = Math.random() > 0.6;
    const hasTrainerRating = status === "Completed" && Math.random() > 0.3;

    bookings.push({
      id: i.toString(),
      bookingNo: `BK${1000 + i}`,
      bookingDate,
      bookingTime,
      bookingAmount: Math.floor(Math.random() * 5000) + 1000,
      customerName: customers[Math.floor(Math.random() * customers.length)],
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      email: `customer${i}@example.com`,
      centerId: center.id,
      centerName: center.name,
      centerAddress: center.address,
      coupon: hasCoupon ? `DISC${Math.floor(Math.random() * 100)}` : undefined,
      status,
      paymentMode:
        paymentModes[Math.floor(Math.random() * paymentModes.length)],
      centerRating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
      trainerRating: hasTrainerRating
        ? Math.round((Math.random() * 2 + 3) * 10) / 10
        : undefined,
      offer: hasOffer
        ? offers[Math.floor(Math.random() * offers.length)]
        : undefined,
      trainer: trainers[Math.floor(Math.random() * trainers.length)],
      created: new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  return bookings;
};

const initialState: BookingsState = {
  bookings: generateBookings(),
  status: "idle",
  error: null,
};

// Async thunk for fetching bookings
export const fetchBookings = createAsyncThunk(
  "bookings/fetchBookings",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.bookings;
  }
);

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action: PayloadAction<Booking>) => {
      state.bookings.push({ ...action.payload, id: Date.now().toString() });
    },
    editBooking: (state, action: PayloadAction<Booking>) => {
      const index = state.bookings.findIndex((b) => b.id === action.payload.id);
      if (index !== -1) state.bookings[index] = action.payload;
    },
    deleteBooking: (state, action: PayloadAction<string>) => {
      state.bookings = state.bookings.filter((b) => b.id !== action.payload);
    },
    toggleBookingStatus: (state, action: PayloadAction<string>) => {
      const booking = state.bookings.find((b) => b.id === action.payload);
      if (booking) {
        if (booking.status === "Confirmed") {
          booking.status = "Cancelled";
        } else if (booking.status === "Cancelled") {
          booking.status = "Confirmed";
        } else if (booking.status === "Pending") {
          booking.status = "Confirmed";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookings.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBookings.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.bookings = action.payload;
      })
      .addCase(fetchBookings.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch bookings";
      });
  },
});

export const { addBooking, editBooking, deleteBooking, toggleBookingStatus } =
  bookingsSlice.actions;
export default bookingsSlice.reducer;
