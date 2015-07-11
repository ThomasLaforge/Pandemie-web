var $ = require('Jquery');
var cities = require('../Cities.json');
import {Card} from './Card';

class Deck {
    constructor() {
        var array = [];
        $.each(cities, function(){
            array.push(new Card(this.name)); 
        });
        this.arrayDeck = array;
        this.shuffle();
    }
    removeCard(card) {
        var pos = this.arrayDeck.indexOf(Card);
		if(pos > -1){
			this.arrayDeck.splice(pos, 1);
		}
		else{
			console.log('Tentative de suppression d\'une carte qui n\'est pas présente dans la main');
		}
    }
    
    shuffle(){
        var currentIndex = this.arrayDeck.length, temporaryValue, randomIndex ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        
        // And swap it with the current element.
        temporaryValue = this.arrayDeck[currentIndex];
        this.arrayDeck[currentIndex] = this.arrayDeck[randomIndex];
        this.arrayDeck[randomIndex] = temporaryValue;
        }
    }
    
    length(){
        return this.arrayDeck.length;
    }
    
    pickCards(nbCards){
        var res = [];
        for(var i=0;i<nbCards;i++){
            res.push(this.arrayDeck[0]);
            this.arrayDeck.splice(0,1);
        }
        return res;
    }
}
 
export { Deck };