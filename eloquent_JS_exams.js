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
function arrayToList(x){
    let natesList = {value: x.pop(), rest: poop()};
   function poop(){
    if (x.length == 0) {return null}
    else return {value : x.pop(), rest: poop()};      
   }
     return natesList;
}

function listToArray(natesList){
    let listArray = [];
    let y = natesList;
    while (y.rest != null){
        listArray.push(y.value);
        y = y.rest;
    }
    listArray.push(y.value);
    return listArray;
}

function prepend(x, object){
    let newList={value: x, rest: object};
    return newList;
}

function nth(someList, index){
    let y = someList;
    for (let i = 0; i < index; i++){
        y = y.rest
    }
    return y.value;
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

// chapter 4 exercise 4 too hard

function deepEqualy(x, y){
    let boolNate = false;
    if (x === y) boolNate = true;
    else if (typeof(x) == typeof(y)){
        for( let i = 0; i < x.keys.length; i++){
            if (x.keys[i] !== y.keys[i]) boolNate = false;
        }
        
    }
    return boolNate;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: 1, object: 2}));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

// chapter 5 exercise 1


const reducer = (accumulator, currentValue) => accumulator.concat(currentValue);
let arrays = [[1, 2, 3], [4, 5], [6]];
console.log(arrays.reduce(reducer));

// Chapter 5 exercise 2

function loop(iterations, testF, updateF, bodyF){
    let numIter = iterations;
     while (testF(numIter)) {
        bodyF(numIter);
        numIter = updateF(numIter);
     
    }


}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

//chapter 5 exercise 3


function every(array, test) {
    let nate = true;
    array.forEach(element => { 
        if (test(element) !== true){
            nate = false; 
        }
    });
    return nate;
  }
  
  // cant figure out the some part, done trying. seems gay

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true

  // chapter 5 exercise 4 is stupid.
