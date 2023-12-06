import SimpleLogo from "../../../assets/simple-logo.png";
import styles from "./Language.module.scss";
import BosnianFlag from "../../../assets/bosnian-flag.png";
import USAFlag from "../../../assets/usa-flag.png";
import { useTouristDataContext } from "../../../context/TouristDataContext";
export default function Language() {
  const { setLanguage, setActivePanel } = useTouristDataContext();
  return (
    <section className={styles.languageSection}>
      <div className={styles.interactionPanel}>
        <img src={SimpleLogo} alt="travnikpulse logo" />
        <h1>Select language</h1>
        <h3>Select language of your preference!</h3>
        <div className={styles.languagesWrapper}>
          <div
            onClick={() => {
              setLanguage("ba");
              setActivePanel("explore");
            }}
          >
            <img src={BosnianFlag} alt="bosnian flag" />
            <span>Bosnian</span>
          </div>
          <div
            onClick={() => {
              setLanguage("en");
              setActivePanel("explore");
            }}
          >
            <img src={USAFlag} alt="USA flag" />
            <span>English</span>
          </div>
        </div>
      </div>
    </section>
  );
}
