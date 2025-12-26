// // src/modules/franchise/franchise-locations/franchiseLocationsSlice.ts
// import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// export interface Location {
//   id: string;
//   sno: number;
//   city: string;
//   areaName: string;
//   partnerName: string;
// }

// export interface Store {
//   id: string;
//   name: string;
//   address: string;
//   city: string;
//   manager: string;
//   contact: string;
//   status: "Active" | "Inactive" | "Pending";
//   type: string;
//   sales: number;
//   locationId: string;
// }

// interface FranchiseLocationsState {
//   locations: Location[];
//   stores: Store[];
//   status: "idle" | "loading" | "succeeded" | "failed";
//   error: string | null;
// }

// // Function to generate mock location data
// const generateLocations = (partnerName: string): Location[] => {
//   const cities = [
//     "Rebala",
//     "Nellore",
//     "Gudur",
//     "Kavali",
//     "Kandukur",
//     "Ongole",
//     "Chirala",
//     "Bapatla",
//     "Tenali",
//     "Guntur",
//     "Vijayawada",
//     "Mangalagiri",
//   ];

//   const areas = [
//     "BUCHIREDDIPALEM",
//     "Rebala",
//     "Main Road",
//     "Market Area",
//     "City Center",
//     "Industrial Zone",
//     "Shopping Complex",
//     "Residential Area",
//     "Commercial Hub",
//     "Downtown",
//     "Uptown",
//     "Suburbs",
//     "Old Town",
//     "New Town",
//   ];

//   const locations: Location[] = [];
//   const numLocations = Math.floor(Math.random() * 5) + 3; // 3-7 locations

//   for (let i = 1; i <= numLocations; i++) {
//     const city = cities[Math.floor(Math.random() * cities.length)];
//     const areaName = areas[Math.floor(Math.random() * areas.length)];

//     locations.push({
//       id: `location-${Date.now()}-${i}`,
//       sno: i,
//       city,
//       areaName,
//       partnerName,
//     });
//   }

//   return locations;
// };

// // Function to generate mock store data
// const generateStores = (locationId: string, city: string): Store[] => {
//   const storeNames = [
//     "Quick Mart",
//     "Fresh Grocer",
//     "City Market",
//     "Neighborhood Store",
//     "Value Shop",
//     "Local Express",
//     "Corner Market",
//     "Food Mart",
//     "Super Saver",
//     "Daily Needs",
//   ];

//   const managers = [
//     "John Smith",
//     "Emily Johnson",
//     "Michael Brown",
//     "Sarah Davis",
//     "Robert Wilson",
//     "Jessica Martinez",
//     "David Anderson",
//     "Lisa Taylor",
//   ];

//   const types = [
//     "Supermarket",
//     "Convenience Store",
//     "Mini Market",
//     "Hypermarket",
//   ];

//   const stores: Store[] = [];
//   const numStores = Math.floor(Math.random() * 8) + 2; // 2-9 stores

//   for (let i = 1; i <= numStores; i++) {
//     const name = storeNames[Math.floor(Math.random() * storeNames.length)];
//     const manager = managers[Math.floor(Math.random() * managers.length)];
//     const type = types[Math.floor(Math.random() * types.length)];
//     const status =
//       Math.random() > 0.3
//         ? "Active"
//         : Math.random() > 0.5
//         ? "Pending"
//         : "Inactive";

//     stores.push({
//       id: `store-${Date.now()}-${i}`,
//       name,
//       address: `${Math.floor(Math.random() * 999) + 1}, ${
//         Math.floor(Math.random() * 20) + 1
//       }th Street`,
//       city,
//       manager,
//       contact: `+91 ${Math.floor(Math.random() * 900) + 100}-${
//         Math.floor(Math.random() * 900) + 100
//       }-${Math.floor(Math.random() * 9000) + 1000}`,
//       status,
//       type,
//       sales: Math.floor(Math.random() * 50000) + 10000,
//       locationId,
//     });
//   }

//   return stores;
// };

// const initialState: FranchiseLocationsState = {
//   locations: [],
//   stores: [],
//   status: "idle",
//   error: null,
// };

// // Async thunk for fetching locations for a partner
// export const fetchLocationsByPartner = createAsyncThunk(
//   "franchiseLocations/fetchLocationsByPartner",
//   async (partnerName: string) => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return generateLocations(partnerName);
//   }
// );

// // Async thunk for fetching stores for a location
// export const fetchStoresByLocation = createAsyncThunk(
//   "franchiseLocations/fetchStoresByLocation",
//   async ({ locationId, city }: { locationId: string; city: string }) => {
//     // Simulate API call
//     await new Promise((resolve) => setTimeout(resolve, 500));
//     return generateStores(locationId, city);
//   }
// );

// const franchiseLocationsSlice = createSlice({
//   name: "franchiseLocations",
//   initialState,
//   reducers: {
//     clearLocations: (state) => {
//       state.locations = [];
//     },
//     clearStores: (state) => {
//       state.stores = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchLocationsByPartner.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchLocationsByPartner.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.locations = action.payload;
//       })
//       .addCase(fetchLocationsByPartner.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch locations";
//       })
//       .addCase(fetchStoresByLocation.pending, (state) => {
//         state.status = "loading";
//       })
//       .addCase(fetchStoresByLocation.fulfilled, (state, action) => {
//         state.status = "succeeded";
//         state.stores = action.payload;
//       })
//       .addCase(fetchStoresByLocation.rejected, (state, action) => {
//         state.status = "failed";
//         state.error = action.error.message || "Failed to fetch stores";
//       });
//   },
// });

// export const { clearLocations, clearStores } = franchiseLocationsSlice.actions;

// export default franchiseLocationsSlice.reducer;

// src/modules/franchise/franchise-locations/franchiseLocationsSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Location {
  id: string;
  sno: number;
  city: string;
  areaName: string;
  partnerName: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  manager: string;
  contact: string;
  status: "Active" | "Inactive" | "Pending";
  type: string;
  sales: number;
  locationId: string;
}

interface FranchiseLocationsState {
  locations: Location[];
  stores: Store[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock location data
const generateLocations = (partnerName: string): Location[] => {
  const cities = [
    "Rebala",
    "Nellore",
    "Gudur",
    "Kavali",
    "Kandukur",
    "Ongole",
    "Chirala",
    "Bapatla",
    "Tenali",
    "Guntur",
    "Vijayawada",
    "Mangalagiri",
  ];

  const areas = [
    "BUCHIREDDIPALEM",
    "Rebala",
    "Main Road",
    "Market Area",
    "City Center",
    "Industrial Zone",
    "Shopping Complex",
    "Residential Area",
    "Commercial Hub",
    "Downtown",
    "Uptown",
    "Suburbs",
    "Old Town",
    "New Town",
  ];

  const locations: Location[] = [];
  const numLocations = Math.floor(Math.random() * 5) + 3; // 3-7 locations

  for (let i = 1; i <= numLocations; i++) {
    const city = cities[Math.floor(Math.random() * cities.length)];
    const areaName = areas[Math.floor(Math.random() * areas.length)];

    locations.push({
      id: `location-${Date.now()}-${i}`,
      sno: i,
      city,
      areaName,
      partnerName,
    });
  }

  return locations;
};

// Function to generate mock store data
const generateStores = (locationId: string, city: string): Store[] => {
  const storeNames = [
    "Quick Mart",
    "Fresh Grocer",
    "City Market",
    "Neighborhood Store",
    "Value Shop",
    "Local Express",
    "Corner Market",
    "Food Mart",
    "Super Saver",
    "Daily Needs",
  ];

  const managers = [
    "John Smith",
    "Emily Johnson",
    "Michael Brown",
    "Sarah Davis",
    "Robert Wilson",
    "Jessica Martinez",
    "David Anderson",
    "Lisa Taylor",
  ];

  const types = [
    "Supermarket",
    "Convenience Store",
    "Mini Market",
    "Hypermarket",
  ];

  const stores: Store[] = [];
  const numStores = Math.floor(Math.random() * 8) + 2; // 2-9 stores

  for (let i = 1; i <= numStores; i++) {
    const name = storeNames[Math.floor(Math.random() * storeNames.length)];
    const manager = managers[Math.floor(Math.random() * managers.length)];
    const type = types[Math.floor(Math.random() * types.length)];
    const status =
      Math.random() > 0.3
        ? "Active"
        : Math.random() > 0.5
        ? "Pending"
        : "Inactive";

    stores.push({
      id: `store-${Date.now()}-${i}`,
      name,
      address: `${Math.floor(Math.random() * 999) + 1}, ${
        Math.floor(Math.random() * 20) + 1
      }th Street`,
      city,
      manager,
      contact: `+91 ${Math.floor(Math.random() * 900) + 100}-${
        Math.floor(Math.random() * 900) + 100
      }-${Math.floor(Math.random() * 9000) + 1000}`,
      status,
      type,
      sales: Math.floor(Math.random() * 50000) + 10000,
      locationId,
    });
  }

  return stores;
};

const initialState: FranchiseLocationsState = {
  locations: [],
  stores: [],
  status: "idle",
  error: null,
};

// Async thunk for fetching locations for a partner
export const fetchLocationsByPartner = createAsyncThunk(
  "franchiseLocations/fetchLocationsByPartner",
  async (partnerName: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    return generateLocations(partnerName);
  }
);

// Async thunk for fetching stores for a location
export const fetchStoresByLocation = createAsyncThunk(
  "franchiseLocations/fetchStoresByLocation",
  async ({ locationId, city }: { locationId: string; city: string }) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    return generateStores(locationId, city);
  }
);

// Async thunk for adding a location
export const addLocationAsync = createAsyncThunk(
  "franchiseLocations/addLocation",
  async (locationData: Omit<Location, "id" | "sno">) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newLocation: Location = {
      ...locationData,
      id: `location-${Date.now()}`,
      sno: 0, // Will be set in the reducer
    };

    return newLocation;
  }
);

// Async thunk for updating a location
export const updateLocationAsync = createAsyncThunk(
  "franchiseLocations/updateLocation",
  async (locationData: Location) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return locationData;
  }
);

// Async thunk for deleting a location
export const deleteLocationAsync = createAsyncThunk(
  "franchiseLocations/deleteLocation",
  async (locationId: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return locationId;
  }
);

// Async thunk for adding a store
export const addStoreAsync = createAsyncThunk(
  "franchiseLocations/addStore",
  async (storeData: Omit<Store, "id">) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newStore: Store = {
      ...storeData,
      id: `store-${Date.now()}`,
    };

    return newStore;
  }
);

// Async thunk for updating a store
export const updateStoreAsync = createAsyncThunk(
  "franchiseLocations/updateStore",
  async (storeData: Store) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return storeData;
  }
);

// Async thunk for deleting a store
export const deleteStoreAsync = createAsyncThunk(
  "franchiseLocations/deleteStore",
  async (storeId: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));

    return storeId;
  }
);

const franchiseLocationsSlice = createSlice({
  name: "franchiseLocations",
  initialState,
  reducers: {
    clearLocations: (state) => {
      state.locations = [];
    },
    clearStores: (state) => {
      state.stores = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocationsByPartner.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocationsByPartner.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.locations = action.payload;
      })
      .addCase(fetchLocationsByPartner.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch locations";
      })
      .addCase(fetchStoresByLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchStoresByLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.stores = action.payload;
      })
      .addCase(fetchStoresByLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch stores";
      })
      .addCase(addLocationAsync.fulfilled, (state, action) => {
        // Calculate the next serial number
        const nextSno =
          state.locations.length > 0
            ? Math.max(...state.locations.map((l) => l.sno)) + 1
            : 1;

        state.locations.push({
          ...action.payload,
          sno: nextSno,
        });
      })
      .addCase(updateLocationAsync.fulfilled, (state, action) => {
        const index = state.locations.findIndex(
          (location) => location.id === action.payload.id
        );
        if (index !== -1) {
          state.locations[index] = action.payload;
        }
      })
      .addCase(deleteLocationAsync.fulfilled, (state, action) => {
        state.locations = state.locations.filter(
          (location) => location.id !== action.payload
        );
      })
      .addCase(addStoreAsync.fulfilled, (state, action) => {
        state.stores.unshift(action.payload);
      })
      .addCase(updateStoreAsync.fulfilled, (state, action) => {
        const index = state.stores.findIndex(
          (store) => store.id === action.payload.id
        );
        if (index !== -1) {
          state.stores[index] = action.payload;
        }
      })
      .addCase(deleteStoreAsync.fulfilled, (state, action) => {
        state.stores = state.stores.filter(
          (store) => store.id !== action.payload
        );
      });
  },
});

export const { clearLocations, clearStores } = franchiseLocationsSlice.actions;

export default franchiseLocationsSlice.reducer;
