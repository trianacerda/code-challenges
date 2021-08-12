import { fiveAndGreaterOnly, evenOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati, ofAge, leastToGreatest, greatestToLeast, lengthSort } from './codeChallenge02';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('even only', () => {
    const input = [3, 6, 8, 2]; // arrange
    const output = evenOnly(input); // act
    expect(output).toEqual([6, 8, 2]); // assert
  });

  test('five chars or fewer only', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping']; // arrange
    const output = fiveCharactersOrFewerOnly(input); // act
    expect(output).toEqual(['dog', 'wolf', 'by', 'eaten']); // assert
  });

  test('ppl belong in illuminati', () => {
    const input = [
      { name: 'Angelina Jolie', member: true },
      { name: 'Eric Jones', member: false },
      { name: 'Paris Hilton', member: true },
      { name: 'Kayne West', member: false },
      { name: 'Bob Ziroll', member: true }
  ]; // arrange
    const output = peopleWhoBelongToTheIlluminati(input); // act
    expect(output).toEqual([ 
      { name: 'Angelina Jolie', member: true }, 
      { name: 'Paris Hilton', member: true }, 
      { name: 'Bob Ziroll', member: true } 
  ]); // assert
  });

  test('of age', () => {
    const input = [
      { name: 'Angelina Jolie', age: 80 },
      { name: 'Eric Jones', age: 2 },
      { name: 'Paris Hilton', age: 5 },
      { name: 'Kayne West', age: 16 },
      { name: 'Bob Ziroll', age: 100 }
  ]; // arrange
    const output = ofAge(input); // act
    expect(output).toEqual([ 
      { name: 'Angelina Jolie', age: 80 },
      { name: 'Bob Ziroll', age: 100 } 
  ]); // assert
  });

  test('sort least to greatest', () => {
    const input = [1, 3, 5, 2, 90, 20]; // arrange
    const output = leastToGreatest(input); // act
    expect(output).toEqual([1, 2, 3, 5, 20, 90]); // assert
  });

  test('sort greatest to least', () => {
    const input = [1, 3, 5, 2, 90, 20]; // arrange
    const output = greatestToLeast(input); // act
    expect(output).toEqual([90, 20, 5, 3, 2, 1]); // assert
  });

  test('sort length', () => {
    const input = ['dog', 'wolf', 'by', 'family', 'eaten']; // arrange
    const output = lengthSort(input); // act
    expect(output).toEqual(['by', 'dog', 'wolf', 'eaten', 'family']); // assert
  });