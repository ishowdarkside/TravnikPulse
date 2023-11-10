import { useQuery } from "@tanstack/react-query";
import { getAllShops } from "../services/shopServices";

// Get all shops
export function useGetAllShops() {
    const { data, isLoading } = useQuery({
        queryFn: getAllShops,
        queryKey: ["shops"]
    });

    return { data, isLoading }
}