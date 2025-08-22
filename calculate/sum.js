// module protect their variables and function from leaking into the global scope

var x = "hello world";

 function calulateSum(a, b) {
   const sum = a + b;
   console.log(sum);
   
}

 console.log(module.exports)
module.exports = {
    x,
    calulateSum
 } // export the function to be used in other files
