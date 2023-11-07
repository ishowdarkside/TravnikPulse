import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/Page/WelcomePage";
import TouristDataContext from "./context/TouristDataContext";
import Protect from "./components/Protect";
import TourPanel from "./pages/TourPanel/TourPanel";
import PreventInit from "./components/PreventInit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/app" />} />
        <Route
          path="/app"
          element={
            <TouristDataContext>
              <Protect>
                <TourPanel />
              </Protect>
            </TouristDataContext>
          }
        />
        <Route
          path="/welcome"
          element={
            <TouristDataContext>
              <PreventInit>
                <WelcomePage />
              </PreventInit>
            </TouristDataContext>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
