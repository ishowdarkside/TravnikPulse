import styles from "./Explore.module.scss";
import TravnikExplorImg from "../../../assets/travnik-explore-img.png";
export default function Explore() {
  return (
    <section className={styles.exploreSection}>
      <div className={styles.interactionWrapper}>
        <img src={TravnikExplorImg} alt="travnik image" />
        <h2>Welcome to Travnik</h2>
        <p>
          City of <span className={styles.redText}>good people</span> &{" "}
          <span className={styles.redText}>good food!</span> Find people, hang
          out, eat well, learn about history, enjoy nature, visit museums...
        </p>
        <button>Explore Travnik</button>
      </div>
    </section>
  );
}
