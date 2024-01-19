<?php
// HTTP-заголовки
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// подключаем файл для работы с БД и объектом Brand
include_once "../config/database.php";
include_once "../objects/brands2.php";

// получаем соединение с базой данных
$database = new Database();
$db = $database->getConnection();

// подготовка объекта
$product = new Brand($db);

// получаем данные пользователя для обновления
$data = json_decode(file_get_contents("php://input"));

file_put_contents('php://stderr', print_r($data, TRUE));

// устанавливаем id свойства пользователя для обновления
$product->IdBrand = $data->IdBrand;

// устанавливаем значения свойств пользователя
$product->Tech = $data->Tech;
$product->CasinoBrand = $data->CasinoBrand;
$product->CurrentStatus = $data->CurrentStatus;
$product->Sandbox = $data->Sandbox;
$product->InteractionType = $data->InteractionType;
$product->GEO = $data->GEO;
$product->Localization = $data->Localization;
$product->Shortcomings = $data->Shortcomings;
$product->DateOfLastChange = $data->DateOfLastChange;
$product->TypeOfDeal = $data->TypeOfDeal;
$product->CPA = $data->CPA;
$product->RS = $data->RS;
$product->BL = $data->BL;
$product->BN = $data->BN;
$product->BonusType = $data->BonusType;
$product->Segment = $data->Segment;
$product->DepositBonusPercentage = $data->DepositBonusPercentage;
$product->MaxBonus = $data->MaxBonus;
$product->FreeSpins = $data->FreeSpins;
$product->Wager = $data->Wager;
$product->MinDeposit = $data->MinDeposit;
$product->Vta = $data->Vta;
$product->OfferContent = $data->OfferContent;
$product->OurOfferContent = $data->OurOfferContent;
$product->AffiliateLink = $data->AffiliateLink;
$product->Reg2Dep = $data->Reg2Dep;
$product->GoBig = $data->GoBig;
$product->Weight = $data->Weight;
$product->Count = $data->Count;
$product->LinkImg = $data->LinkImg;
$product->CasinoBrand1 = $data->CasinoBrand1;
$product->KeitaroGoBigID = $data->KeitaroGoBigID;
$product->KeitaroR2dID = $data->KeitaroR2dID;
$product->Postback = $data->Postback;
$product->Segment2 = $data->Segment2;
$product->FirstPriority = $data->FirstPriority;
$product->Trendsetting = $data->Trendsetting;
$product->Hottest = $data->Hottest;
$product->QuickSignUp = $data->QuickSignUp;


// проверяем, существует ли запись с указанным Tech
if ($product->readOne()) {
    // если существует, обновляем запись
    if ($product->update()) {
        // устанавливаем код ответа - 200 OK
        http_response_code(200);
        // сообщаем пользователю
        echo json_encode(array("message" => "Пользователь был обновлен"), JSON_UNESCAPED_UNICODE);
    } else {
        // код ответа - 503 Сервис не доступен
        http_response_code(503);
        // сообщение пользователю
        echo json_encode(array("message" => "Невозможно обновить пользователя"), JSON_UNESCAPED_UNICODE);
    }
} else {
    // если записи не существует, создаем новую
    if ($product->create()) {
        // устанавливаем код ответа - 201 Создано
        http_response_code(201);
        // сообщаем пользователю
        echo json_encode(array("message" => "Пользователь был создан"), JSON_UNESCAPED_UNICODE);
    } else {
        // Добавьте этот блок для вывода дополнительной информации об ошибке
        $errorInfo = $stmt->errorInfo();
        
        // Добавьте условие для проверки, был ли объект $stmt инициализирован
        if ($stmt) {
            http_response_code(503);
            echo json_encode(array("message" => "Невозможно создать пользователя. Подробности ошибки: " . $errorInfo[2]), JSON_UNESCAPED_UNICODE);
        } else {
            // Если $stmt не был инициализирован, возможно, ошибка при подготовке запроса
            http_response_code(503);
            echo json_encode(array("message" => "Невозможно создать пользователя. Ошибка подготовки запроса."), JSON_UNESCAPED_UNICODE);
        }
    }
}
?>