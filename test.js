/*const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const othernumber = 1123.8966

console.log(othernumber.toPrecision(3));

const hundred = 10000000000000;

console.log(hundred.toLocaleString('en-US'));
console.log(Math.abs(-4));
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);


let myDate = new Date;

console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof(myDate));


const mycreated = new Date(2020, 12, 20);
console.log(mycreated.toDateString());


const myArr = [0,1,2,3,4,5];

console.log(myArr);
console.log(myArr.length);
console.log(myArr.splice(1 , 3));
console.log(myArr);


const myArr = [0,1,2,3,4,5];
const yourArr = [6,7,8,9,10,11,12,13];

//console.log(myArr.concat(yourArr));

const myAr = [0,1,2,3,4,5,[6,7,8,9],[10,11,[123,258,255,365]]];
const ne = myAr.flat(2);

console.log(ne);

const Jsuser ={
    name: 'ALI',
    "full name":"ALI Un WALIULLAH",
    age: 25,
    hobbies: ['football', 'Shooting', 'MMA'],
    city: 'New York',
}

console.log(Jsuser.name);
console.log(Jsuser["full name"]);

//const warInter = new object();    
const warInter = {};
warInter.name = "Abdullah";
warInter.age = "25";
warInter.rankWanted = "SHAHEED";

console.log(warInter);

const warInter = {
    name: "Abdullah",
    age: "25",
    rankWanted:{
        name: "SHAHEED",
        age: "Unkonwn",
    }
}
console.log(warInter.rankWanted);
console.log(warInter.rankWanted.name);

const obj1 = {1:"a",2:"b",};
const obj2 = {3:"a",4:"b",};
const obj3 = {5:"a",6:"b",};

console.log(obj1, obj2);

//const obj4 = {obj1, obj2};
//console.log(obj4);

const obj4 = {...obj1, ...obj2};

console.log(obj4);

const warInter = {};
warInter.name = "Abdullah";
warInter.age = "25";
warInter.rankWanted = "SHAHEED";

console.log(Object.keys(warInter));
console.log(Object.values(warInter));
console.log(Object.entries(warInter));

console.log(warInter.hasOwnProperty("age"));

const course = {
    name: 'JavaScript',
    teacher: 'Ali',
    price: 300,
}
course.teacher;
const{teacher: ustad} = course;
//console.log(teacher);
console.log(ustad);


function callMyName(){
console.log("A");
console.log("L");
console.log("L");
console.log("A");
console.log("H");
console.log("U");
}
//callMyName();
function AddToNumbers(number1, number2){
    console.log(number1 + number2);
}

AddToNumbers(10,20);

function AddToNumbers(number1, number2){
    console.log(number1 + number2);
    return number1 + number2;
}

const final = AddToNumbers(10,20);
console.log("Result:",final);

function one(){
    const username= "ALi";
    function two(){
        const website = "Youtube";
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

//IIFE
(function one(){
    console.log("ALLAH HU AKBAR");
})();

( (name) => {
    console.log(`MUHAMMAD (S.A.W.S) YA ${name}`);
})('ALI');

const map = new Map()
map.set('pak',"Pakistan")
map.set('pal',"Palestaine")
map.set('ji',"Jihad")

//console.log(map);

for (const key of map) {
    console.log(key);
}


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => {
    return num > 4;
})
console.log(newNums)


const myNums = [1,2,3,4,5,6,7,8,9,10]
const newNums = []
myNums.forEach( (num) => {
    if( num > 4 ){
        newNums.push(num)
    }    
})
console.log(newNums)

const myNums = [1,2,3,4];

const totalval = myNums.reduce(function(acc, currval){
 console.log(`Accumulator:${acc} and  Current value:${currval}`);
 return acc + currval;
},0)


const myShoppingCart =[
    { course: "Javascript",
      price: 256
    },
    { course: "Java",
      price: 147
    },
    { course: "Python",
      price: 369
    },
    { course: "React",
      price: 753
    }
]

const total = myShoppingCart.reduce((acc , item) => acc +  item.price, 0)
console.log(total)
*/