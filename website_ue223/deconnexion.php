 <?php
	session_start(); 
		
		$_SESSION['text']="Déconnexion réussi !";
		
	
		if(array_key_exists('text', $_SESSION)){
			
			
			$valid_deco= $_SESSION['text'];
		   
			header('Location: connect.php');
			// echo "<p style='font-size:1.5rem; text-align:center;'>$valid_deco<br>Vous allez être redirigé dans 2 secondes.</p>";
			session_destroy();
			unset($_SESSION);
		
		} else {
			echo "non";
		}
		
	
    
?>