// problem link at leetcode
// https://leetcode.com/problems/filter-elements-from-array/

var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};

// Example 1:
/* Input: arr = [0, 10, 20, 30],
 fn = function greaterThan10(n) { return n > 10; }
  Output: [20, 30] */

let arr1 = [0, 10, 20, 30];

function greaterThan10(n) {
  return n > 10;
}

const newArray1 = filter(arr1, greaterThan10);
console.log(newArray1); // Output: [20, 30]

// Example 2:
/* Input: arr = [1,2,3],
 fn = function firstIndex(n, i) { return i === 0; }
Output: [1] */

let arr2 = [1, 2, 3];
function firstIndex(n, i) {
  return i === 0;
}

const newArray2 = filter(arr2, firstIndex);
console.log(newArray2); // [1]

// Example 3:
/* Input: arr = [-2, -1, 0, 1, 2],
 fn = function plusOne(n) { return n + 1 }
Output: [-2, 0, 1, 2] */

let arr3 = [-2, -1, 0, 1, 2];
function plusOne(n) {
  return n + 1;
}

const newArray3 = filter(arr3, plusOne);
console.log(newArray3); // [-2,0,1,2]
