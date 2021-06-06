data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog'
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog'
    },
    {
      name: 'Red',
      age: 1,
      type: 'cat'
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog'
    },
  ];

// FILTER

let dogs = data.filter((animal) => {
    return animal.type === 'dog';
});

console.log(dogs)

// MAP

let realAgeDogs = dogs.map((dogAge) => {
    return dogAge.age*7
})

console.log(realAgeDogs)

// REDUCE

var totalAgeDogs = realAgeDogs.reduce((sum, animal) => {
    console.log(sum , animal)
    return sum + animal;
}, 0);

console.log(totalAgeDogs);