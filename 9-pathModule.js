// μας δινει το path ενος αρχειου

const path = require('path');


console.log(path.sep)

//δημιουργουμε καινουριο path 

const filePath = path.join('/content','subfolder','test.txt');

console.log(filePath);

//βρισκουμε το τελευταιο σημειο του path

const base = path.basename(filePath);

console.log(base);

// βρισκουμε την απολυτη τιμη ενος path

const absolute = path.resolve(__dirname,'content','subfolder','test.txt');
console.log(absolute);


