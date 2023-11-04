import { Navigate } from "react-router-dom";
export default function Protect({ children }) {
  const selectedVisitPeriod = localStorage.getItem("selectedVisitPeriod");
  const preferences = JSON.parse(localStorage.getItem("preferences"));
  const visitCount = localStorage.getItem("visitCount");
  const position = JSON.parse(localStorage.getItem("position"));

  if (!selectedVisitPeriod || !preferences || !visitCount || !position)
    return <Navigate to="/welcome" />;
  console.log(selectedVisitPeriod, preferences, visitCount, position);
  return children;
}
