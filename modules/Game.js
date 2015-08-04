import {Player} 		from './Player';
import {City} 		from './City';
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
		this.listRemede = []; // Tableau contenant le nom des couleur ayant le remede découvert 
		this.listRemedeEradicated = []; // Tableau contenant le nom des couleur ayant le remede éradiqué 
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
		moveDirect(card){
			if(this.actualPlayer.getHand().cardIsPresent(card)){
				this.actualPlayer.moveTo(card.getCity());
			}
			else{
				console.log('Il n\'est pas possible de bouger vers une ville via vol direct sas posséder la carte de cette ville.');
			}
		}
		
		// b) court
		moveShort(cityToMove){
			if(this.actualPlayer.getPosition().isLinked(cityToMove)){
				this.actualPlayer.moveTo(cityToMove);
			}
			else{
				console.log('La ville où vous souhaitez vous déplacer n\'est pas reliée à votre ville actuelle.');
			}
		}
		
		// c) long
		moveLong(card, city){
			if(this.actualPlayer.getHand().cardIsPresent(card)){
				if(this.actualPlayer.getPosition() == card.getCity()){
					this.actualPlayer.getHand().removeCard(card);
					this.playerDeck.discard([card]);
				}
				else{
					console.log("La carte choisie ne correspond pas à votre position actuelle.");
				}
			}
			else{
				console.log('Il n\'est pas possible de bouger vers une ville via vol direct sas posséder la carte de cette ville.');
			}
		}
		
		// d) centre a centre
		moveCentre(cityNameDestination){
			if (City.cityExist(cityNameDestination)) {
				if(this.map.isResearchCentre(this.actualPlayer.getPosition())){
					if(this.map.isResearchCentre(cityNameDestination)){
						this.actualPlayer.moveTo(new City())
					}
					else{
						console.log('La ville de déstination ne possède pas de centre de recherche.');
					}
				}
				else{
					console.log('Vous n\'êtes pas sur un centre de recherche.');
				}
			}
			else{
				console.log('La ville de destination n\'existe pas');
			}
		}
	
	// 2 - Add research centre
	addResearchCentre(){
		this.map.addResearchCentre(this.actualPlayer.getPosition());
	}
	
	// 3 - Do remede
	DoRemede(color){
		if(this.actualPlayer.canDoRemede(color)){
			this.actualPlayer.doRemede(color);
			this.listRemede.push(color);
		}
		else{
			console.log('this player can\'t do the remede.');
		}
	}
	
	// 4 - Soigner
	getNbCubesToHeal(){
		var res;
		
		if(this.actualPlayer.getRole() == "Medecin" || this.listRemedeEradicated.indexOf(this.actualPlayer.getPosition().getColor()) > -1){
			res = this.map.getNbCubes(this.actualPlayer.getPosition());
		}
		else{
			res = 1;
		}
		return res;
	}
	
	heal(color){ //NB : a city could have cube of another color
		if(this.map.canRemoveCubes(this.actualPlayer.getPosition())){
			var nbCubesToRemove = this.getNbCubesToHeal();
			this.map.removeCubes(nbCubesToRemove,this.actualPlayer.getPosition(), color);
		}
		else{
			console.log('Il n\'y a pas de cubes à retirer dans cette ville.');
		}
	}
	
	// 5 - Echanger une carte 
	tradeCard(player, card, boolGive){
		//Check player exist and not actualPlayer
		var indexPlayer = this.arrayPlayers.indexOf(Player);
		if( indexPlayer > -1 ){
			//If boolGive : this.actualPlayer want to give a card , else : this.actualPlayer want a card from another player
			if (boolGive) {
				//Check card exit and it is in actualPlayer hand
				
			}
			else{
				//Check card exit and it is in player hand
				
			}
		}
		else{
			console.log('Le joueur avec lequel vous souhaitez réaliser l\'échange n\'existe pas');
		}
	}
} 

export { Game };