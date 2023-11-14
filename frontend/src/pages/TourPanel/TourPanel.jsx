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
import Spinner from "../../components/Spinner/Spinner";

export default function TourPanel() {
  const { suggestPlace } = useTouristDataContext();
  const { data: user, isLoading } = useGetUser();

  if (isLoading) return <Spinner />;
  return (
    <section className={styles.mainApp}>
      <div className={styles.container}>
        <Navbar />
        <Weather />
        {suggestPlace && <Hotels />}
        <PreferenceFilter />
        <Activities />
        <MobileNav />
      </div>
    </section>
  );
}
