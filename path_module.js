const { log } = require('console');
const path = require('path')

const myPath = '/mnt/c/Desktop/NodeJSTut/app.js'

const pathInfo = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}

console.log(pathInfo); 
console.log(__dirname) 
console.log(__filename)  
const path_obj = path.join(__dirname,"os_operation.js")
console.log(path_obj)