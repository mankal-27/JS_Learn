//Singleton

//Object Literals
//Object.create

const mySym = Symbol("Key1")
const JsUser = {
    name: "Manjunath",
    "full name" : "Manjunath Kalkutagi",
    age : 30,
    location: "Bangalore",
    email: "Mank@gma.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"],
    [mySym] : "mykey1"
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
 console.log(JsUser[mySym])
 //Object.freeze(JsUser)

 JsUser.greeting = function(){
    console.log("Hello Js User")
 }

 //console.log(JsUser.greeting());
 JsUser.greeting()