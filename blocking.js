const { log } = require('node:console');
const crypto = require('node:crypto'); //:this is core module

console.log("hello world");
var a = 521323;
var b = 123123;

// synchronous function it will block main thread of execution -DONT USE IT
// readFileSync is blocking function


// passwod base key derivation function
crypto.pbkdf2Sync('password', 'salt', 5000000, 64, 'sha512');
console.log(" first key is genarated");

 
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512',(err, key) => {
   console.log(" second key is genarated");
});
  

function multiplyFn(x, y){
   const result =a * b;
   return result;
}

var c = multiplyFn(a, b);
console.log("multiplication result is",c);
