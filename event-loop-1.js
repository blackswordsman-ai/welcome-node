// episode 9 - Event Loop
const fs = require('fs');

const a =100;

setImmediate(() => console.log('immediate 1'));

fs.readFile(__filename, () => {
  console.log('file read');

  setTimeout(() => console.log('timeout 1'), 0);
  setImmediate(() => console.log('immediate 2'));
});

setTimeout(() =>console.log('timeout 2'), 0);

function printA(){
    console.log("a",a);
}

printA();
console.log("end of file");

// timeout 2 
       

// a 100
// end of file
// timeout 2
// immediate 1
// file read
// immediate 2
// timeout 1



