import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/Page/WelcomePage";
import TouristDataContext from "./context/TouristDataContext";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app" />}></Route>
        <Route
          path="/welcome"
          element={
            <TouristDataContext>
              <WelcomePage />
            </TouristDataContext>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
