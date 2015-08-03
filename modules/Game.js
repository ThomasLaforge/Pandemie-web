import {Player} 		from './Player';
import {Role} 			from './Role';
import {PlayerDeck} 	from './PlayerDeck';
import {PropagationDeck}from './PropagationDeck';
import {Map} 			from './Map';

class Game {
	constructor(nbPlayer, difficulty){
		//Parameters
		this.nbPlayer = nbPlayer;
		this.difficulty = difficulty;
		this.arrayPlayers = [];
		this.map = new Map();
		//Methods to init
		this.addPlayers(this.nbPlayer);
		this.playerDeck = new PlayerDeck();
		this.giveCardsToAllPlayers();
		this.playerDeck.init(this.difficulty);
		this.propagationDeck = new PropagationDeck();
		this.actualPlayer = this.arrayPlayers[0];
	}
	
	showActualPlayer(){
		console.log(this.actualPlayer);
	}
	
	showPlayers(){
		console.log(this.arrayPlayers);
	}
	
	getRandomNewName(){
		//Get all possible names		
		var arrayNames = Player.getArrayAllNames();
		//Difference between all names and used names
		var arrayPlayerNames = this.getArrayPlayerNames();
		arrayNames.filter(function(i) {return arrayPlayerNames.indexOf(i) < 0;});
		
		//return a random name from the free names		
		return arrayNames[Math.floor(Math.random()*arrayNames.length)];
	}
	
	getRandomNewRole(){
		//Get all possible roles
		var arrayRoles = Role.getArrayAllRoles();
		//Difference between all roles and used roles
		var arrayPlayerRoles = this.getArrayPlayerRoles();		
		arrayRoles.filter(function(i) {return arrayPlayerRoles.indexOf(i) < 0;});
		
		//return a random roles from the free roles
		return arrayRoles[Math.floor(Math.random()*arrayRoles.length)];
	}
	
	getArrayPlayerNames(){
		var res = [];
		for (var i = 0; i < this.arrayPlayers.length; i++) {
			res.push(this.arrayPlayers[i].getName());
		}
		return res;
	}
	
	getArrayPlayerRoles(){
		var res = [];
		for (var i = 0; i < this.arrayPlayers.length; i++) {
			res.push(this.arrayPlayers[i].getRole());
		}
		return res;
	}
	
	//Ajouter un ou des joueurs
	addPlayer(){
		var newPlayer = new Player(this.getRandomNewName(), this.getRandomNewRole());
		this.arrayPlayers.push(newPlayer);
	}
	addPlayers(nbPlayer){
		for (var i = 0; i < nbPlayer; i++) {
			this.addPlayer();
		}
	}
	
	//at start of the game, give cards to players
	giveCardsToAllPlayers(){
		var nbCardsToGive;
		switch (this.nbPlayer) {
			case 2:	nbCardsToGive = 4;	break;
			case 3: nbCardsToGive = 3;	break;
			case 4: nbCardsToGive = 2;	break;
			case 5: nbCardsToGive = 2;	break;
			default:nbCardsToGive = 2;	break;
		}
		
		for (var i = 0; i < this.arrayPlayers.length; i++) {
			var arrayCard = this.playerDeck.pickCards(nbCardsToGive);
			this.arrayPlayers[i].takeCards(arrayCard);
		}
	}
	
	doEpidemy(){
		//Pick the last card of propagation deck
		var lastCard = this.propagationDeck.getLastCard();
		//Add 3 cubes to this City
		this.map.addCubes(3,lastCard.getCityName(),lastCard.getCityColor());		
		//Discard this card
		this.propagationDeck.discard(lastCard.name);
		//Shuffle the discard
		this.propagationDeck.shuffleDiscard();
		//And add the discard to the top of the deck
		this.propagationDeck.addDiscardToDeck();
		//Finally increase the propagation lvl
		this.propagationDeck.increasePropagationForce();
	}
	
	nextPlayer(){
		var actualPlayer = this.actualPlayer;
		var actualPlayerPos = this.arrayPlayers.indexOf(actualPlayer);
		var indexNextPlayer = actualPlayerPos != this.arrayPlayers.length - 1 ? actualPlayerPos + 1 : 0 ;
		//Set actualPlayer the next one
		this.actualPlayer = this.arrayPlayers[indexNextPlayer];
	}
	
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	/////////////////////////////////        ACTIONS               ///////////////////////////////////////
	//////////////////////////////////////////////////////////////////////////////////////////////////////
	
	// 1 - Moves
	
		// a) direct
		// b) court
		// c) long
		// d) centre a centre
	
	// 2 - Add research centre
	
	// 3 - Do remede
	
	// 4 - Soigner
	
	//  - 
	
} 

export { Game };