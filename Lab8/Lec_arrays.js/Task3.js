function arrayDifference(arr1, arr2) {
    const countMap = {};

    for (let num of arr2) {
        countMap[num] = (countMap[num] || 0) + 1;
    }

    const result = [];

    for (let num of arr1) {
        if (countMap[num]) {
            countMap[num]--;
        } else {
            result.push(num);
        }
    }
    return result;
}

const arr1 = [1, 2, 2, 3, 4, 5, 5];
const arr2 = [2, 5, 5];
const difference = arrayDifference(arr1, arr2);
console.log("Різниця масивів:", difference);
