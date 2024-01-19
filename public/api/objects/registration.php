

<?php

class Product
{
    // подключение к базе данных и таблице "registration"
    private $conn;
    private $table_name = "registration";

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


  // метод для удаления записи по id
  function deleteById($id)
  {
      // запрос для удаления записи по id
      $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
      
      // подготовка запроса
      $stmt = $this->conn->prepare($query);

      // привязываем параметры
      $stmt->bindParam(1, $id);
      
      // выполняем запрос
      if ($stmt->execute()) {
          return true;
      }
      
      return false;
  }

  // метод для получения и удаления первой записи
  function readAndDeleteFirst()
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

      // получаем первую запись
      $row = $stmt->fetch(PDO::FETCH_ASSOC);

      // если запись найдена, удаляем её и возвращаем данные
      if ($row) {
          $this->deleteById($row['id']);
          return $row;
      }

      return null; // если запись не найдена
  }
    
     
  
    

  

}