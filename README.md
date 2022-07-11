## Terminal commands

- `ls:` list everything in that folder
- `cd:` navigate your folders
- `mkdir:` creates a new directory/folder
- `touch:` creates a file
- `clear:` clear the terminal 
- `pwd:` print working directory
- `cat:` file preview
- `rm:` delete file
- `rm -rf:` deletes directories and it doesn't ask questions **carefull!**

- `code:` opens VSCode
- `node:` run JS files
- `git commands:` version control

## JavaScript DataTypes

- String:
- Number
- Booleans

```js
//number
const age = 27

//srtings
const name = "Karla" + age
const name = 'Karla'
const name = `Karla is ${age} years old`

//boolean
const open = false
const cold = true

if (!data) return "Loading"

```

- Objects, Arrays

```js

// const name = "Karla"
// const age = 27
// const hasPets = true
// const smoker = false

const person = {
  name: "Karla",
  age: 27,
  hasPets: true,
  smokes: false
}

console.log(person.hasPets)

const person1 = {
  name: "Steven",
  age: 26,
  hasPets: false,
  smoke: false
}

const person2 = {
  name: "Sina",
  age: 31,
  hasPets: false,
  smokes: false
}

const person3 = {
  name: "Mahtab",
  age: 27,
  hasPets: false,
  smokes: false
}

const person4 = {
  name: "Esteban",
  age: 37,
  hasPets: true,
  smokes: false
}

const people = [
  {
    name: "Esteban",
    age: 37,
    hasPets: true,
    smokes: false
  }, 
  {
    name: "Mahtab",
    age: 27,
    hasPets: false,
    smokes: false
  }
]

console.log(people)
console.log(person, person1, person2, person3, person4)

```


- Null
- Undefined

```js
const [data, setData] = useState(null) -> []

const me = null
console.log(test)
```
- Symbol

## If statements

```js
const age = 20

//can enter the bar if age allows
if (age > 17) {
  console.log("allowed")
} else {
  console.log("Not allowed")
}

`ternary` age > 17 ? console.log("allowed") : console.log("Not allowed")

//can enter the bar if age is ok and also if the bar is open
const age = 20
const open = true

if (age > 17 && open){
  console.log("Welcome")
} else {
  console.log("You can not enter")
}

`ternary` age > 17 && open ? console.log("allowed") : console.log("Not allowed")

//something with the weather
const raining = true
const snowing = false

if (raining || snowing) {
  console.log("Hey, don't forget your umbrella!")
} else {
  console.log("No umbrella for today")
}

```
## Comparing data

- `=:` assigning a value 
- `==:` it only compares the value, no the data type

```js 
const age = 27
const age1 = "27"

age + age1 = "2727"

age == age1 //resolve to true 

```
- `===:` it compares value AND datatype

```js 
const age = 27
const age1 = "27"

age == age1 //resolve to false


## Functions

