import todosReducer from "@/redux/slices/todosSlices";
import usersReducer from "@/redux/slices/usersSlices";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
