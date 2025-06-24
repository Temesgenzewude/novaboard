"use client";

import { ScrollArea } from "./ui/scroll-area";

import { fetchTodos } from "@/redux/slices/todosSlices";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";

export default function TodosScrollable() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const { todos, loading, error } = useSelector(
    (state: RootState) => state.todos
  );

  return (
    <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
      {loading && (
        <div className="flex flex-col  h-[300px]  justify-center  items-center ">
          Loading...
        </div>
      )}
      {error && (
        <div className="flex flex-col  h-[300px]  justify-center  items-center ">
          Error: {error}
        </div>
      )}

      {!loading && !error && todos.length > 0 && (
        <div className="flex flex-col gap-4">
          {todos.map((todo) => (
            <Card key={todo.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id="check1" />
                <label
                  htmlFor="check1"
                  className="text-sm text-muted-foreground"
                >
                  {todo.title}
                </label>
              </div>
            </Card>
          ))}
        </div>
      )}
    </ScrollArea>
  );
}
