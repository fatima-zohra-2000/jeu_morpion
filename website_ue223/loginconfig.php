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

if(isset($_POST['signin'])){ //si le bouton 'se connecter' est cliqué


  //si les champs sont vides :
  function verify_existence() {
    if(empty($_POST['username'])&& empty($_POST['password'])){
      $_SESSION['retour_erreur']='Veuillez renseigner votre identifiant et mot de passe';
      header('Location: connect.php');
      exit();
    }
    else if (empty($_POST['username'])){
      $_SESSION['retour_erreur'] = 'Veuillez renseigner votre identifiant';
      header('Location: connect.php');
      exit();
    }
    else if(empty($_POST['password'])){
        $_SESSION['retour_erreur'] = 'Veuillez renseigner votre mot de passe';
        header('Location: connect.php');
        exit();
    }//eof vérification des champs vides
  }

  function validate($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
  return $data;
}

  $username= validate($_POST['username']);
  $password= validate($_POST['password']);

  if(count($_POST) && array_key_exists('username', $_POST) && array_key_exists('password', $_POST)){
      if(!empty($username)&& !empty($password)){

        $res="SELECT `id`,`identifiant`,`motdepasse` FROM `utilisateurs` WHERE `identifiant`='".$username."' and `motdepasse`='".$password."'";
        $requete=mysqli_query($cnx, $res);
        $data= mysqli_fetch_assoc($requete);

        if ((mysqli_num_rows($requete) > 0) )
          { $_SESSION['username']=$username;
            $_SESSION['password']=$password;
            $_SESSION['id_user'] = $data['id'];
            header('Location: main.html');
          }
        // else if ((mysqli_num_rows($requete) > 0) && $data['type_user']== 'visiteur')
        //   { $_SESSION['username']=$username;
        //     $_SESSION['password']=$password;
        //     header('Location: visiteurs.php');
        //   }
        else
            {
            $_SESSION['retour_erreur'] = 'Impossible de trouver ce compte. Vérifiez votre identifiant et mot de passe';
            header('Location: connect.php');
            }
      }
      else {
        // $_SESSION['retour_erreur']='Veuillez renseigner votre identifiant et mot de passe';
        verify_existence();
      }
  } else{ $_SESSION['retour_erreur'] = 'Identifiant ou mot de passe n\'existe pas'; }
}
?>
  </body>
  </html>
