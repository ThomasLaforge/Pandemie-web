var $ = require('Jquery');
var cities = require('../Cities.json');
import {Card} from './Card';

class Map {
	constructor(idMap){ //idMap = '#idMap'
		this._divId = idMap;
	}
	
	addCubes(nbCubes, cityName){
		 //$(this._divId + ' ').attr(nbCubes) ++;
	}
	
	getNbCubes(cityName){
		//return $(this._divId + ' ').attr(nbCubes);
	}
}

export {Map};