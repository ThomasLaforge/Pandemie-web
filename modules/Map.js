var $ = require('Jquery');
var cities = require('../Cities.json');
import {Card} from './Card';

//Map permit to have informations about cubes on the map.

class Map {
	constructor(){ //idMap = '#idMap'
		this.arrayMap = {};
	}
	
	addCubes(nbCubes, cityName){ //return true if all ok but false if have to do an epidemy because of more than 3 cubes to put on a city.
		// Controle de nbCubes
		if(nbCubes > 3){
			nbCubes = 3;
		}
		else{
			if(nbCubes < 0 ){
				nbCubes = 0;
			}
		}
		
		// //On récupère le nombre actuel de cube sur cette ville
		var nbActualCubes = this.getNbCubes(cityName);
		//Si la ville est déjà présente dans la map
		if(nbActualCubes){
			if(nbActualCubes + nbCubes > 3 ){
				this.arrayMap[cityName] = 3;
				return false;
			}
			else{
				this.arrayMap[cityName] += nbCubes;				
			}
		}
		//Sinon on ajoute le nombre de cubes au
		else{
			this.arrayMap[cityName] = nbCubes;
		}
		
		return true;
	}
	
	getNbCubes(cityName){
		return this.arrayMap[cityName];
	}
}

export {Map};