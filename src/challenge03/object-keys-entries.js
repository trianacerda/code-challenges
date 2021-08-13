export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map(objUp => objUp.toUpperCase());
//     return objUp.map(objUp => 
//         objUp.toUpperCase());
 }

export function sortedKeys(obj) {
    return Object.keys(obj).sort((a , b) => a.length - b.length);
//  return objSort.sort((a , b) => a.length - b.length);
}

export function getFilteredKey(obj) {
   return Object.keys(obj).filter((obj) => obj === 'age') ;
    // return objFilter.filter((obj) => obj === objFilter[2] || obj === 'age')
}

export function getArrayOfKeysAndValues(obj){
    return Object.entries(obj);
    // return newArray;
}

export function sortedArraysByValuesLength(obj) {
    return Object.entries(obj).sort((a, b) => b[1].length - a[1].length);
    // return newArray.sort((a, b) => b[1].length - a[1].length);
}

