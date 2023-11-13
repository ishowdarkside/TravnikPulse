import { useMutation, useQuery } from "@tanstack/react-query";
import { createShop, getAllShops } from "../services/shopServices";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Get all shops
export function useGetAllShops() {
  const { data, isLoading } = useQuery({
    queryFn: getAllShops,
    queryKey: ["shops"],
  });

  return { data, isLoading };
}

export function useCreateShop() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation({
    mutationFn: (formData) => createShop(formData),
    onSuccess: (res) => {
      if (res.status === "success") {
        toast.success(res.message);
        return navigate(-1);
      }

      return toast.error(res.message);
    },
    onError: (err) => toast.error(err.message),
  });

  return { mutate, isLoading };
}
