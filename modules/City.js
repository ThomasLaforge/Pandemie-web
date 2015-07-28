var $ = require('Jquery');
var cities = require('../Cities.json');

class City {
    constructor(cityName) {
        var color,links;
        $.each(cities,function(){
	       if(this.name == cityName){
               color = this.color;
               links = this.links;
               return false;
           }
        });
        this._name = cityName;
        this._color = color; 
        this._links = links;
    }
    
  	/////////////////////////////// Methods /////////////////////////////////
    
    isLinkedTo(cityName){
        return this._links.indexOf(cityName) > -1;
    }
    
  	/////////////////////////////// Getters /////////////////////////////////

    getName() {
        return this._name;
    }
    getColor() {
        return this._color;
    }
    getLinks() {
        return this._links;
    }
    
    /////////////////////////////// Statics methods /////////////////////////////////
    
    static cityExist(cityName){
        var i = 0;
        $.each(cities,function(){
	       if(this.name == cityName){
               return false;
           }
           i++;
        });
        return i < cities.length;
    }
    
}
 
export { City };