// async function fetchData() {
//     console.log("Fetching data...");
//     const data = await fetch('https://reqres.in/api/users?page=2');
//     console.log("Data received:", data);
// }

// console.log("Before fetchData()");
// fetchData();
// console.log("After fetchData()");
// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }
 
function asynFetch(){
    return new Promise((resolve, reject)=>{ 
        const data =  fetch('https://reqres.in/api/users?page=2');   
        console.log(data)
        console.log('after fetching data')
        if(data){
            resolve(data) 
        }
    })
} 
 
console.log("before call asynFetch()") 
asynFetch().then((data)=>console.log(data)) 
console.log("continueing execution") 
for (let i = 0; i < 5; i++) {
        console.log(i);
    }