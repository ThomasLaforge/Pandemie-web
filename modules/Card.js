var $ = require('Jquery');
var events = require('../Events.json');
import {City} from './City';

// name : string, type : enum(city, event, nothing)

class Card {
    constructor(cardName) {
        //Type
        if(cardName == 'epidemy'){
            this.type = 'epidemy';
        }
        else if(City.cityExist(cardName)){
            this.type = 'city';
            this.city = new City(cardName);
        }
        else if(this.isEvent(cardName)){
            this.type = 'event';
            this.name = cardName;
        }
        else{
            this.type = 'nothing';
        }
    }
    
    getCity(){
        return this.city;
    }
    
    getCityName(){
        return this.city.getName();
    }
    
    getCityColor(){
        return this.city.getColor();
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