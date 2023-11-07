import { useQuery } from "@tanstack/react-query";
import { getAllTours } from "../services/tourServices";

export function useGetTours() {
  const { data, isLoading } = useQuery({
    queryFn: getAllTours,
    queryKey: ["tours"],
  });

  return { data, isLoading };
}
