import { doubleNumbers, stringItUp } from "./codeChallenge1";

test("doubles numbers", () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

test("strings numbers", () => {
  const input = [2, 5, 100]; // arrange
  const output = stringItUp(input); // act
  expect(output).toEqual(["2", "5", "100"]); // assert
});

// test("capitalize first letter of names", () => {
//   const input = ["john", "JACOB", "jinGleHeimer", "schmidt"]; // arrange
//   const output = capitalizeNames(input); // act
//   expect(output).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]); // assert
// });
