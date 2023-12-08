import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTouristDataContext } from "../../context/TouristDataContext";
import MobileNav from "../../components/MobileNav/MobileNav";
import Navbar from "../../components/Navbar/Navbar";
import BosnianFlag from "../../assets/bosnian-flag.png";
import USAFlag from "../../assets/usa-flag.png";
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
import Spinner from "../../components/Spinner/Spinner";
import DesktopNav from "../../components/DesktopNav/DesktopNav";
import travnikLogo from "../../assets/main-logo.png";

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

  if (isLoading) return <Spinner />;

  return (
    <>
      <Navbar />
      <DesktopNav />

      <div className={styles.container}>
        <div className={styles.settingsWrapper}>
          <div className={styles.settings}>
            {/* GENERAL SETTINGS */}
            <div className={styles.general}>
              {user !== "Unauthorized" && (
                <div
                  className={styles.item}
                  onClick={() => navigate("/app/me")}
                >
                  <BiUserCircle />
                  <p>My profile</p>
                </div>
              )}
              <h3>General Settings</h3>
              <div className={styles.options}>
                <div
                  className={
                    langDropdown
                      ? `${styles.item} ${styles.active}`
                      : styles.item
                  }
                  onClick={() => setLangDropdown((prevState) => !prevState)}
                >
                  {language === "bs" && <img src={BosnianFlag} alt="" />}
                  {language === "en" && <img src={USAFlag} alt="" />}
                  <span>Change language</span>
                  {langDropdown && (
                    <ChangeLanguageDropdown setLangDropdown={setLangDropdown} />
                  )}
                </div>

                <div
                  className={styles.item}
                  onClick={() => navigate("preferences")}
                >
                  <img src={checkImage} alt="" />
                  <p>Change preference</p>
                </div>
                <div
                  className={styles.item}
                  onClick={() => setIsOpenModal(true)}
                >
                  <RiArrowGoBackLine />
                  <span>Reset settings</span>
                </div>
                <div
                  className={`${styles.item} ${
                    suggestPlace
                      ? styles.suggestionEnabled
                      : styles.suggestionDisabled
                  }`}
                  onClick={() => setSuggestPlace((prevState) => !prevState)}
                >
                  <MdOutlineBed />
                  <span>
                    {suggestPlace
                      ? "Disable suggestions"
                      : "Enable suggestions"}
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
          </div>
          <img src={travnikLogo} alt="" className={styles.logo} />

          <MobileNav />
        </div>
      </div>
      {isOpenModal && (
        <Modal setIsOpenModal={setIsOpenModal} resetSettings={resetSettings} />
      )}
    </>
  );
}
