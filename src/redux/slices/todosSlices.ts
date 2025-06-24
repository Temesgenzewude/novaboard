import { todoList } from "@/data/TodosData";
import { Todo } from "@/types/Todo";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Mock todo data (replace with real API calls when needed)
const mockTodos: Todo[] = todoList;

// Thunks
export const fetchTodos = createAsyncThunk("todos/fetchAll", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return mockTodos;
});

export const fetchTodoById = createAsyncThunk(
  "todos/fetchById",
  async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const todo = mockTodos.find((t) => t.id === id);
    if (!todo) throw new Error("Todo not found");
    return todo;
  }
);

// State shape
interface TodosState {
  todos: Todo[];
  selectedTodo: Todo | null;
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  todos: [],
  selectedTodo: null,
  loading: false,
  error: null,
};

// Slice
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch todos";
      })
      .addCase(fetchTodoById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchTodoById.fulfilled,
        (state, action: PayloadAction<Todo>) => {
          state.selectedTodo = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchTodoById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch todo";
      });
  },
});

export default todosSlice.reducer;
