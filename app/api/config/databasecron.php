<?php

class Database
{
    // укажите свои учетные данные базы данных
    private $host = "ny509616.mysql.tools";
    private $db_name = "ny509616_test";
    private $username = "ny509616_test";
    private $password = "gN@M6;h7z7";
    public $conn;
    

    // получаем соединение с БД
    public function getConnection()
    {
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        } catch (PDOException $exception) {
            echo "Ошибка подключения: " . $exception->getMessage();
        }

        return $this->conn;
    }
}