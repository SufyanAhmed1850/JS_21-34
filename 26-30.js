// var numUser = +prompt("Enter a positive number with decimal:")
// var numRound = Math.round(numUser)
// var numFloor = Math.floor(numUser)
// var numCeil = Math.ceil(numUser)
// document.write(`Number: ${numUser}<br>Round off value: ${numRound}<br>Floor Value: ${numFloor}<br>Ceil Value: ${numCeil}<br>`)



// var numUser1 = +prompt("Enter a negative number with decimal:")
// if (numUser1 >= 0) {
//     numUser1 = -numUser1;
// }
// var numRound1 = Math.round(numUser1)
// var numFloor1 = Math.floor(numUser1)
// var numCeil1 = Math.ceil(numUser1)
// document.write(`Number: ${numUser1}<br>Round off value: ${numRound1}<br>Floor Value: ${numFloor1}<br>Ceil Value: ${numCeil1}<br>`)


// var numUser2 = +prompt("Enter a Number (Positive or Negative):")
// if(numUser2 <= 0){
//     var numUser3 = numUser2 * -1
// }else{
//     numUser3 = numUser2
// }
// document.write(`The absolute value of ${numUser2} is ${numUser3}<br>`)


// var numRan = Math.floor((Math.random() * 6) + 1)
// document.write(`Random Dice Value: ${numRan}<br>`)


// var numRan = Math.floor((Math.random() * 100) + 1)
// document.write(`Random number between 1 and 100 is: ${numRan}<br>`)


// var weightInput = prompt("What is your weight?");
// var weight;
// if (weightInput.indexOf("kgs") !== -1) {
//     weight = parseFloat(weightInput);
// } else if (weightInput.indexOf("kilograms") !== -1) {
//     weight = parseFloat(weightInput) * 0.453592;
// } else {
//     weight = parseFloat(weightInput) * 0.453592;
// }
// document.write("Your weight is " + weight.toFixed(2) + " kilograms.");


// var numGame = +prompt("Enter a Number between 1 to 10")
// var numRan01 = Math.floor((Math.random() * 10) + 1)
// function randomNumGame() {
//     document.write("Congratulations you got it!")
// }
// if (numGame >= 1 && numGame <= 10) {
//     if (numGame == numRan01) {
//         randomNumGame()
//     }
// } else {
//     numGame = +prompt("Please enter a Number between 1 to 10")
// }