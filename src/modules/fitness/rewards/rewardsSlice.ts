// src/modules/fitness/rewards/rewardsSlice.ts
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

export interface Reward {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "Food" | "Merchandise" | "Service";
  pointsRequired: number;
  value: number; // in rupees
  available: boolean;
  limitPerMember: number;
  validUntil: string;
}

export interface MemberReward {
  id: string;
  memberId: string;
  rewardId: string;
  rewardName: string;
  redeemedAt: string;
  status: "Redeemed" | "Used" | "Expired";
  value: number;
}

export interface WeeklyGoal {
  id: string;
  memberId: string;
  weekStart: string;
  weekEnd: string;
  targetCalories: number;
  currentCalories: number;
  completed: boolean;
  rewardsUnlocked: boolean;
  rewardsClaimed: boolean;
}

export interface MemberRewardProgress {
  memberId: string;
  memberName: string;
  memberImage: string;
  currentWeekStart: string;
  currentWeekEnd: string;
  currentWeekCalories: number;
  weeklyTarget: number;
  weeklyProgress: number; // percentage
  goalsAchieved: number; // total count
  availableRewards: number;
  redeemedRewards: number;
  lastGoalAchieved: string;
}

interface RewardsState {
  rewards: Reward[];
  memberRewards: MemberReward[];
  weeklyGoals: WeeklyGoal[];
  memberProgress: MemberRewardProgress[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

// Function to generate mock rewards
const generateRewards = (): Reward[] => {
  const rewards: Reward[] = [];

  rewards.push({
    id: "r1",
    name: "Protein Bowl",
    description: "Nutritious protein-rich bowl with fresh ingredients",
    image: "https://picsum.photos/seed/proteinbowl/200/200.jpg",
    category: "Food",
    pointsRequired: 6000,
    value: 299,
    available: true,
    limitPerMember: 2,
    validUntil: "2024-12-31",
  });

  rewards.push({
    id: "r2",
    name: "Protein Smoothie",
    description: "Refreshing protein smoothie with fruits and supplements",
    image: "https://picsum.photos/seed/proteinsmoothie/200/200.jpg",
    category: "Food",
    pointsRequired: 4000,
    value: 199,
    available: true,
    limitPerMember: 3,
    validUntil: "2024-12-31",
  });

  rewards.push({
    id: "r3",
    name: "Healthy Food Voucher",
    description: "Voucher worth ₹500 for healthy food items",
    image: "https://picsum.photos/seed/foodvoucher/200/200.jpg",
    category: "Food",
    pointsRequired: 6000,
    value: 500,
    available: true,
    limitPerMember: 1,
    validUntil: "2024-12-31",
  });

  rewards.push({
    id: "r4",
    name: "Personal Training Session",
    description: "One-on-one session with a certified trainer",
    image: "https://picsum.photos/seed/training/200/200.jpg",
    category: "Service",
    pointsRequired: 8000,
    value: 1500,
    available: true,
    limitPerMember: 1,
    validUntil: "2024-12-31",
  });

  rewards.push({
    id: "r5",
    name: "Fitness Water Bottle",
    description: "Premium insulated water bottle for workouts",
    image: "https://picsum.photos/seed/bottle/200/200.jpg",
    category: "Merchandise",
    pointsRequired: 3000,
    value: 599,
    available: true,
    limitPerMember: 1,
    validUntil: "2024-12-31",
  });

  rewards.push({
    id: "r6",
    name: "Protein Bar Pack",
    description: "Pack of 12 high-protein energy bars",
    image: "https://picsum.photos/seed/proteinbar/200/200.jpg",
    category: "Food",
    pointsRequired: 2500,
    value: 399,
    available: true,
    limitPerMember: 2,
    validUntil: "2024-12-31",
  });

  return rewards;
};

// Function to generate mock member progress data
const generateMemberProgress = (): MemberRewardProgress[] => {
  const progress: MemberRewardProgress[] = [];

  // Get current week start and end dates
  const today = new Date();
  const currentDay = today.getDay();
  const diff = today.getDate() - currentDay + (currentDay === 0 ? -6 : 1);
  const weekStart = new Date(today.setDate(diff));
  const weekEnd = new Date(today.setDate(diff + 6));

  // Generate sample data for 20 members
  for (let i = 1; i <= 20; i++) {
    const currentCalories = Math.floor(Math.random() * 6000);
    const goalsAchieved = Math.floor(Math.random() * 10);
    const redeemedRewards = Math.floor(Math.random() * 8);

    // Calculate last goal achieved date
    const daysAgo = Math.floor(Math.random() * 30);
    const lastGoalAchieved = new Date(
      Date.now() - daysAgo * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .slice(0, 10);

    progress.push({
      memberId: i.toString(),
      memberName: `Member ${i}`,
      memberImage: `https://picsum.photos/seed/member${i}/100/100.jpg`,
      currentWeekStart: weekStart.toISOString().slice(0, 10),
      currentWeekEnd: weekEnd.toISOString().slice(0, 10),
      currentWeekCalories: currentCalories,
      weeklyTarget: 6000,
      weeklyProgress: Math.round((currentCalories / 6000) * 100),
      goalsAchieved,
      availableRewards: goalsAchieved - redeemedRewards,
      redeemedRewards,
      lastGoalAchieved,
    });
  }

  return progress;
};

const initialState: RewardsState = {
  rewards: generateRewards(),
  memberRewards: [],
  weeklyGoals: [],
  memberProgress: generateMemberProgress(),
  status: "idle",
  error: null,
};

// Async thunk for fetching rewards data
export const fetchRewardsData = createAsyncThunk(
  "rewards/fetchRewardsData",
  async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return {
      rewards: initialState.rewards,
      memberProgress: initialState.memberProgress,
    };
  }
);

// Async thunk for redeeming a reward
export const redeemReward = createAsyncThunk(
  "rewards/redeemReward",
  async ({ memberId, rewardId }: { memberId: string; rewardId: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return { memberId, rewardId };
  }
);

const rewardsSlice = createSlice({
  name: "rewards",
  initialState,
  reducers: {
    addReward: (state, action: PayloadAction<Reward>) => {
      state.rewards.push({ ...action.payload, id: Date.now().toString() });
    },
    editReward: (state, action: PayloadAction<Reward>) => {
      const index = state.rewards.findIndex((r) => r.id === action.payload.id);
      if (index !== -1) state.rewards[index] = action.payload;
    },
    deleteReward: (state, action: PayloadAction<string>) => {
      state.rewards = state.rewards.filter((r) => r.id !== action.payload);
    },
    updateMemberProgress: (
      state,
      action: PayloadAction<{ memberId: string; calories: number }>
    ) => {
      const memberIndex = state.memberProgress.findIndex(
        (m) => m.memberId === action.payload.memberId
      );

      if (memberIndex !== -1) {
        const member = state.memberProgress[memberIndex];
        member.currentWeekCalories += action.payload.calories;
        member.weeklyProgress = Math.round(
          (member.currentWeekCalories / member.weeklyTarget) * 100
        );

        // Check if goal is achieved
        if (
          member.currentWeekCalories >= member.weeklyTarget &&
          member.weeklyProgress >= 100
        ) {
          member.goalsAchieved += 1;
          member.availableRewards += 1;
          member.lastGoalAchieved = new Date().toISOString().slice(0, 10);
        }
      }
    },
    claimWeeklyReward: (state, action: PayloadAction<string>) => {
      const memberIndex = state.memberProgress.findIndex(
        (m) => m.memberId === action.payload
      );

      if (memberIndex !== -1) {
        const member = state.memberProgress[memberIndex];
        if (member.availableRewards > 0) {
          member.availableRewards -= 1;
          member.redeemedRewards += 1;

          // Add to member rewards
          state.memberRewards.push({
            id: Date.now().toString(),
            memberId: action.payload,
            rewardId: "weekly",
            rewardName: "Weekly Goal Reward",
            redeemedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
            status: "Redeemed",
            value: 500,
          });
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewardsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRewardsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.rewards = action.payload.rewards;
        state.memberProgress = action.payload.memberProgress;
      })
      .addCase(fetchRewardsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch rewards data";
      })
      .addCase(redeemReward.fulfilled, (state, action) => {
        const { memberId, rewardId } = action.payload;
        const memberIndex = state.memberProgress.findIndex(
          (m) => m.memberId === memberId
        );

        if (memberIndex !== -1) {
          const member = state.memberProgress[memberIndex];
          if (member.availableRewards > 0) {
            member.availableRewards -= 1;
            member.redeemedRewards += 1;

            // Find the reward details
            const reward = state.rewards.find((r) => r.id === rewardId);
            if (reward) {
              // Add to member rewards
              state.memberRewards.push({
                id: Date.now().toString(),
                memberId,
                rewardId,
                rewardName: reward.name,
                redeemedAt: new Date()
                  .toISOString()
                  .slice(0, 19)
                  .replace("T", " "),
                status: "Redeemed",
                value: reward.value,
              });
            }
          }
        }
      });
  },
});

export const {
  addReward,
  editReward,
  deleteReward,
  updateMemberProgress,
  claimWeeklyReward,
} = rewardsSlice.actions;
export default rewardsSlice.reducer;
