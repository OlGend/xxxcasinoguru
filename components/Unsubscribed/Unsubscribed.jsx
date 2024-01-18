import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../dataBrands/Header";
import logo from "../../../src/logo.png";

import plus from "../../../src/18plus.png";
import gamblers from "../../../src/gamblers.png";
import layer from "../../../src/layer.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Unsubscribed = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="unsubscribed">
        <h2>You are unsubscribed</h2>
      </div>

      <footer>
        <div className="wrapper">
          <div className="container flex-column">
            <div className="top-footer">
              <img className="logo" src={`.${logo}`} />
              <div className="all-menu">
                <Link to={`/terms`}>{t("terms")}</Link>
              </div>
            </div>
            <div className="center-footer">
              <div className="images">
                <img src={`.${plus}`} alt="" />
                {/* <img src={`.${gamblers}`} alt="" /> */}
                <img src={`.${layer}`} alt="" />
                {/* <img src={`.${softswiss}`} alt="" /> */}
              </div>

              <p>{t("footerText")}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottom-footer">{t("copyright")}</div>
        </div>
      </footer>
    </div>
  );
};

export default Unsubscribed;
