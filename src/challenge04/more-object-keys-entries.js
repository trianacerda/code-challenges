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
// #4 test- I struggled with the Object.enteries here because I was trying to do a if then with booleans. In the test I wanted to give an output of true || false but was sure it was completely correct. 
// -- my solution was to build a function that mapped through the 'characters' array and deliver a boolean of false if the the arr.children.name was an empty array. If there was anything in the object-- return true.

// export function hasChildrenEntries(arr, character) {
//     return Object.entries(arr => {
//         if (arr.characters.name === 'Eddard') {
//             return true;
//     }
//         if (arr.characters.name === 'Euron')
//         return false;
//     });

// } 


//#5
export function sortByChildren(arr){
    return arr.sort((a, b) => a.children.length - b.children.length);
} 