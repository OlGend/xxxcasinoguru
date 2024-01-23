<?php

// HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// подключаем файл для работы с БД и объектом Product
include_once "../config/database.php";
include_once "../objects/users.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$product = new Product($db);

// получаем данные пользователя для обновления
$data = json_decode(file_get_contents("php://input"));

file_put_contents('php://stderr', print_r($data, TRUE));

// устанавливаем id свойства пользователя для обновления
$product->id = $data->id;

// устанавливаем значения свойств пользователя
$product->tickets = $data->tickets;
$product->balance = $data->balance;

// обновление пользователя
if ($product->update()) {
    // устанавливаем код ответа - 200 OK
    http_response_code(200);

    // сообщаем пользователю
    echo json_encode(array("message" => "Пользователь был обновлен"), JSON_UNESCAPED_UNICODE);
}
// если не удается обновить пользователя, сообщаем пользователю
else {
    // код ответа - 503 Сервис не доступен
    http_response_code(503);

    // сообщение пользователю
    echo json_encode(array("message" => "Невозможно обновить пользователя"), JSON_UNESCAPED_UNICODE);
}
?>
