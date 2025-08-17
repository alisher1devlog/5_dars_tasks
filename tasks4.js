/*4. 
> Function yarating u array qabul qilsin va arrayning ohirgi qiymatini qaytarsin!.

```js
getLastItem([1, 2, 3]) ➞ 3
``` */

function getLastItem(arr){
    let oxirgi = arr[0];
    for(let value of arr){
        oxirgi = value;
    }
    return oxirgi;
}

console.log(getLastItem([1, 2, 3]))