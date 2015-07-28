import {Card} from './Card';
import {City} from './City';
import {Deck} from './Deck';
import {Role} from './Role';
import {Hand} from './Hand';

class Player {
    constructor(name, roleName) {
        this._name = name;
		this._role = new Role(roleName);
		this._hand = new(Hand);
		this._position = new City("Atlanta");
    }
    
	//Piocher des cartes
	takeCard(card){
		this._hand.addCard(card);
	}
	takeCards(arrayOfCards){
		for (var i = 0; i < arrayOfCards.length; i++) {
			this.takeCard(arrayOfCards[i]);			
		}
	}
	
	//Utiliser des cartes
	useCard(card){
		this._hand.removeCard(card);
    }
	discard(card){
		this._hand.removeCard(card);		
	}
	doRemede(arrayOfCards){
		for (var i = 0; i < arrayOfCards.length; i++) {
			this.useCard(arrayOfCards[i]);			
		}
	}
	
	//Déplacement
	moveTo(newCity){
		this._position = newCity;
	}
	
	/////////////////////////////// Getters /////////////////////////////////
	
	getRole(){
		return this._role;
	}
	getName(){
		return this._name;
	}
	getPosition(){
		return this._position;
	}
	getHand(){
		return this._hand;
	}
	
	/////////////////////////////// Statics methods /////////////////////////////////
	
	static getArrayAllNames(){
		return ['Thomas', 'Willy', 'Julie', 'Kev', 'Ludo', 'Greg', 'Camille', 'Alex', 'Alexandra', 'Morgane', 'Fabrice', 'Valerie', 'Olivier'];
	}
}

export {Player}