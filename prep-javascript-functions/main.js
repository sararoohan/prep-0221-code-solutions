function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log('addTwoNumbers exercise:', addTwoNumbers(4, 4));

function convertHoursToMinutes(number) {
  return number * 60;
}

var convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', convertHoursToMinutesResult);

function personalizeGreeting(name) {
  return ('Howdy, ' + name + '!');
}

var personalizeGreetingResult = personalizeGreeting('Tim');
console.log('personalizeGreeting exercise:', personalizeGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addAndMultiplyBy5Result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', addAndMultiplyBy5Result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var multiplyAndDivideBy5Result = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', multiplyAndDivideBy5Result);

function subtractTwoNumbers(num1, num2) {
  return (num1 - num2);
}

var subtractTwoNumbersResult = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', subtractTwoNumbersResult);

function getCircleCircumference(radius) {
  return (2 * Math.PI * radius);
}

var getCircleCircumferenceResult = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', getCircleCircumferenceResult);

function getFullName(firstName, lastName) {
  return (firstName + ' ' + lastName);
}

var getFullNameResult = getFullName('Sara', 'Roohan');
console.log('getFullName exercise:', getFullNameResult);

function cube(number) {
  return (number ** 3);
}

var cubeResult = cube(5);
console.log('cube exercise:', cubeResult);
