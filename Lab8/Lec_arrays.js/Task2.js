function addBigNumbers(num1, num2) {
    let result = "";
    let carry = 0;  
    let i = num1.length - 1;
    let j = num2.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
        let digit1 = i >= 0 ? parseInt(num1[i]) : 0;
        let digit2 = j >= 0 ? parseInt(num2[j]) : 0;

        let sum = digit1 + digit2 + carry;
        result = (sum % 10) + result; 
        carry = Math.floor(sum / 10); 
        i--;
        j--;
    }
    return result;
}

let num1 = "123456789012345678901234567890";
let num2 = "987654321098765432109876543210";
let sum = addBigNumbers(num1, num2);
console.log("Сума:", sum);
