export function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}
export function stringItUp(arr) {
  return arr.map((num) => num.toString());
}

// STUCK ON CAPS FOR FIRST LETER*********

// export function capitalizeNames(string) => {
//   const wordsArray = string.split(" ");
//   const convertedWordsArray = wordsArray.map((word) => {
//     return capitalizeNames(word);
// });

//   return convertedWordsArray.join(" ");
// }

// from Simon
// const newArr = arr.map(
//     (string) => string.charAt(0).toUpperCase() + string.split()
//   );
//   return newArr.join(" ");
// }
