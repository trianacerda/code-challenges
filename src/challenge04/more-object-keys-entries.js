export function getHouses(obj) {
    return Object.values(obj).map(obj => obj.house);
}

export function updateNumbers(obj) {
    return Object.entries(obj).map(obj => obj[0] + ': ' + obj[1]);
}

export function totalCharacters(arr) {
   let total = 0;
   Object.values(arr).map(arr => {
       total += arr.children.length;
       if (arr.spouse) total++;
       total ++;
   });
   return total;
}

// export function hasChildrenEntries(arr, character) {
//     return Object.entries(arr => {
//         if (arr.children === []) {
//         return false;
//     }
//         return true;
//     });

// } 


//#5
export function sortByChildren(arr){
    return arr.sort((a, b) => a.children.length - b.children.length);
} 