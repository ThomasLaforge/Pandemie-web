var roles = require('../Roles.json');
var $ = require('Jquery');

///////////////////////////////////////////////////////////////////////
///////////     Debug des roles contenus dans roles.json    ///////////
///////////////////////////////////////////////////////////////////////
//                                                                   //
// 1 - Debug du json complet                                         //
// console.log(roles);
//                                                                   //
// ----------------------------------------------------------------  //
//                                                                   //
// 2 - Pour chaque roles afficher une/plusieurs propriétés           //
// Liste des propriétés : name, description, color                   //
/*
    $.each(roles, function(){
        console.log(this.name);
    });
*/
///////////////////////////////////////////////////////////////////////

class Role {
    constructor(roleName) {
        var infoRole = this.findInfoRole(roleName);
        if(infoRole != null){
            this.name = roleName;
            this.color = infoRole.color;
            this.description = infoRole.description;
        }
        else{
            return null;
        }
    }
    
    getNumberOfRoles(){
        var res = 0;
        $.each(roles, function(){
            res ++;
        });
        return res;
    }
    
    findInfoRole(roleName){
        var i = 0;
        var res;
        
        while(i < this.getNumberOfRoles() && roles[i].name != roleName){
            i++;
        }
        if(i < this.getNumberOfRoles()){
            res = roles[i];
        }
        else{
            res = null;
        }
        
        return res;
    }
    
    getColor(){
        return this.color;
    }
}

export { Role }