import styles from "./TravelDetails.module.scss";
import UserActive from "../../../assets/user-active.png";
import UserInactive from "../../../assets/user-inactive.png";
import DateActive from "../../../assets/date-active.png";
import DateInactive from "../../../assets/date-inactive.png";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useTouristDataContext } from "../../../context/TouristDataContext";
import { TypeAnimation } from "react-type-animation";

export default function TravelDetails() {
  const {
    selectedVisitPeriod,
    setSelectedVisitPeriod,
    visitCount,
    setVisitCount,
    setActivePanel,
    suggestPlace,
    setSuggestPlace,
  } = useTouristDataContext();

  return (
    <section className={styles.sectionBody}>
      <div className={styles.panel}>
        <button onClick={() => setActivePanel("explore")}>
          <AiOutlineArrowLeft />
        </button>
        <h2>Get us know you better</h2>
        <p>
          Supply us with information that will improve your enjoyment in Travnik
        </p>
        <div className={styles.dateWrapper}>
          <span>How long will you be here?</span>
          <div className={styles.grid}>
            <div
              onClick={() => setSelectedVisitPeriod(1)}
              className={selectedVisitPeriod === 1 ? styles.activeOption : ""}
            >
              <img
                src={selectedVisitPeriod === 1 ? DateActive : DateInactive}
              />
              1
            </div>
            <div
              onClick={() => setSelectedVisitPeriod(2)}
              className={selectedVisitPeriod === 2 ? styles.activeOption : ""}
            >
              <img
                src={selectedVisitPeriod === 2 ? DateActive : DateInactive}
              />
              2
            </div>
            <div
              onClick={() => setSelectedVisitPeriod(3)}
              className={selectedVisitPeriod === 3 ? styles.activeOption : ""}
            >
              <img
                src={selectedVisitPeriod === 3 ? DateActive : DateInactive}
              />
              3+
            </div>
          </div>
          {selectedVisitPeriod >= 2 && (
            <div className={styles.checkboxWrapper}>
              <div
                className={`${styles.checkbox} ${
                  suggestPlace ? styles.checkboxActive : ""
                }`}
                onClick={() => setSuggestPlace((curr) => !curr)}
              ></div>
              <span>
                Do you want us to suggest{" "}
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "hotels",
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    "motels",
                    1000,
                    "guesthouses",
                    1000,
                    "cottages",
                    1000,
                  ]}
                  repeat={Infinity}
                />
              </span>
            </div>
          )}
        </div>
        <div className={styles.touristCountWrapper}>
          <span>How many of you are visiting Travnik?</span>
          <div className={styles.grid}>
            <div
              onClick={() => setVisitCount(1)}
              className={visitCount === 1 ? styles.activeOption : ""}
            >
              <img src={visitCount === 1 ? UserActive : UserInactive} />
            </div>
            <div
              onClick={() => setVisitCount(2)}
              className={visitCount === 2 ? styles.activeOption : ""}
            >
              <img src={visitCount === 2 ? UserActive : UserInactive} />
              <img src={visitCount === 2 ? UserActive : UserInactive} />
            </div>
            <div
              onClick={() => setVisitCount(3)}
              className={visitCount === 3 ? styles.activeOption : ""}
            >
              <img src={visitCount === 3 ? UserActive : UserInactive} />
              <img src={visitCount === 3 ? UserActive : UserInactive} />
              <img src={visitCount === 3 ? UserActive : UserInactive} />
              <span>+</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => setActivePanel("locationDetails")}
          disabled={!selectedVisitPeriod || !visitCount}
        >
          Continue
        </button>
      </div>
    </section>
  );
}
