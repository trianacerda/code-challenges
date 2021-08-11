import {
  onlyNames,
  doubleNumbers,
  stringItUp,
  capitalizeNames,
  makeStrings,
  readyToPutInTheDOM,
} from "./codeChallenge1";

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

test("capitalize first letter of names", () => {
  const input = ["john", "JACOB", "jinGleHeimer", "schmidt"]; // arrange
  const output = capitalizeNames(input); // act
  expect(output).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]); // assert
});

test("pass names only", () => {
  const input = [
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ]; // arrange
  const output = onlyNames(input); // act
  expect(output).toEqual([
    "Angelina Jolie",
    "Eric Jones",
    "Paris Hilton",
    "Kayne West",
    "Bob Ziroll",
  ]); // assert
});

test("make strings", () => {
  const input = [
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ]; // arrange
  const output = makeStrings(input); // act
  expect(output).toEqual([
    "Angelina Jolie can go to The Matrix",
    "Eric Jones is under age!!",
    "Paris Hilton is under age!!",
    "Kayne West is under age!!",
    "Bob Ziroll can go to The Matrix",
  ]); // assert
});

test("readyToPutInTheDOM", () => {
  const input = [
    {
      name: "Angelina Jolie",
      age: 80,
    },
    {
      name: "Eric Jones",
      age: 2,
    },
    {
      name: "Paris Hilton",
      age: 5,
    },
    {
      name: "Kayne West",
      age: 16,
    },
    {
      name: "Bob Ziroll",
      age: 100,
    },
  ]; // arrange
  const output = readyToPutInTheDOM(input); // act
  expect(output).toEqual([
    "<h1>Angelina Jolie</h1><h2>80</h2>",
    "<h1>Eric Jones</h1><h2>2</h2>",
    "<h1>Paris Hilton</h1><h2>5</h2>",
    "<h1>Kayne West</h1><h2>16</h2>",
    "<h1>Bob Ziroll</h1><h2>100</h2>",
  ]); // assert
});
