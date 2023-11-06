// Components
import Navbar from "./Navbar/Navbar";
import Weather from "./Weather/Weather";
import PreferenceFilter from "./PreferenceFilter/PreferenceFilter";
import Activities from "./Activities/Activities";
// SCSS
import styles from './TourPanel.module.scss';

export default function TourPanel() {
  return (
    <section className={styles.mainApp}>
      <Navbar />
      <Weather />
      <PreferenceFilter />
      <Activities />
    </section>
  )
}
