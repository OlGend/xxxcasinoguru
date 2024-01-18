import React, { useState, useEffect } from "react";
import roulete from "../../../src/rouleteGif.gif";
import rouleteBanner from "../../../src/roulete-banner.png";
import close from "../../../src/close.png";
import wheel from "../../../src/wheel.png";
import rouleteBannerSmall from "../../../src/roulete-banner-mobile.png";

const ModalWindow = ({ newUrl, ipDataCode }) => {
  const [isBannerVisible, setBannerVisible] = useState(false);
  const [isOpacity, setIsOpacity] = useState(false);
  const [isWheel, setIsWheel] = useState(false);
  const [isAnimate, setIsAnimate] = useState(true);
  const [isShowBrand, setIsShowBrand] = useState(false);

  const [data, setData] = useState([]);
  const [topData, setTopData] = useState([]);

  const handleButtonClick = () => {
    setBannerVisible(!isBannerVisible);
    setTimeout(() => {
      setIsOpacity(!isOpacity);
    }, 50);
  };
  const handleButtonWheel = () => {
    setIsWheel(!isWheel);
    setBannerVisible(!isBannerVisible);
    setIsAnimate(true);
    setIsShowBrand(false);
  };
  const handleButtonAnimate = () => {
    setIsAnimate(false);
    setTimeout(() => {
      setIsAnimate(true);
      setIsShowBrand(true);
    }, 5000);
  };

  const urlParams = new URLSearchParams(window.location.search);
  const brandValue = urlParams.get("brand");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Запрос данных, зависящих от IP, после того как IP получен
        const res = await fetch(
          "https://sheet.best/api/sheets/d42b0c11-690a-4f73-84c2-a4df9fed18d0"
        );
        if (res.ok) {
          const responseData = await res.json();

          const filteredData = responseData.filter(
            (rowData) =>
              rowData.GEO === ipDataCode &&
              rowData["Current Status"] === "Ongoing" &&
              (rowData.Segment === "Premium" ||
                rowData.Segment === "Deposit" ||
                rowData.Segment === "Listing") &&
              rowData["Casino brand"] != "Mirax (FS)" &&
              rowData["Casino brand"] != "Katsubet (FS)" &&
              rowData["Casino brand"] != "7Bit (FS)" &&
              rowData.Segment2 === "Premium"
          );
          const topData = responseData
            .filter((rowData) => rowData.Tech === brandValue)
            .map((item) => ({
              ...item,
              clas: "topbrand", // Добавляем ключ "clas" со значением "topbrand"
            }));

          setData([...filteredData]);
          setTopData([...topData]);
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    if (ipDataCode) {
      fetchData(); // Выполняйте только после получения IP
    }
  }, [ipDataCode, brandValue]);

  const combinedData = [...topData, ...data];
  const randomIndex = Math.floor(Math.random() * combinedData.length);
  const randomObject = combinedData[randomIndex];

  const getRandomBrand = (data) => {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  };
  const randomBrand = getRandomBrand(combinedData);
  const isMobile = window.innerWidth <= 767;
  return (
    <div className="roulete-home">
      {isBannerVisible && (
        <div
          className={`roulete-banner-home ${isOpacity ? "visible" : "hidden"}`}
        >
           <img src={isMobile ? `.${rouleteBannerSmall}` : `.${rouleteBanner}`} alt="" />
          <div onClick={handleButtonClick} className="close">
            <img src={`${close}`} alt="" />
          </div>
          <button onClick={handleButtonWheel} className="absolute">
            START SPINNING
          </button>
        </div>
      )}
      {!isBannerVisible && (
        <div className="roulete-button" onClick={handleButtonClick}>
          <img src={`.${roulete}`} alt="" />
        </div>
      )}
      {isWheel && (
        <div className="overflo">
          <div onClick={handleButtonWheel} className="overflo-drop"></div>
          {!isShowBrand && (
            <div>
              <img
                className={`${isAnimate ? "" : "anim"}`}
                src={`.${wheel}`}
                alt=""
              />
              <button onClick={handleButtonAnimate}>START SPINNING</button>
            </div>
          )}
          {isShowBrand &&
            randomBrand && ( // Проверка, что бренд определен
              <div className={`flex noslider ${randomBrand.clas}`}>
                <div className="imgDiv">
                  <a
               
                    target="_blank"
                    href={randomBrand["gobig"] + newUrl}
                  >
                    <img src={randomBrand["Link img"]} alt="" />
                  </a>
                  <p className="bonus">{randomBrand["Our offer content"]}</p>
                </div>
                <div>
                  <a
                    className="btn btn-primary big-btn"
                    target="_blank"
                    href={randomBrand["gobig"] + newUrl}
                  >
                    Proceed and get
                  </a>
                </div>
              </div>
            )}
        </div>
      )}
    </div>
  );
};

export default ModalWindow;
