const fs = require("fs");


// This async function returns a promise that the 'text' we pass into
// this function has been asynchrnously written into our FILE.
 function write(file,text) {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, text, err => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// This async function returns a promise that resolves to the the asynchronously
// read content in our FILE by fs.readFile
 function read(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// We can now run async non-blocking code
// as if it was 'normal' blocking code that 
// we're used to seeing in other languages!
async function main() {
  
  const originalContent = await read('./fruits.txt');

  console.log('Original contetn is \n'+originalContent);
  console.log('--------------------------');

  await write('./outputfile.txt',originalContent+"updated content");

  const updatedContent = await read('./outputfile.txt');

  console.log('updated contetnt is \n'+updatedContent);
}

main();

//https://medium.com/platformer-blog/node-js-concurrency-with-async-await-and-promises-b4c4ae8f4510