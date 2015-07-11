class Player {
    constructor(name, role) {
        this._name = name;
		this._role = role;
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
}

export {Player}