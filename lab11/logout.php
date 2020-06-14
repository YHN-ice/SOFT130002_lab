<?php
session_start();
setcookie("Username", "", -1);
header("Location: ".$_SERVER['HTTP_REFERER']);
?>
