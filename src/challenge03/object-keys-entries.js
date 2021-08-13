export function capitalizeObjectKeys(obj) {
    const objUp = Object.keys(obj);
    return objUp.map(objUp => 
        objUp.toUpperCase());
}

export function sortedKeys(obj) {
    const objSort = Object.keys(obj);
 return objSort.sort((a , b) => a.length - b.length);
}

export function getFilteredKey(obj) {
    const objFilter = Object.keys(obj);
    return objFilter.filter((obj) => obj === objFilter[2] || obj === 'age')
}

export function getArrayOfKeysAndValues(obj){
    const newArray = Object.entries(obj);
    return newArray;
}

// export function sortedArraysByValuesLength(obj) {
//     const value = obj.map((obj) => obj.get[0];
//     const objValuesSorted = value.sort(( b , a ) => b.length - a.length);
//     return Object.entries(objValuesSorted);
// }


