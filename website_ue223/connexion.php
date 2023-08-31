<!DOCTYPE html>
<html>
	<head>
	</head>
	<body>
		<?php
			$host="localhost";
			$user="UE223";
			$pass="Lu5n2MvwDaVLkj1m";
			$bdd="ue223";
			$cnx=mysqli_connect($host,$user,$pass);
			if(!$cnx){
				echo"cannot connect to the server"."</br>";
				exit();
			}
			if (mysqli_select_db($cnx,$bdd)==false){
				echo"Cannot find the data base"."</br>";
				exit();
			}
		?>
	</body>
</html>