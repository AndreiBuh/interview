"use client";

// third party libraries
import { SetStateAction, useState } from "react";
import { useQuery } from "@tanstack/react-query";

// components
import User from "./User";
import Input from "../ui/Input";

//types
import { User as IUser } from "../types/User";

export default function Users() {
  const [filter, setFilter] = useState<string>("");

  const { data } = useQuery<IUser[]>({
    queryKey: ["posts"],
  });

  // Filter users based on the input
  const filteredUsers = data?.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

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
        {filteredUsers?.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            email={user.email}
            phone={user.phone}
          />
        ))}
      </ul>
    </section>
  );
}
