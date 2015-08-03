var $ = require('Jquery');
require('./jquery.rwdImageMaps.min.js'); 
var cities = require('../Cities.json');

import {PropagationDeck} from './PropagationDeck';
import {PlayerDeck} from './PlayerDeck';
import {Card} from './Card';
import {City} from './City';
import {Role} from './Role';
import {Game} from './Game';
import {Map} from './Map';

//////////////////////////////////////////////////
//////      Initialisation de la partie     //////
//////////////////////////////////////////////////
$(function(){
	
	$('img[usemap]').rwdImageMaps();	
	
	var myPlayerDeck = new PlayerDeck();
	myPlayerDeck.init(6);
	
	
	////////////////////////////////////////////////
	///////////        Evenements       ////////////
	////////////////////////////////////////////////
	
	// Changement du nombre de joueurs
	$('input[type=radio][name=nb_player]').on('change', function(){
		console.log('Le nombre de joueur vient de changer. Il y a actuellement ' + $(this).val() + ' joueurs.');
	});
	
	// Changement du niveau de la partie
	$('input[type=radio][name=game_lvl]').on('change', function(){
		console.log('La difficulté vient de changer : ' + $(this).val() + ' épidémies.');
	});
	
	//Lancement de la partie
	$('#btn-start-game').on('click', function(){
		$('#configZone').hide();
		$('#mapToShow').show();
		var myGame = new Game(getActualNbPlayer(), getActualLvl());
		//myGame.init();
		console.log(myGame);
	});
	
	//area touch
	$('area').on('click', function(event){
		event.preventDefault();
		console.log('Action sur carte: ' + $(this).attr('alt'));
		
	});

});

function getActualLvl(){
	return $('input[type=radio][name=game_lvl]').val();
}

function getActualNbPlayer(){
	return $('input[type=radio][name=nb_player]').val();
}