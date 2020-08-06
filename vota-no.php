<?php
	setcookie("voto-sherlock", true, time() + 86400 * 30, '/');
?>
<html>
<?php
	$file = file_get_contents("no.json");
	$result = intval($file) + 1;
	file_put_contents("no.json", $result);
?>
</html>