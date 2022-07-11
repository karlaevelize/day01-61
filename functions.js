//What is a function?
//1. Block of code that can be executed in defined times
//2. Performs a specific task
//3. Reusable block of code

//Declare
function sayHello(){
  console.log("Hello")
}

const sayHi = () => { //arrow function
  console.log("Hi")
}

//Call a function
// sayHello()
// sayHi()

//Passing parameters to a function
const sayHiToSomeone = (name, age) => { //name is a parameter
  console.log(`Hi, ${name}, you are ${age} years old`)
}

// sayHiToSomeone("Karla", 27) //"Karla" is an argument

const multiply = (num1, num2) => {
  const result = num1 * num2
  return result //function stops here
  console.log(result) 
}

const callingMultiply = multiply(2, 3)
console.log("call multiply", callingMultiply)

const openOrClosed = (hour) => {
  if ( hour > 8 && hour < 17){
   console.log("open")
  } else {
    console.log("closed")
  }
}


// openOrClosed(10) //open
// openOrClosed(20) //closed

//Difference console.log and return
//Console.log only prints soomething in the console
//return gives you a value that can be accessed
