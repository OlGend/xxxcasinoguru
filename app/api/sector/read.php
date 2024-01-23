<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// подключение базы данных и файл, содержащий объекты
include_once "../config/database.php";
include_once "../objects/secsion.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// инициализируем объект
$product = new Product($db);
 
// запрашиваем товары
$stmt = $product->read();
$num = $stmt->rowCount();

// проверка, найдено ли больше 0 записей
if ($num > 0) {
    // массив товаров
    $products_arr = array();
    $products_arr["secsion"] = array();

    // получаем содержимое нашей таблицы
    // fetch() быстрее, чем fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // извлекаем строку
        extract($row);
        $product_item = array(
            "id" => $id,
            "sector1" => $sector1,
            "sector2" => $sector2,
            "sector3" => $sector3,
            "sector4" => $sector4,
            "sector5" => $sector5,
            "sector6" => $sector6,
            "sector7" => $sector7,
            "sector8" => $sector8,
            "sector9" => $sector9,
            "sector10" => $sector10,
            "sector11" => $sector11,
            "sector12" => $sector12

        );
        array_push($products_arr["secsion"], $product_item);
    }

    // устанавливаем код ответа - 200 OK
    http_response_code(200);

    // выводим данные о товаре в формате JSON
    echo json_encode($products_arr);
}

else {
    // установим код ответа - 404 Не найдено
    http_response_code(404);

    // сообщаем пользователю, что товары не найдены
    echo json_encode(array("message" => "Товары не найдены."), JSON_UNESCAPED_UNICODE);
}