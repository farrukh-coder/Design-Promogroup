<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "1903614671:AAF9nIhKpL3pMIGo_jeEl7GwhgWTITRpZH0";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "681023552";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
  'Имя пользователя: ' => $name,
  'E-mail: ' => $email,
  'Телефон: ' => $phone,
  'Сообщение: ' => $message
);

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {

  ob_start();
  $new_url = 'index.html';
  header('Location: '.$new_url);
  ob_end_flush();

} else {
  echo "Error";
}
