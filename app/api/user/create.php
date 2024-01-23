<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// получаем соединение с базой данных
include_once "../config/database.php";

// создание объекта товара
include_once "../objects/users.php";
$database = new Database();
$db = $database->getConnection();
$product = new Product($db);

// получаем отправленные данные
$data = json_decode(file_get_contents("php://input"));

// убеждаемся, что данные не пусты
if (

    !empty($data->login) &&
    !empty($data->id) &&
    !empty($data->VIP) &&
    !empty($data->balance) &&
    !empty($data->country) &&
    !empty($data->input) &&
    !empty($data->password)



) {
    // устанавливаем значения свойств товара
    $product->login = $data->login;
    $product->id = $data->id;
    $product->VIP = $data->VIP;
    $product->balance = $data->balance;
    $product->country = $data->country;
    $product->input = $data->input;
    $product->password = $data->password;
    $product->created = date("Y-m-d H:i:s");

    // создание товара
    if ($product->create()) {
        // установим код ответа - 201 создано
        http_response_code(201);

        // сообщим пользователю
        echo json_encode(array("message" => "Товар был создан."), JSON_UNESCAPED_UNICODE);
    }
    // если не удается создать товар, сообщим пользователю
    else {
        // установим код ответа - 503 сервис недоступен
        http_response_code(503);

        // сообщим пользователю
        echo json_encode(array("message" => "Невозможно создать товар."), JSON_UNESCAPED_UNICODE);
    }
}
// сообщим пользователю что данные неполные
else {
    // установим код ответа - 400 неверный запрос
    http_response_code(400);

    // сообщим пользователю
    echo json_encode(array("message" => "Невозможно создать товар. Данные неполные."), JSON_UNESCAPED_UNICODE);
}