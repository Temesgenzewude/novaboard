"use client";

import { UserCard } from "@/components/UserCard";

import { fetchUsers } from "@/redux/slices/usersSlices";
import { AppDispatch, RootState } from "@/redux/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function UsersList() {
  const dispatch: AppDispatch = useDispatch();

  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
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

      {!loading && !error && users.length > 0 && (
        <main className="p-6 max-w-4xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-4 mt-4">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </main>
      )}
    </>
  );
}
