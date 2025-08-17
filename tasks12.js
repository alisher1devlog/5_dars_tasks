/*12.
>Berilgan qator ichidagi barcha bo'shliqlarni olib tashlang.

```js
function removeSpaces(str) {
    // Code here
}

console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"
``` */

function removeSpaces(str) {
    let newStr = ""
    for (let value of str){
        if (value!==" "){
            newStr+=value;
        }
    }
    return newStr;
}

console.log(removeSpaces("Hello World! How are you?")); // "HelloWorld!Howareyou?"