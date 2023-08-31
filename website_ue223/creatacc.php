<?php 
session_start();
// $_SESSION['retour_erreur']='';
?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Inscrivez-vous</title>
  <link rel="stylesheet" href="assets/css/style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Stick+No+Bills:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet">
</head>
  <body>
    <div class="main">
      <section class="signup">
        <div class="container position-center">
            <div class="signup-content">
                <div class="signup-form">
                    <h2 class="form-title">Inscription</h2>
                    <form method="post" action="creat_acc_config.php" id="register-form">

                      <?php 
                        if(!empty($_SESSION['retour_erreur'])){
                          echo '<p class="msg-erreur">'.$_SESSION['retour_erreur'].'</p>';
                          $_SESSION['retour_erreur']=''; //pour vider le msg d'erreur
                        }
                      ?>
                        <div class="form-group">
                          <input type="text" name="first_name" id="first_name" placeholder="Prénom"/></br>
                        </div>

                        <div class="form-group">
                          <input type="text" name="familly_name" id="familly_name" placeholder="Nom"/></br>
                        </div>

                        <div class="form-group">
                          <input type="text" name="identifiant" id="identifiant" placeholder="Identifiant"/></br>
                        </div>

                        <div class="form-group">
                          <input type="password" name="password"id="password" placeholder="Mot de passe"/></br>
                        </div>

                        <div class="form-group">
                          <input type="password" name="password_confirm"id="password_confirm" placeholder="Confirmation de mot de passe"/></br>
                        </div>


                        <div class="form-group form-button"></br>
                          <input type="submit" name="signup"id="signup" class="form-submit" value="S'inscrire"/>
                        </div>
                        <a href="connect.php" class="form-lien">Vous êtes déjà un membre ? Connectez-vous</a>
                    </form>
                  </div>
              <div class="signup-image">
                  <figure><img src="assets/images/kid_creat.jpg" alt="sing up image"></figure>
              </div>
            </div>
      </section>
    </div>

  </body>
</html>
