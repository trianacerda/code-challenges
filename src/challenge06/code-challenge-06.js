export function returnTen(str) {
    if (str.length <= 10) {
        return str.split('') 
    }
    let x = str.length
    const string = str.slice( 1, x );
    return string.split('')
};


// export function findMax(matrix) {
//     return Math.max.apply(...matrix);
// }


//I spent an hour just on the first problem. I had some help with it and it took up the entire time. I tried the second one and looked up Math.max() which was returning NaN. I saw that if you added .apply and the spread operator it had potential to return something. It returned the number 6 when I did this. When I got rid of the spread operator it returned -infinity. 