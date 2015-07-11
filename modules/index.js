var $ = require('Jquery');
var cities = require('../Cities.json');

import {Deck} from './Deck';
import {Card} from './Card';

var deck_players = new Deck();
var deck_propagation = new Deck();
var player1 = new Player(Role1);
var player2 = new Player(Role2);
var player3 = new Player(Role3);