import React, { useState, useEffect } from "react";
import Loader from "@/components/Loader/Loader";
import { useTranslation } from "react-i18next";
import Link from "next/link";

const RegistrationModal = ({ ipDataCode, modalState, onUserKeywordChange }) => {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://pickbonus.myawardwallet.com/api/registration/readdelete.php?`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching data. HTTP Code: ${response.status}`);
      }

      const responseData = await response.json();
      setUserData(responseData);

      if (responseData) {
        await sendUserDataToSecondServer(responseData);
        setIsLoading(false);
        modalState(false);
        onUserKeywordChange(responseData.id);
      } else {
        setIsLoading(false);
        modalState(false);
      }
    } catch (error) {
      console.error("Error:", error.message);
      setIsLoading(false);
    }
  };

  const sendUserDataToSecondServer = async (userData) => {
    const balanceValue = parseFloat(userData.balance).toFixed(2);

    try {
      const response = await fetch(
        `https://pickbonus.myawardwallet.com/api/user/create.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: userData.id,
            login: userData.login,
            VIP: userData.VIP,
            balance: balanceValue,
            country: ipDataCode,
            input: userData.input,
            password: userData.password,
            tickets: userData.tickets,
            winbalance: userData.winbalance,
            customer: "GURU",
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          `Error sending data to the second server. HTTP Code: ${response.status}`
        );
      }

      const responseData = await response.json();
      console.log("Response from second server:", responseData);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const sendToCustomerIO = async (email, userData) => {
    const siteId = "b0e62a74234c966830e3";
    const apiKey = "8603e3e2dbd3bac74072";

    const credentials = `${siteId}:${apiKey}`;
    const base64Credentials = btoa(credentials);

    const url = `https://track-eu.customer.io/api/v1/customers/${email}/events`;

    const headers = {
      "Content-Type": "application/json",
      Authorization: `Basic ${base64Credentials}`,
    };

    const eventPayload = {
      name: "NEW USER",
      data: {
        id: userData.id,
        login: userData.login,
        balance: userData.balance,
        country: ipDataCode,
        tickets: userData.tickets,
        customer: "GURU",
      },
    };

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: JSON.stringify(eventPayload),
    };

    try {
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(
          `CustomerIO error. HTTP Code: ${
            response.status
          }, Response: ${await response.text()}`
        );
      }
    } catch (error) {
      console.error("Error sending data to CustomerIO:", error.message);
    }
  };

  const handleSubscribe = async () => {
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        `https://pickbonus.myawardwallet.com/api/registration/readdelete.php?`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Error fetching data. HTTP Code: ${response.status}`);
      }

      const responseData = await response.json();
      setUserData(responseData);

      if (!email) {
        setError(t("The input field cannot be empty"));
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        setError(t("Data entered incorrectly"));
      } else {
        setIsLoading(false);
        console.log("after", email);
        _cio.identify({
          email: email,
          id: email,
        });
        console.log("before", email);
        await sendToCustomerIO(email, responseData);
        await handleSubmit();
        setEmail("");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setIsLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleInputFocus = () => {
    setError("");
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setError("");
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [termsAgreed, setTermsAgreed] = useState(false);
  const [privacyAgreed, setPrivacyAgreed] = useState(false);

  return (
    <div>
      {visible && (
        <div className="flex column items-center">
          {isLoading && <Loader />}
          <div className="titleh4">
            <h4>
              {t(
                "Enter your email to become a VIP member and win guaranteed real money instantly!"
              )}
            </h4>
          </div>
          <div className="reg-content">
            <input
              className={`mb-3 ${error ? "error" : ""}`}
              type="email"
              placeholder={t("Email")}
              value={email}
              onChange={handleEmailChange}
              onFocus={handleInputFocus}
            />
            {error && <span className="text-red-500 error-text">{error}</span>}
            <div className="agreeTerms mb-2 mt-2">
              <label
                className={`acceptedTerms mb-2 ${termsAgreed ? "active" : ""}`}
              >
                <input
                  type="checkbox"
                  checked={termsAgreed}
                  onChange={() => setTermsAgreed(!termsAgreed)}
                  className="mr-2"
                />
                {t("subscribe.agree")}{" "}
                <Link
                  target="_blank"
                  className="underline text-sky-500"
                  href={`/terms-and-conditions`}
                >
                  {t("subscribe.terms")}
                </Link>{" "}
                {t("subscribe.and")}{" "}
                <Link
                  target="_blank"
                  className="underline text-sky-500"
                  href={`/privacy-policy`}
                >
                  {" "}
                  {t("subscribe.policy")}
                </Link>
              </label>
              <label
                className={`acceptedTerms mb-2 ${
                  privacyAgreed ? "active" : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={privacyAgreed}
                  onChange={() => setPrivacyAgreed(!privacyAgreed)}
                  className="mr-2"
                />

                {t("subscribe.promotional")}
              </label>
            </div>
            <button
              className="btn btn-primary"
              onClick={handleSubscribe}
              disabled={!termsAgreed || !privacyAgreed}
            >
              {t("Registration")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegistrationModal;
