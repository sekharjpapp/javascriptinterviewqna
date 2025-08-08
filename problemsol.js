let arr = [];     
arr[10] = 10;
arr[100] = 100;

console.log(arr.length); // Output: 101
arr.forEach((value) => {
     console.log("Value:", value);
 }); //      

console.log(arr); // Output: undefined