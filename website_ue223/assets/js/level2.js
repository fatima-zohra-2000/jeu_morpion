 /**récupérer un contexte particulier - soit 2d */
 var canvas  = document.querySelector('#canvas');
 var context = canvas.getContext('2d');
/**on fait appel aux attribut du canvas */
 var tailleCanvasX = canvas.getAttribute('width');
 var tailleCanvasY = canvas.getAttribute('height');
 /**on trouve le minimum de taillecanvasx et 
  * taillecanvasy et l'on affecte à casetaile  */
 var casetaile = Math.min(tailleCanvasX/5, tailleCanvasY/5);
 /**marge en les symboles */
 var casetaillemarge = 25;
 /**declaratiopn des variables et intialisation de leur valeur */
 var joeur1 = true;
 var joeur2 = false;
 var nbdecasetotal = 0;
 var caserempli = new Array(false, false, false, false, false, 
    false, false, false, false, false,
    false, false, false, false, false, 
    false, false, false, false, false,
    false, false, false, false, false, 
    false, false, false, false, false );
 var casesjoeurs1 = new Array(0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0 );
 var casesjoeurs2 =  new Array(0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0, 
    0, 0, 0, 0, 0 );
 var scorejoeur1 = 0;
 var scorejouer2 = 0;
 var nbrematchsjouers = 0;
 /***dessinons la griller du jeu pour cela on va 
  * impliquer function drawGrio */
 function drawGrid(){
     /**changer les couleurs des formes */
     context.strokeStyle="#181818";
     /**Epaisser des lignes */
     context.lineWidth=3;
     /**premier chemin */
     context.beginPath();
     /**context.moveTo()
      * Déplace le chemin au point spécifié dans le canvas,
      *  sans créer de ligne. *  
      *  context.lineTo() 
      * Ajoute un nouveau point et crée une ligne vers ce 
      * point à partir du dernier point spécifié dans le canvas. */
     context.moveTo(casetaile, casetaillemarge);
     context.lineTo(casetaile, 6*casetaile-casetaillemarge);
     context.moveTo(2*casetaile, casetaillemarge);
     context.lineTo(2*casetaile, 6*casetaile-casetaillemarge);
     context.moveTo(3*casetaile, casetaillemarge);
     context.lineTo(3*casetaile, 6*casetaile-casetaillemarge);
     context.moveTo(4*casetaile, casetaillemarge);
     context.lineTo(4*casetaile, 6*casetaile-casetaillemarge);
  

     context.moveTo(casetaillemarge, casetaile);
     context.lineTo(6*casetaile-casetaillemarge, casetaile);
     context.moveTo(casetaillemarge, 2*casetaile);
     context.lineTo(6*casetaile-casetaillemarge, 2*casetaile);
     context.moveTo(casetaillemarge, 3*casetaile);
     context.lineTo(6*casetaile-casetaillemarge, 3*casetaile);
     context.moveTo(casetaillemarge, 4*casetaile);
     context.lineTo(6*casetaile-casetaillemarge, 4*casetaile);

     /**pour rendre la ligne visisble */
     context.stroke();
 }
 /**function drawCross 
  * permet de créer un croix en js   */
 function drawCross(x,y) {
     context.strokeStyle="#00007f";
     context.lineWidth=3;
     context.beginPath();
     context.moveTo(x-(casetaile/2)+casetaillemarge, y-(casetaile/2)+casetaillemarge);
     context.lineTo(x+(casetaile/2)-casetaillemarge, y+(casetaile/2)-casetaillemarge);
     context.moveTo(x-(casetaile/2)+casetaillemarge, y+(casetaile/2)-casetaillemarge);
     context.lineTo(x+(casetaile/2)-casetaillemarge, y-(casetaile/2)+casetaillemarge);
     context.stroke();	
 }
  /**function drawCircle
  * permet de créer un cercle en js    */
 function drawCircle(x,y) {
     context.strokeStyle="#7f0000";
     context.lineWidth=3;
     context.beginPath();
     context.arc(x, y, (casetaile/2)-casetaillemarge, 0, 2*Math.PI, true);
     context.stroke();	
 }
 /**Lorsque l’on clique sur la zone de jeu,
  *  on va calculer le proche du centre de la case
  *  la plus proche. 
  * Ensuite, si la case est libre, on appelle la fonction drawSector()
  * ou drawcircle() 
 */
 function drawSector(x,y,i) {
     if(joeur1) {
         drawCross(x,y);
         casesjoeurs1[i] = 1;
         joeur1 = false;
         $('#canvas').addClass('circle').removeClass('cross');
         $("#scoreMessages").html("<span class=\"joeur2\">C'est au joueur 2 de jouer.</span>");
         if(casesjoeurs1[0]*casesjoeurs1[1]*casesjoeurs1[2]*casesjoeurs1[3]*casesjoeurs1[4]== 1) theEnd(1);
         else if(casesjoeurs1[5]*casesjoeurs1[6]*casesjoeurs1[7]*casesjoeurs1[8]*casesjoeurs1[9]==1) theEnd(1);
         else if(casesjoeurs1[10]*casesjoeurs1[11]*casesjoeurs1[12]*casesjoeurs1[13]*casesjoeurs1[14]==1) theEnd(1);
         else if(casesjoeurs1[15]*casesjoeurs1[16]*casesjoeurs1[17]*casesjoeurs1[18]*casesjoeurs1[19]==1) theEnd(1);
         else if(casesjoeurs1[20]*casesjoeurs1[21]*casesjoeurs1[22]**casesjoeurs1[23]*casesjoeurs1[24]==1) theEnd(1);

         else if(casesjoeurs1[0]*casesjoeurs1[5]*casesjoeurs1[10]*casesjoeurs1[15]*casesjoeurs1[20] == 1) theEnd(1);
         else if(casesjoeurs1[1]*casesjoeurs1[6]*casesjoeurs1[11]*casesjoeurs1[16]*casesjoeurs1[21] == 1) theEnd(1);
         else if(casesjoeurs1[2]*casesjoeurs1[7]*casesjoeurs1[12]*casesjoeurs1[17]*casesjoeurs1[22] == 1) theEnd(1);
         else if(casesjoeurs1[3]*casesjoeurs1[8]*casesjoeurs1[13]*casesjoeurs1[18]*casesjoeurs1[23] == 1) theEnd(1);
         else if(casesjoeurs1[4]*casesjoeurs1[9]*casesjoeurs1[14]*casesjoeurs1[19]*casesjoeurs1[24] == 1) theEnd(1);

         else if(nbdecasetotal == 25) theEnd(0);
     } else {
           drawCircle(x,y);
         casesjoeurs2[i] = 1;
         joeur1 = true;
         $('#canvas').addClass('cross').removeClass('circle');
         $("#scoreMessages").html("<span class=\"joeur1\">C'est au joueur 1 de jouer.</span>");
         if(casesjoeurs2[0]*casesjoeurs2[1]*casesjoeurs2[2]*casesjoeurs2[3]*casesjoeurs2[4]== 1) theEnd(1);
         else if(casesjoeurs2[5]*casesjoeurs2[6]*casesjoeurs2[7]*casesjoeurs2[8]*casesjoeurs2[9]==1) theEnd(1);
         else if(casesjoeurs2[10]*casesjoeurs2[11]*casesjoeurs2[12]*casesjoeurs2[13]*casesjoeurs2[14]==1) theEnd(1);
         else if(casesjoeurs2[15]*casesjoeurs2[16]*casesjoeurs2[17]*casesjoeurs2[18]*casesjoeurs2[19]==1) theEnd(1);
         else if(casesjoeurs2[20]*casesjoeurs2[21]*casesjoeurs2[22]**casesjoeurs2[23]*casesjoeurs2[24]==1) theEnd(1);

         else if(casesjoeurs2[0]*casesjoeurs2[5]*casesjoeurs2[10]*casesjoeurs2[15]*casesjoeurs2[20] == 1) theEnd(1);
         else if(casesjoeurs2[1]*casesjoeurs2[6]*casesjoeurs2[11]*casesjoeurs2[16]*casesjoeurs2[21] == 1) theEnd(1);
         else if(casesjoeurs2[2]*casesjoeurs2[7]*casesjoeurs2[12]*casesjoeurs2[17]*casesjoeurs2[22] == 1) theEnd(1);
         else if(casesjoeurs2[3]*casesjoeurs2[8]*casesjoeurs2[13]*casesjoeurs2[18]*casesjoeurs2[23] == 1) theEnd(1);
         else if(casesjoeurs2[4]*casesjoeurs2[9]*casesjoeurs2[14]*casesjoeurs2[19]*casesjoeurs2[24] == 1) theEnd(1);

         else if(nbdecasetotal == 25) theEnd(0);
     }
    }
 /**ce qui va verifier si le joeur à gagné */
 function theEnd(joeur) {
     $('#canvas').removeClass('cross').removeClass('circle');
     joeur2 = true;
     nbrematchsjouers++;
     if(nbrematchsjouers<2) $("#nbMatches").html(nbrematchsjouers+" manche");
     else $("#nbMatches").html(nbrematchsjouers+" manches");
     
     if(joeur == 1) {
         $("#scoreMessages").html("<strong class=\"joeur1\">Le joueur 1 remporte la manche !</strong><br /><br />"
                                 +"<button onClick=\"newMatch()\">Nouvelle manche</button><br />"
                                 +"<button onClick=\"newGame()\">Nouvelle partie</button>");
         scorejoeur1++;
         if(scorejoeur1<2) $("#score1").html(scorejoeur1+" pt");	
         else $("#score1").html(scorejoeur1+" pts");
     } else if(joeur == 2) {
         $("#scoreMessages").html("<strong class=\"joeur2\">Le joueur 2 remporte la manche !</strong><br /><br />"
                                 +"<button onClick=\"newMatch()\">Nouvelle manche</button><br />"
                                 +"<button onClick=\"newGame()\">Nouvelle partie</button>");
         scorejouer2++;
         if(scorejouer2<2) $("#score2").html(scorejouer2+" pt");	
         else $("#score2").html(scorejouer2+" pts");	
     } else {
         $("#scoreMessages").html("<strong>Match nul !</strong><br /><br />"
                                 +"<button onClick=\"newMatch()\">Nouvelle manche</button><br />"
                                 +"<button onClick=\"newGame()\">Nouvelle partie</button>");	
     }
 }
 /**relancer une nouvelle manche  */
 function newMatch() {
     var i = 0;
     context.clearRect(0, 0, tailleCanvasX, tailleCanvasY);
     drawGrid();
     joeur2 = false;
     nbdecasetotal = 0;
     for(i=0;i<25;i++) {
         caserempli[i] = false;
         casesjoeurs1[i] = 0;
         casesjoeurs2[i] = 0;
     }
     if(joeur1) {
         $("#scoreMessages").html("<span class=\"joeur1\">C'est au joueur 1 de jouer.</span>");
         $('#canvas').addClass('cross').removeClass('circle');
     } else {
         $("#scoreMessages").html("<span class=\"joeur2\">C'est au joueur 2 de jouer.</span>");
         $('#canvas').addClass('circle').removeClass('cross');
     }
 }
 /**relancer une nouvelle partie */
 function newGame() {
     scorejoeur1 = 0;
     $("#score1").html(scorejoeur1+" pt");
     scorejouer2 = 0;
     $("#score2").html(scorejouer2+" pt");
     joeur1 = true;
     $('#canvas').addClass('cross').removeClass('circle');
     nbrematchsjouers = 0;
     $("#nbMatches").html(nbrematchsjouers+" manche");
     newMatch();
 }
 
 $( document ).ready(function(){
     drawGrid();
     $("#score1").html(scorejoeur1+" pt");
     $("#score2").html(scorejouer2+" pt");
     $("#nbMatches").html(nbrematchsjouers+" manche");
     $("#scoreMessages").html("<span class=\"joeur1\">C'est au joueur 1 de jouer.</span>");
     $('#canvas').addClass('cross').removeClass('circle');
 });
 
 $("#canvas").click(function(e){
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    var centerX = 0;
    var centerY = 0;
    var col = 0;
    var row = 0;
    var index = 0;
    
    if(x < casetaile) { centerX = casetaile/2; col = 0; }
    else if(x < 2*casetaile) { centerX = 3*casetaile/2; col = 1; }
    else if(x < 3*casetaile) { centerX = 4*casetaile/1.6; col = 2; }
    else if(x < 4*casetaile) { centerX = 5*casetaile/1.42; col = 3; }
    else if(x < 5*casetaile) { centerX = 6*casetaile/1.32; col = 4; }

    else { centerX = 5*casetaile/2; col = 15; }
    
    if(y < casetaile) { centerY = casetaile/2; row = 0; }
    else if(y < 2*casetaile) { centerY = 3*casetaile/2; row = 1; }
    else if(y < 3*casetaile) { centerY = 4*casetaile/1.6; row = 2; }
    else if(y < 4*casetaile) { centerY = 5*casetaile/1.42; row = 3; }
    else if(y < 5*casetaile) { centerY = 6*casetaile/1.32; row = 4; }

    else { centerY = 5*casetaile/2; row = 15; }
    
    index = col + 5 * row;
    if(!caserempli[index] && !joeur2) {
        caserempli[index] = true;
        nbdecasetotal++;
        drawSector(centerX,centerY,index)
    }
 });
     