<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Pandemie - Index</title>
    <link rel="stylesheet" href="assets/css/style.css">
  </head>
  <body>
    <!--<header>
      <h1>Pandemie</h1>
      
      <p>
        Cette petite application va me permettre de réaliser un laboratoire
        pour tester ma propre librairie de gestion de jeu de carte en javascript
        avec la norme ECMAScript 6.
      </p>
    
    </header>-->
    <div id="configZone">  
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
    </div>
    
    <div class="board">
      <div class="deck" id="deck"></div>
      <div class="defausse" id="defausse"></div>
      <div class="hand" id="hand"></div>
      <div class="console" id="console"></div>
    </div>
    
    <!-- Carte du jeu -->
    <div id="mapToShow">
      <img usemap="#ImgRefMap" src="assets/img/pandemicMap.jpg" /> 
        <map id="ImgRefMap" name="ImgRefMap">
          <!-- Villes bleues -->
          <area shape="rect" alt="Chicago" title="" coords="185,238,224,285" />
          <area shape="rect" alt="San Francisco" title="" coords="82,275,116,315" />
          <area shape="rect" alt="Atlanta" title="" coords="218,308,252,344" />
          <area shape="rect" alt="Montreal" title="" coords="270,241,305,280" />
          <area shape="rect" alt="Washington" title="" coords="306,301,341,340" />
          <area shape="rect" alt="New York" title="" coords="335,246,372,290" />
          <area shape="rect" alt="London" title="" coords="486,203,522,238" />
          <area shape="rect" alt="Madrid" title="" coords="472,282,513,327" />
          <area shape="rect" alt="Paris" title="" coords="547,240,585,283" />
          <area shape="rect" alt="Saint Petersburg" title="" coords="663,170,695,208" />
          <area shape="rect" alt="Milan" title="" coords="604,227,641,267" />
          <area shape="rect" alt="Essen" title="" coords="569,189,605,224" />
          <!-- Villes jaunes -->

          <!-- Villes rouges -->
          
          <!-- Villes noires -->
          
          <!-- Paquets de cartes -->
          
          <!-- Eclosions -->
          
          <!-- Degrès d'infection -->
          
          <!-- Remèdes -->
        </map>
    </div>
    
    <!-- Scripts javascript  -->
    <script src="dist/module.js" charset="utf-8"></script>
  </body>
</html>
