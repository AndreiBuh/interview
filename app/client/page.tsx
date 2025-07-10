import React, { useEffect, useState } from "react";

// types
import { User as IUser } from "../types/User";

// constants
import { ENDPOINTS } from "../constants";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(ENDPOINTS.USERS);
        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data: IUser[] = await response.json();
        setUsers(data);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Users users={users} />;
};

export default UsersList;
