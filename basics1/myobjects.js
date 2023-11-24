const user = {
    username : "hc" , 
    name : "hitesh" ,
    email : "h@hc.com" ,
    age : 20 ,
    isAdmin : false,
    isLoggedIn : true,
    tea : ['lemon' , 'ginger', 'peach'],
    address: {
        city: "jaipuir",
        state: "Rajasthan"
    }
}

const anotherUser = user;

// console.log(user.age);
// console.log(user['age']);
// console.log(user.tea[2]);
// console.log(user.address.state);

user.email = "hitesh@pw.live"
// console.log(user);
// console.log(anotherUser);

delete user.isAdmin;
// console.log(user);

// console.log(Object.keys(user)); keys => Returns the names of the enumerable string properties and methods of an object.
// console.log(Object.values(user));  values => Returns an array of values of the enumerable properties of an object



