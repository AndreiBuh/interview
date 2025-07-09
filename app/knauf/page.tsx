import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

// components
import Users from "../components/Users";

//constants
import { ENDPOINTS } from "../constants";

async function fetchPosts() {
  const res = await fetch(ENDPOINTS.USERS);
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function KnaufPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Users />
    </HydrationBoundary>
  );
}
