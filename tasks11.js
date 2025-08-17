/*11.
> Berilgan massivdagi juft va toq indekslardagi elementlarning yig'indisini alohida-alohida hisoblang.

```js
💡 function evenOddIndexSums(arr) {
// Code here
}

console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); // {evenIndexSum: 9, oddIndexSum: 12}
``` */

function evenOddIndexSums(arr) {
    let juftIndexSum = 0;
    let toqIndexSum = 0;
    for(let index in arr){
        if(index%2){
            toqIndexSum+=arr[index];
        }else{
            juftIndexSum+=arr[index];
        }
    }
    console.log(`evenIndexSum ${juftIndexSum}, oddIndexSum: ${toqIndexSum}`);
}

console.log(evenOddIndexSums([1, 2, 3, 4, 5, 6])); // {evenIndexSum: 9, oddIndexSum: 12}