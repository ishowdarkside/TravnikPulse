import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";
import "./styles/index.scss";
import "./styles/variables.scss";
import "./styles/calendar.scss";

// WELCOME PAGE
import welcome_bs from './utils/Translate/bs/welcome.json'
import welcome_en from './utils/Translate/en/welcome.json'
import welcome_de from './utils/Translate/de/welcome.json'
import welcome_es from './utils/Translate/sp/welcome.json'

const storage_lang = localStorage.getItem("language");

i18next.init({
  interpolation: { escapeValue: false },
  lng: storage_lang ? storage_lang : "en",
  resources: {
    bs: {
      welcome: welcome_bs,
    },
    en: {
      welcome: welcome_en,
    },
    de: {
      welcome: welcome_de,
    },
    es: {
      welcome: welcome_es,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
