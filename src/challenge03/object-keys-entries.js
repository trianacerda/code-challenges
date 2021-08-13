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

// export function getArrayOfKeysAndValues(obj){

// }

// export function sortedArraysByValuesLength(obj) {

// }


