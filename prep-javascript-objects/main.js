var person = {
  firstName: 'Sara',
  lastName: 'Roohan',
  hobby: 'Reading and Learning'
};
console.log(person);

var fullName = (person.firstName + ' ' + person.lastName);
console.log('The person\'s name is:', fullName);

person.job = 'Full Time Mom/Student';
console.log('The person\'s current job is:', person.job);

person.previousJob = 'eCommerce/Marketplace Manager';
console.log('The person\'s previous job is:', person.previousJob);

console.log('The complete person object:', person);

var myCar = {
  make: 'Hyundai',
  model: 'Tuscon',
  year: '2014'
};
console.log('My Car Information:', myCar);

myCar['owner'] = fullName;

console.log('My name is ' + myCar['owner'] + ' and I drive a ' + myCar['year'] + ' ' + myCar['make'] + ' ' + myCar['model'] + '.');

myCar['color'] = 'Chai';
console.log('The complete myCar object:', myCar);
