"use client";
import { useEffect, useState } from "react";

import OtherBrands from "@/components/otherBrands/otherBrands";
import TopBrands from "@/components/topBrands/topBrands";
import NewBrands from "@/components/NewBrands/NewBrands";
import AnotherBrands from "@/components/AnotherBrands/AnotherBrands";
import TopBrandsOfYear from "@/components/TopBrandsOfYear/TopBrandsOfYear";
import DoubleBrands from "@/components/DoubleBrands/DoubleBrands";
import DoubleBrands2 from "@/components/DoubleBrands2/DoubleBrands2";


import { useTranslation } from "react-i18next";

export default function Home() {

  const [ipData, setIpData] = useState(null);
  const [ipDataCode, setIpDataCode] = useState(null);
  const [newUrl, setNewUrl] = useState("");
  const [source, setSource] = useState("");

  const [selectedCountry, setSelectedCountry] = useState("");

  const { t, i18n } = useTranslation();

  const countryOptions = [
    { code: "au", name: "Australia", flag: "🇦🇺" },
    { code: "at", name: "Austria", flag: "🇦🇹" },
    { code: "be", name: "Belgium", flag: "🇧🇪" },
    { code: "bg", name: "Bulgaria", flag: "🇧🇬" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "cz", name: "Czech", flag: "🇨🇿" },
    { code: "dk", name: "Denmark", flag: "🇩🇰" },
    { code: "fi", name: "Finland", flag: "🇫🇮" },
    { code: "fr", name: "France", flag: "🇫🇷" },
    { code: "de", name: "Germany", flag: "🇩🇪" },
    { code: "gr", name: "Greece", flag: "🇬🇷" },
    { code: "hu", name: "Hungary", flag: "🇭🇺" },
    { code: "ie", name: "Ireland", flag: "🇮🇪" },
    { code: "it", name: "Italy", flag: "🇮🇹" },
    { code: "nl", name: "Netherlands", flag: "🇳🇱" },
    { code: "nz", name: "New Zealand", flag: "🇳🇿" },
    { code: "no", name: "Norway", flag: "🇳🇴" },
    { code: "pl", name: "Poland", flag: "🇵🇱" },
    { code: "pt", name: "Portugal", flag: "🇵🇹" },
    { code: "sk", name: "Slovakia", flag: "🇸🇰" },
    { code: "es", name: "Spain", flag: "🇪🇸" },
    { code: "se", name: "Sweden", flag: "🇸🇪" },
    { code: "ch", name: "Switzerland", flag: "🇨🇭" },
    { code: "tr", name: "Turkey", flag: "🇹🇷" },
    { code: "gb", name: "United Kingdom", flag: "🇬🇧" },
    { code: "all", name: "World", flag: "🌍" },
  ];

  useEffect(() => {
    // Запрос к API с использованием fetch
    fetch(
      "https://ipapi.co/json/?key=YD0x5VtXrPJkOcFQMjEyQgqjfM6jUcwS4J54b3DI8ztyrFpHzW"
    )
      .then((response) => response.json())
      .then((data) => {
        setIpData(data.country_name);
        setIpDataCode(data.country);
        setSelectedCountry(data.country.toLowerCase());
      
      })
      .catch((error) => {
        console.error("Ошибка при запросе к API:", error);
      });
  }, []);

  useEffect(() => {
    const url = window.location.href;
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    searchParams.delete("brand");

    const currentSource = searchParams.get("keyword");

    if (
      currentSource !== null &&
      (currentSource.includes("partner1039"))
    ) {
      // Если в строке есть "partner1039" или "partner1041", вырезаем и добавляем в setSource
      const partnerIndex = currentSource.indexOf("partner");
      const partnerText = currentSource.substring(
        partnerIndex,
        partnerIndex + 11
      ); // 11 - длина "partner1039" или "partner1041"
      setSource(partnerText);

      // Используем "partner1039" или "partner1041" в newUrl
      searchParams.set("source", partnerText);
    } else {
      // Если "partner1039" или "partner1041" отсутствует, добавляем 0 в setSource
      setSource("0");

      // Используем "0" в newUrl
      searchParams.set("source", "0");
    }

    // Удаляем "source" из searchParams
    // searchParams.delete("source");

    // Добавить source в новый URL только если он существует
    const newUrl =
      "?" +
      (searchParams.toString() ? searchParams.toString() + "&" : "") +
      "creative_id=MAW";

    setNewUrl(newUrl);
  }, []);

  // Добавьте обработчик изменения selectedCountry
  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
    // Сохранить в localStorage
    localStorage.setItem("selectedCountry", country);
  };

  console.log("~~~~~~~~~~~~~~~~~~SELECTEDCOUNTRY~~~~~~~~~~~~~~~~~~~~~", selectedCountry)

  return (
    <div>
      <TopBrands
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <div className="select-brand container">
        <p>{t("select")}</p>
        <select
          id="countrySelect"
          value={selectedCountry}
          // onChange={(e) => setSelectedCountry(e.target.value)}
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          {countryOptions.map((country, index) => (
            <option
              key={index}
              value={country.code}
              selected={country.code === ipDataCode}
            >
              {country.flag} {country.name}
            </option>
          ))}
        </select>
      </div>

      <NewBrands
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      <AnotherBrands
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
      />
      <TopBrandsOfYear
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      /> 
      
      <div className="doublebrands">
        <div className="another-brands">
          <div className="other-brands">
            <div className="container">
              <DoubleBrands
                newUrl={newUrl}
                ipDataCode={ipDataCode}
                currentLanguage={i18n.language}
                source={source}
                selectedCountry={selectedCountry}
              />
              <DoubleBrands2
                newUrl={newUrl}
                ipDataCode={ipDataCode}
                currentLanguage={i18n.language}
                source={source}
                selectedCountry={selectedCountry}
              />
            </div>
          </div>
        </div>
      </div>
      <OtherBrands
        newUrl={newUrl}
        ipDataCode={ipDataCode}
        currentLanguage={i18n.language}
        source={source}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
      />
      {/* <ModalWindow newUrl={newUrl} ipDataCode={ipDataCode} /> */}
    </div>
  );
}