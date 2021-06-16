const fs = require('fs')
// const book = {
//     title: 'Witcher',
//     author: 'Someone'
// }

// const bookJSON = JSON.stringify(book);

// fs.writeFileSync('1-json.json', bookJSON)
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON)
// console.log(data.title, 'read from a file')


const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = "Nazar"
data.planet="Marc"
const bookJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', bookJSON)

