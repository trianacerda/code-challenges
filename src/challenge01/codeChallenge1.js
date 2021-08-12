export function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
export function stringItUp(arr) {
  return arr.map((num) => num.toString());
}

export function capitalizeNames(str) {
  return str.map((str) => {
    const lowerCase = str.toLowerCase();
    const capNames = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return capNames;
  });
}

export function onlyNames(arr) {
  return arr.map((item) => {
    return item.name;
  });
}

export function makeStrings(arr) {
  return arr.map((arr) => {
    if (arr.age >= 18) {
      return arr.name + " can go to The Matrix";
    }
    return arr.name + " is under age!!";
  });
}
export function readyToPutInTheDOM(arr) {
  return arr.map((item) => {
    const answer = `<h1>${item.name}</h1><h2>${item.age}</h2>`;
    return answer;
  });
}
