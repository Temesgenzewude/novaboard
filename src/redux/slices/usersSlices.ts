import { usersData } from "@/data/UsersData";
import { User } from "@/types/User";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Mock user data (replace with API calls as needed)
const mockUsers: User[] = usersData;

// Thunks
export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockUsers;
});

export const fetchUserById = createAsyncThunk(
  "users/fetchById",
  async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const user = mockUsers.find((u) => u.id === id);
    if (!user) throw new Error("User not found");
    return user;
  }
);

// State shape
interface UsersState {
  users: User[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  selectedUser: null,
  loading: false,
  error: null,
};

// Slice
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch users";
      })
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserById.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.selectedUser = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch user";
      });
  },
});

export default usersSlice.reducer;
