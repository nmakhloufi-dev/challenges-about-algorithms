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
    console.log("Season: " + checkSeason(parsedMonth));
    } else {
    alert("Invalid input. Please enter a valid month (1-12).");
    }
    
    