<?php

// необходимые HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// подключение базы данных и файл, содержащий объекты
include_once "../config/database.php";
include_once "../objects/brands.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// инициализируем объект
$product = new Brand($db);
 
// запрашиваем товары
$stmt = $product->read();
$num = $stmt->rowCount();

// проверка, найдено ли больше 0 записей
if ($num > 0) {
    // массив товаров
    $products_arr = array();
    $products_arr["brands"] = array();

    // получаем содержимое нашей таблицы
    // fetch() быстрее, чем fetchAll()
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        // извлекаем строку
        $product_item = array(
            "Tech" => $row['Tech'],
            "CasinoBrand" => $row['Casino brand'],
            "CurrentStatus" => $row['Current Status'],
            "Sandbox" => $row['Sandbox'],
            "InteractionType" => $row['Interaction Type'],
            "GEO" => $row['GEO'],
            "Localization" => $row['Localization'],
            "Shortcomings" => $row['Shortcomings'],
            "DateOfLastChange" => $row['Date of Last Change'],
            "TypeOfDeal" => $row['The type of a deal'],
            "CPA" => $row['CPA'],
            "RS" => $row['RS'],
            "BL" => $row['BL'],
            "BN" => $row['BN'],
            "BonusType" => $row['Bonus type'],
            "Segment" => $row['Segment'],
            "DepositBonusPercentage" => $row['Deposit bonus, %'],
            "MaxBonus" => $row['Max bonus'],
            "FreeSpins" => $row['Free spins'],
            "Wager" => $row['Wager'],
            "MinDeposit" => $row['Min deposit'],
            "Vta" => $row['В-та'],
            "OfferContent" => $row['Offer content'],
            "OurOfferContent" => $row['Our offer content'],
            "AffiliateLink" => $row['Affiliate Link'],
            "Reg2Dep" => $row['reg2dep'],
            "GoBig" => $row['gobig'],
            "Weight" => $row['вес'],
            "Count" => $row['count'],
            "LinkImg" => $row['Link img'],
            "CasinoBrand1" => $row['Casino brand 1'],
            "KeitaroGoBigID" => $row['keitaro gobig ID'],
            "KeitaroR2dID" => $row['keitaro r2d ID'],
            "Postback" => $row['postback'],
            "Segment2" => $row['Segment2'],
            "FirstPriority" => $row['Первый приоритет'],
            "Trendsetting" => $row['Trendsetting'],
            "Hottest" => $row['Hottest'],
            "QuickSignUp" => $row['Quick Sign-Up']
        );
        array_push($products_arr["brands"], $product_item);
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