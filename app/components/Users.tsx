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
  const [filter, setFilter] = useState("");

  const { data } = useQuery<IUser[]>({
    queryKey: ["posts"],
  });

  // Filter users based on the input
  const filteredUsers = data?.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <Input
        type="text"
        placeholder="Search users by name"
        onChange={(e: { target: { value: SetStateAction<string> } }) =>
          setFilter(e.target.value)
        }
        className="mb-4 p-2 w-full max-w-sm"
        value={filter}
      />
      <ul>
        {filteredUsers?.map((user) => (
          <User key={user.id} id={user.id} name={user.name} />
        ))}
      </ul>
    </section>
  );
}
