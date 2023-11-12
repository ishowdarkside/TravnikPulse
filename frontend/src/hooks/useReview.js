import { useMutation, useQuery } from "@tanstack/react-query";
import {
  getSingleUnapprovedReview,
  getUnapprovedReviews,
} from "../services/reviewServices";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

export function useGetUnapprovedReviews() {
  const { data, isLoading } = useQuery({
    queryFn: getUnapprovedReviews,
    queryKey: ["unapprovedReviews"],
  });

  return { data, isLoading };
}

export function useGetSingleUnapprovedReview() {
  const { reviewID } = useParams();
  console.log(reviewID);
  const { data, isLoading } = useQuery({
    queryFn: () => getSingleUnapprovedReview(reviewID),
    queryKey: ["review"],
  });
  return { data, isLoading };
}
