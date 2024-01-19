

<?php

class Product
{
    // подключение к базе данных и таблице "users"
    private $conn;
    private $table_name = "users";

    // свойства объекта
    public $login;
    public $id;
    public $VIP;
    public $balance;
    public $country;
    public $input;
    public $password;
    public $tickets;
    public $winbalance;
    public $customer;



    // конструктор для соединения с базой данных
    public function __construct($db)
    {
        $this->conn = $db;
    }


    // метод для получения товаров
    function read()
    {
        // выбираем все записи без учета категорий
        $query = "SELECT
            p.login, p.id, p.VIP, p.balance, p.country, p.input, p.password, p.tickets, p.winbalance, p.customer
        FROM
            " . $this->table_name . " p";
        
        // подготовка запроса
        $stmt = $this->conn->prepare($query);
        
        // выполняем запрос
        $stmt->execute();
        return $stmt;
    }
    
    



    // метод для получения конкретного товара по ID
    function readOne()
    {
        // запрос для чтения одной записи (товара)
        $query = "SELECT
           p.login, p.id, p.VIP, p.balance, p.country, p.input, p.password, p.tickets, p.winbalance, p.customer
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
        $this->login = $row["login"];
        $this->id = $row["id"];
        $this->VIP = $row["VIP"];
        $this->balance = $row["balance"];
        $this->country = $row["country"];
        $this->input = $row["input"];
        $this->password = $row["password"];
        $this->tickets = $row["tickets"];
        $this->winbalance = $row["winbalance"];
        $this->customer = $row["customer"];

    }

    // метод для обновления пользователя
    function update()
    {
        // запрос для обновления записи (пользователя)
        $query = "UPDATE
                " . $this->table_name . "
            SET
                tickets = :tickets,
                balance = :balance
            WHERE
                id = :id";

        // подготовка запроса
        $stmt = $this->conn->prepare($query);

        // очистка
        $this->tickets = htmlspecialchars(strip_tags($this->tickets));
        $this->balance = htmlspecialchars(strip_tags($this->balance));
        $this->id = htmlspecialchars(strip_tags($this->id));

        // привязываем значения
        $stmt->bindParam(":tickets", $this->tickets);
        $stmt->bindParam(":balance", $this->balance);
        $stmt->bindParam(":id", $this->id);

        // выполняем запрос
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

}