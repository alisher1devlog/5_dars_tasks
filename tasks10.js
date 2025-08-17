/*10. 
> Function yarating u **array** qabul qilsin va **array** ning elementlarni **type**ni  qaytarsin

```js
arrayValuesTypes([1, 2, "salom") ➞ ["number", "number", "string", "object"]
``` */

function arrayValuesTypes(array){
    let newArray = []
    for(let value of array){
        newArray.push(typeof value);
    }
    return newArray;
}

console.log(arrayValuesTypes([1, 2, "salom"]))