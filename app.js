//Challenge one
//let message = "There is no war in Ba Sing Se"
//function nombreMot (message){
//    let words = message.split (' ')
//    return words.length
//}
//let count = nombreMot(message)
//console.log("This message contains :", count,"words")

//Challenge two
//let countries = ['China','Japan','South Korea','Vietnam','Malaysia'] 
//let capital = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur']

//for( let i = 0; i<countries.length; i++) {
//    let country = countries [i]
//    let capitalCity = capital [i]
//    console.log (`Your country : ${country}  has the capital named : ${capitalCity}.`)
//}

//Challenge three

//function randomizer(){
//    return Math.floor (Math.random() *3)
//}
//var nombreAleatoire = randomizer ()
//console.log( nombreAleatoire)
 
//  if (nombreAleatoire === 0) { 
//    console.log("Your fate is : A certain victory" ) 
//}
//    else if (nombreAleatoire === 1) {
//    console.log ("Your fate is : Not so certain victory" )
//}
//else if (nombreAleatoire === 2){
//    console.log("Your fate is : An uneasy victory" )
//}

//else { 
//    console.log ("Your fate is : Your fate is unclear, ô chosen undead" )
//}

//Challenge four
function checkSeason (month) {
    if (month >= 3 && month <= 5) {
        return "Spring"
        
    }else if (month >=6 && month <= 8){
        return "Summer"       

    } else if( month >= 9 && month <= 11){
        return "Autumn"
        
    } else{
           return "Winter"
    }
}

var inputMonth = prompt("Enter a month (1-12):");
var parsedMonth = parseInt(inputMonth, 10);

if (!isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12) {
    alert("Month: " + parsedMonth);
    alert("Season: " + checkSeason(parsedMonth));
} else {
    alert("Invalid input. Please enter a valid month (1-12).");
}

