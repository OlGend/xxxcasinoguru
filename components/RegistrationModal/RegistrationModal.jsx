import React, { useState } from "react";

const RegistrationModal = ({ ipDataCode }) => {
  const [email, setEmail] = useState("");
  const[userData, setUserData] = useState([])

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    // Формируем объект с данными для отправки на сервер
    const data = {
      email: email,
    };

    // Отправляем GET-запрос на сервер
    fetch(
      `https://pickbonus.myawardwallet.com/api/registration/readdelete.php?`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((response) => response.json())
      .then((responseData) => {
        // Обработка данных, сохранение их для дальнейшей обработки
        setUserData(responseData);
        console.log(responseData);
        // Дополнительная обработка данных...
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  console.log("USERDATA", userData);

  return (
    <div className="flex column items-center">
      <h4>
        Enter your email to become a VIP member and win guaranteed real money
        instantly!
      </h4>
      <input
        className="mb-3"
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        SUBMIT
      </button>
    </div>
  );
};

export default RegistrationModal;
