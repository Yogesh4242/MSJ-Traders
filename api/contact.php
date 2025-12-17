<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// --- CONFIG ---
$BOT_TOKEN = "8197066589:AAF8z4Q_cCzwYq6E6_k7KXYRA5Y0pHF5Cs4";
$CHAT_ID = "1308376680";

$EMAIL_FROM = "enhanzers.devuse@gmail.com";
$EMAIL_PASSWORD = "gnnwlxxmmgegrblg";
$EMAIL_TO = "yogeshsenthil142@gmail.com";

// --- OPTIONS Handling ---
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    echo "";
    exit;
}

// --- Read JSON Payload ---
$raw = file_get_contents("php://input");
$data = json_decode($raw, true);

$name = trim($data["name"] ?? "");
$email = trim($data["email"] ?? "");
$phone = trim($data["phone"] ?? "");
$message = trim($data["message"] ?? "");

// --- Validate ---
if (!$name || !$email || !$message) {
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields"
    ]);
    exit;
}

// --- Build Structured Data ---
$timestamp = date("Y-m-d H:i:s");
$entry = [
    "timestamp" => $timestamp,
    "name" => $name,
    "email" => $email,
    "phone" => $phone,
    "message" => $message,
    "id" => date("YmdHis"),
    "source" => "website_form"
];

/**
 * 🔹 Save to JSON file like Python version
 */
function saveToFile($entry) {
    $year = date("Y");
    $month = date("m_F");

    $folder = __DIR__ . "/data/$year";
    if (!is_dir($folder)) mkdir($folder, 0777, true);

    $filePath = "$folder/$month.json";

    file_put_contents($filePath, json_encode($entry, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
}

/**
 * 🔹 Send Telegram notification
 */
function sendTelegram($entry, $BOT_TOKEN, $CHAT_ID) {
    $msg = "
🚀 NEW CONTACT FORM SUBMISSION\n
👤 Name: {$entry['name']}
📧 Email: {$entry['email']}
📞 Phone: {$entry['phone']}
💬 Message: {$entry['message']}
⏰ Time: {$entry['timestamp']}
";

    $url = "https://api.telegram.org/bot$BOT_TOKEN/sendMessage";

    $payload = [
        "chat_id" => $CHAT_ID,
        "text" => $msg
    ];

    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ["Content-Type: application/json"]);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_exec($ch);
    curl_close($ch);
}

/**
 * 🔹 Send email using PHPMailer (best method on Hostinger)
 */
function sendEmail($entry, $EMAIL_FROM, $EMAIL_PASSWORD, $EMAIL_TO) {
    // Load PHPMailer library (Hostinger supports it)
    require_once __DIR__ . "/phpmailer/src/PHPMailer.php";
    require_once __DIR__ . "/phpmailer/src/SMTP.php";
    require_once __DIR__ . "/phpmailer/src/Exception.php";

    $mail = new PHPMailer\PHPMailer\PHPMailer();

    $mail->isSMTP();
    $mail->Host = "smtp.gmail.com";
    $mail->SMTPAuth = true;
    $mail->Username = $EMAIL_FROM;
    $mail->Password = $EMAIL_PASSWORD;
    $mail->SMTPSecure = "ssl";
    $mail->Port = 465;

    $mail->setFrom($EMAIL_FROM, "MSJ Traders Website");
    $mail->addAddress($EMAIL_TO);

    $mail->Subject = "🚀 New Contact Form: {$entry['name']}";
    $mail->Body = "
New Contact Form Submission from msjtraders.com:

Name: {$entry['name']}
Email: {$entry['email']}
Phone: {$entry['phone']}
Time: {$entry['timestamp']}

Message:
{$entry['message']}

-----------------------------------------------------
MSJ Traders Website / Team Enhanzers
";

    $mail->send();
}

// --- EXECUTE LOGIC ---
saveToFile($entry);
sendTelegram($entry, $BOT_TOKEN, $CHAT_ID);
sendEmail($entry, $EMAIL_FROM, $EMAIL_PASSWORD, $EMAIL_TO);

// --- RESPONSE ---
echo json_encode([
    "success" => true,
    "message" => "Thank you for your message! We will get back to you soon."
]);

?>
