// export function getHouses(obj) {
//     return Object.keys(obj).map(obj => obj.house);
// }

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ': ' + obj[1]);
}

export function totalCharacters(arr) {
}