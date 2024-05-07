// Get the current date
function remainingDAYS(){
    var today = new Date();

// Create a Date object for Eid ul Azha (assuming it's on June 16, 2024)
var eidUlAzha = new Date(2024, 6, 16);

// Calculate the difference in milliseconds between today and Eid ul Azha
var timeDiff = eidUlAzha.getTime() - today.getTime();

// Calculate the remaining days
var one_day = 1000 * 60 * 60*24 ;
var  remainingDays = Math.floor(timeDiff / one_day);

// Cvar ate the remaining milliseconds
var remainingMilliseconds = timeDiff % one_day;

document.write(`There are ${remainingDays} days and ${remainingMilliseconds} milliseconds left until Eid ul Azha!`);
}
remainingDAYS();
