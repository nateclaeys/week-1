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
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));

//chapter 4 exercise 1

function range(start, end, step){
    let rnge = [];
    if (step<0 && start>end){
        for (start; end <= start; start += step)
        rnge.push(start);
    }
    else if (step>0 && start<end){
        for (start; start <= end; start += step){
        rnge.push(start);
        }
    }
    else for (start; start <= end; start++){rnge.push(start);}
    return rnge;
  }
function sum(rng){
    let sum = 0;
    for (let i = 0; i < rng.length; i++){
        sum += rng[i];
    }
    return sum;
}

console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));

//chapter 4 exercise 2
function reverseArray(ray) {
    let reray = [];
    for (let i = ray.length - 1; i >= 0; i--) {
        reray.push(ray[i]);
    }
    return reray;
}

function reverseArrayInPlace(rayGun) {
    const j = rayGun.length - 1;
    const k = rayGun.length;
    for (let i = j; i >= 0; i--) {
        rayGun.push(rayGun[i]);
    }
    for (let i = 0; i < k; i++) {
        rayGun.shift();
    }

}
console.log(reverseArray(["A", "B", "C"]));
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

//chapter 4 exercise 3

//I have not idea.. how the... brain is in pain//