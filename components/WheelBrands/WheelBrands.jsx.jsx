import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// import fwb from "../../images/fwb.png";

function AnotherBrands({
  newUrl,
  ipData,
  ipDataCode,
  currentLanguage,
  country,
  source,
  selectedCountry,
  setSelectedCountry,
}) {
  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);
  const [otherData, setOtherData] = useState([]);
  const [visibleBrands, setVisibleBrands] = useState(8);

  const handleShowMore = () => {
    setVisibleBrands((prevVisibleBrands) => prevVisibleBrands + 8);
    window.gtag("event", "click", {
      event_category: "Show More",
      event_label: "Show More",
    });
  };


  const apiOld =
    "https://bonusnumber1.com/api/brands/read.php";
  const apiNew =
    "https://bonusnumber1.com/api/brands/read2.php";

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
        const url =
          source === "partner1039"
            ? apiNew
            : apiOld;

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
                rowData["CurrentStatus"] === "Ongoing" &&
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

  // ...

  return (
    <div>
      {otherData.length > 0 && (
        <div className="another-brands">
          <div className="other-brands">
            <div className="container">
              {/* <h2>{t("consider")}</h2> */}
              <div className="banner">
                <div className="banner-text">
                  <h3>FORTUNE WHEEL BRANDS</h3>
                  <p>
                    Pick a brand below, make first deposit and win real cash!
                  </p>
                  <Link id="roulete" className="btn btn-primary" to={`/fortunewheel/${newUrl}`}>
                    Spin the Roulette
                  </Link>
                </div>
                {/* <img className="fwb" src={`.${fwb}`} /> */}
              </div>
             
              <div className="all-brands">
                {otherData.length > 0 ? (
                  otherData.slice(0, visibleBrands).map((rowData, index) => (
                    <div className="one-brand" key={index}>
                      <div>
                        <a
                          target="_blank"
                          href={rowData["GoBig"] + newUrl}
                       
                        >
                          <img src={rowData["LinkImg"]} alt="" />
                        </a>
                        <p>{rowData["OurOfferContent"]}</p>
                      </div>
                      <a
                        className="btn btn-primary"
                        target="_blank"
                        href={rowData["GoBig"] + newUrl}
                     
                      >
                        {t("getBonus")}
                      </a>
                    </div>
                  ))
                ) : (
                  <p className="ti">No brands available for your country</p>
                )}
              </div>

              {visibleBrands < otherData.length && (
                <button
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
