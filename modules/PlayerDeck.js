import {Deck} from './Deck';
import {Player} from './Player';

class PlayerDeck extends Deck{
	constructor(/*players, nbEpidemies, */){
		super();
	}
	
	getCard(Player, Card){
		Player.pickCard(Card);
		this.removeCard(Card);
	}
	
}

export { PlayerDeck };