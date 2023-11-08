import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage/Page/WelcomePage';
import TouristDataContext from './context/TouristDataContext';
import Protect from './components/Protect';
import TourPanel from './pages/TourPanel/TourPanel';
import Map from './pages/Map/Map';
import Shop from './pages/Shop/Shop';
import Settings from './pages/Settings/Settings';
import Login from "./pages/Login/Page/Login";
import { Toaster } from "react-hot-toast";
import Admin from "./pages/Admin/Page/Admin";
import PreventInit from './components/PreventInit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Tour from './pages/Tour/Tour';

const queryClient = new QueryClient();

function App() {
	return (
    <>
      <QueryClientProvider client={queryClient}>
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
              path="/map"
              element={
                <TouristDataContext>
                  <Protect>
                    <Map />
                  </Protect>
                </TouristDataContext>
              }
            />

            <Route
              path="/shop"
              element={
                <TouristDataContext>
                  <Protect>
                    <Shop />
                  </Protect>
                </TouristDataContext>
              }
            />

            <Route
              path="/settings"
              element={
                <TouristDataContext>
                  <Protect>
                    <Settings />
                  </Protect>
                </TouristDataContext>
              }
            />

            <Route
              path="/app/:tourID"
              element={
                <TouristDataContext>
                  <Protect>
                    <Tour />
                  </Protect>
                </TouristDataContext>
              }
            />

            <Route path="login" element={<Login />} />
            <Route path="admin" element={<Admin />} />

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
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      <Toaster />
    </>
	);
}

export default App;
