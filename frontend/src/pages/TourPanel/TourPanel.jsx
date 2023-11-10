import { useGetUser } from "../../hooks/useAuth";
import { useTouristDataContext } from "../../context/TouristDataContext";
// Components
import Navbar from "../../components/Navbar/Navbar";
import Weather from "./Weather/Weather";
import Hotels from "./Hotels/Hotels";
import PreferenceFilter from "./PreferenceFilter/PreferenceFilter";
import Activities from "./Activities/Activities";
import MobileNav from "../../components/MobileNav/MobileNav";
// SCSS
import styles from "./TourPanel.module.scss";

export default function TourPanel() {
  const { suggestPlace } = useTouristDataContext();
  const { data: user, isLoading } = useGetUser();

  if (isLoading) return <h1>LOADING...</h1>;
  return (
    <section className={styles.mainApp}>
      <Navbar />
      <Weather />
      {suggestPlace && <Hotels />}
      <PreferenceFilter />
      <Activities />
      <MobileNav />
    </section>
  );
}