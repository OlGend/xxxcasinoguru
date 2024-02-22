import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader/Loader";

import RegistrationModal from "@/components/RegistrationModal/RegistrationModal";


// import all from "@/public/all.png";

import allEn from "@/public/all_en.png";
import allPl from "@/public/all_pl.png";
import allEs from "@/public/all_es.png";
import allAll from "@/public/all_all.png";
import allBe from "@/public/all_be.png";
import allBg from "@/public/all_bg.png";
import allCz from "@/public/all_cz.png";
import allDe from "@/public/all_de.png";
import allDk from "@/public/all_dk.png";
import allFi from "@/public/all_fi.png";
import allFr from "@/public/all_fr.png";
import allGr from "@/public/all_gr.png";
import allHu from "@/public/all_hu.png";
import allIt from "@/public/all_it.png";
import allNl from "@/public/all_nl.png";
import allNo from "@/public/all_no.png";
import allPt from "@/public/all_pt.png";
import allSe from "@/public/all_se.png";
import allSk from "@/public/all_sk.png";
import allTr from "@/public/all_tr.png";

function TopBrandsOfYear({
  newUrl,
  ipDataCode,
  currentLanguage,
  source,
  selectedCountry,
  setSelectedCountry,
  userField,
}) {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    // centerPadding: "20px",
    // centerMode: true,
  };

  //   const urlParams = new URLSearchParams(window.location.search);
  //   const brandValue = urlParams.get("brand");

  const apiOld = "https://pickbonus.myawardwallet.com/api/brands/read.php";
  const apiNew = "https://pickbonus.myawardwallet.com/api/brands/read2.php";

  function shuffleArray(array) {
    const shuffledArray = array.slice(); // Создаем копию массива
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  console.log("============", source);
  useEffect(() => {
    const geo = selectedCountry.toUpperCase();
    console.log("GEO", geo);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = source === "partner1039" ? apiNew : apiOld;

        const res = await fetch(url);
        if (res.ok) {
          const responseData = await res.json();
          // const dataArray = Object.values(responseData);

          let filteredData = [];

          if (geo) {
            filteredData = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === geo &&
                rowData["CurrentStatus"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData.Trendsetting === "1"
            );
          } else {
            filteredData = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === ipDataCode &&
                rowData["CurrentStatus"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData.Trendsetting === "1"
            );
          }

          // Фильтрация объектов в массиве data
          const filteredDataWithTopData = filteredData.filter((dataItem) => {
            // Проверка, есть ли объект с таким же CasinoBrand в topData
            const existsInTopData = topData.some(
              (topDataItem) =>
                topDataItem["CasinoBrand"] === dataItem["CasinoBrand"]
            );

            // Возвращаем true только для объектов, которые не совпадают
            return !existsInTopData;
          });

          // Перемешиваем данные перед отображением
          setData(shuffleArray(filteredDataWithTopData));
          setTopData([...topData]);
          setIsLoading(false);
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    if ((geo && currentLanguage) || (!geo && ipDataCode && currentLanguage)) {
      fetchData();
    }
  }, [ipDataCode, currentLanguage, selectedCountry, source]);

  console.log("SELECTED COUNTRY", selectedCountry);

  const combinedData = [...topData, ...data];

  const allImages = {
    en: allEn,
    pl: allPl,
    es: allEs,
    all: allAll,
    be: allBe,
    bg: allBg,
    cz: allCz,
    de: allDe,
    dk: allDk,
    fi: allFi,
    fr: allFr,
    gr: allGr,
    hu: allHu,
    it: allIt,
    nl: allNl,
    no: allNo,
    pt: allPt,
    se: allSe,
    sk: allSk,
    tr: allTr,
    // Добавьте другие языки по необходимости
  };

  const allImageSrc = allImages[currentLanguage] || allImages.en;

  const [modal, setModal] = useState(false);

  const [userKeyword, setUserKeyword] = useState(null);
  const handleUserKeywordChange = (newUserKeyword) => {
    setUserKeyword(newUserKeyword);
    setTimeout(() => {
      window.location.href = `/?keyword=${newUserKeyword}`;
      const url = `${registrationLink}/?keyword=${newUserKeyword}&source=0&creative_id=MAW`;
      window.open(url, '_blank');
    }, 1000);
  };
  function closereg() {
    setModal(false);
  }

  const [registrationLink, setRegistrationLink] = useState("");

  // Остальной код компонента
  function reg(rowData) {
    setRegistrationLink(rowData["GoBig"]);
    setModal(true);
  }

  return (
    <div className="bg2 bgns">
      {modal && (
        <div className="overflowreg">
          <div className="modal-reg">
            <div
              className="close flex justify-center items-center text-center"
              onClick={closereg}
            >
              {" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.44487 24L24 8.02771M8 8L23.5551 23.9723"
                  stroke="#fff"
                  stroke-width="2.8"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
            <RegistrationModal ipDataCode={ipDataCode} modalState={closereg} onUserKeywordChange={handleUserKeywordChange} />
          </div>
        </div>
      )}
      {data.length > 0 && (
        <div className="container api-content">
          <div className="brand">
            <h1>{t("Trendsetting Brands of 2024")}</h1>

            <div className="desctop">
              <div className="banner-slider1">
                <h3>{t("Trendsetting Brands of 2024")}</h3>
                {/* <img src={`.${allImageSrc}`} alt={`all_${currentLanguage}`} /> */}
              </div>
              {data.length > 3 && (
                <Slider {...settings}>
                  {data ? (
                    data.map((rowData, index) => (
                      <div className={`flex`} key={index}>
                        <div className="imgDiv">
                          <a
                            id="brandsOfYear"
                            target="_blank"
                            onClick={() =>
                            userField === "" ? reg(rowData) : undefined
                          }
                            href={
                              userField === ""
                                ? undefined
                                : rowData["GoBig"] + newUrl
                            }
                          >
                            <img src={rowData["LinkImg"]} alt="" />
                          </a>
                          <p className="bonus">{rowData["OurOfferContent"]}</p>
                        </div>
                        <div>
                          <a
                            id="brandsOfYear"
                            className="btn btn-primary big-btn"
                            target="_blank"
                            onClick={() =>
                            userField === "" ? reg(rowData) : undefined
                          }
                            href={
                              userField === ""
                                ? undefined
                                : rowData["GoBig"] + newUrl
                            }
                          >
                            {t("proceed")}
                          </a>
                        </div>
                      </div>
                    ))
                  ) : (
                    <li>{t("No brands available for your country")}</li>
                  )}
                </Slider>
              )}
              {data.length < 4 && (
                <div className="nosliders2">
                  {data.map((rowData, index) => (
                    <div className={`flex`} key={index}>
                      <div className="imgDiv">
                        <a
                          id="brandsOfYear"
                          target="_blank"
                          onClick={() =>
                            userField === "" ? reg(rowData) : undefined
                          }
                          href={
                            userField === ""
                              ? undefined
                              : rowData["GoBig"] + newUrl
                          }
                        >
                          <img src={rowData["LinkImg"]} alt="" />
                        </a>
                        <p className="bonus">{rowData["OurOfferContent"]}</p>
                      </div>
                      <div>
                        <a
                          id="brandsOfYear"
                          className="btn btn-primary big-btn"
                          target="_blank"
                          onClick={() =>
                            userField === "" ? reg(rowData) : undefined
                          }
                          href={
                            userField === ""
                              ? undefined
                              : rowData["GoBig"] + newUrl
                          }
                        >
                          {t("proceed")}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="mobile">
              {combinedData ? (
                combinedData.map((rowData, index) => (
                  <div className="flex" key={index}>
                    <div className="imgDiv">
                      <a
                        id="brandsOfYear"
                        target="_blank"
                        onClick={() =>
                            userField === "" ? reg(rowData) : undefined
                          }
                        href={
                          userField === ""
                            ? undefined
                            : rowData["GoBig"] + newUrl
                        }
                      >
                        <img src={rowData["LinkImg"]} alt="" />
                      </a>
                      <p className="bonus">{rowData["OurOfferContent"]}</p>
                    </div>
                    <div>
                      <a
                        id="brandsOfYear"
                        className="btn btn-primary big-btn"
                        target="_blank"
                        onClick={() =>
                            userField === "" ? reg(rowData) : undefined
                          }
                        href={
                          userField === ""
                            ? undefined
                            : rowData["GoBig"] + newUrl
                        }
                      >
                        {t("proceed")}
                      </a>
                    </div>
                  </div>
                ))
              ) : (
                <li>{t("No brands available for your country")}</li>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopBrandsOfYear;
