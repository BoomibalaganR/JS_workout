const fs = require('fs');  
const fspromise = fs.promises
const path = require('path') 


function create_directory(director_name){
    fs.mkdir(path.join(__dirname, director_name),(err)=>{
        if (err){ 
            console.log(err)
        }else{
            console.log('successfully created')
        }
    })
} 


function write_file(data, path,...args ){
    console.log("starting") 
    fs.writeFile(path,  data, args[0], (err)=> {
        if(err)
            console.log(err);
         else {
            console.log('Writen to file successfully!');
        }
    })
}

function add_content(data,path){
    fs.appendFile(path, data,(err)=>{ 
        if (err){
            console.log(err); 
        } 
        console.log('successfully appened');

    })
} 

function read_file(path){
    fs.readFile(path,'utf8',(err,data)=>{
        if (err){
            console.log(err) 
        } 
        else{
            console.log(data)
        }
    })
} 
function delete_file(path){
    fs.unlink(path, (err)=>{
        if (err){
            console.log(err)
        } else{
            console.log('successfully deleted')
        }
    })
}   


// fspromise.readFile(path.join(__dirname,'files','tem.txt'))
// .then((data)=>{
//     console.log(data)
// }) 
// .catch((err)=>{
//     console.log(err)
// }) 


// fspromise.writeFile( path.join(__dirname,'files','temp.txt'),"welcome to node.js\n",{flag: 'a'})
// .then(()=>{
//     console.log("successfully write");
// })
// .catch((err)=>{
//     console.log(err)
// })

async function readFile(filePath) {
    try {
        const content = await fspromise.readFile(filePath, { encoding: 'utf-8' });
        return content;
    } catch (err) {
        console.error(err);
    }
}

const content = readFile(path.join(__dirname,'files','temp.txt')) 
console.log(content);


// delete_file(path.join(__dirname,'files','temp.txt'))
// read_file(path.join(__dirname,'files','temp.txt'))
// write_file("welcome to node.js\n", path.join(__dirname,'files','temp.txt'),{flag: 'a'}) 
//add_content("\nappend content",path.join(__dirname,'files','temp.txt'))

for(let i =0; i < 5; i++){
    console.log(i)
}


// while(true){ 
//     console.log("1: create directory") 
//     console.log("2. delete directory") 
//     console.log('3. exit') 

//     switch (choice){
//         case 1:  
//             console.log('enter directory name') 
//             let dir_name = 
//             create_directory()
//     }
// }