import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import Loader from "@/components/Loader/Loader";
import { useSearchParams } from "next/navigation";

import RegistrationModal from "@/components/RegistrationModal/RegistrationModal";

function TopBrands({
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
    slidesToScroll: 2,
    centerPadding: "20px",
    centerMode: true,
  };

  if (typeof window !== "undefined") {
    const hashWithoutSymbol = window.location.hash.substring(1); // Получаем фрагмент URL-адреса без символа #

    if (hashWithoutSymbol.includes("unsubscribed")) {
      // Если содержит, выполните необходимые действия
      console.log('URL содержит "unsubscribed"');
      window.location.href = "/unsubscribed";
    }
  }

  const urlParams = useSearchParams();
  const brandValue = urlParams.get("brand");

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

  useEffect(() => {
    const geo = selectedCountry.toUpperCase();
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const url = source === "partner1039" ? apiNew : apiOld;

        const res = await fetch(url);
        if (res.ok) {
          const responseData = await res.json();
          let filteredData = [];
          if (geo) {
            filteredData = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === geo &&
                rowData["CurrentStatus"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData.Segment2 === "Premium"
            );
          } else {
            filteredData = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === ipDataCode &&
                rowData["CurrentStatus"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData.Segment2 === "Premium"
            );
          }

          console.log("filtered", filteredData);

          const topData = responseData.brands
            .filter((rowData) => rowData.Tech === brandValue)
            .map((item) => ({
              ...item,
              clas: "topbrand",
            }));

          // Фильтрация объектов в массиве data
          const filteredDataWithTopData = filteredData.filter((dataItem) => {
            // Проверка, есть ли объект с таким же Casino brand в topData
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

          // Если нет брендов, вызывать setSelectedCountry
          if (filteredDataWithTopData.length === 0) {
            setSelectedCountry("all");
            console.log(filteredDataWithTopData);
          }
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
  }, [ipDataCode, brandValue, currentLanguage, selectedCountry, source]);

  const combinedData = [...topData, ...data];

  const [modal, setModal] = useState(false);

  const [userKeyword, setUserKeyword] = useState(null);
  const handleUserKeywordChange = (newUserKeyword) => {
    setUserKeyword(newUserKeyword);
    setTimeout(() => {

      window.location.href = `/?keyword=${newUserKeyword}`;
      const url = `${registrationLink}/?keyword=${newUserKeyword}&source=0&creative_id=MAW`;
      window.open(url, '_blank');
    }, 2000);
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

  console.log("REHLINK", registrationLink);

  return (
    <div className="bg1">
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
            <RegistrationModal
              ipDataCode={ipDataCode}
              modalState={closereg}
              onUserKeywordChange={handleUserKeywordChange}
            />
          </div>
        </div>
      )}
      {isLoading && <Loader />}
      <div className="container api-content">
        <div className="brand">
          <h1>{t("greeting")}</h1>
          <div className="desctop">
            {data.length > 2 && (
              <Slider {...settings}>
                {topData ? (
                  topData.map((rowData, index) => (
                    <div className={`flex ${rowData.clas}`} key={index}>
                      <div className="imgDiv">
                        <a
                          id="top_brand"
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
                          id="top_brand"
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
                  <li>No matching data found.</li>
                )}
                {data ? (
                  data.map((rowData, index) => (
                    <div className={`flex ${rowData.clas}`} key={index}>
                      <div className="imgDiv">
                        <a
                          id="top_brand"
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
                          id="top_brand"
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
                  <li>No matching data found.</li>
                )}
              </Slider>
            )}
            <div className="nosliders">
              {data.length <= 2 &&
                combinedData.map((rowData, index) => (
                  <div className={`flex noslider ${rowData.clas}`} key={index}>
                    <div className="imgDiv">
                      <a
                        id="top_brand"
                        target="_blank"
                        onClick={() => userField === "" ? reg(rowData) : undefined}
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
                        id="top_brand"
                        className="btn btn-primary big-btn"
                        target="_blank"
                        onClick={() => userField === "" ? reg(rowData) : undefined}
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
          </div>
          <div className="mobile">
            {combinedData ? (
              combinedData.map((rowData, index) => (
                <div className="flex" key={index}>
                  <div className="imgDiv">
                    <a
                      id="top_brand"
                      target="_blank"
                      onClick={() => userField === "" ? reg(rowData) : undefined}
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
                      id="top_brand"
                      className="btn btn-primary big-btn"
                      target="_blank"
                      onClick={() => userField === "" ? reg(rowData) : undefined}
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
              <li>No matching data found.</li>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBrands;
