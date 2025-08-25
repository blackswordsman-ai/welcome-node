

console.log("hello world");
var a = 521323;
var b = 123123;

// this callback only will push to v8 only once the call stack is empty
// asynchronous function it will not block the thread of execution
setTimeout(() => {
    console.log('This runs after 2 seconds');
},0);

setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 1000);



function multiplyFn(x, y){
   const result =a * b;
   return result;
}

var c = multiplyFn(a, b);
console.log("multiplication result is",c);