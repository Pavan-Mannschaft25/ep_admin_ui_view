// src/modules/fitness/centres/centresSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface OperatingHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter?: string;
}

export interface FitnessCentre {
  id: string;
  name: string;
  image: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  facilities: string[]; // Gym, Pool, Yoga Studio, Sauna, etc.
  operatingHours: OperatingHours;
  manager: string;
  totalCapacity: number;
  currentMembers: number;
  established: string;
  status: "Active" | "Inactive" | "Maintenance";
  rating: number; // 1-5
  membershipPlans: number;
  description: string;
  website: string;
  socialMedia: SocialMedia;
  created: string;
}

interface CentresState {
  centres: FitnessCentre[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock fitness centres
const generateFitnessCentres = (): FitnessCentre[] => {
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
  const managers = [
    "Rajesh Kumar",
    "Priya Sharma",
    "Amit Patel",
    "Neha Gupta",
    "Vikram Singh",
    "Anjali Nair",
    "Rohit Verma",
    "Kavita Reddy",
  ];
  const facilities = [
    "Gym",
    "Swimming Pool",
    "Yoga Studio",
    "Sauna",
    "Steam Room",
    "Spa",
    "Cardio Area",
    "Weight Training",
    "Group Classes",
    "Personal Training",
    "Nutrition Counseling",
    "Physical Therapy",
    "Child Care",
    "Juice Bar",
    "Lockers",
  ];

  const centres: FitnessCentre[] = [];

  // Add sample data
  centres.push({
    id: "1",
    name: "FitLife Premium",
    image: "https://picsum.photos/seed/centre1/100/100.jpg",
    address: "123, Marine Drive",
    city: "Mumbai",
    state: "Maharashtra",
    phone: "+91 9876543210",
    email: "info@fitlifepremium.com",
    facilities: ["Gym", "Swimming Pool", "Yoga Studio", "Sauna", "Spa"],
    operatingHours: {
      monday: "05:00-23:00",
      tuesday: "05:00-23:00",
      wednesday: "05:00-23:00",
      thursday: "05:00-23:00",
      friday: "05:00-23:00",
      saturday: "06:00-22:00",
      sunday: "06:00-22:00",
    },
    manager: "Rajesh Kumar",
    totalCapacity: 500,
    currentMembers: 387,
    established: "2018-05-15",
    status: "Active",
    rating: 4.5,
    membershipPlans: 5,
    description:
      "Premium fitness centre with state-of-the-art equipment and expert trainers",
    website: "https://fitlifepremium.com",
    socialMedia: {
      facebook: "fitlifepremium",
      instagram: "@fitlifepremium",
    },
    created: "2024-01-10 10:00:00",
  });

  centres.push({
    id: "2",
    name: "PowerZone Gym",
    image: "https://picsum.photos/seed/centre2/100/100.jpg",
    address: "456, Nehru Place",
    city: "Delhi",
    state: "Delhi",
    phone: "+91 9876543211",
    email: "contact@powerzonegym.com",
    facilities: ["Gym", "Weight Training", "Cardio Area", "Personal Training"],
    operatingHours: {
      monday: "05:30-22:30",
      tuesday: "05:30-22:30",
      wednesday: "05:30-22:30",
      thursday: "05:30-22:30",
      friday: "05:30-22:30",
      saturday: "06:00-21:00",
      sunday: "06:00-21:00",
    },
    manager: "Priya Sharma",
    totalCapacity: 300,
    currentMembers: 245,
    established: "2019-03-20",
    status: "Active",
    rating: 4.2,
    membershipPlans: 3,
    description: "Specialized strength training and bodybuilding centre",
    website: "https://powerzonegym.com",
    socialMedia: {
      facebook: "powerzonegym",
      twitter: "@powerzonegym",
    },
    created: "2024-01-12 14:30:00",
  });

  centres.push({
    id: "3",
    name: "Zen Wellness Hub",
    image: "https://picsum.photos/seed/centre3/100/100.jpg",
    address: "789, Koramangala",
    city: "Bangalore",
    state: "Karnataka",
    phone: "+91 9876543212",
    email: "hello@zenwellness.com",
    facilities: [
      "Yoga Studio",
      "Meditation Hall",
      "Spa",
      "Nutrition Counseling",
    ],
    operatingHours: {
      monday: "06:00-21:00",
      tuesday: "06:00-21:00",
      wednesday: "06:00-21:00",
      thursday: "06:00-21:00",
      friday: "06:00-21:00",
      saturday: "07:00-20:00",
      sunday: "07:00-20:00",
    },
    manager: "Amit Patel",
    totalCapacity: 150,
    currentMembers: 98,
    established: "2020-08-10",
    status: "Active",
    rating: 4.8,
    membershipPlans: 4,
    description: "Holistic wellness centre focusing on mind and body balance",
    website: "https://zenwellness.com",
    socialMedia: {
      instagram: "@zenwellness",
    },
    created: "2024-01-15 09:15:00",
  });

  centres.push({
    id: "4",
    name: "AquaFit Centre",
    image: "https://picsum.photos/seed/centre4/100/100.jpg",
    address: "321, Besant Nagar",
    city: "Chennai",
    state: "Tamil Nadu",
    phone: "+91 9876543213",
    email: "info@aquafit.com",
    facilities: ["Swimming Pool", "Water Aerobics", "Sauna", "Steam Room"],
    operatingHours: {
      monday: "05:00-22:00",
      tuesday: "05:00-22:00",
      wednesday: "05:00-22:00",
      thursday: "05:00-22:00",
      friday: "05:00-22:00",
      saturday: "06:00-21:00",
      sunday: "06:00-21:00",
    },
    manager: "Neha Gupta",
    totalCapacity: 200,
    currentMembers: 167,
    established: "2017-11-25",
    status: "Maintenance",
    rating: 4.3,
    membershipPlans: 3,
    description: "Specialized aquatic fitness and swimming training centre",
    website: "https://aquafit.com",
    socialMedia: {
      facebook: "aquafitcentre",
    },
    created: "2024-01-18 16:45:00",
  });

  centres.push({
    id: "5",
    name: "Elite Fitness Club",
    image: "https://picsum.photos/seed/centre5/100/100.jpg",
    address: "654, Salt Lake",
    city: "Kolkata",
    state: "West Bengal",
    phone: "+91 9876543214",
    email: "contact@elitefitness.com",
    facilities: ["Gym", "Pool", "Tennis Court", "Spa", "Restaurant"],
    operatingHours: {
      monday: "05:00-23:00",
      tuesday: "05:00-23:00",
      wednesday: "05:00-23:00",
      thursday: "05:00-23:00",
      friday: "05:00-23:00",
      saturday: "05:00-23:00",
      sunday: "05:00-23:00",
    },
    manager: "Vikram Singh",
    totalCapacity: 800,
    currentMembers: 623,
    established: "2016-04-05",
    status: "Active",
    rating: 4.7,
    membershipPlans: 6,
    description:
      "Luxury fitness club with premium amenities and personalized services",
    website: "https://elitefitness.com",
    socialMedia: {
      facebook: "elitefitnessclub",
      instagram: "@elitefitness",
      twitter: "@elitefitness",
    },
    created: "2024-01-20 11:30:00",
  });

  // Generate additional mock data
  for (let i = 6; i <= 30; i++) {
    const cityIndex = Math.floor(Math.random() * cities.length);
    const numFacilities = Math.floor(Math.random() * 6) + 3;
    const selectedFacilities: string[] = [];

    for (let j = 0; j < numFacilities; j++) {
      let facility;
      do {
        facility = facilities[Math.floor(Math.random() * facilities.length)];
      } while (selectedFacilities.includes(facility));
      selectedFacilities.push(facility);
    }

    const statusOptions: FitnessCentre["status"][] = [
      "Active",
      "Active",
      "Active",
      "Maintenance",
      "Inactive",
    ];
    const status =
      statusOptions[Math.floor(Math.random() * statusOptions.length)];

    const operatingHours: OperatingHours = {
      monday: "05:00-23:00",
      tuesday: "05:00-23:00",
      wednesday: "05:00-23:00",
      thursday: "05:00-23:00",
      friday: "05:00-23:00",
      saturday: "06:00-22:00",
      sunday: "06:00-22:00",
    };

    centres.push({
      id: i.toString(),
      name: `FitCentre ${cities[cityIndex]} ${i}`,
      image: `https://picsum.photos/seed/centre${i}/100/100.jpg`,
      address: `${Math.floor(Math.random() * 999) + 1}, ${
        ["Main Street", "Park Avenue", "City Center", "Commercial Complex"][
          Math.floor(Math.random() * 4)
        ]
      }`,
      city: cities[cityIndex],
      state: states[cityIndex],
      phone: `+91 ${Math.floor(Math.random() * 9000000000) + 1000000000}`,
      email: `contact@fitcentre${i}.com`,
      facilities: selectedFacilities,
      operatingHours,
      manager: managers[Math.floor(Math.random() * managers.length)],
      totalCapacity: Math.floor(Math.random() * 600) + 100,
      currentMembers: Math.floor(Math.random() * 400) + 50,
      established: new Date(
        2015 + Math.floor(Math.random() * 9),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1
      )
        .toISOString()
        .slice(0, 10),
      status,
      rating: Math.round((Math.random() * 2 + 3) * 10) / 10, // 3.0 to 5.0
      membershipPlans: Math.floor(Math.random() * 5) + 2,
      description: `Premium fitness centre in ${cities[cityIndex]} with modern equipment and expert trainers`,
      website: `https://fitcentre${i}.com`,
      socialMedia: {
        facebook: Math.random() > 0.5 ? `fitcentre${i}` : undefined,
        instagram: Math.random() > 0.5 ? `@fitcentre${i}` : undefined,
        twitter: Math.random() > 0.5 ? `@fitcentre${i}` : undefined,
      },
      created: new Date(
        Date.now() - Math.floor(Math.random() * 365) * 24 * 60 * 60 * 1000
      )
        .toISOString()
        .slice(0, 19)
        .replace("T", " "),
    });
  }

  return centres;
};

const initialState: CentresState = {
  centres: generateFitnessCentres(),
  status: "idle",
  error: null,
};

// Async thunk for fetching fitness centres
export const fetchFitnessCentres = createAsyncThunk(
  "centres/fetchFitnessCentres",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return initialState.centres;
  }
);

const centresSlice = createSlice({
  name: "centres",
  initialState,
  reducers: {
    addCentre: (state, action: PayloadAction<FitnessCentre>) => {
      state.centres.push({ ...action.payload, id: Date.now().toString() });
    },
    editCentre: (state, action: PayloadAction<FitnessCentre>) => {
      const index = state.centres.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) state.centres[index] = action.payload;
    },
    deleteCentre: (state, action: PayloadAction<string>) => {
      state.centres = state.centres.filter((c) => c.id !== action.payload);
    },
    toggleCentreStatus: (state, action: PayloadAction<string>) => {
      const centre = state.centres.find((c) => c.id === action.payload);
      if (centre) {
        if (centre.status === "Active") {
          centre.status = "Inactive";
        } else if (centre.status === "Inactive") {
          centre.status = "Active";
        } else if (centre.status === "Maintenance") {
          centre.status = "Active";
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFitnessCentres.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchFitnessCentres.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.centres = action.payload;
      })
      .addCase(fetchFitnessCentres.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch fitness centres";
      });
  },
});

export const { addCentre, editCentre, deleteCentre, toggleCentreStatus } =
  centresSlice.actions;
export default centresSlice.reducer;
