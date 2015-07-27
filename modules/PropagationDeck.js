import {Deck} from './Deck';
import {Player} from './Player';

	//Constructor   : arrayDeck with all cards, shuffle him, and create a discard array
    //removeCard    : remove a card from the rest of the game
    //shuffle       : shuffle an in deck
    //shuffleDeck   : shuffle the arrayDeck
    //length        : give the length of the deck
    //pickCards     : return an array with the firts cards of the deck. 
    //discard		: add an array of cards to the discard

var array_propagationForce = [2,2,2,3,3,3,4,4];

class PropagationDeck extends Deck{
	
	constructor(){
		super();
		this.propagationForceLevel = 0;
	}
	
    shuffleDiscard(){
        this.shuffle(this.arrayDiscard);
    }
	
	addDiscardToDeck(){
		this.arrayDeck = this.arrayDeck.concat(this.arrayDiscard);
		console.log('défausse ajoutée à la pioche');
	}
	
	increasePropagationForce(){
		this.propagationForceLevel++;
	}
	
	getLastCard(){
		return this.arrayDeck[this.arrayDeck.length - 1];
	}
	
}

export { PropagationDeck };