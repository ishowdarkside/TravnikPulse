import styles from "./Explore.module.scss";
import TravnikExplorImg from "../../../assets/travnik-explore-img.png";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import { AiOutlineArrowLeft } from "react-icons/ai";
export default function Explore() {
  const { setActivePanel } = useTouristDataContext();
  return (
    <section className={styles.exploreSection}>
      <div className={styles.interactionWrapper}>
        <button onClick={() => setActivePanel("language")}>
          <AiOutlineArrowLeft />
        </button>
        <img src={TravnikExplorImg} alt="travnik image" />
        <h2>Welcome to Travnik</h2>
        <p>
          City of <span className={styles.redText}>good people</span> &{" "}
          <span className={styles.redText}>good food!</span> Find people, hang
          out, eat well, learn about history, enjoy nature, visit museums...
        </p>
        <button onClick={() => setActivePanel("travelDetailsDuration")}>
          Explore Travnik
        </button>
      </div>
    </section>
  );
}
