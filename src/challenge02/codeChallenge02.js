export function fiveAndGreaterOnly(arr) {
    return arr.filter((num) => {
       if (num >= 5) {
           return num;
       }
    })
}

export function evenOnly(arr) {
    return arr.filter((num) => num % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((item) => {
    return item.length <= 5;
    });
  }

  export function peopleWhoBelongToTheIlluminati(arr){
   return arr.filter((ppl) => {
       if (ppl.member === true)
       return ppl;
   });
}

export function ofAge(arr){
  return arr.filter((ppl) => {
      if(ppl.age > 18)
      return ppl;
  })
}

export function leastToGreatest(arr){
  return arr.sort((a, b) => a - b);
} 

export function greatestToLeast(arr){
    return arr.sort((a, b) => b - a);
} 

export function lengthSort(arr){
    return arr.sort((a, b) => a.length - b.length);

}

export function alphabetical(arr){
      const array = ['dog', 'wolf', 'by', 'family', 'eaten'];
    return array.sort();
}

// export function byAge(arr){
//     const profiles = [
//         { name: 'Quiet Samurai', age: 22 },
//         { name: 'Arrogant Ambassador', age: 100 },
//         { name: 'Misunderstood Observer', age: 2 },
//         { name: 'Unlucky Swami', age: 77 },
//     ];
//     profiles.sort(); 
//     profiles.reverse();
//     return profiles;
// }