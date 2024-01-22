import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import RegistrationModal from "@/components/RegistrationModal/RegistrationModal";

// import fwb from "../../images/fwb.png";

function AnotherBrands({
  newUrl,
  ipDataCode,
  currentLanguage,
  source,
  selectedCountry,
  userField,
}) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [otherData, setOtherData] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState(8);

  const handleShowMore = () => {
    setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + 8);
  };

  const apiOld = "https://pickbonus.myawardwallet.com/api/brands/read.php";
  const apiNew = "https://pickbonus.myawardwallet.com/api/brands/read2.php";

  function shuffleArray(array) {
    const shuffledArray = array.slice();
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
      try {
        const url = source === "partner1039" ? apiNew : apiOld;

        const res = await fetch(url);
        if (res.ok) {
          const responseData = await res.json();
          // const dataArray = Object.values(responseData);

          let filteredDataOther = [];

          if (geo) {
            filteredDataOther = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === geo &&
                rowData["CurrentStatus"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData["FirstPriority"] === "1"
            );
          } else {
            filteredDataOther = responseData.brands.filter(
              (rowData) =>
                rowData.GEO === ipDataCode &&
                rowData["Current Status"] === "Ongoing" &&
                rowData["CasinoBrand"] !== "Mirax (FS)" &&
                rowData["CasinoBrand"] !== "Katsubet (FS)" &&
                rowData["CasinoBrand"] !== "7Bit (FS)" &&
                rowData["FirstPriority"] === "1"
            );
          }

          // Перемешиваем данные перед отображением
          setOtherData(shuffleArray(filteredDataOther));
          setLoading(false);

          // Если нет брендов, вызывать setSelectedCountry
          // if (filteredDataOther.length === 0) {
          //   setSelectedCountry("all");
          // }
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setLoading(false);
      }
    };

    if ((ipDataCode && currentLanguage) || (geo && currentLanguage)) {
      fetchData();
    }
  }, [ipDataCode, currentLanguage, selectedCountry, source]);

  const [modal, setModal] = useState(false);
  function reg() {
    setModal(true);
  }
  const [userKeyword, setUserKeyword] = useState(null);
  const handleUserKeywordChange = (newUserKeyword) => {
    setUserKeyword(newUserKeyword);
  };
  function closereg() {
    setModal(false);
  }

  return (
    <div>
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
      {otherData.length > 0 && (
        <div className="another-brands">
          <div className="other-brands">
            <div className="container">
              {/* <h2>{t("consider")}</h2> */}
              <div className="banner">
                <div className="banner-text">
                  <h3>{t("FORTUNE WHEEL BRANDS")}</h3>
                  <p>
                    {t(
                      "Pick a brand below, make first deposit and win real cash!"
                    )}
                  </p>
                  <Link
                    id="roulete"
                    className="btn btn-primary"
                    href={`/fortunewheel/${newUrl}`}
                  >
                    {t("Spin the Roulette")}
                  </Link>
                </div>
                {/* <img className="fwb" src={`.${fwb}`} /> */}
              </div>
              <div className="all-brands">
                <p className="mindeps">
                  {t(
                    "To qualify for withdrawals, ensure your first deposit is at least $20 or the equivalent in other currencies."
                  )}
                </p>
                {otherData.length > 0 ? (
                  otherData.slice(0, visibleBrands).map((rowData, index) => (
                    <div className="one-brand" key={index}>
                      <div>
                        <a
                          id="FW_Brands_Main"
                          target="_blank"
                          onClick={userField === "" ? reg : undefined}
                          href={
                            userField === ""
                              ? undefined
                              : rowData["GoBig"] + newUrl
                          }
                        >
                          <img src={rowData["LinkImg"]} alt="" />
                        </a>
                        <p>{rowData["OurOfferContent"]}</p>
                      </div>
                      <a
                        id="FW_Brands_Main"
                        className="btn btn-primary"
                        target="_blank"
                        onClick={userField === "" ? reg : undefined}
                        href={
                          userField === ""
                            ? undefined
                            : rowData["GoBig"] + newUrl
                        }
                      >
                        {t("getBonus")}
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="ti">
                    {t("No brands available for your country")}
                  </p>
                )}
              </div>

              {visibleBrands < otherData.length && (
                <button
                  id="ShowMoreFW"
                  className="btn btn-primary big-btn"
                  onClick={handleShowMore}
                >
                  {t("showMore")}
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AnotherBrands;
