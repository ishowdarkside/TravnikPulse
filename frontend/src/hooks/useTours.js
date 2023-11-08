import { useQuery } from "@tanstack/react-query";
import { getAllTours, getSingleTour } from "../services/tourServices";
import { useLocation } from "react-router";

export function useGetTours() {
  const { data, isLoading } = useQuery({
    queryFn: getAllTours,
    queryKey: ["tours"],
  });

  return { data, isLoading };
}

export function useGetSingleTour() {
  const location = useLocation();
  const pathname = location.pathname.split('/')[2];
  const { data, isLoading } = useQuery({
    queryFn: () => getSingleTour(pathname),
    queryKey: ["tour"],
  });

  return { data, isLoading }
}
