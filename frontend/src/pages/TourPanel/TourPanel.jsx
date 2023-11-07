// Components
import Navbar from "./Navbar/Navbar";
import Weather from "./Weather/Weather";
import Hotels from "./Hotels/Hotels";
import PreferenceFilter from "./PreferenceFilter/PreferenceFilter";
import Activities from "./Activities/Activities";
import MobileNav from "../../components/MobileNav/MobileNav";
// SCSS
import styles from './TourPanel.module.scss';

export default function TourPanel() {
  const isSuggested = JSON.parse(localStorage.getItem('suggestPlace'));

  return (
    <section className={styles.mainApp}>
      <Navbar />
      <Weather />
      {isSuggested && <Hotels />}
      <PreferenceFilter />
      <Activities />
      <MobileNav />
    </section>
  )
}
