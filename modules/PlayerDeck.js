import {Deck} from './Deck';
import {Card} from './Card';
import {Player} from './Player';

	//Constructor   : arrayDeck with all cards, shuffle him, and create a discard array
    //removeCard    : remove a card from the rest of the game
    //shuffle       : shuffle an in deck
    //shuffleDeck   : shuffle the arrayDeck
    //length        : give the length of the deck
    //pickCards     : return an array with the firts cards of the deck. 
    

class PlayerDeck extends Deck{
	constructor(/*nbPlayer*/){
		super();
		//add events
		
	}
	
	init(nbEpidemies){ //To finish
		var div = Math.floor(this.arrayDeck.length / nbEpidemies);
		var rem = this.arrayDeck.length % nbEpidemies;
		
		//Les premiers paquets
		for (var i = 0; i < nbEpidemies; i++) {
			var max = i >= nbEpidemies - rem ? div + 2 : div + 1;
			var randomNumber = Math.floor(Math.random() * (max));
			var pos = i * div + randomNumber + i;
			this.arrayDeck.splice(pos, 0, 'test');
		}
	}
	
	pickTurnCards(){
		return this.pickCards(2);
	}
	
}

export { PlayerDeck };