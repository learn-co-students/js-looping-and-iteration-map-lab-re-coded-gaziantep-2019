// Code your solution in this file.


// function lowerCaseDrivers(drivers){
//   return drivers.map(function(driver){
//     return driver.toLowerCase();
//   });
// }

function lowerCaseDrivers(arr){
  return arr.map(el =>  el.toLowerCase() );
}
function nameToAttributes(arr){
  return arr.map(
    el => Object.assign( {firstName: el.split(" ")[0]},{lastName: el.split(" ")[1]}));
}
function attributesToPhrase(arr){
  return arr.map(el => `${el.name} is from ${el.hometown}` );
}