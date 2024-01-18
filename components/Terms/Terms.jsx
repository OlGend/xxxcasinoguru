import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../dataBrands/Header";
import logo from "../../../src/logo.png";

import plus from "../../../src/18plus.png";
import gamblers from "../../../src/gamblers.png";
import layer from "../../../src/layer.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Terms = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />

      <div className="terms">
        <div className="container">
          <h2>Welcome to MyAwardWallet</h2>
          <p>
          Where you have the opportunity to get spins in the Fortune Wheel that can be easily converted into real money and withdrawn to your crypto wallet. Our platform offers a transparent and straightforward process for accumulating and utilising these points. Earning points is a seamless experience. Engage in various activities across our casino brands and participate in promotions to accumulate free spins. Simply visit the Fortune Wheel page and select a site where you haven&#39;t registered yet. Upon making a deposit and playing on the chosen brand, you will automatically receive free spins within 24 hours.
          </p>
          <p>
          With every new first deposit, delight in 20 spins on the Fortune Wheel. Each spin carries the promise of yielding between 0.5 USD to 1 USD in the Fortune Wheel. Access withdrawals upon reaching a 4 USD balance. Effortlessly initiate withdrawals by visiting the &#39;Withdrawal Request&#39; page and placing your order. Our system ensures automatic processing within minutes. Stay updated on payment status through our live chat support. Embrace our community today and unlock a world of benefits!
          </p>
          <h3>Terms and Conditions</h3>
          <p>These terms and conditions (&#39;Terms&#39;) govern your participation in the rewards and cashback program (&#39;Program&#39;) offered by MyAwardWallet.com (&#39;we,&#39; &#39;us,&#39; or &#39;our&#39;). By participating in the Program, you agree to abide by these Terms. Please read them carefully.</p>
          <h3>Deposit Requirements:</h3>
          <p>1.1. In order for your deposit to be considered qualified, it must be equal to or greater than 20 USD, 20 EUR, 30 AUD, 30 CAD, or the equivalent amount in other currencies.</p>
          <p>1.2. We credit spins only upon receiving deposit-related information. However, this may not occur due to reasons such as cookie issues, which could affect spin crediting across certain platforms or brands. Therefore, it&#39;s always advisable, before navigating from our &#39;Fortune Wheel&#39; page to register on any brand, to clear your cookie files to avoid any situations related to non-accreditation of free spins</p>
          <h3>Withdrawal Process:</h3>
          <p>2.1 Please note that all blockchain commissions for your withdrawals are on your shoulders. You will eventually receive the amount left after deducting the actual commissions at the moment of the transaction.</p>
        
        <h3>Limitations on Winnings:</h3>
        <p> 3.1. Please note that a player cannot withdraw more than the amount they have deposited on the brands associated with MyAwardWallet.com. Our project serves as a cashback tool and not a source of income.</p>
        <p>3.2. Confirmation of spin allocation solely relies on our email notification. We reserve the right to credit or withhold any amount of spins at our discretion for any user activity.</p>
        <h3>Abuse and Violation of Terms:</h3>
        <p>4.1. Any attempt to abuse or violate our terms and conditions will result in the immediate blocking of the player&#39;s account and deduction of their funds. </p>
        <h3>Eligible Brands:</h3>
        <p>5.1. All rewards for a player&#39;s activity are available only if that activity takes place on one of the brands listed in the &#39;Fortune Wheel&#39; section on our platform.</p>
        <h3>Support Chat Information:</h3>
        <p>6.1. All information received through the support chat is provided for informational purposes only and should not be considered a public offering.</p>
        <h3>Contact Information:</h3>
        <p>7.1. For further inquiries regarding your account balance, withdrawals, or any other related information, please contact us via email at info@myawardwallet.com.</p>
        <p>By participating in the Program, you acknowledge that you have read, understood, and agreed to these Terms. We reserve the right to modify or terminate the Program or these Terms at any time without prior notice. It is your responsibility to review these Terms regularly to stay informed of any updates or changes. Your continued participation in the Program after any modifications indicates your acceptance of the revised Terms.</p>

 


        </div>
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

export default Terms;
