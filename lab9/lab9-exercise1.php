<html>
<head>
    <title>Exercise 1</title>
</head>
<body>
<h1>Regular HTML section (outside &lt;?php ... ?&gt; tags)</h1>
<p>You can type regular HTML here and it will show up</p>

<h1>PHP section (inside &lt;?php ... ?&gt; tags)</h1>
<?php
//this is a php comment IN tags (will not appear)
date_default_timezone_set("PRC");
$date = date("l, F dS , Y H:i:s");
$thisYear = date("Y");
$days = 365;
if ($thisYear % 4 === 0 && $thisYear % 100 !== 0):
    $days = 366;
elseif ($thisYear % 400 === 0):
    $days = 366;
endif;
$remaining = $days - date("z");
echo "There are " . $remaining . " days left in the year" . "<br/>";
echo "This page was generated: " . $date . "<hr/>";

//notice we must echo tags in php.

?>
</body>
</html>