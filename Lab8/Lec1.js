console.log("-----Перше завдання-----");
//Спеціальні типи
var varUndefined;
var varNull = null;

//Прості типи
var varBoolean = true;
var varNumber = 6787;
var varBigNumber = 1234567890123456789012345678901234567890n;
var varString = "Hello, World!";
var varSymbol= Symbol("ssk");

//Складні типи
var varObject = { name: "John", lastName: "Johnson", age: 54 };
var varArray = ["apple", "kiwi", "avocado"];
var varFunction = function() {return "hello, guys";};

//Створюємо масив з усіма типами
var allTypes = [varUndefined, varNull, varBoolean, varNumber, varBigNumber, varString, varSymbol, varObject, varArray, varFunction];

//Виводимо все на консоль
allTypes.forEach(element => console.log(element, " ----> ", typeof element));

//-------------------------------------------------------------------------------
console.log("-----Друге завдання-----");

var str = "56856";
var num = 51385;

var newNum = Number(str);
var newStr = String(num);

console.log(`${str} was a ${typeof str} and now it is a ${typeof newNum}`);
console.log(num + " was a " + typeof num + " and now it is a " + typeof newStr);

//-------------------------------------------------------------------------------
console.log("-----Третє завдання-----");
var aNumber = 830334;
var aString = "830334";

console.log(Boolean(aNumber == aString));
console.log(Boolean(aNumber === aString));

//-------------------------------------------------------------------------------
console.log("-----Четверте завдання-----");

function xorEncryptDecrypt(number, key) {
    return (number ^ key).toString();
  }
  
  var number = 4933835;
  var key = 1234567;
  
  var encrypted = xorEncryptDecrypt(number, key);
  var decrypted = xorEncryptDecrypt(encrypted, key);

  console.log(encrypted + " is an ecrypted " + decrypted);
  
