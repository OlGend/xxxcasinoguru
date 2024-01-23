<?php




// Получаем данные из тела запроса
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// Извлекаем JWT-токен из заголовка Authorization
$jwt_token = $_SERVER['HTTP_AUTHORIZATION'];

// Извлекаем нужные данные о пользователе
$userData = $data['withdrawals'][0]['userData'];

// Извлекаем данные для выплаты
$withdrawalData = [
    'address' => $data['withdrawals'][0]['address'],
    'currency' => $data['withdrawals'][0]['currency'],
    'amount' => $data['withdrawals'][0]['amount'],
    'userWithdraw' => $data['withdrawals'][0]['userWithdraw'],

];

// Отримуємо баланс з апі
$userApiUrl = "https://pickbonus.myawardwallet.com/api/user/read_one.php?id=" . $userData['id'];
$apiUserData = json_decode(file_get_contents($userApiUrl), true);

if ($apiUserData && isset($apiUserData['balance'])) {
    // Отримано баланс з апі
    $apiBalance = floatval($apiUserData['balance']);

    // Порівнюємо баланси та перевіряємо, чи можна виконати вивід
    if ($apiBalance >= $withdrawalData['userWithdraw']) {
        // Вивід можливий, виконайте ваш код для виводу
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://api.nowpayments.io/v1/payout',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => json_encode(['withdrawals' => [$withdrawalData]]),
            CURLOPT_HTTPHEADER => array(
                'x-api-key: MG5SRC6-HFBMACK-MMSR9QW-1EST6QC',
                'Content-Type: application/json',
                "Authorization: $jwt_token",
            ),
        ));

        $response = curl_exec($curl);
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        curl_close($curl);

        if ($httpCode === 200) {
            // Вивід успішно виконаний
            echo $response;
            $successResponse = ['message' => 'Withdrawal successful'];
            echo json_encode($successResponse);

            // Тепер добавим запрос к вашему API обновления баланса пользователя
            $updateUrl = "https://pickbonus.myawardwallet.com/api/user/update.php?id=" . $userData['id'];
            $updateData = array(
                'id' => $userData['id'],
                'tickets' => $apiUserData['tickets'], // Передаем актуальные значения
                'balance' => $apiBalance - $withdrawalData['amount'], // Вычитаем сумму выплаты из баланса
            );

            $updateCurl = curl_init();
            curl_setopt_array($updateCurl, array(
                CURLOPT_URL => $updateUrl,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CUSTOMREQUEST => 'PUT',
                CURLOPT_POSTFIELDS => json_encode($updateData),
                CURLOPT_HTTPHEADER => array(
                    'Content-Type: application/json',
                ),
            ));
            $updateResponse = curl_exec($updateCurl);
            $updateHttpCode = curl_getinfo($updateCurl, CURLINFO_HTTP_CODE);
            curl_close($updateCurl);

            if ($updateHttpCode === 200) {
                // Баланс пользователя успешно обновлен
                echo "User balance updated successfully";
            } else {
                // Ошибка при обновлении баланса пользователя
                echo "Error updating user balance. HTTP Code: " . $updateHttpCode;
            }

            // Тепер ви можете викликати вашу функцію для відправлення даних в CustomerIO
            sendToCustomerIO($userData, $userData['id'], $withdrawalData);
        } else {
            // Помилка під час виводу, виведіть відповідне повідомлення або обробку помилки
          
            echo 'Error during payout. HTTP Code: ' . $httpCode;
            echo 'Response from NowPayments: ' . $response; 
        }
    } else {
        // Вивід не можливий через недостатній баланс
        echo 'Insufficient balance for withdrawal';
        http_response_code(400); // HTTP 400 Bad Request
        echo json_encode($response);
    }
} else {
    // Помилка отримання балансу з апі
    echo 'Error fetching balance from API. Response: ' . $response;

}

// Функція для відправки даних в CustomerIO
function sendToCustomerIO($userData, $customerId, $payoutData)
{
    // Определение параметров в зависимости от значения "customer"
    if ($userData['customer'] === 'GURU') {
        $siteId = 'b0e62a74234c966830e3';
        $apiKey = '8603e3e2dbd3bac74072';
    } elseif ($userData['customer'] === 'MAW') {
        $siteId = '4ca906c0932369a13963';
        $apiKey = '6f29015cd0560e7edf40';
    } elseif ($userData['customer'] === 'buben') {
        $siteId = 'e5eea51a28a74ee1810f';
        $apiKey = '6af266a97fb4c0f1dec5';
    } else {
        // Если необходимо предусмотреть другие варианты значения "customer"
        // Можно добавить дополнительные условия
        $siteId = 'default_site_id';
        $apiKey = 'default_api_key';
    }

    // Остальной код остается без изменений
    $credentials = $siteId . ':' . $apiKey;
    $base64Credentials = base64_encode($credentials);

    $url = 'https://track-eu.customer.io/api/v1/customers/' . $customerId . '/events';
    $headers = [
        'Content-Type: application/json',
        'Authorization: Basic ' . $base64Credentials,
    ];

    $eventData = [
        'name' => 'PAYOUT REQUEST',
        'data' => [
            'userData' => $userData,
            'payoutData' => $payoutData,
        ],
    ];

    $jsonDataWithEvent = json_encode($eventData);

    $curl = curl_init($url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $jsonDataWithEvent);
    curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

    $response = curl_exec($curl);

    if ($response === false) {
        echo 'Curl error: ' . curl_error($curl);
    } else {
        $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
        if ($httpCode !== 200) {
            echo 'CustomerIO error. HTTP Code: ' . $httpCode . ', Response: ' . $response;
        }
    }

    curl_close($curl);
}
?>


{
    "id":"5000484300",
    "withdrawals":[
        {
            "is_request_payouts":false,
            "id":"5000667030",
            "address":"TLY84w7Ho56FmyNfXKjQB1yWNQ5RxFYQ7T",
            "currency":"usdttrc20",
            "amount":"3.493353",
            "batch_withdrawal_id":"5000484300",
            "status":"CREATING",
            "error":null,
            "extra_id":null,
            "hash":null,
            "ipn_callback_url":null,
            "payout_description":null,
            "unique_external_id":null,
            "created_at":"2023-12-14T14:50:35.850Z",
            "requested_at":null,
            "updated_at":null,
            "update_history_log":null,
            "rejected_check_attempts":0,
            "fee":null,
            "fee_paid_by":null
        }
        ]
    }


{"message":"Withdrawal successful"}User balance updated successfully

{"id":"5000485482","withdrawals":[{"is_request_payouts":false,"id":"5000669015","address":"LTHG9KFZNH5HisNDL1bZog3aNdNexEkMb7","currency":"ltc","amount":"0.013813","batch_withdrawal_id":"5000485482","status":"CREATING","error":null,"extra_id":null,"hash":null,"ipn_callback_url":null,"payout_description":null,"unique_external_id":null,"created_at":"2023-12-15T09:04:58.093Z","requested_at":null,"updated_at":null,"update_history_log":null,"rejected_check_attempts":0,"fee":null,"fee_paid_by":null}]}{"message":"Withdrawal successful"}User balance updated successfully


const iframe = document.getElementById("myIframe");



window.addEventListener("message", function (event) {
  if (event.data === "Повідомлення з iframe до батьківської сторінки") {
    ///дія до дому
    window.location.href = `/${newUrl}`;
  }
});