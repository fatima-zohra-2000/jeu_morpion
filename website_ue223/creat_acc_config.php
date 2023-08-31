<?php
session_start();
?>
<!DOCTYPE html>
<html>
<head>
</head>
<body>

  <?php

  $cnx->connection = require("connexion.php");

    $sql2= "SELECT `identifiant` FROM `utilisateurs`;";
    $requete=mysqli_query($cnx, $sql2);
    $data= mysqli_fetch_all($requete);
    $i=0;

if(isset($_POST['signup'])){ //si le bouton 's'inscrire'' est cliqué
    
    //si les champs sont vides : (la fonction va etre utilisée ensuite)
    function verifyExistance() {
        if (empty($_POST['first_name']) OR empty($_POST['familly_name']) 
        OR empty($_POST['identifiant']) OR empty($_POST['password']) 
        OR empty($_POST['password_confirm'])){ //si l'un des champs est vide'
        $_SESSION['retour_erreur'] = 'Veillez renseigner tous les champs demandés !';
        header('Location: creatacc.php');
        exit();
        }
    }
    //eof vérification des champs vides

    function validate($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
      return $data;
    }

    // $identifiant_valid= false;

    if(count($_POST) && array_key_exists('first_name', $_POST) && array_key_exists('familly_name', $_POST) && array_key_exists('identifiant', $_POST) && array_key_exists('password', $_POST) && array_key_exists('password_confirm', $_POST)){
        
        $firstname= validate($_POST['first_name']);
        $famillyname= validate($_POST['familly_name']);
        $identifiant = validate($_POST['identifiant']);
        $password = validate($_POST['password']);
        $password_confirm = validate($_POST['password_confirm']);
        
        if(!empty($firstname)&& !empty($famillyname) && !empty($identifiant) &&!empty($password) &&!empty($password_confirm)){
            if($password === $password_confirm){
                
                foreach($data as $datavalue){               // cette boucle parcourt les données séléctionnées à l'aide de la requête sql, et vérifie que l'identifiant saisi est unique (pas déjà pris)
                    foreach($datavalue as $datavalue2){
                        if($datavalue2 == $identifiant){
                            @$identifiant_valid= false;
                            break 2;
                        }else{ 
                            @$identifiant_valid = true;
                        }
                    }
                }

                if($identifiant_valid==true){
                    $sql= "INSERT INTO `utilisateurs` (`id` ,`Prenom`, `Nom`, `identifiant`, `motdepasse`) VALUES (NULL, '$firstname', '$famillyname', '$identifiant', '$password');";
                    mysqli_query($cnx, $sql);

                    $_SESSION['retour_erreur'] = 'Bienvenue !';
                    $_SESSION['username']=$identifiant;

                    $sql3= "SELECT `id`,`identifiant`,`motdepasse` FROM `utilisateurs` WHERE `identifiant`='".$identifiant."' and `motdepasse`='".$password."'";
                    $requete=mysqli_query($cnx, $sql3);
                    $data= mysqli_fetch_assoc($requete);

                    $_SESSION['id_user'] = $data['id'];
                    $id_user = $_SESSION['id_user'];

                    //pour définir l'utilisateur et son score dans la table score
                    $sql4 = "INSERT INTO `score` (`id_utilisateur` ,`level1`, `level2`, `level3`) VALUES ('$id_user', '0', '0', '0');";
                    mysqli_query($cnx, $sql4);

                    header('Location: main.html');
                }else{
                    $_SESSION['retour_erreur'] = 'L\'identifiant que vous avez choisi est utilisé par un autre utilisateur. Veuillez choisir un autre';
                    header('Location: creatacc.php'); 
                    exit;
                }
            }
            else{
                $_SESSION['retour_erreur'] = 'Confirmation de mot de passe a echoué. Veuillez réessayer';
                header('Location: creatacc.php');
            }
        }else { verifyExistance(); }
    } else{ 
        header('Location: creatacc.php');
        $_SESSION['retour_erreur'] = 'Données n\'existent pas !';
        }
}
?>
  </body>
  </html>