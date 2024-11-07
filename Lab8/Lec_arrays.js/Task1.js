function maxSubArraySum(array) {
    let maxSum = array[0];   
    let currentSum = array[0]; 

    for (let i = 1; i < array.length; i++) {
        currentSum = Math.max(array[i], currentSum + array[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxSum = maxSubArraySum(array);
console.log("Максимальна сума неперервного підмасиву:", maxSum);
