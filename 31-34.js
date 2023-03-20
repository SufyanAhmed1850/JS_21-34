// var now = new Date()
// document.write(now + "<br>")


// var nowMonth = new Date().getMonth()
// var arrMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// document.write(`Current month: ${arrMonth[nowMonth]}<br>`)


// var nowDay = new Date().getDay()
// var arrDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// document.write(`Today is ${arrDay[nowDay]}<br>`)


// var nowDayFun = new Date().getDay()
// if (nowDayFun == 0 || nowDayFun == 1){
//     document.write("It's Fun Day.<br>")
// }else{
//     document.write("It's a business Day.<br>")
// }


// var nowDateHalf = new Date().getDate()
// if(nowDateHalf <= 15){
//     document.write("First fifteen days of the month<br>")
// }else{
//     document.write("Last days of the month<br>")
// }


// var nowCurrent = new Date()
// var elapsedMS = nowCurrent.getTime()
// var elapsedSec = elapsedMS / (1000 * 60)
// document.write(`Current Date: ${nowCurrent}<br>Elapsed milliseconds since January 1, 1970: ${elapsedMS}<br>Elapsed minutes since January 1, 1970: ${elapsedSec}<br>`)


// var nowHourCheck = new Date().getHours()
// if (nowHourCheck <= 11) {
//     document.write("It's AM<br>")
// } else {
//     document.write("It's PM<br>")
// }


// var oldDate = new Date("Dec 31 2020")
// document.write(`Old Date: ${oldDate}`)


var ms2015 = new Date("Jun 18 2015").getTime()
var ms1970 = new Date().getTime()
var msElapsed = ms1970 - ms2015
msElapsed = msElapsed / (1000 * 60 * 60 * 24)
document.write(`${Math.round(msElapsed)} days have passed since 1st Ramadan, 2015`)