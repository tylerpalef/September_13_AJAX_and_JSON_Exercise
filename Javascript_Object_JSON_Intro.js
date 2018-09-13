// // Creates an object using hashes.
// var myCat = {
//   'name': 'Meowsalot',
//   'species': 'cat',
//   'favFood': 'tuna'
// }
//
// //Print out the name of the cat. Just say the object, and the key to see the value.
// console.log(myCat.name)
//
// // Prints out the whole hash
// console.log(myCat);

// Creating a new array
var myFavColors = ['blue', 'red', 'green'];

// Use the square brackets when working with an array. Does not work with hashes, you will get undefined.
console.log(myFavColors[0])

// Creating objects in an array. This replaces the need to define each pet as its own variable.
// JSON, Javas Script Object Notation

var thePets = [
  {
    'name': 'Meowsalot',
    'species': 'cat',
    'favFood': 'tuna',
  },
  {
    'name': 'Bary',
    'species': 'dog',
    'favFood': 'carrots',
  }
]

// A JSON query, searching through thePets array, to get the value from the object.
console.log(thePets[1].favFood);
console.log(thePets[0].name);
