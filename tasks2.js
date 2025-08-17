/*2. 
> Function yarating array turidagi paramert olsin va faqat arrayning juft qiymatlarni yig'ib qaytarsin.

```js
getOddValue([1, 2, 3,6]) ➞ [2,6]
``` */

function getOddValue(arr){
    let newArr = [];
    for(let value of arr){
        if(value%2===0){
            newArr.push(value);
        }
    }
    return newArr;
}

console.log(getOddValue([1, 2, 3,6]));