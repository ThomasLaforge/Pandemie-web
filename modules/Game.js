import {Player} from './Player';
import {Role} from './Role';
import {PlayerDeck} from './PlayerDeck';
import {PropagationDeck} from './PropagationDeck';

class Game {
	constructor(nbPlayer, difficulty){
		this.playerDeck = new PlayerDeck();
		this.propagationDeck = new PropagationDeck();
		this.nbPlayer = nbPlayer;
		this.difficulty = difficulty;
		this.arrayPlayers = [];
		this.addPlayers(nbPlayer);
	}
	
	init(){
		this.giveCards(){
			for (var i = 0; i < this.arrayPlayers.length; i++) {
				this.arrayPlayers[i].
			}
		}
	}
	
	showPlayers(){
		
	}
	
	getRandomNewName(){
		//Get all possible names		
		var arrayNames = Player.getArrayAllNames();
		//Difference between all names and used names
		arrayNames.filter(function(i) {return this.getArrayPlayerNames.indexOf(i) < 0;});
		
		//return a random name from the free names		
		return arrayNames[Math.floor(Math.random()*arrayNames.length)];
	}
	
	getRandomNewRole(){
		//Get all possible roles
		var arrayRoles = Role.getArrayAllRoles();
		//Difference between all roles and used roles
		arrayRoles.filter(function(i) {return this.getArrayPlayerNames.indexOf(i) < 0;});
		
		//return a random roles from the free roles
		return arrayRoles[Math.floor(Math.random()*arrayRoles.length)];
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
	
	
	
	doEpidemy(){
		this.propagationDeck.increasePropagationForce();
		this.propagationDeck.shuffleDiscard();
		this.propagationDeck.addDiscardToDeck();
	}
} 

export { Game };