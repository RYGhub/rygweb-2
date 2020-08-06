<?php
	setcookie("voto-sherlock", true, time() + 86400 * 30, '/');
?>
<html>
<?php
	$file = file_get_contents("si.json");
	$result = intval($file) + 1;
	file_put_contents("si.json", $result);
?>
</html>