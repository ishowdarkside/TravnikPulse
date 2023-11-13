import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage/Page/WelcomePage";
import TouristDataContext from "./context/TouristDataContext";
import Protect from "./components/Protect";
import TourPanel from "./pages/TourPanel/TourPanel";
import PreventInit from "./components/PreventInit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Login from "./pages/Login/Page/Login";
import { Toaster } from "react-hot-toast";
import Admin from "./pages/Admin/Page/Admin";
import Map from "./pages/Map/Map";
import Shop from "./pages/Shop/Shop";
import Settings from "./pages/Settings/Settings";
import Tour from "./pages/Tour/Tour";
import AdminContext from "./context/AdminContext";
import CalendarPage from "./pages/ClientCalendar/CalendarPage/CalendarPage";
import EditTourAdmin from "./pages/EditTourAdmin/Page/EditTourAdmin";
import ProtectAdmin from "./components/ProtectAdmin";
import CreateTourAdmin from "./pages/CreateTourAdmin/CreateTourAdmin";
import AdminCalendar from "./pages/AdminCalendar/AdminCalendar";
import AdminReviews from "./pages/AdminReviews/AdminReviews";
import AdminSingleReview from "./pages/AdminSingleReview/AdminSingleReview";
import Register from "./pages/Register/Page/Register";
import Page from "./pages/AdminShops/Page/Page";
import CreateShop from "./pages/CreateShop/CreateShop";
import Me from "./pages/Me/Me";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/app" />} />
            <Route path="/app">
              <Route
                index
                element={
                  <TouristDataContext>
                    <Protect>
                      <TourPanel />
                    </Protect>
                  </TouristDataContext>
                }
              />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="admin">
                <Route
                  index
                  element={
                    <AdminContext>
                      <ProtectAdmin>
                        <Admin />
                      </ProtectAdmin>
                    </AdminContext>
                  }
                />
                <Route
                  path="edit-tour/:tourID"
                  element={
                    <ProtectAdmin>
                      <EditTourAdmin />
                    </ProtectAdmin>
                  }
                />
                <Route
                  path="create-tour"
                  element={
                    <AdminContext>
                      <ProtectAdmin>
                        <CreateTourAdmin />
                      </ProtectAdmin>
                    </AdminContext>
                  }
                />
                <Route
                  path="calendar"
                  element={
                    <AdminContext>
                      <ProtectAdmin>
                        <AdminCalendar />
                      </ProtectAdmin>
                    </AdminContext>
                  }
                />
                <Route
                  path="reviews"
                  element={
                    <ProtectAdmin>
                      <AdminReviews />
                    </ProtectAdmin>
                  }
                />
                <Route
                  path="reviews/:reviewID"
                  element={
                    <ProtectAdmin>
                      <AdminSingleReview />
                    </ProtectAdmin>
                  }
                />
                <Route
                  path="shops"
                  element={
                    <ProtectAdmin>
                      <Page />
                    </ProtectAdmin>
                  }
                />
                <Route path="shops/create-shop" element={<CreateShop />} />
              </Route>
              <Route path="map" element={<Map />} />
              <Route
                path="shop"
                element={
                  <TouristDataContext>
                    <Shop />
                  </TouristDataContext>
                }
              />
              <Route
                path="settings"
                element={
                  <TouristDataContext>
                    <Settings />
                  </TouristDataContext>
                }
              />
              <Route path="tour/:tourID" element={<Tour />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="me" element={<Me />} />
            </Route>
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
