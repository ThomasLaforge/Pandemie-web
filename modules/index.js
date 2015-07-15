var $ = require('Jquery');
var cities = require('../Cities.json');

import {PropagationDeck} from './PropagationDeck';
import {PlayerDeck} from './PlayerDeck';
import {Card} from './Card';

//////////////////////////////////////////////////
//////      Initialisation de la partie     //////
//////////////////////////////////////////////////
var deck_players = new PlayerDeck();
var deck_propagation = new PropagationDeck();

var arrayA = [1, 2];
console.log(arrayA);
var arrayB = [3, 4];
arrayA = arrayA.concat(arrayB);
console.log(arrayA);

$(function(){
	//on submit => on crée une partie
	//get nb joueur
	//$('input[type=radio][name=nb_player]').val();
	

});