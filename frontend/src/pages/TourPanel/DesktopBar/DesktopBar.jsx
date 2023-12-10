import styles from "./DesktopBar.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useGetTours } from "../../../hooks/useTours";
import Spinner from "../../../components/Spinner/Spinner";

export default function DesktopBar() {
  const { data: tours, isLoading } = useGetTours();
  const navigate = useNavigate();
  if (isLoading) return <Spinner />;

  const choiceTour = tours.at(tours.length - 1);
  return (
    <div className={styles.desktopBar}>
      <div className={styles.leftWrapper}>
        <h2>Welcome to Travnik</h2>
        <p>
          City of <span className={styles.orange}>good people</span> &{" "}
          <span className={styles.orange}>good food!</span>
        </p>

        <Link to="/app/map">Explore Travnik</Link>
      </div>

      {tours.length > 0 && (
        <div className={styles.rightWrapper}>
          <span className={styles.choiceSub}>🔥 Event of our choice</span>
          <div
            className={styles.eventWrapper}
            style={{
              backgroundImage: `url("http://127.0.1:8000/${choiceTour.coverImg}") `,
            }}
            onClick={() => navigate(`/app/tour/${choiceTour._id}`)}
          >
            <span>{choiceTour.name}</span>
            <div className={styles.overlay}></div>
          </div>
        </div>
      )}
    </div>
  );
}
