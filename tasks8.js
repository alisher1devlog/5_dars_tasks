/*8. 
> Function yarating u (num1, num2, array) qiymatlarini qabul qilsin va num1 bilan num2 oralig'idagi arrayning elementlarni qaytarsin.

```js
arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
``` */

function arrBetween(num1, num2, array){
    let newArray =[];
    for(let value of array){
        if(num2>=num1){     
               if(value>=num1 && num2>=value){
                 newArray.push(value);
            } 
        }else{
                if(value>=num2 && num1>=value){
                     newArray.push(value);
                }
        }
    }
    return newArray;
}

console.log(arrBetween(8, 3, [1, 5, 95, 0, 4, 7]))

