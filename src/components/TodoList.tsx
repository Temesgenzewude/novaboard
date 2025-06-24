"use client";

import DatePicker from "./DatePicker";
import TodosScrollable from "./TodosScrollable";

export default function TodoList() {
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      <DatePicker />

      <TodosScrollable />
    </div>
  );
}
