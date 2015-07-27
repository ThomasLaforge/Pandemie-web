import {Card} from './Card';
import {Deck} from './Deck';

class Hand {
	constructor(){
		this.arrayCard = [];
	}
	
	addCard(Card){
		if(Deck.cardIn(Card) && this.arrayCard.length <= 7){
			Deck.delete(Card);
			this.arrayCard.push(Card);
		}
		else{
			console.log('Tentative d\'ajout de carte du deck dans la main mais la carte n\'existe pas');
		}
	}
	
	removeCard(Card){
		var pos = this.arrayCard.indexOf(Card);
		if(pos > -1){
			this.arrayCard.splice(pos, 1);
		}
		else{
			console.log('Tentative de suppression d\'une carte qui n\'est pas présente dans la main');
		}
	}
}

export {Hand};