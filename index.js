// Code your solution in this file.

function lowerCaseDrivers(drivers) {
 return drivers.map(function(name){
   return name.toLowerCase();
 });
}

function nameToAttributes(drivers) {
  const driversObject = drivers.map(function(driver) {
    const firstName = driver.split(' ')[0];
    const lastName = driver.split(' ')[1];
    return {firstName: firstName, lastName: lastName};
  });
  return driversObject;
}

function attributesToPhrase(drivers) {
  const phrase = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return phrase;
}

function map(array){
  const drivers=[];
  for (const element of array){
    drivers.push('Bobby', 'Sammy','Sally','Annette','Sarah','Bobby');
  }
  return drivers.toLowerCase();
}