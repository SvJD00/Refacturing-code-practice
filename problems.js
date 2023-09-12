function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    const odds = [];
    for (const num of arr) {
        if (num % 2 === 0) {
            odds.push(num);
        }
    } return odds
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    const odds = []
    for (let i = arr.length; i > 0; i--) {
        if (i % 2 === 0) {
            odds.push(i);
        }
    } return odds
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    let newArr = [];
    for (let i = 1; i < arr.length; i *= 2) {
        newArr.push(arr[i]);
    }
    return newArr;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    let newArr = [];
    for (let i = 1; i < arr.length; i *= n) {
        newArr.push(arr[i])
    } return newArr
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    const middle = Math.ceil(arr.length/2)
    const firstHalf = arr.slice(0, middle)
    return firstHalf
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    const middle = Math.ceil(arr.length/2)
    const secondHalf = arr.slice(middle)
    return secondHalf
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}
