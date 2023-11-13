import { useQuery } from "@tanstack/react-query";
import { getAllShops, getRadiusShop } from "../services/shopServices";

// Get all shops
export function useGetAllShops() {
    const { data, isLoading } = useQuery({
        queryFn: getAllShops,
        queryKey: ["shops"]
    });

    return { data, isLoading }
}

export function useGetRadiusShops() {
    const { data, isLoading } = useQuery({
      queryFn: getRadiusShop,
      queryKey: ["RadiusShops"]
    });
    return { data, isLoading }
  }