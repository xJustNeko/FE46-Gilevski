let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

let myAgeInYears = 27;
const myAgeInSeconds = myAgeInYears * daysInYear * hoursInDay * minutesInHour * secondsInMinute;

console.log("Мой возраст в секундах:", myAgeInSeconds);

let count = 42;
let userName = "42";

countAsString = String(count);
userNameAsNumber = +userName;

console.log(typeof countAsString, countAsString);
console.log(typeof userNameAsNumber, userNameAsNumber);
count = 42;
userName = "42";

countAsString = count.toString();
userNameAsNumber = Number(userName);

console.log(typeof countAsString, countAsString);
console.log(typeof userNameAsNumber, userNameAsNumber);

let a = 1;
let b = 2;
let c = "белых медведей";

let result = a.toString() + b.toString() + " " + c;

console.log(result);

let word1 = "доступ";
let word2 = "морпех";
let word3 = "наледь";
let word4 = "попрек";
let word5 = "рубило";

let lengthWords = word1.length + word2.length + word3.length + word4.length + word5.length;

console.log("Длина всех слов: " + lengthWords);

let myname = prompt("Введите ваше имя:");
let age = prompt("Введите ваш возраст:");

console.log("Имя: " + myname);
console.log("Возраст: " + age);

alert("Имя: " + myname + "\nВозраст: " + age);
