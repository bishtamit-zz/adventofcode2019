const { input } = require("./input2");

const strToArr = arr => arr.split(",").map(Number);

let arr = strToArr(input);

// arr = [1, 0, 1, 3, 2, 4, 4, 4, 99];
arr[1] = 12;
arr[2] = 2;
// console.log(arr);
console.log(arr.length)
for (let i = 0; i < arr.length; i += 4) {
  let op_code = arr[i];
  let fvalue_idx = arr[i + 1];
  let svalue_idx = arr[i + 2];
  let result_idx = arr[i + 3];
  var finalIndex = arr.length;
  if (arr[i] === 99) {
    finalIndex = i;
    console.log("breaking at ", finalIndex);
    break;
  } else if (op_code === 1) {
    let result = arr[fvalue_idx] + arr[svalue_idx];
    arr[result_idx] = result;
  } else if (op_code === 2) {
    let result = arr[fvalue_idx] * arr[svalue_idx];
    arr[result_idx] = result;
  }
}
console.log(arr);
console.log(arr.slice(0, finalIndex))
