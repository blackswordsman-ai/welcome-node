// episode 10 - Thread Pool

const fs = require('fs');
const crypto = require('crypto');

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2('password', 'salt', 100000, 50, 'sha512', (err, key) => {
  console.log('1-CryptoPDFGK done');
});
crypto.pbkdf2('a', 'b', 100000, 50, 'sha512', (err, key) => {
    console.log('2-CryptoPDFGK done');
});
crypto.pbkdf2('a', 'b', 100000, 50, 'sha512', (err, key) => {
    console.log('3-CryptoPDFGK done');
});
crypto.pbkdf2('a', 'b', 100000, 50, 'sha512', (err, key) => {
    console.log('4-CryptoPDFGK done');
});
crypto.pbkdf2('a', 'b', 100000, 50, 'sha512', (err, key) => {
    console.log('5-CryptoPDFGK done');
});
// immediate 1