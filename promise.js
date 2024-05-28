/*const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is completed');
        resolve();
    },2000)
});
promiseOne.then(function (){
    console.log('Promise consumed');
});

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Allah Hu Akbar')
        resolve();
    },5000)
}).then(function (){
    console.log('Ya ALi')
})

const promiseThree = new Promise(function (resolve,reject) {
    setTimeout(function () {
        resolve({name: 'Abdullah Fayyaz Rana',
                email: 'lwo@example.com'});
    },7000)
});
promiseThree.then(function(name){
    console.log(name);
});

const promiseFour = new Promise(function (resolve,reject) {
    let error = true;
    if (!error) {
        resolve({name: 'Abdullah Fayyaz Rana',
                password: 12354});
    }
    else{
        reject("ERROR:Something went wrong");
    }
});
promiseFour.then(function(user){
    console.log(user);
    return user.name;
}).then((name) =>{
    console.log(name);
}).catch((error) =>{
    console.log(error);
}).finally(() => console.log("finally always runs"))

const promiseFive = new Promise(function (resolve,reject) {
    let error = true;
    if (!error) {
        resolve({name: 'Javascript',
                password: 12354});
    }
    else{
        reject(" JS went wrong");
    }
});
async function consumepromiseFive(){
   try{ const respone = await promiseFive;
    console.log(respone);
   }catch(error){
    console.log(error);
}
}
consumepromiseFive();
*/
async function getUsers(){
    try{
        const respone = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await respone.json();
        console.log(data);
    }
    catch(error){
        console.log('E:',error);
    
    }

};
getUsers();