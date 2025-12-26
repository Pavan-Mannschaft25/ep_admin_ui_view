// src/modules/fitness/members/membersSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Membership {
  id: string;
  name: string;
  type: "Basic" | "Premium" | "Platinum" | "Corporate";
  startDate: string;
  endDate: string;
  monthlyFee: number;
  benefits: string[];
  autoRenew: boolean;
}

export interface AttendanceRecord {
  date: string;
  classId: string;
  className: string;
  centreId: string;
  centreName: string;
  checkedIn: string;
  checkedOut?: string;
}

export interface Member {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: "Male" | "Female" | "Other";
  image: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  membership: Membership;
  enrolledClasses: string[]; // Array of class IDs
  credits: number;
  attendance: AttendanceRecord[];
  lastVisit: string;
  joinDate: string;
  status: "Active" | "Inactive" | "Suspended" | "Expired";
  notes: string;
  created: string;
}

interface MembersState {
  members: Member[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock members
const generateMembers = (): Member[] => {
  const firstNames = [
    "John",
    "Jane",
    "Michael",
    "Emily",
    "David",
    "Sarah",
    "Robert",
    "Jessica",
    "William",
    "Ashley",
    "Richard",
    "Amanda",
    "Joseph",
    "Melissa",
    "Thomas",
    "Lisa",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Wilson",
    "Anderson",
    "Taylor",
    "Thomas",
    "Moore",
  ];

  const cities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Pune",
    "Hyderabad",
    "Ahmedabad",
  ];

  const states = [
    "Maharashtra",
    "Delhi",
    "Karnataka",
    "Tamil Nadu",
    "West Bengal",
    "Maharashtra",
    "Telangana",
    "Gujarat",
  ];

  const membershipTypes: Membership["type"][] = [
    "Basic",
    "Premium",
    "Platinum",
    "Corporate",
  ];
  const memberStatuses: Member["status"][] = [
    "Active",
    "Active",
    "Active",
    "Inactive",
    "Suspended",
    "Expired",
  ];

  const members: Member[] = [];

  // Add sample data
  members.push({
    id: "1",
    firstName: "Rahul",
    lastName: "Sharma",
    email: "rahul.sharma@example.com",
    phone: "+91 9876543210",
    dateOfBirth: "1985-06-15",
    gender: "Male",
    image: "https://picsum.photos/seed/member1/100/100.jpg",
    address: "123, Park Avenue",
    city: "Mumbai",
    state: "Maharashtra",
    zipCode: "400001",
    emergencyContact: {
      name: "Priya Sharma",
      phone: "+91 9876543211",
      relationship: "Spouse",
    },
    membership: {
      id: "m1",
      name: "Premium",
      type: "Premium",
      startDate: "2023-01-15",
      endDate: "2024-01-15",
      monthlyFee: 2999,
      benefits: [
        "Access to all equipment",
        "Group classes",
        "Sauna",
        "Personal trainer discount",
      ],
      autoRenew: true,
    },
    enrolledClasses: ["c1", "c3", "c5"],
    credits: 15,
    attendance: [
      {
        date: "2024-03-10",
        classId: "c1",
        className: "Morning Yoga",
        centreId: "1",
        centreName: "FitLife Premium",
        checkedIn: "06:05",
        checkedOut: "07:05",
      },
      {
        date: "2024-03-08",
        classId: "c3",
        className: "Zumba Dance Party",
        centreId: "2",
        centreName: "PowerZone Gym",
        checkedIn: "18:05",
        checkedOut: "18:50",
      },
    ],
    lastVisit: "2024-03-10",
    joinDate: "2022-05-20",
    status: "Active",
    notes: "Prefers morning classes",
    created: "2022-05-20 10:30:00",
  });

  members.push({
    id: "2",
    firstName: "Priya",
    lastName: "Patel",
    email: "priya.patel@example.com",
    phone: "+91 9876543212",
    dateOfBirth: "1990-09-22",
    gender: "Female",
    image: "https://picsum.photos/seed/member2/100/100.jpg",
    address: "456, MG Road",
    city: "Bangalore",
    state: "Karnataka",
    zipCode: "560001",
    emergencyContact: {
      name: "Amit Patel",
      phone: "+91 9876543213",
      relationship: "Brother",
    },
    membership: {
      id: "m2",
      name: "Platinum",
      type: "Platinum",
      startDate: "2023-06-10",
      endDate: "2024-06-10",
      monthlyFee: 4999,
      benefits: [
        "All Premium benefits",
        "Unlimited guest passes",
        "Personal trainer sessions",
        "Nutrition counseling",
      ],
      autoRenew: true,
    },
    enrolledClasses: ["c2", "c4", "c6"],
    credits: 25,
    attendance: [
      {
        date: "2024-03-12",
        classId: "c2",
        className: "HIIT Circuit Training",
        centreId: "3",
        centreName: "Zen Wellness Hub",
        checkedIn: "07:05",
        checkedOut: "07:35",
      },
      {
        date: "2024-03-09",
        classId: "c4",
        className: "Meditation & Mindfulness",
        centreId: "4",
        centreName: "AquaFit Centre",
        checkedIn: "12:35",
        checkedOut: "13:05",
      },
    ],
    lastVisit: "2024-03-12",
    joinDate: "2023-06-10",
    status: "Active",
    notes: "Interested in advanced yoga classes",
    created: "2023-06-10 14:20:00",
  });

  members.push({
    id: "3",
    firstName: "Amit",
    lastName: "Kumar",
    email: "amit.kumar@example.com",
    phone: "+91 9876543214",
    dateOfBirth: "1982-03-10",
    gender: "Male",
    image: "https://picsum.photos/seed/member3/100/100.jpg",
    address: "789, Salt Lake",
    city: "Kolkata",
    state: "West Bengal",
    zipCode: "700001",
    emergencyContact: {
      name: "Sunita Kumar",
      phone: "+91 9876543215",
      relationship: "Mother",
    },
    membership: {
      id: "m3",
      name: "Basic",
      type: "Basic",
      startDate: "2023-03-15",
      endDate: "2024-03-15",
      monthlyFee: 1499,
      benefits: ["Access to gym equipment", "Basic group classes"],
      autoRenew: false,
    },
    enrolledClasses: ["c5", "c7"],
    credits: 5,
    attendance: [
      {
        date: "2024-03-05",
        classId: "c5",
        className: "Evening Pilates",
        centreId: "5",
        centreName: "Elite Fitness Club",
        checkedIn: "19:05",
        checkedOut: "19:50",
      },
    ],
    lastVisit: "2024-03-05",
    joinDate: "2023-03-15",
    status: "Active",
    notes: "Prefers evening workouts",
    created: "2023-03-15 09:15:00",
  });

  members.push({
    id: "4",
    firstName: "Neha",
    lastName: "Singh",
    email: "neha.singh@example.com",
    phone: "+91 9876543216",
    dateOfBirth: "1995-12-05",
    gender: "Female",
    image: "https://picsum.photos/seed/member4/100/100.jpg",
    address: "321, Connaught Place",
    city: "Delhi",
    state: "Delhi",
    zipCode: "110001",
    emergencyContact: {
      name: "Rajiv Singh",
      phone: "+91 9876543217",
      relationship: "Husband",
    },
    membership: {
      id: "m4",
      name: "Corporate",
      type: "Corporate",
      startDate: "2022-09-01",
      endDate: "2024-09-01",
      monthlyFee: 1999,
      benefits: [
        "All Premium benefits",
        "Corporate discounts",
        "Flexible timing",
      ],
      autoRenew: true,
    },
    enrolledClasses: ["c1", "c3", "c5", "c7"],
    credits: 30,
    attendance: [
      {
        date: "2024-03-13",
        classId: "c1",
        className: "Morning Yoga",
        centreId: "1",
        centreName: "FitLife Premium",
        checkedIn: "06:10",
        checkedOut: "07:10",
      },
      {
        date: "2024-03-11",
        classId: "c3",
        className: "Zumba Dance Party",
        centreId: "2",
        centreName: "PowerZone Gym",
        checkedIn: "18:10",
        checkedOut: "18:55",
      },
    ],
    lastVisit: "2024-03-13",
    joinDate: "2022-09-01",
    status: "Active",
    notes: "Very regular member",
    created: "2022-09-01 11:45:00",
  });

  members.push({
    id: "5",
    firstName: "Vikram",
    lastName: "Reddy",
    email: "vikram.reddy@example.com",
    phone: "+91 9876543218",
    dateOfBirth: "1988-07-18",
    gender: "Male",
    image: "https://picsum.photos/seed/member5/100/100.jpg",
    address: "654, Jubilee Hills",
    city: "Hyderabad",
    state: "Telangana",
    zipCode: "500033",
    emergencyContact: {
      name: "Anjali Reddy",
      phone: "+91 9876543219",
      relationship: "Sister",
    },
    membership: {
      id: "m5",
      name: "Premium",
      type: "Premium",
      startDate: "2023-11-20",
      endDate: "2024-11-20",
      monthlyFee: 2999,
      benefits: [
        "Access to all equipment",
        "Group classes",
        "Sauna",
        "Personal trainer discount",
      ],
      autoRenew: true,
    },
    enrolledClasses: ["c2", "c4", "c6", "c8"],
    credits: 20,
    attendance: [
      {
        date: "2024-03-09",
        classId: "c2",
        className: "HIIT Circuit Training",
        centreId: "3",
        centreName: "Zen Wellness Hub",
        checkedIn: "07:10",
        checkedOut: "07:40",
      },
      {
        date: "2024-03-07",
        classId: "c4",
        className: "Meditation & Mindfulness",
        centreId: "4",
        centreName: "AquaFit Centre",
        checkedIn: "12:40",
        checkedOut: "13:10",
      },
    ],
    lastVisit: "2024-03-09",
    joinDate: "2023-11-20",
    status: "Suspended",
    notes: "Payment pending for March",
    created: "2023-11-20 16:30:00",
  });

  // Generate additional mock data
  for (let i = 6; i <= 50; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const cityIndex = Math.floor(Math.random() * cities.length);
    const membershipType =
      membershipTypes[Math.floor(Math.random() * membershipTypes.length)];
    const status =
      memberStatuses[Math.floor(Math.random() * memberStatuses.length)];

    // Generate random attendance records
    const attendanceCount = Math.floor(Math.random() * 20) + 1;
    const attendance: AttendanceRecord[] = [];

    for (let j = 0; j < attendanceCount; j++) {
      const daysAgo = Math.floor(Math.random() * 30);
      const date = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000)
        .toISOString()
        .slice(0, 10);
      const hour = Math.floor(Math.random() * 14) + 6; // Between 6:00 and 20:00
      const minute = Math.random() > 0.5 ? "00" : "30";
      const checkedIn = `${hour.toString().padStart(2, "0")}:${minute}`;

      attendance.push({
        date,
        classId: `c${Math.floor(Math.random() * 10) + 1}`,
        className: [
          "Morning Yoga",
          "Zumba Dance Party",
          "HIIT Circuit Training",
          "Meditation & Mindfulness",
          "Evening Pilates",
        ][Math.floor(Math.random() * 5)],
        centreId: `${Math.floor(Math.random() * 5) + 1}`,
        centreName: [
          "FitLife Premium",
          "PowerZone Gym",
          "Zen Wellness Hub",
          "AquaFit Centre",
          "Elite Fitness Club",
        ][Math.floor(Math.random() * 5)],
        checkedIn,
        checkedOut: `${(hour + 1).toString().padStart(2, "0")}:${minute}`,
      });
    }

    // Sort attendance by date (most recent first)
    attendance.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const joinDate = new Date(
      2020 + Math.floor(Math.random() * 4),
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    );
    const membershipDuration = Math.floor(Math.random() * 24) + 6; // 6 to 30 months
    const membershipEndDate = new Date(joinDate);
    membershipEndDate.setMonth(
      membershipEndDate.getMonth() + membershipDuration
    );

    members.push({
      id: i.toString(),
      firstName,
      lastName,
      email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`,
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      dateOfBirth: new Date(
        1960 + Math.floor(Math.random() * 40),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
      )
        .toISOString()
        .slice(0, 10),
      gender: ["Male", "Female", "Other"][
        Math.floor(Math.random() * 3)
      ] as Member["gender"],
      image: `https://picsum.photos/seed/member${i}/100/100.jpg`,
      address: `${Math.floor(Math.random() * 999) + 1}, ${
        [
          "Main Street",
          "Park Avenue",
          "MG Road",
          "Connaught Place",
          "Jubilee Hills",
        ][Math.floor(Math.random() * 5)]
      }`,
      city: cities[cityIndex],
      state: states[cityIndex],
      zipCode: `${Math.floor(Math.random() * 900000) + 100000}`,
      emergencyContact: {
        name: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
          lastNames[Math.floor(Math.random() * lastNames.length)]
        }`,
        phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
        relationship: ["Spouse", "Parent", "Sibling", "Friend"][
          Math.floor(Math.random() * 4)
        ],
      },
      membership: {
        id: `m${i}`,
        name: membershipType,
        type: membershipType,
        startDate: joinDate.toISOString().slice(0, 10),
        endDate: membershipEndDate.toISOString().slice(0, 10),
        monthlyFee:
          membershipType === "Basic"
            ? 1499
            : membershipType === "Premium"
            ? 2999
            : membershipType === "Platinum"
            ? 4999
            : 1999,
        benefits:
          membershipType === "Basic"
            ? ["Access to gym equipment", "Basic group classes"]
            : membershipType === "Premium"
            ? [
                "Access to all equipment",
                "Group classes",
                "Sauna",
                "Personal trainer discount",
              ]
            : membershipType === "Platinum"
            ? [
                "All Premium benefits",
                "Unlimited guest passes",
                "Personal trainer sessions",
                "Nutrition counseling",
              ]
            : [
                "All Premium benefits",
                "Corporate discounts",
                "Flexible timing",
              ],
        autoRenew: Math.random() > 0.3,
      },
      enrolledClasses: Array.from(
        { length: Math.floor(Math.random() * 5) + 1 },
        (_, index) => `c${Math.floor(Math.random() * 10) + 1}`
      ),
      credits: Math.floor(Math.random() * 30) + 5,
      attendance,
      lastVisit: attendance.length > 0 ? attendance[0].date : "",
      joinDate: joinDate.toISOString().slice(0, 10),
      status,
      notes:
        Math.random() > 0.7
          ? [
              "Prefers morning classes",
              "Interested in advanced yoga",
              "Prefers evening workouts",
              "Very regular member",
              "Payment pending",
            ][Math.floor(Math.random() * 5)]
          : "",
      created: new Date(
        Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  return members;
};

const initialState: MembersState = {
  members: generateMembers(),
  status: "idle",
  error: null,
};

// Async thunk for fetching members
export const fetchMembers = createAsyncThunk(
  "members/fetchMembers",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.members;
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState,
  reducers: {
    addMember: (state, action: PayloadAction<Member>) => {
      state.members.push({ ...action.payload, id: Date.now().toString() });
    },
    editMember: (state, action: PayloadAction<Member>) => {
      const index = state.members.findIndex((m) => m.id === action.payload.id);
      if (index !== -1) state.members[index] = action.payload;
    },
    deleteMember: (state, action: PayloadAction<string>) => {
      state.members = state.members.filter((m) => m.id !== action.payload);
    },
    toggleMemberStatus: (state, action: PayloadAction<string>) => {
      const member = state.members.find((m) => m.id === action.payload);
      if (member) {
        if (member.status === "Active") {
          member.status = "Inactive";
        } else if (member.status === "Inactive") {
          member.status = "Active";
        } else if (member.status === "Suspended") {
          member.status = "Active";
        }
      }
    },
    addAttendanceRecord: (
      state,
      action: PayloadAction<{ memberId: string; record: AttendanceRecord }>
    ) => {
      const member = state.members.find(
        (m) => m.id === action.payload.memberId
      );
      if (member) {
        member.attendance.unshift(action.payload.record);
        member.lastVisit = action.payload.record.date;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMembers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch members";
      });
  },
});

export const {
  addMember,
  editMember,
  deleteMember,
  toggleMemberStatus,
  addAttendanceRecord,
} = membersSlice.actions;
export default membersSlice.reducer;
