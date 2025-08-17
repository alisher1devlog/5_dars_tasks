/*6. 
> Function yarating u array qabul qilsin va arraylarning ichidagi qiymatlarning yig'indisini qaytarsin

```js
sumArray([1, 2, 3, 4, 5]) ➞ 15
``` */

function sumArray(arr){
    let sum = 0;
    for(let value of arr){
        sum+=value;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]))