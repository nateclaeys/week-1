// chapter 3 exercise 1
function min(x, y){
    if (x>y){
        return y;
    }
    else return x;
}  

console.log(min(0, 10));
console.log(min(0,-10));

// chapter 3 exercise 2

function isEven(N){
    if (N == 0){
        return true;
    }
    else if (N == 1){
        return false;
    }
    else if (N<0){
        N = N * -1;
        return isEven(N);
    }
    else { return isEven(N-2);
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// chapter 3 exercise 3

function countBs(x){
    let numBs = 0;
    stringLength = x.length-1;
    while (stringLength>=0){
        if (x[stringLength]== 'B'){
            numBs += 1;
        }
        stringLength -= 1;
    }
    return numBs;
}

function countChar(x, y){
    let numLetters = 0;
    stringLength = x.length-1;
    while (stringLength>=0){
        if (x[stringLength]== y){
            numLetters += 1;
        }
        stringLength -= 1;
    }
    return numLetters;
}


