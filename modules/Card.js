var $ = require('Jquery');
var events = require('../Events.json');
import {City} from './City';

// name : string, type : enum(city, event, nothing)

class Card {
    constructor(cardName) {
        //Type
        if(City.cityExist(cardName)){
            this.type = 'city';
        }
        else if(this.isEvent(cardName)){
            this.type = 'event';
        }
        else{
            this.type = 'nothing';
        }
    }
    
    isEvent(cardName){
        var i = 0;
        $.each(events,function(){
	       if(this.name == cardName){
               return false;
           }
           i++;
        });
        return i < events.length;
    }
}
 
export { Card };