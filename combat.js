/*let persoName = "davy"
let sold = 100
let nameProduit = "jouet"
let nbDejouet = 5
let prixDuJouet = 40
let achete = 0

while (sold >= prixDuJouet && nbDejouet != 0){
    sold = sold - prixDuJouet
    nbDejouet--
    achete++ 
}
console.log ("davy a pu acheter", achete, "jouets")
console.log ("sold restant :", sold, "$")



if (nbDejouet >0){
    console.log (" il reste :", nbDejouet, "en stock")}
else{
    console.log ("rupture de stock")
    }
*/

// Exercice noté – Simulateur de Combat //

class Guerrier {
    constructor(name, vie, attack, precision){
        this.name = name;
        this.vie = vie
        this.attack = attack 
        this.precision = precision;
    }   
    getName() {
        console.log(this.name);
    }
    getAttack() {
        console.log(this.attack);
    }
    getVie() {
        console.log(this.vie);
    }
    getPrecision(){
        console.log(this.precision);
    }
}


let Baki = new Guerrier("Baki", 10, 2, Math.random());
   
let Doumbe = new Guerrier("Doumbe", 10, 2, Math.random());





while (Baki.vie > 0 && Doumbe.vie > 0){
   
     //Est ce que cela touche ?//
    if (Baki.precision < Math.random()){

        //Si oui : //
        console.log(Baki.name, ":", Baki.attack,"Dommages infligés")
        
        //doumbe perds des pv//
        Doumbe.vie = Doumbe.vie - Baki.attack
        console.log(Doumbe.name, ":", Doumbe.vie, "points de vie restant")
       

      // Si cela ne touche pas//
        //au tour de Doumbe d'attaquer//
        //Est ce que cela touche?//
    } else { 
        console.log("L'attaque de", Baki.name, "n'a pas touché")
    }     

        // Vérification que Doumbe n'a plus de vie pour pas qu'il n'attaque s'il n'a plus de vie//
        if (Doumbe.vie<=0){
            break;
        }
        if (Doumbe.precision < Math.random()){

        //Si oui : //
        console.log(Doumbe.name," :", Doumbe.attack, "Dommages infligés") 

        //Et Baki perds des pv //
        Baki.vie = Baki.vie - Doumbe.attack
        console.log(Baki.name, ":", Baki.vie,"points de vie restant")
    } else {
        console.log("L'attaque de", Doumbe.name, "n'a pas touché")
    }
}

// pour enoncer le gagnant du combat//
if (Baki.vie <=0) {
    console.log("Le gagnant est Doumbe");

} else {
    console.log("Le gagnant est Baki");
} 