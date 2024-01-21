"use client";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import Image from "next/image";

import LanguageSelector from "@/components/LanguageSelector"
import LanguageSelectorMobile from "@/components/LanguageSelectorMobile";

import logo from "@/public/logo.png";
import profile from "@/public/prof.svg";
import wallet from "@/public/wallet.svg";
import dollar from "@/public/dollar.svg";
import arrow from "@/public/arrow-down.png";

const TheHeader = () => {
  const { t } = useTranslation();

  const [user, setUser] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  // const urlParams = new URLSearchParams(window.location.search);
  const urlParams = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : ""
  );
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [ipDataCode, setIpDataCode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuContainerRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target) &&
        !event.target.classList.contains("btn-menu")
      ) {
        setIsMenuOpen(false);
      }
    };

    // Добавляем обработчик клика при монтировании компонента
    document.addEventListener("click", handleClickOutsideMenu);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [menuContainerRef]);

  useEffect(() => {
    // Добавьте обработчик для изменения размера окна
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Вызовите функцию обработчика при монтировании компонента
    handleResize();

    // Добавьте слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Очистите слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuRef = useRef(null);
  const api = "https://pickbonus.myawardwallet.com/api";
  useEffect(() => {
    const idUserParam = urlParams.get("keyword");

    const fetchUsers = async () => {
      try {
        const res = await fetch(`${api}/user/read_one.php?id=${idUserParam}`);
        if (res.ok) {
          const users = await res.json();

          setUser(users);
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchUsers();
  }, []);




  const handleBalanceChange = (event) => {
    event.stopPropagation();
    setShowAdditionalOptions(!showAdditionalOptions);
    // setShowAdditionalOptions((prevState) => !prevState);
  };

  useEffect(() => {
    const url = window.location.href;
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    const newUrl = "?" + searchParams.toString();
    setNewUrl(newUrl);
  }, [newUrl]);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      event.stopPropagation();
      if (!menuRef.current || menuRef.current.contains(event.target)) {
        // Если клик был внутри меню, не скрывать его
        return;
      }
      // Если клик был вне меню, скрыть меню
      setShowAdditionalOptions(false);
    };

    // Добавьте обработчик при монтировании компонента
    document.addEventListener("click", handleDocumentClick);

    // Удалите обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleBalanceChange]);

  console.log("__________", showAdditionalOptions);

  return (
    <header>
      <div className="container">
        <Link className="flex" href={`/${newUrl}`}>
          <Image className="logo" src={logo} alt={logo} width={175} height={50} loading="lazy" />
        </Link>
        {!isMobile ? (
          <div className="flex ml-auto items-center">
            {Object.keys(user).length > 0 && (
              <div className="tickets">
                <Link href={`/fortunewheel/${newUrl}`}>
                  <Image
                    src={dollar}
                    alt={dollar}
                    width={26}
                    height={26}
                    loading="lazy"
                  />
                  {t("Wheel of Fortune")} <span>{user.tickets}</span>
                </Link>
              </div>
            )}
            <div className="relative">
              {Object.keys(user).length > 0 && (
                <div className="parent">
                  <div
                    className="option flex items-center"
                    value={user.balance}
                    onClick={handleBalanceChange}
                  >
                    {t("Balance")}: {user.balance} USD
                    <Image
                      src={arrow}
                      alt={arrow}
                      width={15}
                      height={15}
                      loading="lazy"
                      className="ml-1"
                    />
                  </div>
                </div>
              )}
              {showAdditionalOptions && (
                <div className="additional-options" ref={menuRef}>
                  <div className="option">
                    <Link
                      className="flex items-center"
                      href={`/withdrawal/${newUrl}`}
                      onClick={() => setShowAdditionalOptions(false)}
                    >
                      <Image
                        src={wallet}
                        alt={wallet}
                        width={25}
                        height={25}
                        loading="lazy"
                        className="mr-1"
                      />
                      {t("Withdraw")}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <LanguageSelector ipDataCode={ipDataCode} />
          </div>
        ) : (
          <div className="flex ml-auto items-center">
            <div className="mobile-menu">
              {Object.keys(user).length > 0 && (
                <div className="flex items-center">
                  <Link
                    href={`/withdrawal/${newUrl}`}
                    className="wallet flex items-center"
                  >
                     <Image
                        src={wallet}
                        alt={wallet}
                        width={25}
                        height={25}
                        loading="lazy"
                      />
                    {/* <img src={`.${wallet}`} alt={wallet} /> */}
                    <p>{user.balance} USD</p>
                  </Link>
                  <div
                    className="btn-menu"
                    onClick={handleMenuToggle}
                    ref={menuContainerRef}
                  >
                    
                    <Image
                        src={profile}
                        alt={profile}
                        width={25}
                        height={25}
                        loading="lazy"
                      />
                    {/* <img src={`.${profile}`} alt={profile} /> */}
                    <strong className="ticketspoint">{user.tickets}</strong>
                  </div>
                </div>
              )}
              {isMenuOpen && (
                <div className="list-menu">
                  {Object.keys(user).length > 0 && ( // Проверяем, есть ли данные в user
                    <Link
                      href={`/withdrawal/${newUrl}`}
                      className="balanceWithdraw"
                    >
                      <Image  src={wallet}
                        alt={wallet}
                        width={25}
                        height={25}
                        loading="lazy"
                        className="mr-1" />
                      {/* <img className="mr-1" src={`.${wallet}`} alt={wallet} /> */}
                      {t("Withdraw")} <span>{user.balance} USD</span>
                    </Link>
                  )}
                  <div className="mobile-menu-content">
                    {Object.keys(user).length > 0 && (
                      <Link
                        href={`/fortunewheel/${newUrl}`}
                        className="balanceWithdraw"
                      >
                          <Image  src={dollar}
                        alt={dollar}
                        width={25}
                        height={25}
                        loading="lazy"
                        className="mr-1" />
                        {/* <img className="mr-1" src={`.${dollar}`} alt={dollar} /> */}
                        {t("Wheel of Fortune")} <span>{user.tickets}</span>
                      </Link>
                    )}
                    {/* Другие элементы меню для мобильного вида */}
                    {/* ... */}
                  </div>
                </div>
              )}
            </div>
            <LanguageSelectorMobile ipDataCode={ipDataCode} />
          </div>
        )}
      </div>
    </header>
  );
};

export { TheHeader };
