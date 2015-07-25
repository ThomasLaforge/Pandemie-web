var $ = require('Jquery');
var cities = require('../Cities.json');

import {PropagationDeck} from './PropagationDeck';
import {PlayerDeck} from './PlayerDeck';
import {Card} from './Card';
import {Role} from './Role';
import {Game} from './Game';

//////////////////////////////////////////////////
//////      Initialisation de la partie     //////
//////////////////////////////////////////////////
$(function(){
	
	
	//on submit => on crée une partie
	//get nb joueur
	var nbPlayer = getActualNbPlayer();
	var difficulty = getActualLvl();
	console.log(nbPlayer);
	console.log(difficulty);
		
	////////////////////////////////////////////////
	///////////        Evenements       ////////////
	////////////////////////////////////////////////
	
	// Changement du nombre de joueurs
	$('input[type=radio][name=nb_player]').on('change', function(){
		console.log('Le nombre de joueur vient de changer. Il y a actuellement ' + $(this).val() + ' joueurs.');
		nbPlayer =  $(this).val();
	});
	
	// Changement du niveau de la partie
	$('input[type=radio][name=game_lvl]').on('change', function(){
		console.log('La difficulté vient de changer : ' + $(this).val() + ' épidémies.');
		difficulty = $(this).val(); 
	});
	
	//Lancement de la partie
	$('#btn-start-game').on('click', function(){
		$('#configZone').hide();
		$('#mapToShow').show();
		var myGame = new Game(getActualNbPlayer(), getActualLvl());
		myGame.init();
		console.log('Lancer une nouvelle partie.');
	});
	
	//area touch
	$('area').on('click', function(){
		console.log('Action sur carte.');
	});

});

function getActualLvl(){
	return $('input[type=radio][name=game_lvl]').val();
}

function getActualNbPlayer(){
	return $('input[type=radio][name=nb_player]').val();
}