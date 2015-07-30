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
		var array_lenght = 48;
		for (var i = 0; i < nbEpidemies; i++) {
			var splitNumber = 5;
			var randomNumber = 2;
			this.arrayDeck.splice(splitNumber * i + randomNumber, 0, new Card('epidemy'));
		}
	}
	
	pickTurnCards(){
		return this.pickCards(2);
	}
	
}

export { PlayerDeck };