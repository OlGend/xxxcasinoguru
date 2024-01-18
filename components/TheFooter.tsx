"use client";
import Link from "next/link";
import Image from "next/image";

import logo from "@/public/logo.png";
import plus from "@/public/18plus.png";
import layer from "@/public/layer.png";
import { useTranslation } from "react-i18next";

const TheFooter = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="wrapper">
        <div className="container flex-column">
          <div className="top-footer">
            <Image className="logo" src={logo} alt={`${logo}`} loading="lazy" />
            <div className="all-menu">
              <Link href={`/terms`}>{t("terms")}</Link>
            </div>
          </div>
          <div className="center-footer">
            <div className="images">
              <Image src={plus} alt={`${plus}`} width={30} height={30} loading="lazy" />
              <Image src={layer} alt={`${layer}`} width={30} height={30} loading="lazy" />
            </div>

            <p>{t("footerText")}</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="bottom-footer">{t("copyright")}</div>
      </div>
    </footer>
  );
};

export { TheFooter };
