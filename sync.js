fs = require('fs');
https = require('https');

console.log("hello world");
var a = 521323;
var b = 123123;

// asynchronous function it will block the thread of execution
fs.readFileSync('file.txt', 'utf8', (err, data) => {
   console.log("this will execute after reading file");
});


https.get('https://example.com/api', (resp) => {
    console.log('Fetching data...');
});

setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 5000);

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

function multiplyFn(x, y){
   const result =a * b;
   return result;
}

var c = multiplyFn(a, b);
console.log("multiplication result is",c);