/*7. 
> Function yarating u number qabul qilsin va object qaytarsin 
	Ilm uchun 50% qismini ajratsin
>   Harajatlar uchun 30% qismini ajrtsin
>   kelajak uchun 20% qismini ajratsin

```js
fiftyThirtyTwenty(10000) ➞ { "ilm": 5000, "harajat": 3000, "kelajak": 2000 }
``` */

function fiftyThirtyTwenty(summa){
    let onFoiz = summa/10;
    return taqsimlash = {
        "Ilm": onFoiz*5,
        "harajat": onFoiz*3,
        "kelajak":onFoiz*2
    } 
}

console.log(fiftyThirtyTwenty(12000));