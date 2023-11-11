import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editTour, getAllTours, getSingleTour } from "../services/tourServices";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

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

export function useEditTour() {
  const { tourID } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => editTour(formData, tourID),
    onSuccess: (res) => {
      console.log(res, "OVDJE");
      if (res.status === "success") {
        queryClient.invalidateQueries(["tours", "tour"]);
        toast.success(res.message);
        navigate(-1);
      }
    },
  });

  return { mutate, isLoading };
}
