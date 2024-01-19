

<?php

class Product
{
    // подключение к базе данных и таблице "products"
    private $conn;
    private $table_name = "auth";

    // свойства объекта
    public $id;
    public $login;
    public $password;
    public $authorisation;
    




    // конструктор для соединения с базой данных
    public function __construct($db)
    {
        $this->conn = $db;
    }






    // метод для получения конкретного товара по ID
// метод для получения конкретного товара по логину
function readOne()
{
    // запрос для чтения одной записи (товара)
    $query = "SELECT
        p.id, p.login, p.password, p.authorisation
    FROM
    " . $this->table_name . " p
    WHERE
    p.login = ?
    LIMIT
    0,1";

    // подготовка запроса
    $stmt = $this->conn->prepare($query);

    // привязываем логин пользователя
    $stmt->bindParam(1, $this->login);

    // выполняем запрос
    $stmt->execute();

    // получаем извлеченную строку
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // установим значения свойств объекта
    $this->id = $row["id"];
    $this->login = $row["login"];
    $this->password = $row["password"];
    $this->authorisation = $row["authorisation"];
}





}