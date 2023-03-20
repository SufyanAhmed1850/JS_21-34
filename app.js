// var firstName = prompt("Please enter your first name:");
// var lastName = prompt("Please enter your last name:");
// var fullName = firstName + " " + lastName;
// document.write("Hello, " + fullName + "!<br>");


// var favPhone = prompt("Please enter your favorite phone:");
// var favLen = favPhone.length
// document.write(`My favorite phone is: ${favPhone}<br>Length of string: ${favLen}`)


// var pak = "Pakistani"
// var nPak = pak.indexOf("n")
// document.write(`String: ${pak}<br>Index of 'n': ${nPak}`)


// var hWorld = "Hello World"
// var lastL = hWorld.lastIndexOf("l")
// document.write(`String: ${hWorld}<br>Last index of 'l': ${lastL}`)


// var pak1 = "Pakistani"
// var chrPak = pak1.charAt(3)
// document.write(`String: ${pak1}<br>Character at index 3: ${chrPak}`)


// var firstName1 = prompt("Please enter your first name:");
// var lastName1 = prompt("Please enter your last name:");
// var fullName1 = firstName1.concat(" ", lastName1)
// document.write("Hello, " + fullName1 + "!<br>");


// var oldCity = "Hyderabad"
// var repCity = oldCity.replace("Hyder", "Islam")
// document.write("City: " + oldCity + "<br>After replacement: " + repCity)


// var message = "Ali and Sami are best friends. They play cricket and football together."
// var repMessage = message.replace(/and/g, "&")
// document.write("Message: " + message + "<br>After Replace: " + repMessage)


// var str = "472"
// var num = Number(str)
// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeof str + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeof num + "<br>");


// var userInp = prompt("Enter Some Text:")
// var capInp = userInp.toUpperCase()
// document.write(`User Input: ${userInp}<br>Upper Case: ${capInp}`)


// var userInput = prompt("Enter some text to convert into title case:")
// var userArr = userInput.split(" ")
// var titleCase = []
// for (i = 0; i < userArr.length; i++) {
//     var titleCaseLoop = userArr[i][0].toUpperCase() + userArr[i].slice(1).toLowerCase()
//     titleCase.push(titleCaseLoop)
// }
// document.write(titleCase.join(" "))


// var num = 35.36
// var str = num.toString().replace(".", "")
// document.write("Original number: " + num + "<br>");
// document.write("Converted string: " + str + "<br>");


// var username = prompt("Enter your username:");
// for (var i = 0; i < username.length; i++) {
//   var charCode = username.charCodeAt(i);
//   if (charCode == 64 || charCode == 46 || charCode == 44 || charCode == 33) {
//     username = prompt("Invalid username. Please enter a valid username:");
//     i = -1
//   }
// }
// document.write("Username: " + username + "<br>");


// var a = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userA = prompt("Enter Bakery Item:").toLowerCase()
// var flag = false
// for (i = 0; i < a.length; i++) {
//     if(userA == a[i]){
//         flag = true
//         break
//     }
// }
// if (flag){
//     document.write(`${userA} is Available at index ${a.indexOf(userA)} in our bakery`)
// }else{
//     document.write(`We are sorry ${userA} is not available in our bakery. You can try ${a.join(",")}`)
// }


/* // PASSWORD VALIDATOR
var password = prompt("Enter your password:")
// HAS NUMBERS & ALPHABETS
var hasAlphabets = false
var hasNumbers = false
for (i = 0; i < password.length; i++) {
    var charCode = password.charCodeAt(i)
    if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
        hasAlphabets = true
    } else if (charCode >= 48 && charCode <= 57) {
        hasNumbers = true
    }
}
// STARTING WITH NUMBER
var startsWithNumber = false
var firstCharCode = password.charCodeAt(0)
if (firstCharCode >= 48 && firstCharCode <= 57) {
    startsWithNumber = true
}
// ENOUGH LENGTH
var isLongEnough = false
if (password.length >= 6) {
    isLongEnough = true
}
var valid = false
if (hasAlphabets && hasNumbers && !startsWithNumber && isLongEnough) {
    valid = true
}
// VALIDATE CONDITIONS
function wrongPass() {
    password = prompt("Invalid password. Please enter a valid password:")
    hasAlphabets = false
    hasNumbers = false
    for (i = 0; i < password.length; i++) {
        var charCode = password.charCodeAt(i)
        if (charCode >= 65 && charCode <= 90 || charCode >= 97 && charCode <= 122) {
            hasAlphabets = true
        } else if (charCode >= 48 && charCode <= 57) {
            hasNumbers = true
        }
    }
    startsWithNumber = false
    firstCharCode = password.charCodeAt(0)
    if (firstCharCode >= 48 && firstCharCode <= 57) {
        startsWithNumber = true
    }
    isLongEnough = false
    if (password.length >= 6) {
        isLongEnough = true
    }
    if (!hasAlphabets || !hasNumbers || startsWithNumber || !isLongEnough) {
        wrongPass()
    } else {
        document.write("Password: " + password + "<br>");
    }
}
if (!valid) {
    wrongPass()
} else if (valid) {
    document.write("Password: " + password + "<br>");
} */


// var university = "University of Karachi"
// for (i = 0; i < university.length; i++){
//     document.write(university[i] + "<br>")
// }


// var userCountry = prompt("Enter a Country:")
// var lastChar = userCountry.charAt(userCountry.length-1)
// document.write(`User Input: ${userCountry}<br>Last Character of Input: ${lastChar}`)


// var strThe1 = "The quick brown fox jumps over the lazy dog"
// var strThe = strThe1.toLowerCase()
// var arrThe = strThe.split(" ")
// var count = 0
// for (i = 0; i < arrThe.length; i++) {
//     if (arrThe[i] == "the") {
//         count++
//     }
// }
// document.write(`Text: ${strThe1}<br>There are ${count} occurrences of word "the"`)