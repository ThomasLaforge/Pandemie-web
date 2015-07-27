import {Deck} from './Deck';
import {Player} from './Player';

	//Constructor   : arrayDeck with all cards, shuffle him, and create a discard array
    //removeCard    : remove a card from the rest of the game
    //shuffle       : shuffle an in deck
    //shuffleDeck   : shuffle the arrayDeck
    //length        : give the length of the deck
    //pickCards     : return an array with the firts cards of the deck. 
    

class PlayerDeck extends Deck{
	constructor(lvl/*, nbPlayer*/){
		super();
	}
	
	pickTurnCards(){
		return this.pickCards(2);
	}
	
}

export { PlayerDeck };