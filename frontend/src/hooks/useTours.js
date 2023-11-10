import { useQuery } from "@tanstack/react-query";
import { getAllTours, getSingleTour } from "../services/tourServices";
import { useParams } from "react-router-dom";

export function useGetTours() {
  const { data, isLoading } = useQuery({
    queryFn: getAllTours,
    queryKey: ["tours"],
  });

  return { data, isLoading };
}

export function useGetSingleTour() {
  const { tourID } = useParams();

  const { data, isLoading } = useQuery({
    queryFn: () => getSingleTour(tourID),
    queryKey: ["tour"],
  });

  return { data, isLoading };
}
