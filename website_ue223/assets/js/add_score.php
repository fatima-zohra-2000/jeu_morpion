<?php 
session_start(); 
$cnx->connection = require("connexion.php");
?>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Connexion</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Stick+No+Bills:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <?php 
        // if(count($_POST) && array_key_exists('scorejoueur1', $_POST) && array_key_exists('scorejoueur2', $_POST)){
        
        if (count($_POST) && array_key_exists('score', $_POST)){
            $joueur1 = $_POST['score'];
            // @$joueur2 = $_POST['scorejoueur2'];

            //tests de sécurité
            if(!empty($joueur1)){
                if(is_numeric($joueur1)){
                    $_SESSION['joueur1'] = $joueur1;
                    // $_SESSION['joueur2'] = $joueur2;
                    $scorej1 = $_SESSION['joueur1'];
                    $id_user = $_SESSION['id_user'];
                    $sql= "UPDATE score SET level1 = $scorej1 WHERE id_utilisateur = '$id_user';";
                    // $sql = "INSERT INTO `score` (`id_utilisateur` ,`level1`, `level2`, `level3`) VALUES ('$id_user', '$joueur1', '0', '0');";
                    mysqli_query($cnx, $sql);
                    // header('Location: level1.html');

                }
            }
        }
    ?>
  </body>
</html>