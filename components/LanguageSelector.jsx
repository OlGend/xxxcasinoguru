"use client"
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector({ ipDataCode }) {

  const { i18n } = useTranslation();

  useEffect(() => {
    // Set the default language based on user's IP when the component mounts
    if (ipDataCode) {
      i18n.changeLanguage(ipDataCode.toLowerCase());
    }
  }, [ipDataCode, i18n]);

  const changeLanguage = (event) => {
    const selectedLanguage = event.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  const languageOptions = [
    { value: "all", label: "🌍 English" },
    { value: "be", label: "🇧🇪 Belgian" },
    { value: "bg", label: "🇧🇬 Bulgarian" },
    { value: "cz", label: "🇨🇿 Czech" },
    { value: "de", label: "🇩🇪 German" },
    { value: "dk", label: "🇩🇰 Danish" },
    { value: "es", label: "🇪🇸 Spanish" },
    { value: "fi", label: "🇫🇮 Finnish" },
    { value: "fr", label: "🇫🇷 French" },
    { value: "gr", label: "🇬🇷 Greek" },
    { value: "hu", label: "🇭🇺 Hungarian" },
    { value: "it", label: "🇮🇹 Italian" },
    { value: "nl", label: "🇳🇱 Dutch" },
    { value: "no", label: "🇳🇴 Norwegian" },
    { value: "pl", label: "🇵🇱 Polish" },
    { value: "pt", label: "🇵🇹 Portuguese" },
    { value: "se", label: "🇸🇪 Swedish" },
    { value: "sk", label: "🇸🇰 Slovak" },
    { value: "tr", label: "🇹🇷 Turkey" },
  ];

  return (
    <select value={i18n.language} onChange={changeLanguage}>
      {languageOptions.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default LanguageSelector;
