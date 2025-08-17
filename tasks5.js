/*5. 
> Function yarating u array va son olsin, bizga sonning indexni qaytarsin agarda u bo'lsa yoki u yo'q bo'lsa -1 qaytarsin

```js
search([1, 5, 3], 5) ➞ 1
search([1, 2, 3], 4) ➞ -1
``` */

function search(arr, son) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === son) {
            return i; 
        }
    }
    return -1; 
}

console.log(search([1, 5, 3], 5)); 
console.log(search([1, 2, 3], 4)); 
