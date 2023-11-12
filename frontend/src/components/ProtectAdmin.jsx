/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useGetUser } from "../hooks/useAuth";

export default function ProtectAdmin({ children }) {
  const { data, isLoading } = useGetUser();

  if (isLoading) return <h1>LOADING...</h1>;
  if (data === "Unauthorized") return <Navigate to="/app" />;
  if (data.status === "fail") return <Navigate to="/app" />;

  if (!isLoading && data.role && data.role !== "admin")
    return <Navigate to="/app" />;

  return children;
}
