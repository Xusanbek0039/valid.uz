<?php
$counterFile = "counter.json";

// Fayl mavjudligini tekshiramiz
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, json_encode(["count" => 812])); // Boshlang‘ich qiymat
}

$data = json_decode(file_get_contents($counterFile), true);
$data["count"] += 1; // Tashriflarni 1 taga oshiramiz

// Yangilangan qiymatni qayta yozamiz
file_put_contents($counterFile, json_encode($data));

// JSON formatida javob qaytaramiz
header('Content-Type: application/json');
echo json_encode($data);
?>
