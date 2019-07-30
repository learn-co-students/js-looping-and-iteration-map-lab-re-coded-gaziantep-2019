// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(function(driver){
    return driver.toLowerCase()});
  
  return newDrivers;
}

function nameToAttributes(drivers){
  const newDrivers = drivers.map(function(driver){
    const driverArray = driver.split(' ');
    return {firstName: driverArray[0], lastName: driverArray[1]};
  });
  
  return newDrivers;
}

function attributesToPhrase(drivers){
  const newDriversHometown = drivers.map(function(driver){
    return driver.name + " is from " + driver.hometown;
  });
  
  return newDriversHometown;
}