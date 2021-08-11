import { fiveAndGreaterOnly } from './codeChallenge02';

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

// test('even only', () => {
//     const input = [3, 6, 8, 2]; // arrange
//     const output = fiveAndGreaterOnly(input); // act
//     expect(output).toEqual([6, 8]); // assert
//   });