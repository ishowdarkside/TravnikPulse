import { Navigate } from "react-router-dom";
import { useGetUser } from "../../../hooks/useAuth";

export default function Admin() {
  const { data, isLoading } = useGetUser();

  if (isLoading) return <h1>LOADING...</h1>;
  if (!isLoading && !data.role && data.role !== "admin")
    return <Navigate to="/app" />;
  return <section>OVO JE ADMIN PANEL</section>;
}
