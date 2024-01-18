// src/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEN from "./locales/en.json";
import translationTR from "./locales/tr.json";
import translationPL from "./locales/pl.json";
import translationCA from "./locales/ca.json";
import translationNZ from "./locales/nz.json";
import translationES from "./locales/es.json";

import translationAT from "./locales/at.json";
import translationAU from "./locales/au.json";
import translationBE from "./locales/be.json";
import translationBG from "./locales/bg.json";
import translationCH from "./locales/ch.json";
import translationCZ from "./locales/cz.json";
import translationDE from "./locales/de.json";
import translationDK from "./locales/dk.json";
import translationFI from "./locales/fi.json";
import translationFR from "./locales/fr.json";
import translationGR from "./locales/gr.json";
import translationHU from "./locales/hu.json";
import translationIE from "./locales/ie.json";
import translationIT from "./locales/it.json";
import translationNL from "./locales/nl.json";
import translationNO from "./locales/no.json";
import translationPT from "./locales/pt.json";
import translationSE from "./locales/se.json";
import translationSK from "./locales/sk.json";

const resources = {
  all: {
    translation: translationEN,
  },

  pl: {
    translation: translationPL,
  },
  ca: {
    translation: translationCA,
  },
  nz: {
    translation: translationNZ,
  },
  es: {
    translation: translationES,
  },
  tr: {
    translation: translationTR,
  },
  at: {
    translation: translationAT,
  },
  au: {
    translation: translationAU,
  },
  be: {
    translation: translationBE,
  },
  bg: {
    translation: translationBG,
  },
  ch: {
    translation: translationCH,
  },
  cz: {
    translation: translationCZ,
  },
  de: {
    translation: translationDE,
  },
  dk: {
    translation: translationDK,
  },
  fi: {
    translation: translationFI,
  },
  fr: {
    translation: translationFR,
  },
  gr: {
    translation: translationGR,
  },
  hu: {
    translation: translationHU,
  },
  ie: {
    translation: translationIE,
  },
  it: {
    translation: translationIT,
  },
  nl: {
    translation: translationNL,
  },
  no: {
    translation: translationNO,
  },
  pt: {
    translation: translationPT,
  },
  se: {
    translation: translationSE,
  },
  sk: {
    translation: translationSK,
  },
};

const getUserIP = async () => {
  try {
    const response = await fetch("https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW");
    const data = await response.json();
    const { country } = data; // Предполагаем, что свойство "country" содержит код языка, например, "en", "es", "pl"
    return country.toLowerCase(); // Преобразуем код языка в нижний регистр (например, "EN" -> "en")
  } catch (error) {
    console.error("Error fetching IP:", error);
    return null;
  }
};

const setDefaultLanguage = async () => {
  try {
    const userIP = await getUserIP();
    let userLanguage;

    if (userIP) {
      userLanguage = userIP.toLowerCase();
    } else {
      // Если IP не определен, используйте язык по умолчанию 'en'
      userLanguage = "all";
    }

    if (!resources[userLanguage]) {
      console.log(`Language not found: ${userLanguage}`);
      // Если нет ресурсов для определенного языка, используйте 'en'
      userLanguage = "all";
    }

    console.log(`Setting language to: ${userLanguage}`);
    i18n.changeLanguage(userLanguage);
  } catch (error) {
    console.error("Ошибка при установке языка по умолчанию:", error);
  }
};



i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "all", // Fallback to the default language if IP detection fails
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {
    setDefaultLanguage();
  });

export default i18n;
