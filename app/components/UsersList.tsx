"use client";

// third party libraries
import React, { useEffect, useState, SetStateAction } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import Input from "../ui/Input";
import User from "./User";

// Redux slices
import { fetchUsers } from "../slices/usersSlice";

// store
import { AppDispatch, RootState } from "../store";

const UsersList: React.FC = () => {
  const { users, error, loading } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch: AppDispatch = useDispatch();

  const [filter, setFilter] = useState<string>("");

  // Filter users based on the input
  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section
      className="flex flex-col items-center justify-center min-h-screen"
      aria-labelledby="users-section-title"
    >
      <Input
        type="text"
        placeholder="Search users by name"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setFilter(e.target.value)
        }
        className="mb-4 p-2 w-full max-w-sm"
        value={filter}
        aria-label="Search users by name"
      />
      <ul aria-live="polite" aria-busy={!filteredUsers}>
        {filteredUsers?.map(({ id, name, email, phone }) => (
          <User key={id} id={id} name={name} email={email} phone={phone} />
        ))}
      </ul>
    </section>
  );
};

export default UsersList;
