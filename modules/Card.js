var $ = require('Jquery');
var cities = require('../Cities.json');

class Card {
    constructor(city_name) {
        var color,links;
        $.each(cities,function(){
	       if(this.name == city_name){
               color = this.color;
               links = this.links;
           }
        });
        this.name = city_name;
        this.color = color; 
        this.links = links;
    }
    getName() {
        return this.name;
    }
}
 
export { Card };