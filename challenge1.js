let message = "There is no war in Ba Sing Se"
function wordsNumber (message){
let words = message.split (' ')
    return words.length
}
let count = wordsNumber(message)
console.log("This message contains :"+ ' '+ count+' '+ "words")