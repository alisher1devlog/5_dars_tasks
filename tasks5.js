/*5. 
> Function yarating u array va son olsin, bizga sonning indexni qaytarsin agarda u bo'lsa yoki u yo'q bo'lsa -1 qaytarsin

```js
search([1, 5, 3], 5) ➞ 1
search([1, 2, 3], 4) ➞ -1
``` */

function search(arr,son){
    for(let index in arr){
        if(son===arr[index])
            console.log(`Indcex: ${index}, qiymat: ${arr[index]}`);
    }
    console.log(`Indcex: ${-1}, qiymat: ${son}`);

}


// search([1, 2, 3], 4)
search([1, 5, 3], 5)
