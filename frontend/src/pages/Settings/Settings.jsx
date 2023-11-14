import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTouristDataContext } from "../../context/TouristDataContext";
import MobileNav from "../../components/MobileNav/MobileNav";
import Navbar from "../../components/Navbar/Navbar";
import BosnianFlag from "../../assets/bosnian-flag.png";
import USAFlag from "../../assets/usa-flag.png";
import GermanFlag from "../../assets/german-flag.png";
import SpanishFlag from "../../assets/spanish-flag.png";
import checkImage from "../../assets/check-heart.png";
import notificationIcon from "../../assets/notification-icon.png";
import reportIcon from "../../assets/report-icon.png";
import ChangeLanguageDropdown from "./ChangeLanguageDropdown/ChangeLanguageDropdown";
// React icons
import { BiUserCircle } from "react-icons/bi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdOutlineBed } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import styles from "./Settings.module.scss";
import { useGetUser } from "../../hooks/useAuth";
import Modal from "./Modal/Modal";

export default function Settings() {
  const [langDropdown, setLangDropdown] = useState();
  const { language, setSuggestPlace, suggestPlace } = useTouristDataContext();
  const { data: user, isLoading } = useGetUser();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const navigate = useNavigate();

  // Reset all settings
  function resetSettings() {
    // Clear settings from storage
    localStorage.removeItem("selectedVisitPeriod");
    localStorage.removeItem("language");
    localStorage.removeItem("preferences");
    localStorage.removeItem("suggestPlace");
    localStorage.removeItem("visitCount");
    localStorage.removeItem("position");
    // Navigate to dashboard
    navigate("/app");
  }

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className={styles.settingsWrapper}>
        <Navbar />
        <div className={styles.settings}>
          {/* GENERAL SETTINGS */}
          <div className={styles.general}>
            {user !== "Unauthorized" && (
              <div className={styles.item} onClick={() => navigate("/app/me")}>
                <BiUserCircle />
                <p>My profile</p>
              </div>
            )}
            <h3>General Settings</h3>
            <div className={styles.options}>
              <div
                className={
                  langDropdown ? `${styles.item} ${styles.active}` : styles.item
                }
                onClick={() => setLangDropdown((prevState) => !prevState)}
              >
                {language === "bs" && <img src={BosnianFlag} alt="" />}
                {language === "en" && <img src={USAFlag} alt="" />}
                {language === "de" && <img src={GermanFlag} alt="" />}
                {language === "es" && <img src={SpanishFlag} alt="" />}
                <span>Change language</span>
              </div>
              {langDropdown && (
                <ChangeLanguageDropdown setLangDropdown={setLangDropdown} />
              )}

              <div
                className={styles.item}
                onClick={() => navigate("preferences")}
              >
                <img src={checkImage} alt="" />
                <p>Change preference</p>
              </div>
              <div className={styles.item} onClick={() => setIsOpenModal(true)}>
                <RiArrowGoBackLine />
                <span>Reset settings</span>
              </div>
              <div
                className={styles.item}
                onClick={() => setSuggestPlace((prevState) => !prevState)}
              >
                <MdOutlineBed />
                <span>
                  Disable suggestions
                  <label className={styles.customCheckbox}>
                    <input
                      type="checkbox"
                      onChange={() =>
                        setSuggestPlace((prevState) => !prevState)
                      }
                      checked={suggestPlace}
                      className={styles.defaultCheckbox}
                    />
                    <span className={styles.checkbox} />
                  </label>
                </span>
              </div>
              {user !== "Unauthorized" && (
                <button
                  className={styles.logout}
                  onClick={() => {
                    localStorage.removeItem("jwt");
                    // Navigate to home page
                    navigate("/app");
                  }}
                >
                  Log out
                  <HiOutlineLogout />
                </button>
              )}
            </div>
          </div>
          {/* NOTIFICATION SETTINGS */}
          <div className={styles.notifications}>
            <h3>Notifications</h3>
            <div className={`${styles.item} ${styles.disabled}`}>
              <img src={notificationIcon} alt="" />
              <span>Pop-up notifications</span>
            </div>
          </div>
          {/* OTHER SETTINGS */}
          <div className={styles.other}>
            <h3>Other</h3>
            <div className={`${styles.item} ${styles.disabled}`}>
              <img src={reportIcon} alt="" />
              <span>Report event</span>
            </div>
            <div className={`${styles.item} ${styles.disabled}`}>
              <img src={checkImage} alt="" />
              <span>Contact Support</span>
            </div>
          </div>
        </div>

        <MobileNav />
      </div>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} resetSettings={resetSettings} />
      )}
    </>
  );
}
