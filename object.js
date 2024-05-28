function multiplier5 (num) {
    return 5*num;
}
multiplier5.power = 2;

console.log(multiplier5(5));
console.log(multiplier5.power);
console.log(multiplier5.prototype);


function createUser(user,score){
        this.user = user;
        this.score = score;
}
createUser.prototype.increment = function(){
    this.score++;
}
createUser.prototype.printME = function(){
   console.log(`Score ${this.score}`);
}

const Ali = new createUser("Ali",25);
const Fatimah = createUser("Fatimah",30);
Ali.printME();

