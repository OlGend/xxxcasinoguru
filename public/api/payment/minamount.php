<?php

$api_key = "MG5SRC6-HFBMACK-MMSR9QW-1EST6QC";

// Получаем значение переменной с фронтенда
$currency = $_GET['currency'];

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.nowpayments.io/v1/payout-withdrawal/min-amount/$currency");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
  "x-api-key: $api_key"
));

$result = curl_exec($ch);
if (curl_errno($ch)) {
  echo 'Error:' . curl_error($ch);
}
curl_close($ch);

echo $result;

?>



