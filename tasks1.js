/*1. 
> Funksiya yarating u array olsin va arrayling birinchi elementini( 0 indexda turganini ) qaytarsin
### Examples

```js
getFirstValue([1, 2, 3]) ➞ 1

getFirstValue([80, 5, 100]) ➞ 80

getFirstValue([-500, 0, 50]) ➞ -500
``` */

function getFirstValue(arr){
    return arr[0];
}

console.log(getFirstValue([]));
