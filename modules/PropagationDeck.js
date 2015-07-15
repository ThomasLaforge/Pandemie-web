import {Deck} from './Deck';
import {Player} from './Player';

var array_propagationForce = [2,2,2,3,3,3,4,4];

class PropagationDeck extends Deck{
	
	constructor(/*players, nbEpidemies,*/){
		super();
		this.propagationForceLevel = 0;
	}
	
	doEpidemy(){
		this.increasePropagationForce();
		this.shuffleDiscard();
		this.addDiscardToDeck();
	}
	
    shuffleDiscard(){
        this.shuffle(this.arrayDiscard);
    }
	
	addDiscardToDeck(){
		this.arrayDeck = this.arrayDeck.concat(this.arrayDiscard);
		console.log('défausse ajoutée à la pioche')
	}
	
}

export { PropagationDeck };