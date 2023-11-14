import { useState } from "react";
import styles from "./EditPreferencesSettings.module.scss";
import Navbar from "../../../components/Navbar/Navbar";
import MobileNav from "../../../components/MobileNav/MobileNav";
import PreferencePanel from "../PreferencePanel/PreferencePanel";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function EditPreferences() {
  const [preferences, setPreferences] = useState(
    JSON.parse(localStorage.getItem("preferences"))
  );

  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <section>
        <PreferencePanel
          selectedPreferences={preferences}
          setSelectedPreferences={setPreferences}
        />
        <div className={styles.buttonWrapper}>
          <button onClick={() => navigate(-1)}>Cancel</button>
          <button
            onClick={() => {
              if (preferences.length < 5)
                return toast.error("Choose at least 5 categories");
              localStorage.setItem("preferences", JSON.stringify(preferences));
              navigate(-1);
            }}
          >
            Save
          </button>
        </div>
      </section>

      <MobileNav />
    </>
  );
}
