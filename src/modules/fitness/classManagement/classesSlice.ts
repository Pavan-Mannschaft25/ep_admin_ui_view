// // src/modules/fitness/classes/classesSlice.ts
// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// export interface Class {
//   id: string;
//   name: string;
//   image: string;
//   instructor: string;
//   description: string;
//   duration: number; // in minutes
//   time: string; // e.g., "06:00-07:00"
//   date: string; // e.g., "2024-03-15"
//   capacity: number;
//   enrolled: number;
//   credits: number;
//   type:
//     | "Yoga"
//     | "Zumba"
//     | "Gym"
//     | "Meditation"
//     | "Pilates"
//     | "CrossFit"
//     | "Swimming"
//     | "Dance"
//     | "Boxing"
//     | "Cycling";
//   difficulty: "Beginner" | "Intermediate" | "Advanced";
//   location: string;
//   online: boolean;
//   tags: string[]; // Popular, New, Limited, etc.
//   status: "Active" | "Cancelled" | "Completed";
//   created: string;
// }

// interface ClassesState {
//   classes: Class[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // Function to generate mock classes
// const generateClasses = (): Class[] => {
//   const instructors = [
//     "Sarah Johnson",
//     "Michael Chen",
//     "Emma Williams",
//     "James Rodriguez",
//     "Olivia Taylor",
//     "David Martinez",
//     "Sophia Anderson",
//     "William Brown",
//   ];

//   const locations = [
//     "Main Studio",
//     "Room A",
//     "Room B",
//     "Gym Floor",
//     "Pool Area",
//     "Outdoor Area",
//     "Virtual Studio",
//   ];

//   const classes: Class[] = [];

//   // Add sample data
//   classes.push({
//     id: "1",
//     name: "Morning Yoga",
//     image: "https://picsum.photos/seed/yoga1/100/100.jpg",
//     instructor: "Sarah Johnson",
//     description: "Start your day with a refreshing yoga session",
//     duration: 60,
//     time: "06:00-07:00",
//     date: new Date().toISOString().slice(0, 10),
//     capacity: 20,
//     enrolled: 15,
//     credits: 5,
//     type: "Yoga",
//     difficulty: "Beginner",
//     location: "Main Studio",
//     online: true,
//     tags: ["Popular"],
//     status: "Active",
//     created: "2024-03-10 08:00:00",
//   });

//   classes.push({
//     id: "2",
//     name: "Zumba Dance Party",
//     image: "https://picsum.photos/seed/zumba1/100/100.jpg",
//     instructor: "Michael Chen",
//     description: "High-energy dance workout with Latin rhythms",
//     duration: 45,
//     time: "18:00-18:45",
//     date: new Date().toISOString().slice(0, 10),
//     capacity: 30,
//     enrolled: 25,
//     credits: 7,
//     type: "Zumba",
//     difficulty: "Intermediate",
//     location: "Room A",
//     online: false,
//     tags: ["Popular", "New"],
//     status: "Active",
//     created: "2024-03-12 14:30:00",
//   });

//   classes.push({
//     id: "3",
//     name: "HIIT Circuit Training",
//     image: "https://picsum.photos/seed/hiit1/100/100.jpg",
//     instructor: "Emma Williams",
//     description: "High-intensity interval training for maximum burn",
//     duration: 30,
//     time: "07:00-07:30",
//     date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), // Tomorrow
//     capacity: 15,
//     enrolled: 12,
//     credits: 8,
//     type: "CrossFit",
//     difficulty: "Advanced",
//     location: "Gym Floor",
//     online: false,
//     tags: ["Limited"],
//     status: "Active",
//     created: "2024-03-11 10:15:00",
//   });

//   classes.push({
//     id: "4",
//     name: "Meditation & Mindfulness",
//     image: "https://picsum.photos/seed/meditation1/100/100.jpg",
//     instructor: "James Rodriguez",
//     description: "Find inner peace with guided meditation",
//     duration: 30,
//     time: "12:30-13:00",
//     date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), // Tomorrow
//     capacity: 25,
//     enrolled: 8,
//     credits: 3,
//     type: "Meditation",
//     difficulty: "Beginner",
//     location: "Virtual Studio",
//     online: true,
//     tags: ["New"],
//     status: "Active",
//     created: "2024-03-13 16:45:00",
//   });

//   classes.push({
//     id: "5",
//     name: "Evening Pilates",
//     image: "https://picsum.photos/seed/pilates1/100/100.jpg",
//     instructor: "Olivia Taylor",
//     description: "Strengthen your core with Pilates exercises",
//     duration: 45,
//     time: "19:00-19:45",
//     date: new Date(Date.now() + 172800000).toISOString().slice(0, 10), // Day after tomorrow
//     capacity: 18,
//     enrolled: 14,
//     credits: 6,
//     type: "Pilates",
//     difficulty: "Intermediate",
//     location: "Room B",
//     online: true,
//     tags: ["Popular"],
//     status: "Active",
//     created: "2024-03-14 09:20:00",
//   });

//   // Generate additional mock data
//   for (let i = 6; i <= 30; i++) {
//     const types: Class["type"][] = [
//       "Yoga",
//       "Zumba",
//       "Gym",
//       "Meditation",
//       "Pilates",
//       "CrossFit",
//       "Swimming",
//       "Dance",
//       "Boxing",
//       "Cycling",
//     ];
//     const difficulties: Class["difficulty"][] = [
//       "Beginner",
//       "Intermediate",
//       "Advanced",
//     ];
//     const tags = ["Popular", "New", "Limited", "Premium", "Basic"];

//     const type = types[Math.floor(Math.random() * types.length)];
//     const difficulty =
//       difficulties[Math.floor(Math.random() * difficulties.length)];
//     const numTags = Math.floor(Math.random() * 2) + 1;
//     const selectedTags: string[] = [];

//     for (let j = 0; j < numTags; j++) {
//       let tag;
//       do {
//         tag = tags[Math.floor(Math.random() * tags.length)];
//       } while (selectedTags.includes(tag));
//       selectedTags.push(tag);
//     }

//     const isOnline = Math.random() > 0.5;
//     const daysFromNow = Math.floor(Math.random() * 7);
//     const classDate = new Date(Date.now() + daysFromNow * 86400000)
//       .toISOString()
//       .slice(0, 10);

//     // Generate random time
//     const startHour = Math.floor(Math.random() * 14) + 6; // Between 6:00 and 20:00
//     const startMinute = Math.random() > 0.5 ? "00" : "30";
//     const duration = [30, 45, 60, 90][Math.floor(Math.random() * 4)];

//     const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute}`;
//     const endHour = Math.floor(
//       (startHour * 60 + parseInt(startMinute) + duration) / 60
//     );
//     const endMinute = ((startHour * 60 + parseInt(startMinute) + duration) % 60)
//       .toString()
//       .padStart(2, "0");
//     const endTime = `${endHour.toString().padStart(2, "0")}:${endMinute}`;

//     const capacity = Math.floor(Math.random() * 25) + 10;
//     const enrolled = Math.floor(Math.random() * capacity);

//     const status =
//       daysFromNow === 0
//         ? "Active"
//         : daysFromNow < 0
//         ? "Completed"
//         : Math.random() > 0.9
//         ? "Cancelled"
//         : "Active";

//     classes.push({
//       id: i.toString(),
//       name: `${type} ${difficulty} Class`,
//       image: `https://picsum.photos/seed/${type}${i}/100/100.jpg`,
//       instructor: instructors[Math.floor(Math.random() * instructors.length)],
//       description: `Join this ${difficulty.toLowerCase()} ${type.toLowerCase()} class for a great workout`,
//       duration,
//       time: `${startTime}-${endTime}`,
//       date: classDate,
//       capacity,
//       enrolled,
//       credits: Math.floor(Math.random() * 10) + 2,
//       type,
//       difficulty,
//       location: locations[Math.floor(Math.random() * locations.length)],
//       online: isOnline,
//       tags: selectedTags,
//       status,
//       created: new Date(
//         Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
//       )
//         .toISOString()
//         .slice(0, 19)
//         .replace("T", " "),
//     });
//   }

//   return classes;
// };

// const initialState: ClassesState = {
//   classes: generateClasses(),
//   status: "idle",
//   error: null,
// };

// // Async thunk for fetching classes
// export const fetchClasses = createAsyncThunk(
//   "classes/fetchClasses",
//   async () => {
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return initialState.classes;
//   }
// );

// const classesSlice = createSlice({
//   name: "classes",
//   initialState,
//   reducers: {
//     addClass: (state, action: PayloadAction<Class>) => {
//       state.classes.push({ ...action.payload, id: Date.now().toString() });
//     },
//     editClass: (state, action: PayloadAction<Class>) => {
//       const index = state.classes.findIndex((c) => c.id === action.payload.id);
//       if (index !== -1) state.classes[index] = action.payload;
//     },
//     deleteClass: (state, action: PayloadAction<string>) => {
//       state.classes = state.classes.filter((c) => c.id !== action.payload);
//     },
//     toggleClassStatus: (state, action: PayloadAction<string>) => {
//       const classItem = state.classes.find((c) => c.id === action.payload);
//       if (classItem) {
//         if (classItem.status === "Active") {
//           classItem.status = "Cancelled";
//         } else if (classItem.status === "Cancelled") {
//           classItem.status = "Active";
//         }
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchClasses.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchClasses.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.classes = action.payload;
//       })
//       .addCase(fetchClasses.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch classes";
//       });
//   },
// });

// export const { addClass, editClass, deleteClass, toggleClassStatus } =
//   classesSlice.actions;
// export default classesSlice.reducer;

// src/modules/fitness/classes/classesSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Class {
  id: string;
  name: string;
  image: string;
  instructor: string;
  description: string;
  duration: number; // in minutes
  time: string; // e.g., "06:00-07:00"
  date: string; // e.g., "2024-03-15"
  capacity: number;
  enrolled: number;
  credits: number;
  type:
    | "Yoga"
    | "Zumba"
    | "Gym"
    | "Meditation"
    | "Pilates"
    | "CrossFit"
    | "Swimming"
    | "Dance"
    | "Boxing"
    | "Cycling";
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  location: string;
  online: boolean;
  tags: string[]; // Popular, New, Limited, etc.
  status: "Active" | "Cancelled" | "Completed";
  created: string;
}

interface ClassesState {
  classes: Class[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock classes
const generateClasses = (): Class[] => {
  const instructors = [
    "Sarah Johnson",
    "Michael Chen",
    "Emma Williams",
    "James Rodriguez",
    "Olivia Taylor",
    "David Martinez",
    "Sophia Anderson",
    "William Brown",
  ];

  const locations = [
    "Main Studio",
    "Room A",
    "Room B",
    "Gym Floor",
    "Pool Area",
    "Outdoor Area",
    "Virtual Studio",
  ];

  const classes: Class[] = [];

  // Add sample data
  classes.push({
    id: "1",
    name: "Morning Yoga",
    image: "https://picsum.photos/seed/yoga1/100/100.jpg",
    instructor: "Sarah Johnson",
    description: "Start your day with a refreshing yoga session",
    duration: 60,
    time: "06:00-07:00",
    date: new Date().toISOString().slice(0, 10),
    capacity: 20,
    enrolled: 15,
    credits: 5,
    type: "Yoga",
    difficulty: "Beginner",
    location: "Main Studio",
    online: true,
    tags: ["Popular"],
    status: "Active",
    created: "2024-03-10 08:00:00",
  });

  classes.push({
    id: "2",
    name: "Zumba Dance Party",
    image: "https://picsum.photos/seed/zumba1/100/100.jpg",
    instructor: "Michael Chen",
    description: "High-energy dance workout with Latin rhythms",
    duration: 45,
    time: "18:00-18:45",
    date: new Date().toISOString().slice(0, 10),
    capacity: 30,
    enrolled: 25,
    credits: 7,
    type: "Zumba",
    difficulty: "Intermediate",
    location: "Room A",
    online: false,
    tags: ["Popular", "New"],
    status: "Active",
    created: "2024-03-12 14:30:00",
  });

  classes.push({
    id: "3",
    name: "HIIT Circuit Training",
    image: "https://picsum.photos/seed/hiit1/100/100.jpg",
    instructor: "Emma Williams",
    description: "High-intensity interval training for maximum burn",
    duration: 30,
    time: "07:00-07:30",
    date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), // Tomorrow
    capacity: 15,
    enrolled: 12,
    credits: 8,
    type: "CrossFit",
    difficulty: "Advanced",
    location: "Gym Floor",
    online: false,
    tags: ["Limited"],
    status: "Active",
    created: "2024-03-11 10:15:00",
  });

  classes.push({
    id: "4",
    name: "Meditation & Mindfulness",
    image: "https://picsum.photos/seed/meditation1/100/100.jpg",
    instructor: "James Rodriguez",
    description: "Find inner peace with guided meditation",
    duration: 30,
    time: "12:30-13:00",
    date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), // Tomorrow
    capacity: 25,
    enrolled: 8,
    credits: 3,
    type: "Meditation",
    difficulty: "Beginner",
    location: "Virtual Studio",
    online: true,
    tags: ["New"],
    status: "Active",
    created: "2024-03-13 16:45:00",
  });

  classes.push({
    id: "5",
    name: "Evening Pilates",
    image: "https://picsum.photos/seed/pilates1/100/100.jpg",
    instructor: "Olivia Taylor",
    description: "Strengthen your core with Pilates exercises",
    duration: 45,
    time: "19:00-19:45",
    date: new Date(Date.now() + 172800000).toISOString().slice(0, 10), // Day after tomorrow
    capacity: 18,
    enrolled: 14,
    credits: 6,
    type: "Pilates",
    difficulty: "Intermediate",
    location: "Room B",
    online: true,
    tags: ["Popular"],
    status: "Active",
    created: "2024-03-14 09:20:00",
  });

  // Generate additional mock data
  for (let i = 6; i <= 30; i++) {
    const types: Class["type"][] = [
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
    const difficulties: Class["difficulty"][] = [
      "Beginner",
      "Intermediate",
      "Advanced",
    ];
    const tags = ["Popular", "New", "Limited", "Premium", "Basic"];

    const type = types[Math.floor(Math.random() * types.length)];
    const difficulty =
      difficulties[Math.floor(Math.random() * difficulties.length)];
    const numTags = Math.floor(Math.random() * 2) + 1;
    const selectedTags: string[] = [];

    for (let j = 0; j < numTags; j++) {
      let tag;
      do {
        tag = tags[Math.floor(Math.random() * tags.length)];
      } while (selectedTags.includes(tag));
      selectedTags.push(tag);
    }

    const isOnline = Math.random() > 0.5;
    const daysFromNow = Math.floor(Math.random() * 7);
    const classDate = new Date(Date.now() + daysFromNow * 86400000)
      .toISOString()
      .slice(0, 10);

    // Generate random time
    const startHour = Math.floor(Math.random() * 14) + 6; // Between 6:00 and 20:00
    const startMinute = Math.random() > 0.5 ? "00" : "30";
    const duration = [30, 45, 60, 90][Math.floor(Math.random() * 4)];

    const startTime = `${startHour.toString().padStart(2, "0")}:${startMinute}`;
    const endHour = Math.floor(
      (startHour * 60 + parseInt(startMinute) + duration) / 60
    );
    const endMinute = ((startHour * 60 + parseInt(startMinute) + duration) % 60)
      .toString()
      .padStart(2, "0");
    const endTime = `${endHour.toString().padStart(2, "0")}:${endMinute}`;

    const capacity = Math.floor(Math.random() * 25) + 10;
    const enrolled = Math.floor(Math.random() * capacity);

    const status =
      daysFromNow === 0
        ? "Active"
        : daysFromNow < 0
        ? "Completed"
        : Math.random() > 0.9
        ? "Cancelled"
        : "Active";

    classes.push({
      id: i.toString(),
      name: `${type} ${difficulty} Class`,
      image: `https://picsum.photos/seed/${type}${i}/100/100.jpg`,
      instructor: instructors[Math.floor(Math.random() * instructors.length)],
      description: `Join this ${difficulty.toLowerCase()} ${type.toLowerCase()} class for a great workout`,
      duration,
      time: `${startTime}-${endTime}`,
      date: classDate,
      capacity,
      enrolled,
      credits: Math.floor(Math.random() * 10) + 2,
      type,
      difficulty,
      location: locations[Math.floor(Math.random() * locations.length)],
      online: isOnline,
      tags: selectedTags,
      status,
      created: new Date(
        Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  return classes;
};

const initialState: ClassesState = {
  classes: generateClasses(),
  status: "idle",
  error: null,
};

// Async thunk for fetching classes
export const fetchClasses = createAsyncThunk(
  "classes/fetchClasses",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.classes;
  }
);

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    addClass: (state, action: PayloadAction<Class>) => {
      state.classes.push({ ...action.payload, id: Date.now().toString() });
    },
    editClass: (state, action: PayloadAction<Class>) => {
      const index = state.classes.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.classes[index] = action.payload;
    },
    deleteClass: (state, action: PayloadAction<string>) => {
      state.classes = state.classes.filter((c) => c.id !== action.payload);
    },
    toggleClassStatus: (state, action: PayloadAction<string>) => {
      const classItem = state.classes.find((c) => c.id === action.payload);
      if (classItem) {
        if (classItem.status === "Active") {
          classItem.status = "Cancelled";
        } else if (classItem.status === "Cancelled") {
          classItem.status = "Active";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchClasses.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchClasses.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.classes = action.payload;
      })
      .addCase(fetchClasses.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch classes";
      });
  },
});

export const { addClass, editClass, deleteClass, toggleClassStatus } =
  classesSlice.actions;
export default classesSlice.reducer;
