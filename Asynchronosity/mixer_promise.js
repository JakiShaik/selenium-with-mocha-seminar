const fs = require("fs");


// This function returns a promise that the 'text' we pass into 
// this function has been asynchrnously written into our FILE.
const writePromise = (file,text) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, text, err => {
      if (err) reject(err);
      else resolve();
    });
  });
};

// This function returns a promise that resolves to the the asynchronously 
// read content in our FILE by fs.readFile 
const readPromise = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

// Now let's see how we'd run the same program 
// with our promises.
// We could chain more reads
// and writes and still have highly readable code.
readPromise("./fruits.txt")
  .then(content => {
    console.log(content);
    return writePromise('./outputfile.txt',content);
  })
  .then(() => {
    return readPromise('./outputfile.txt');
  })
  .then(updatedContent => {
    console.log('#######\n'+updatedContent);
    return writePromise('./fruits.txt',updatedContent+'-updated');
  })
  .catch(err => console.log(err));