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
  },
  {
    name: "Sina",
    age: 31,
    hasPets: false,
    smokes: false
  },
  {
    name: "Steven",
    age: 26,
    hasPets: false,
    smoke: false
  },
  {
    name: "Karla",
    age: 27,
    hasPets: true,
    smokes: false
  }
]

//[a, b, c, d].map(a) => [a, a, a, a]
//returns array with same length
//updated information for all or some items
const names = people.map(person => person.name)
// console.log("name:", names)

const ages = people.map(person => {
  console.log("person", person)
 return person.age
})
console.log("ages:", ages)

//[a, a, b, b, c, e].filter(b) => [b, b]
//returns a new array
//only items that match the condition
const pets = people.filter(item => item.hasPets) //item.hasPets === true
console.log("pets:", pets, pets.length)

const smokers = people.filter(item => item.smokes)
console.log("smokers:", smokers)

const under30 = people.filter(item => item.age < 30)
console.log("under30:", under30)

//[a, b, c, c, d, e].find(c) => { c }
//returns one object with the matching item
//it only return 1 item
//it stops once the condition is matched
const karla = people.find(p => p.name === "Karla")
console.log("karla:", karla)
