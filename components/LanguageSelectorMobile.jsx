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
    { value: "all", label: "🌍 EN" },
    { value: "be", label: "🇧🇪 BE" },
    { value: "bg", label: "🇧🇬 BG" },
    { value: "cz", label: "🇨🇿 CZ" },
    { value: "de", label: "🇩🇪 DE" },
    { value: "dk", label: "🇩🇰 DK" },
    { value: "es", label: "🇪🇸 ES" },
    { value: "fi", label: "🇫🇮 FI" },
    { value: "fr", label: "🇫🇷 FR" },
    { value: "gr", label: "🇬🇷 GR" },
    { value: "hu", label: "🇭🇺 HU" },
    { value: "it", label: "🇮🇹 IT" },
    { value: "nl", label: "🇳🇱 NL" },
    { value: "no", label: "🇳🇴 NO" },
    { value: "pl", label: "🇵🇱 PL" },
    { value: "pt", label: "🇵🇹 PT" },
    { value: "se", label: "🇸🇪 SE" },
    { value: "sk", label: "🇸🇰 SK" },
    { value: "tr", label: "🇹🇷 TR" },
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
