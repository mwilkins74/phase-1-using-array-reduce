const batteryBatches = [4, 5, 3, 4, 4, 6, 5];


// const doubledAndSummed = [1, 2, 3].reduce(function(accumulator, element){ return element * 2 + accumulator}, 0)
const totalBatteries = batteryBatches.reduce(function(accum, element){return element + accum}, 0)



// function totalBatteries(array, reducer, init) {
   
// // function totalBatteries(arr, reducer, init) {
//   let accum = init;
//   for (const element of arr) {
//     accum = reducer(accum, element);
//     };
//     return accum;
// }

// function batteryCounter(totalAmount, arr) {
//   return totalAmount + arr;
// }

// console.log(ourReduce(batteryBatches, batteryCounter, 0));