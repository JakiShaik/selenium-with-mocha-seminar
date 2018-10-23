var fs = require('fs')
fs.readFile("./fruits.txt", 'utf8', function (err,txt) {
    if(err) {
    throw err;
    }
    arr = txt.split("\n")
    var mixed = arr.toString();
    fs.writeFile("./output.txt", mixed, {encoding:'utf8'}, (err)=> {if (err) throw err;}); 
});
