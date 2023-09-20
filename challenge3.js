function randomizer(){
    return Math.floor (Math.random() *3)
    }
    var nombreAleatoire = randomizer ()
    console.log( nombreAleatoire)
     
    if (nombreAleatoire === 0) { 
    console.log("Your fate is : A certain victory" ) 
    }
    else if (nombreAleatoire === 1) {
    console.log ("Your fate is : Not so certain victory" )
    }
    else if (nombreAleatoire === 2){
    console.log("Your fate is : An uneasy victory" )
    }else { 
    console.log ("Your fate is : Your fate is unclear, ô chosen undead" )
    }
    