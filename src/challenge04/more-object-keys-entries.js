export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house);
}

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ': ' + obj[1]);
}

// export function totalCharacters(arr) {
// }



//#5
export function sortByChildren(arr){
    return arr.sort((a, b) => a.children.length - b.children.length);
} 