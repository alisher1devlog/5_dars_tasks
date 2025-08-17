/*9. 
> Function yarating u **array** va **num** olsin ==(array, num)== va arraning ichida num bo'lsa **true** bo'lmasa **false** qiymat qaytarsin
```js
check([1, 2, 3, 4, 5], 3) ➞ true

check([1, 1, 2, 1, 1], 3) ➞ false
``` */

function check(array, num){
    for(let value of array){
        if(num === value){
            return true;
        }
    }
    return false;
}

console.log(check([1, 2, 3, 4, 5], 3));