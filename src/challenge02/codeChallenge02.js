export function fiveAndGreaterOnly(arr) {
    return arr.filter((num) => num >= 5);
    // {
    //    if (num >= 5) {
    //        return num;
    //    }
    // })
}

export function evenOnly(arr) {
    return arr.filter((num) => num % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter((item) => item.length <= 5);
  // {
  //   return item.length <= 5;
  //   });
  }

  export function peopleWhoBelongToTheIlluminati(arr){
   return arr.filter((ppl) => ppl.member === true);
  //  {
  //      if (ppl.member === true)
  //      return ppl;
  //  });
}

export function ofAge(arr){
  return arr.filter((ppl) => ppl.age > 18);
  // {
  //     if(ppl.age > 18)
  //     return ppl;
  // })
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
    return arr.sort();
}

export function byAge(arr){
    return arr.sort((a, b) => a.age - b.age);
}