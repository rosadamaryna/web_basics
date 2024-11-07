let a = 10;
let b = 3;

// Арифметичні оператори
let sum = a + b; // Додавання: 13
let diff = a - b; // Віднімання: 7
let prod = a * b; // Множення: 30
let div = a / b; // Ділення: 3.3333...
let mod = a % b; // Остача від ділення: 1
let exp = a ** b; // Піднесення до степеня: 1000
// Оператори порівняння
console.log(a > b);  // true
console.log(a < b);  // false
console.log(a >= b); // true
console.log(a <= b); // false
console.log(a == b); // false
console.log(a != b); // true
console.log(a === b); // false (рівність за типом і значенням)
console.log(a !== b); // true (не рівність за типом і значенням)
// Логічні оператори
let andResult = (a > 5) && (b < 5); // true (обидва вирази true)
let orResult = (a < 5) || (b < 5);  // true (один з виразів true)
let xorResult = (a < 5) ^ (b < 5);  // 1 (true, оскільки лише один з виразів true)
// Побітові оператори
let andBitwise = a & b; // Побітове І: 2
let orBitwise = a | b; // Побітове АБО: 11
let xorBitwise = a ^ b; // Побітове виключне АБО: 9
let leftShift = a << 1; // Зсув вліво: 20
let rightShift = a >> 1; // Зсув вправо: 5
// Оператор присвоєння з арифметичним оператором
a += b; // a = a + b -> 13
a -= b; // a = a - b -> 10
a *= b; // a = a * b -> 30
a /= b; // a = a / b -> 10
a %= b; // a = a % b -> 1
a **= b; // a = a ** b -> 1000
