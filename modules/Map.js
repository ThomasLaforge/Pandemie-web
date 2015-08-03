import {COLORS, NB_RESEARCH_CENTRES, NB_TOTAL_CUBES_BY_COLOR} from '../configuration_file';

var $ = require('Jquery');
var cities = require('../Cities.json');
var nbTotalResearchCentres = NB_RESEARCH_CENTRES;
var nbTotalRedCubes = NB_TOTAL_CUBES_BY_COLOR;
var nbTotalBlackCubes = NB_TOTAL_CUBES_BY_COLOR;
var nbTotalBlueCubes = NB_TOTAL_CUBES_BY_COLOR;
var nbTotalYellowCubes = NB_TOTAL_CUBES_BY_COLOR;

//Map permit to have informations about cubes and centers on the map.

class Map {
	constructor(){ //idMap = '#idMap'
		this._arrayCubes = {};
		this._arrayResearchCentres = [];
	}
	
	//Research Centres
	addResearchCentre(cityName){
		//Si il y a trop de centres sur le plateau on supprime le premier
		if(this._arrayResearchCentres.length == NB_RESEARCH_CENTRES){
			this.removeFirstResearchCentre();
		}
		
		//On ajoute le centre
		this._arrayResearchCentres.push(cityName);
	}
	
	removeFirstResearchCentre(){
		this._arrayResearchCentres.shift();
	}
	
	//Cubes
	addCubes(nbCubes, cityName, color){ //return true if all ok but false if have to do an epidemy because of more than 3 cubes to put on a city.		
		// //On récupère le nombre actuel de cube sur cette ville
		var nbActualCubes = this.getNbCubes(cityName, color);
		//Si la ville est déjà présente dans la map
		if(nbActualCubes){
			if(nbActualCubes + nbCubes > 3 ){
				this._arrayCubes[cityName] = 3;
				return false;
			}
			else{
				this._arrayCubes[cityName] += nbCubes;				
			}
		}
		//Sinon on ajoute le nombre de cubes au
		else{
			this._arrayCubes[cityName] = nbCubes;
		}
		
		return true;
	}
	
	removeCubes(nbCubes, cityName, color){
		// //On récupère le nombre actuel de cube sur cette ville
		var nbActualCubes = this.getNbCubes(cityName);
		//Si la ville est déjà présente dans la map
		if(nbActualCubes){
			if(nbActualCubes - nbCubes < 0 ){
				this._arrayCubes[cityName] = 0;
				return false;
			}
			else{
				this._arrayCubes[cityName] += nbCubes;				
			}
		}
		else{
			return false;
		}
		
		return true;
	}
	
	getNbCubesInMapByColor(){
		
	}
	
	getNbCubesInReserveByColor(){
		
	}
	
	getNbCubes(cityName, color){
		
	}
	
	/////////////////////////////// Getters /////////////////////////////////
	
	getAllCubes(){
		return this._arrayCubes;
	}
	getCubes(cityName){
		return this._arrayCubes[cityName];
	}
	
}

export {Map};