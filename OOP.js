const user = {
    username:"Ali",
    logincount:9,
    signedIn: true,

    getUserDetails: function(){
        console.log(`Username: ${this.username}`);
    }
}
console.log(user.username);
console.log(user.getUserDetails());