import { getHouses, updateNumbers, totalCharacters, sortByChildren } from './more-object-keys-entries.js';
test('it gets the names of the houses', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual(['Stark', 'Arryn', 'Lannister', 'Targaryen', 'Tyrell', 'Greyjoy','Snow']); //assert
});
 
test('it gets the updated numbers in array', () => {
  const characters = 
    {'Grace Hopper': '222-303-5938', 'Ada Lovelace': '222-349-9842', 'Alan Turing': '222-853-5933'}; //arrange
  const output = updateNumbers(characters); //act
  expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); //assert
});

test('return the total number of characters in the data array', () => {
    const characters = [
        {
          name: 'Eddard',
          spouse: 'Catelyn',
          children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
          house: 'Stark'
        },
        {
          name: 'Jon A.',
          spouse: 'Lysa',
          children: ['Robin'],
          house: 'Arryn'
        },
        {
          name: 'Cersei',
          spouse: 'Robert',
          children: ['Joffrey', 'Myrcella', 'Tommen'],
          house: 'Lannister'
        },
        {
          name: 'Daenarys',
          spouse: 'Khal Drogo',
          children: ['Drogon', 'Rhaegal', 'Viserion'],
          house: 'Targaryen'
        },
        {
          name: 'Mace',
          spouse: 'Alerie',
          children: ['Margaery', 'Loras'],
          house: 'Tyrell'
        },
        {
          name: 'Euron',
          spouse: null,
          children: [],
          house: 'Greyjoy'
        },
        {
          name: 'Jon S.',
          spouse: null,
          children: [],
          house: 'Snow'
        }
      ]; //arrange
  const output = totalCharacters(characters); //act
  expect(output).toEqual(26); //assert
});

// test('will check if the character has children then return a boolean value of either true or false', () => {
//   const characters = [
//       {
//         name: 'Euron',
//         spouse: null,
//         children: [],
//         house: 'Greyjoy'
//       }
//     ]; //arrange
// const output = totalCharacters(characters); //act
// expect(output).toEqual(false); //assert
// });


//#5

test('it sorts by children', () => {
    const characters = [
        {
          name: 'Eddard',
          spouse: 'Catelyn',
          children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
          house: 'Stark'
        },
        {
          name: 'Jon A.',
          spouse: 'Lysa',
          children: ['Robin'],
          house: 'Arryn'
        },
        {
          name: 'Cersei',
          spouse: 'Robert',
          children: ['Joffrey', 'Myrcella', 'Tommen'],
          house: 'Lannister'
        },
        {
          name: 'Daenarys',
          spouse: 'Khal Drogo',
          children: ['Drogon', 'Rhaegal', 'Viserion'],
          house: 'Targaryen'
        },
        {
          name: 'Mace',
          spouse: 'Alerie',
          children: ['Margaery', 'Loras'],
          house: 'Tyrell'
        },
        {
          name: 'Euron',
          spouse: null,
          children: [],
          house: 'Greyjoy'
        },
        {
          name: 'Jon S.',
          spouse: null,
          children: [],
          house: 'Snow'
        }
      ];  //arrange
    const output = sortByChildren(characters); //act
    expect(output).toEqual([ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'}, { name: 'Jon S.', spouse: null, children: [],house: 'Snow'}, {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'}, {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'}, { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'}, {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); //assert
  });