
// Write a functional expression that duplicates each element of a given array.
//     Input: [2, 4, 7, 11, -2, 1]
// Output: [2, 2, 4, 4, 7, 7, 11, 11, -2, -2, 1, 1]

var input = [2, 4, 7, 11, -2, 1];

function duplicateArray(arr) {

    for (var i = arr.length - 1; i >= 0; i--) {
        arr.splice(i, 0, arr[i]);
    }
    return arr;
}
console.log(duplicateArray(input));



a = [2, 3, 1, 4];
b = [];

for (var i = 0; i < a.length; i++) {
    b.push(a[i]);
    b.push(a[i]);
}
console.log(b);


// Write a functional expression that removes all duplicates in a given array.
// Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
// Output: [1, 4, 8, 9, 12, 13] 

var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicate(arr) {
    var newArr = Array(arr);
    console.log(newArr);

}

console.log(removeDuplicate(input));



