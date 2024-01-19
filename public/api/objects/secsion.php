

<?php

class Product
{
    // подключение к базе данных и таблице "products"
    private $conn;
    private $table_name = "secsion";

    // свойства объекта
    public $sector1;
    public $sector2;
    public $sector3;
    public $sector4;
    public $sector5;
    public $sector6;
    public $sector7;
    public $sector8;
    public $sector9;
    public $sector10;
    public $sector11;
    public $sector12;
    




    // конструктор для соединения с базой данных
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // метод для получения товаров
    function read()
    {
        $query = "SELECT
            p.id, p.sector1, p.sector2, p.sector3, p.sector4, p.sector5, p.sector6, p.sector7, p.sector8, p.sector9, p.sector10, p.sector11, p.sector12
        FROM
            " . $this->table_name . " p";
    
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    



    // метод для получения конкретного товара по ID
  // метод для получения конкретного товара по ID
function readOne()
{
    // запрос для чтения одной записи (товара)
    $query = "SELECT
       p.id, p.sector1, p.sector2, p.sector3, p.sector4, p.sector5, p.sector6, p.sector7, p.sector8, p.sector9, p.sector10, p.sector11, p.sector12
    FROM
        " . $this->table_name . " p
    WHERE
        p.id = ?
    LIMIT
        0,1";

    // подготовка запроса
    $stmt = $this->conn->prepare($query);

    // привязываем id товара, который будет получен
    $stmt->bindParam(1, $this->id);

    // выполняем запрос
    $stmt->execute();

    // получаем извлеченную строку
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // установим значения свойств объекта
    $this->id = $row["id"];
    $this->sector1 = $row["sector1"];
    $this->sector2 = $row["sector2"];
    $this->sector3 = $row["sector3"];
    $this->sector4 = $row["sector4"];
    $this->sector5 = $row["sector5"];
    $this->sector6 = $row["sector6"];
    $this->sector7 = $row["sector7"];
    $this->sector8 = $row["sector8"];
    $this->sector9 = $row["sector9"];
    $this->sector10 = $row["sector10"];
    $this->sector11 = $row["sector11"];
    $this->sector12 = $row["sector12"];
}


    // метод для обновления пользователя
    function update()
    {
        // запрос для обновления записи (пользователя)
        $query = "UPDATE
                " . $this->table_name . "
            SET
                count = :count,
            WHERE
                id = :id";

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // очистка
        $this->count = htmlspecialchars(strip_tags($this->count));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // привязываем значения
        $stmt->bindParam(":count", $this->count);
        $stmt->bindParam(":id", $this->id);

        // выполняем запрос
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

}