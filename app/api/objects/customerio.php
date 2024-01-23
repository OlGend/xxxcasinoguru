<?php

require_once __DIR__ . '/../config/databasecron.php';

class CustomerIOUpdater
{
    private $conn;
    private $tempTableName = 'customer';
    private $customerSiteId = 'b0e62a74234c966830e3';
    private $customerApiKey = '8603e3e2dbd3bac74072';
    private $customerSiteId2 = '4ca906c0932369a13963';
    private $customerApiKey2 = '6f29015cd0560e7edf40';
    private $customerSiteId3 = 'e5eea51a28a74ee1810f';
    private $customerApiKey3 = '6af266a97fb4c0f1dec5';

    
    public function __construct()
    {
        $database = new Database();
        $this->conn = $database->getConnection();
    }

    public function updateCustomerIO()
    {
        // Выбираем данные из таблицы
        $query = "SELECT id, balance, tickets, winbalance, customer FROM $this->tempTableName";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
            // Создаем массив данных
            $customerData = [
                'id' => $row['id'],
                'balance' => $row['balance'],
                'tickets' => $row['tickets'],
                'winbalance' => $row['winbalance'],
                'customer' => $row['customer'],
            ];

            // Выводим в консоль лог данные из базы
            error_log('Data from database: ' . json_encode($customerData));

            // Преобразуем массив в JSON
            $jsonData = json_encode($customerData);

            // Отправляем данные в CustomerIO в зависимости от значения customer
            if ($row['customer'] === 'GURU') {
                $this->sendToCustomerIO($jsonData, $row['id'], $this->customerSiteId, $this->customerApiKey);
            } elseif ($row['customer'] === 'MAW') {
                $this->sendToCustomerIO($jsonData, $row['id'], $this->customerSiteId2, $this->customerApiKey2);
            } elseif ($row['customer'] === 'buben') {
                $this->sendToCustomerIO($jsonData, $row['id'], $this->customerSiteId3, $this->customerApiKey3);
            }
        }

        // Очищаем временную таблицу после отправки данных
        $this->clearTempTable();
    }

    private function sendToCustomerIO($jsonData, $customerId, $siteId, $apiKey)
    {
        // Выводим в консоль лог данные перед отправкой
        echo 'Data to send to CustomerIO: ' . $jsonData;

        $credentials = $siteId . ':' . $apiKey;
        $base64Credentials = base64_encode($credentials);

        $url = 'https://track-eu.customer.io/api/v1/customers/' . $customerId . '/events';
        $headers = [
            'Content-Type: application/json',
            'Authorization: Basic ' . $base64Credentials,
        ];

        // Добавляем имя события
        $eventData = [
            'name' => 'NEW EVENT', // Замените 'your_event_name' на фактическое имя вашего события
            'data' => json_decode($jsonData, true),
        ];

        $jsonDataWithEvent = json_encode($eventData);

        $curl = curl_init($url);
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, $jsonDataWithEvent);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

        $response = curl_exec($curl);

        if ($response === false) {
            echo 'Curl error: ' . curl_error($curl);
        } else {
            $httpCode = curl_getinfo($curl, CURLINFO_HTTP_CODE);
            if ($httpCode !== 200) {
                echo 'CustomerIO error. HTTP Code: ' . $httpCode . ', Response: ' . $response;
            }
        }

        curl_close($curl);
    }

    private function clearTempTable()
    {
        // Очищаем временную таблицу
        $query = "TRUNCATE TABLE $this->tempTableName";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
    }
}

$customerIOUpdater = new CustomerIOUpdater();
$customerIOUpdater->updateCustomerIO();
