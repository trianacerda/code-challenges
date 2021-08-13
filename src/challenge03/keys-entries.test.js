import { capitalizeObjectKeys, getFilteredKey, sortedKeys, getArrayOfKeysAndValues } from './object-keys-entries.js';

test('it capitalizes the keys', () => {
  const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
  const output = capitalizeObjectKeys(dataObject); //act
  expect(output).toEqual(['NAME', 'AGE']); //assert
});


test('sort keys by length, smalles to largest', () => {
    const dataObject = { name: 'Spot', age: 3, isDog: true, friends: ['Rover', 'Steve', 'Fluffy'] }; //arrange
    const output = sortedKeys(dataObject); //act
    expect(output).toEqual(['age', 'name', 'isDog', 'friends']); //assert
  });

  test('filter keys only returns object key:age', () => {
    const dataObject = { name: 'Angelina Jolie', isSpot: false, age: 80, }; //arrange
    const output = getFilteredKey(dataObject); //act
    expect(output).toEqual(['age']); //assert
  });


  test('it returns a new array of arrays of key value pairs', () => {
    const dataObject = { name: 'Angelina Jolie', age: 80 }; //arrange
    const output = getArrayOfKeysAndValues(dataObject); //act
    expect(output).toEqual([['name', 'Angelina Jolie'], ['age', 80]]); //assert
  });

//   test('return an array of arrays of key value pairs sorted longest to shortest by values length', () => {
//     const dataObject = { name: 'Bob', friend: 'Tom Hanks', location: 'Los Angeles' }; //arrange
//     const output = sortedArraysByValuesLength(dataObject); //act
//     expect(output).toEqual([['location', 'Los Angeles'], ['friend', 'Tom Hanks'], ['name', 'Bob']]); //assert
//   });