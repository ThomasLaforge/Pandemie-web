<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Jeux2cartes - Index</title>
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
      <form action="partie.php">
        <label for="nb_player">Nombre de joueurs:</label>
        <input type="radio" name="nb_player" value="2" checked>2
        <input type="radio" name="nb_player" value="3">3
        <input type="radio" name="nb_player" value="4">4
      </form>
    </header>

    <div class="board">
      <div class="deck" id="deck"></div>
      <div class="defausse" id="defausse"></div>
      <div class="hand" id="hand"></div>
      <div class="console" id="console"></div>
    </div>

    <!-- Scripts javascript  -->
    <script src="dist/module.js" charset="utf-8"></script>
  </body>
</html>
