<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// подключение файла для соединения с базой и файл с объектом
include_once "../config/database.php";
include_once "../objects/users.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$product = new Product($db);

// установим свойство ID записи для чтения
$product->id = isset($_GET["id"]) ? $_GET["id"] : die();

// получим детали пользователя
$product->readOne();

if ($product->login != null) {

    // создание массива
    $product_arr = array(
        "login" =>  $product->login,
        "id" => $product->id,
        "VIP" => $product->VIP,
        "balance" => $product->balance,
        "country" => $product->country,
        "input" => $product->input,
        "password" => $product->password,
        "tickets" => $product->tickets, // новое поле tickets
        "winbalance" => $product->winbalance, // новое поле winbalance
        "customer" => $product->customer 
    );

    // код ответа - 200 OK
    http_response_code(200);

    // вывод в формате json
    echo json_encode($product_arr);
} else {
    // код ответа - 404 Не найдено
    http_response_code(404);

    // сообщим пользователю, что такой пользователь не существует
    echo json_encode(array("message" => "Товар не существует"), JSON_UNESCAPED_UNICODE);
}