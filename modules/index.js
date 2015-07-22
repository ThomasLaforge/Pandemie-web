var $ = require('Jquery');
var cities = require('../Cities.json');

import {PropagationDeck} from './PropagationDeck';
import {PlayerDeck} from './PlayerDeck';
import {Card} from './Card';
import {Role} from './Role';

//////////////////////////////////////////////////
//////      Initialisation de la partie     //////
//////////////////////////////////////////////////
var deck_players = new PlayerDeck();
var deck_propagation = new PropagationDeck();

var role = new Role("Chercheuse");
console.log(role.getColor());

$(function(){
	//on submit => on crée une partie
	//get nb joueur
	
	////////////////////////////////////////////////
	///////////        Evenements       ////////////
	////////////////////////////////////////////////
	
	// Changement du nombre de joueurs
	$('input[type=radio][name=nb_player]').on('change', function(){
		console.log('Le nombre de joueur vient de changer. Il y a actuellement ' + $(this).val() + ' joueurs.');
	});

});