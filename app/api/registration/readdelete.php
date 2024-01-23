<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// подключение базы данных и файл, содержащий объекты
include_once "../config/database.php";
include_once "../objects/registration.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// инициализируем объект
$product = new Product($db);
 
$productData = $product->readAndDeleteFirst();

// проверка, найден ли хотя бы один пользователь
if (!empty($productData)) {
    // устанавливаем код ответа - 200 OK
    http_response_code(200);

    // создаем массив пользователя
    $product_item = array(
        "login" => $productData['login'],
        "id" => $productData['id'],
        "VIP" => $productData['VIP'],
        "balance" => $productData['balance'],
        "country" => $productData['country'],
        "input" => $productData['input'],
        "password" => $productData['password'],
        "tickets" => $productData['tickets'],
        "winbalance" => $productData['winbalance'],
        "customer" => $productData['customer']
    );

    // выводим данные пользователя в формате JSON
    echo json_encode($product_item);
} else {
    // устанавливаем код ответа - 404 Не найдено
    http_response_code(404);

    // сообщаем пользователю, что пользователи не найдены
    echo json_encode(array("message" => "Пользователи не найдены."), JSON_UNESCAPED_UNICODE);
}
