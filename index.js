// Code your solution in this file.
function lowerCaseDrivers(array){
  
  const newdrivers=array.map(function(num){
    return num.toLowerCase();
  });
  return newdrivers;
}

function nameToAttributes(array){
  const newdrivers=array.map(function(num){
    const first=num.split(" ")[0];
    const last=num.split(" ")[1];
    return {firstName: first, lastName: last};
  });
  return newdrivers;
}

function attributesToPhrase(array){
  const newdrivers=array.map(function(num){
    const element=num.name;
    const element2=num.hometown;
    return element+' is from '+element2;
  });
  return newdrivers;
}





 const drivers = [
        { name: 'Bobby', hometown: 'Pittsburgh' },
        { name: 'Sammy', hometown: 'New York' },
        { name: 'Sally', hometown: 'Cleveland' },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby', hometown: 'Tampa Bay' }
      ];