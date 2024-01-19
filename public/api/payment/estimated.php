<?php
// Установка заголовков для разрешения CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
$api_key = "MG5SRC6-HFBMACK-MMSR9QW-1EST6QC";

$amount = $_GET['amount']; 
$currency_from = $_GET['currency_from']; 
$currency_to = $_GET['currency_to']; 



$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.nowpayments.io/v1/estimate?amount=$amount&currency_from=$currency_from&currency_to=$currency_to");
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
