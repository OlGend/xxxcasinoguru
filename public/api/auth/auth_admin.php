<?php
// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// подключение файла для соединения с базой и файл с объектом
include_once "../config/database.php";
include_once "../objects/auth.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$product = new Product($db);

// установим свойство ID записи для чтения
$product->login = isset($_GET["login"]) ? $_GET["login"] : null;


// получим детали секции
$product->readOne();

if ($product->id != null) {
    // создание массива
    $product_arr = array(
        "id" => $product->id,
        "login" => $product->login,
        "password" => $product->password,
        "authorisation" => $product->authorisation
    );

    // код ответа - 200 OK
    http_response_code(200);

    // вывод в формате json
    echo json_encode($product_arr);
} else {
    // код ответа - 404 Не найдено
    http_response_code(404);

    // сообщим пользователю, что такая секция не существует
    echo json_encode(array("message" => "Секция не существует"), JSON_UNESCAPED_UNICODE);
}
