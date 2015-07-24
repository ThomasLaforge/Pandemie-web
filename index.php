<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pandemie - Index</title>
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <header>
      <h1>Pandemie</h1>
      <p>
        Cette petite application va me permettre de réaliser un laboratoire
        pour tester ma propre librairie de gestion de jeu de carte en javascript
        avec la norme ECMAScript 6.
      </p>
      
      <h2>Configurer votre partie:</h2>
      <!-- Formulaire de création de partie -->
      <form onsubmit="return false;">
        <!-- Nombre de joueurs-->
        <label for="nb_player">Nombre de joueurs :</label> <br>
        <input type="radio" name="nb_player" value="2" checked>2
        <input type="radio" name="nb_player" value="3">3
        <input type="radio" name="nb_player" value="4">4
        
        <br>
        <hr>
        
        <!-- Difficulté -->
        <label for="game_lvl">Difficulté :</label>
        <br>
        <input type="radio" name="game_lvl" value="4" checked>Easy (4 epidemies)  <br>
        <input type="radio" name="game_lvl" value="5">Normal (5 epidemies)  <br>
        <input type="radio" name="game_lvl" value="6">Difficult (6 epidemies)  <br>
        <input type="radio" name="game_lvl" value="7">Hard core (7 epidemies)  <br>
        
        <br>
        <input id="btn-start-game" type="submit" value="Lancer la partie">
      </form>
    </header>

    <div class="board">
      <div class="deck" id="deck"></div>
      <div class="defausse" id="defausse"></div>
      <div class="hand" id="hand"></div>
      <div class="console" id="console"></div>
    </div>
    
    <div id="mapToShow">
      <img usemap="#ImgRefMap" src="assets/img/pandemicMap.jpg" /> 
      <map id="ImgRefMap" name="ImgRefMap">
        <area shape="rect" alt="" title="" coords="401,87,552,182" target="" />
        <area shape="rect" alt="" title="" coords="216,196,298,266" target="" />
      </map>
    </div>
    
    <!-- Scripts javascript  -->
    <script src="dist/module.js" charset="utf-8"></script>
  </body>
</html>
