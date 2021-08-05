/*
What will be the output for the above code?
*/


var arr = [2, 56, 78, 34, 65];
var new_arr = arr.map(function(num) {
return num / 2;
});
console.log(new_arr);


/*
Output

Array(5) [1, 28, 39, 17, 32.5]    // numbers from the original array are divided by 2

*/
