

function sayMyName() {
    console.log("A")
    console.log("Z")
    console.log("H")
    console.log("A")
    console.log("R")
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
//    let result = number1 + number2
//    return result
    return number1 + number2
}

const result = addTwoNumbers(2,7)
// console.log("Result: ", result)
// console.log(addTwoNumbers(5,4))

// function loginUserMessage(username){
//     if(!username){
//         console.log("please enter a username")
//         return
//     }
//     return `${username} just logged in`
// }

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(100,200,300,400))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)

    
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray

}

// console.log(returnSecondValue(myNewArray));
console.log([300,900,500,600])
