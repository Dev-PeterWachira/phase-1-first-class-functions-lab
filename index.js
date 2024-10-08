const drivers = ['Antonio','Nuru','Amari','Mo'];
 const returnFirstTwoDrivers = (drivers) => {
     return drivers.slice(0,2);
 }
 const returnLastTwoDrivers = (drivers) => {
     return drivers.slice(-2);
 }
 const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

 function createFareMultiplier(multiplier){
 return function fare(fare) {
     return fare * multiplier;
 }
 }

 const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferntDrivers(arrayOfDrivers,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
}
 const arrayOfDrivers = ['Antonio','Nuru','Amari','Mo'];

index.js

// Function to select different drivers based on the passed function
function selectDifferentDrivers(drivers, functionPassed) {
    return functionPassed(drivers); // Call the passed function with the drivers array
}

// Export the functions for use in the test file
module.exports = { returnFirstTwoDrivers, returnLastTwoDrivers, selectDifferentDrivers };
