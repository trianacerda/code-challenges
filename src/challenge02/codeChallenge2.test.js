import { fiveAndGreaterOnly, evenOnly, fiveCharactersOrFewerOnly, peopleWhoBelongToTheIlluminati } from './codeChallenge02';

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