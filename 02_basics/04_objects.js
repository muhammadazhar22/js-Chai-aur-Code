// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abs"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Muhammad",
            lastname:" Azhar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname) 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)

const user = [
    {
        is: 1,
        email: "a@gmail.com"
    },
    {
        is: 1,
        email: "a@gmail.com"
    },
    {
        is: 1,
        email: "a@gmail.com"
    },
]

user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
//console.log(Object.keys(regularUser.fullname));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    name: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
// const {courseInstructor} =  course
const {courseInstructor : instructor} =  course
// console.log(courseInstructor)
console.log(instructor);


// react
// const navbar = ({company}) => {

// }

// navbar(company = "hitesh")


// {
//     "name": "js in hindi",
//     "courseInstructor": "hitesh",
//     "price": "free"

// }

[
    {},
    {},
    {}
]