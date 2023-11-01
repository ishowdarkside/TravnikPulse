import styles from "./Intro.module.scss";
import Plane from "../../../assets/plane-icon.svg";
import Location from "../../../assets/loc-icon.svg";
import Path from "../../../assets/path.svg";
import Text from "../../../assets/text.svg";

export default function Intro() {
  return (
    <div className={styles.introWrapper}>
      {/*
        <h1>Travnikpulse.</h1>*/}

      <div className={styles.splashLogo}>
        <img src={Plane} className={styles.plane} />
        <img src={Location} className={styles.loc} />
        <img src={Path} />
      </div>
      <img src={Text} className={styles.text} />
    </div>
  );
}
