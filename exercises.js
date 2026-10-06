const prompt = require('prompt-sync')();




//first 


function maxNum(...N){
    let result = -Infinity;
    for (let number of N) {

        if (number > result) result = number;
        }

    return result;
    }
         console.log(maxNum(1, 2, 3, 4, 5));




//reversing number

    n = Number(prompt("Enter a number to be reversed: "));
    let reversed = n.toString().split("").reverse().join("");
         console.log(reversed)




//string uppercase


function toUpperCase(str){
    let result = "";
    for (let i = 0; i < str.length; i++) {
     const charCode = str.charCodeAt(i);

        if (charCode >= 97 && charCode <= 122){
       result += String.fromCharCode(charCode - 32);
    }

        else{
       result += str[i];
    }
    }
    return result;
}
         console.log(toUpperCase("i am kara"));




//invert case of string


function invertCase(str){
    let result = "";
    for (let i =0; i<str.length; i++){
        const charcode = str.charCodeAt(i);

        if (charcode >= 65 && charcode <= 90) {
            result += String.fromCharCode(charcode + 32);

        } else if (charcode >= 97 && charcode <= 122) {
            result += String.fromCharCode(charcode - 32);
    } 

        else {
            result += str[i];
    }
    }
    return result;
    }
         console.log(invertCase("MeOOw BoWoW"));

