//singleton object
// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "23nnnj3",
tinderUser.name = "Kotri",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Manjunath",
            lastName: "Kalkutagi"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "one",
    2: "two",
}

const obj2 = {
    3: "three",
    4: "four"
}
const obj4 = {
    5: "five",
    6: "six"
}
const obj3 = Object.assign({},obj1, obj2, obj4)
console.log(obj3);

const obj5 = {...obj1, ...obj2, ...obj4}

console.log(obj5);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedI'));

const course = {
    courseName : "JS",
    price: 999,
    courseInstructor: "HC"
}

const {courseInstructor: instructor} = course

console.log(instructor);
