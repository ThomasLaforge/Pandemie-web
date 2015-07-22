<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Jeux2cartes - Index</title>
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <header>
      <h1>Jeux2cartes</h1>
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
    
    <div class="imgmap_css_container" id="imgmap2015722164425">
      <a style="position: absolute; top: 250px; left: 187px; width: 36px; height: 30px;"  alt="" title="" href="" target="" ><em></em></a>
      <a style="position: absolute; top: 312px; left: 220px; width: 30px; height: 29px;"  alt="Atlanta" title="Atlanta" href="" target="" ><em></em></a>
    </div>
    <!-- Scripts javascript  -->
    <script src="dist/module.js" charset="utf-8"></script>
  </body>
</html>
