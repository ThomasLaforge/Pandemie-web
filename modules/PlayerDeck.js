import {Deck} from './Deck';
import {Player} from './Player';

class PlayerDeck extends Deck{
	constructor(lvl/*, nbPlayer*/){
		super();
	}
	
	getCard(Player, Card){
		Player.pickCard(Card);
		this.removeCard(Card);
	}
	
}

export { PlayerDeck };