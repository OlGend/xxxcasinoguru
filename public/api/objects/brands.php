<?php

class Brand
{
    // подключение к базе данных и таблице "brands"
    private $conn;
    private $table_name = "brands";

    // свойства объекта
    public $Tech;
    public $CasinoBrand;
    public $CurrentStatus;
    public $Sandbox;
    public $InteractionType;
    public $GEO;
    public $Localization;
    public $Shortcomings;
    public $DateOfLastChange;
    public $TypeOfDeal;
    public $CPA;
    public $RS;
    public $BL;
    public $BN;
    public $BonusType;
    public $Segment;
    public $DepositBonusPercentage;
    public $MaxBonus;
    public $FreeSpins;
    public $Wager;
    public $MinDeposit;
    public $Vta;
    public $OfferContent;
    public $OurOfferContent;
    public $AffiliateLink;
    public $Reg2Dep;
    public $GoBig;
    public $Weight;
    public $Count;
    public $LinkImg;
    public $CasinoBrand1;
    public $KeitaroGoBigID;
    public $KeitaroR2dID;
    public $Postback;
    public $Segment2;
    public $FirstPriority;
    public $Trendsetting;
    public $Hottest;
    public $QuickSignUp;
    public $IdBrand;



    // конструктор для соединения с базой данных
    public function __construct($db)
    {
        $this->conn = $db;
    }


    function read()
    {
        // выбираем все записи из таблицы "brands"
        $query = "SELECT
            `Tech`, `Casino brand`, `Current Status`, `Sandbox`, `Interaction Type`, `GEO`, `Localization`, `Shortcomings`,
            `Date of Last Change`, `The type of a deal`, `CPA`, `RS`, `BL`, `BN`, `Bonus type`, `Segment`, `Deposit bonus, %`,
            `Max bonus`, `Free spins`, `Wager`, `Min deposit`, `В-та`, `Offer content`, `Our offer content`, `Affiliate Link`,
            `reg2dep`, `gobig`, `вес`, `count`, `Link img`, `Casino brand 1`, `keitaro gobig ID`, `keitaro r2d ID`, `postback`,
            `Segment2`, `Первый приоритет`, `Trendsetting`, `Hottest`, `Quick Sign-Up`, `id_brand`
        FROM
            " . $this->table_name;
    
        // подготовка запроса
        $stmt = $this->conn->prepare($query);
        
        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }
    



    function readOne()
    {
        // запрос для выбора одной записи по ID (Tech)
        $query = "SELECT
            `Tech`, `Casino brand`, `Current Status`, `Sandbox`, `Interaction Type`, `GEO`, `Localization`, `Shortcomings`,
            `Date of Last Change`, `The type of a deal`, `CPA`, `RS`, `BL`, `BN`, `Bonus type`, `Segment`, `Deposit bonus, %`,
            `Max bonus`, `Free spins`, `Wager`, `Min deposit`, `В-та`, `Offer content`, `Our offer content`, `Affiliate Link`,
            `reg2dep`, `gobig`, `вес`, `count`, `Link img`, `Casino brand 1`, `keitaro gobig ID`, `keitaro r2d ID`, `postback`,
            `Segment2`, `Первый приоритет`, `Trendsetting`, `Hottest`, `Quick Sign-Up`, `id_brand`
        FROM
            " . $this->table_name . "
        WHERE
        id_brand = :id_brand
        LIMIT
            0,1";

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // привязываем значения
        $stmt->bindParam(":id_brand", $this->IdBrand);

        // выполняем запрос
        $stmt->execute();

        // получаем строку из результата запроса
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($row) {

   
   
        

        return $row;
    } else {
        // Если запись не найдена, вы можете вернуть ошибку или какое-то значение по умолчанию
        return null;
    }
    }
    

// метод для обновления пользователя
function update()
{
    // запрос для обновления записи (пользователя)
    $query = "UPDATE
               " . $this->table_name . "
           SET
           `Tech` = :Tech, `Casino brand` = :CasinoBrand, `Current Status` = :CurrentStatus, `Sandbox` = :Sandbox,
           `Interaction Type` = :InteractionType, `GEO` = :GEO, `Localization` = :Localization, `Shortcomings` = :Shortcomings,
           `Date of Last Change` = :DateOfLastChange, `The type of a deal` = :TypeOfDeal, `CPA` = :CPA, `RS` = :RS,
           `BL` = :BL, `BN` = :BN, `Bonus type` = :BonusType, `Segment` = :Segment, `Deposit bonus, %` = :DepositBonusPercentage,
           `Max bonus` = :MaxBonus, `Free spins` = :FreeSpins, `Wager` = :Wager, `Min deposit` = :MinDeposit,
           `В-та` = :Vta, `Offer content` = :OfferContent, `Our offer content` = :OurOfferContent,
           `Affiliate Link` = :AffiliateLink, `reg2dep` = :Reg2Dep, `gobig` = :GoBig, `вес` = :Weight,
           `count` = :Count, `Link img` = :LinkImg, `Casino brand 1` = :CasinoBrand1, `keitaro gobig ID` = :KeitaroGoBigID,
           `keitaro r2d ID` = :KeitaroR2dID, `postback` = :Postback, `Segment2` = :Segment2,
           `Первый приоритет` = :FirstPriority, `Trendsetting` = :Trendsetting, `Hottest` = :Hottest,
           `Quick Sign-Up` = :QuickSignUp, `id_brand` = :IdBrand
           WHERE
               id_brand = :IdBrand";  // Добавлено условие WHERE

    // подготовка запроса
    $stmt = $this->conn->prepare($query);

    // очистка и привязываем значения
    foreach ($this as $key => $value) {
        if (!in_array($key, ["conn", "table_name"])) {
            $value = htmlspecialchars(strip_tags($value));
            $stmt->bindParam(":$key", $this->$key);
        }
    }

    // Вывод данных перед выполнением запроса (для отладки)
    echo "Отправленные данные для обновления: " . json_encode($this, JSON_UNESCAPED_UNICODE) . "\n";

    // выполняем запрос
    if ($stmt->execute()) {
        return true;
    }
    return false;
}
    






    function create()
{
    // запрос для выбора записи по Tech
    $check_query = "SELECT id_brand FROM " . $this->table_name . " WHERE id_brand = :IdBrand LIMIT 1";

    // подготовка запроса
    $check_stmt = $this->conn->prepare($check_query);

    // привязываем значения
    $check_stmt->bindParam(":IdBrand", $this->IdBrand);

    // выполняем запрос
    $check_stmt->execute();

    // проверяем, существует ли запись
    if ($check_stmt->fetch(PDO::FETCH_ASSOC)) {
        // Запись уже существует
        http_response_code(400);
        echo json_encode(array("message" => "Запись с указанным Id уже существует."), JSON_UNESCAPED_UNICODE);
        return false;
    }

    // запрос для вставки записи
    $query = "INSERT INTO " . $this->table_name . "
    (`Tech`, `Casino brand`, `Current Status`, `Sandbox`, `Interaction Type`, `GEO`, `Localization`, `Shortcomings`,
    `Date of Last Change`, `The type of a deal`, `CPA`, `RS`, `BL`, `BN`, `Bonus type`, `Segment`, `Deposit bonus, %`,
    `Max bonus`, `Free spins`, `Wager`, `Min deposit`, `В-та`, `Offer content`, `Our offer content`, `Affiliate Link`,
    `reg2dep`, `gobig`, `вес`, `count`, `Link img`, `Casino brand 1`, `keitaro gobig ID`, `keitaro r2d ID`, `postback`,
    `Segment2`, `Первый приоритет`, `Trendsetting`, `Hottest`, `Quick Sign-Up`, `id_brand`)
    VALUES
    (:Tech, :CasinoBrand, :CurrentStatus, :Sandbox, :InteractionType, :GEO, :Localization, :Shortcomings,
    :DateOfLastChange, :TypeOfDeal, :CPA, :RS, :BL, :BN, :BonusType, :Segment, :DepositBonusPercentage,
    :MaxBonus, :FreeSpins, :Wager, :MinDeposit, :Vta, :OfferContent, :OurOfferContent, :AffiliateLink,
    :Reg2Dep, :GoBig, :Weight, :Count, :LinkImg, :CasinoBrand1, :KeitaroGoBigID, :KeitaroR2dID, :Postback,
    :Segment2, :FirstPriority, :Trendsetting, :Hottest, :QuickSignUp, :IdBrand)";

    // выводим данные перед выполнением запроса
    echo "Отправленные данные для вставки: " . json_encode($values, JSON_UNESCAPED_UNICODE) . "\n";

    // подготовка запроса для вставки
    $stmt = $this->conn->prepare($query);

    // формируем ассоциативный массив значений
    $values = array();
    foreach ($this as $key => $value) {
        if (!in_array($key, ["conn", "table_name"])) {
            $values[":$key"] = $value;
        }
    }

    // выполняем запрос с ассоциативным массивом значений
    if ($stmt->execute($values)) {
        return true;
    }

    $errorInfo = $stmt->errorInfo();

    http_response_code(503);
    echo json_encode(array("message" => "Невозможно выполнить запрос. Подробности ошибки: " . implode(",", $errorInfo)), JSON_UNESCAPED_UNICODE);

    return false;
}

}