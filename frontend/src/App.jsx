import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
const WelcomePage = lazy(() => import("./pages/WelcomePage/Page/WelcomePage"));
import TouristDataContext from "./context/TouristDataContext";
import Protect from "./components/Protect";
const TourPanel = lazy(() => import("./pages/TourPanel/TourPanel"));
import PreventInit from "./components/PreventInit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const Login = lazy(() => import("./pages/Login/Page/Login"));
import { Toaster } from "react-hot-toast";
const Admin = lazy(() => import("./pages/Admin/Page/Admin"));
const Map = lazy(() => import("./pages/Map/Map"));
const Shop = lazy(() => import("./pages/Shop/Shop"));
const Settings = lazy(() => import("./pages/Settings/Settings"));
const Tour = lazy(() => import("./pages/Tour/Tour"));
import AdminContext from "./context/AdminContext";
const CalendarPage = lazy(() =>
  import("./pages/ClientCalendar/CalendarPage/CalendarPage")
);
const EditTourAdmin = lazy(() =>
  import("./pages/EditTourAdmin/Page/EditTourAdmin")
);
import ProtectAdmin from "./components/ProtectAdmin";
const CreateTourAdmin = lazy(() =>
  import("./pages/CreateTourAdmin/CreateTourAdmin")
);
const AdminCalendar = lazy(() => import("./pages/AdminCalendar/AdminCalendar"));
const AdminReviews = lazy(() => import("./pages/AdminReviews/AdminReviews"));
const AdminSingleReview = lazy(() =>
  import("./pages/AdminSingleReview/AdminSingleReview")
);
const Register = lazy(() => import("./pages/Register/Page/Register"));
const Page = lazy(() => import("./pages/AdminShops/Page/Page"));
const CreateShop = lazy(() => import("./pages/CreateShop/CreateShop"));
const Me = lazy(() => import("./pages/Me/Me"));
import MapContext from "./context/MapContext";
import EditPreferences from "./pages/Settings/EditPreferencesSettings/EditPreferencesSettings";
import Spinner from "./components/Spinner/Spinner";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
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
                <Route
                  path="login"
                  element={
                    <Protect>
                      <Login />
                    </Protect>
                  }
                />
                <Route
                  path="register"
                  element={
                    <Protect>
                      <Register />
                    </Protect>
                  }
                />
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
                <Route
                  path="map"
                  element={
                    <Protect>
                      <MapContext>
                        <Map />
                      </MapContext>
                    </Protect>
                  }
                />

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
                    <Protect>
                      <TouristDataContext>
                        <Settings />
                      </TouristDataContext>
                    </Protect>
                  }
                />
                <Route
                  path="settings/preferences"
                  element={
                    <Protect>
                      <EditPreferences />
                    </Protect>
                  }
                />
                <Route
                  path="tour/:tourID"
                  element={
                    <MapContext>
                      <Protect>
                        <Tour />
                      </Protect>
                    </MapContext>
                  }
                />
                <Route
                  path="calendar"
                  element={
                    <Protect>
                      <CalendarPage />
                    </Protect>
                  }
                />
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
      </Suspense>
    </>
  );
}

export default App;
