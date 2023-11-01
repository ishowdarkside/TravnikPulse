import { useEffect } from "react";
import Intro from "../Intro/Intro";
import Language from "../Language/Language";
import styles from "./WelcomePage.module.scss";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import Explore from "../Explore/Explore";

export default function WelcomePage() {
  const { activePanel, setActivePanel } = useTouristDataContext();
  useEffect(() => {
    setTimeout(() => {
      setActivePanel("language");
    }, 7000);
  }, []);
  return (
    <section className={styles.welcomeSection}>
      {activePanel === "intro" && <Intro />}
      {activePanel === "language" && <Language />}
      {activePanel === "explore" && <Explore />}
    </section>
  );
}
