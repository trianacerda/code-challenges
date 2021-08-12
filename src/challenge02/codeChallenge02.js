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