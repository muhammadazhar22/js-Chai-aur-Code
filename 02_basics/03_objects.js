// singleton
// Object.create()

// object literals
const mySym = Symbol("key1")

const jsUser = {
    name: "azhar",
    "full name": "Muhammad Azhar",
    [mySym]: "mykey1",
    age: 18,
    location: "lahore",
    email: "azhar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "azhar@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "azhar@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user")
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
