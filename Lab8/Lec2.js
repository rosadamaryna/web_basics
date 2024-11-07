console.log("Завдання 1");

var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    alert(foo);
}
bar();

console.log("Завданння 3");

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);

console.log("Завдання 4");
var a = 1;
function b() {
    a = 10;
    return; //Видалили "function a()"
}
b();
console.log(a);