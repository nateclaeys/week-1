// chapter 3 exercise 1
function min(x, y){
    // in javascript its common to put the else on the same line as the 
    // bracket from the if instead of on a new line. try to get used to doing
    // it that way.
    // if (condition) {
    //     thing;    
    // } else if (condition) {
    //     other thing;     
    // } else {
    //     other thing;     
    // }

    // for single line expressions in if statements, you can put them on the
    // same line with no brackets, but yours was totally fine too.
    if (x > y) return y;
    else return x;
    // for practice, try doing this same function with a ternary statement
    // instead of an if else
    // condition ? true thing : false thing; 
}  

console.log(min(0, 10));
console.log(min(0,-10));

// chapter 3 exercise 2

function isEven(N){
    // try to use triple === whenever possible in this case I could have entered 'false'
    // and the first condition with double == would have been true ( false == 0 )
    // triple === is stricter. its nice to have both options available tho
    if (N === 0) {
        return true;
    } else if (N === 1) {
        return false;
    } else if (N < 0){
        N = N * -1;
        return isEven(N);
    } else { 
        return isEven(N - 2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// chapter 3 exercise 3

function countBs(x){
    let numBs = 0;
    // don't forget to declare with let
    let stringLength = x.length - 1;
    while (stringLength >= 0){
        // add spaces around operators in your code for best practice
        if (x[stringLength] === 'B'){
            numBs += 1;
        }
        stringLength -= 1;
    }
    return numBs;
}

function countChar(x, y){
    let numLetters = 0;
    // don't forget to declare with let
    let stringLength = x.length - 1;
    while (stringLength >= 0){
        if (x[stringLength] == y){
            numLetters += 1;
        }
        stringLength -= 1;
    }
    return numLetters;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));


