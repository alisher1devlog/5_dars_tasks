/*3. 
> `incrementItems` degan Function yarationg u array ([]) turidagi qiymat olsin va har bir elementga 1 qiymat qo'shib qaytarsin

```js
incrementItems([0, 1, 2, 3]) ➞ [1, 2, 3, 4]

incrementItems([2, 4, 6, 8]) ➞ [3, 5, 7, 9]
```
*/

function incrementItems(arr){
    let newArr = [];
    for(let value of arr){
        newArr.push(value+1);
    }
    return newArr;
}

console.log(incrementItems([2, 4, 6, 8]));