function setUsername(username){
    this.username = username;
    console.log("CALLED!");
}

function createuser(username,email,password){
    setUsername.call(this,username)
    this.email = email;
    this.password = password;
}

const Ali = createuser("ALi","Ali@example.com","123asd");
console.log(Ali);