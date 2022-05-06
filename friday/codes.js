//1
//Use destructuring assignment with the rest parameter sub-array of the original array source with the first two elements omitted
console.log('Question 1');
function omitingTwoElements(arr) {
    let [,,...rest] = arr;
    console.log(rest);
    
    
}
omitingTwoElements([1, 2, 3, 4, 5]);





//2
//Keyboard Mistakes Find
// Examples
// keyboardMistakes("MUB45H1R") ➞ "MUBASHIR"
// keyboardMistakes("DUBL1N") ➞ "DUBLIN"
console.log(' \nQuestion 2');
/*first solution*/
function keyboardMistakes1(str) {

    let splittedStr= [...str];
    let res = '';
    splittedStr.map(item => {
        if (item === '4'){
            res += 'A';
        }else if (item === '5'){
            res += 'S';
        }else if (item === '0'){
            res += 'O';
        }else if (item === '1'){
            res += 'I';
        }else{
            res += item;
        }
    })
    console.log(res);
}
keyboardMistakes1("MUB45H1R")

/*second solution*/
function keyboardMistakes2(res) {

    res = res.replace("4", "A");
    res = res.replace("5", "S");
    res = res.replace("0", "O");
    res = res.replace("1", "I");
    console.log(res);
}
keyboardMistakes2("MUB45H1R")






//3
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.
// moveZeros([1, 0, 1, 2, 0, 1, 3]) ➞ [1, 1, 2, 1, 3, 0, 0]
// moveZeros([0, 1, null, 2, false, 1, 0]) ➞ [1, null, 2, false, 1, 0, 0]
console.log(' \nQuestion 3');
function moveZeros(arr) {
    let zeros = [];
    let res = [];
    arr.map(item => {

        if (item !== 0){
            res.push(item);
        }else if (item === 0) {
            zeros.push(item);
        }
    })
    res.push(...zeros);
    console.log(res);
}
moveZeros([1, 0, 1, 2, 0, 1, 3])
moveZeros([0, 1, null, 2, false, 1, 0])



//4
// In this challenge, you have to implement a function that returns the given distance kilometers converted into miles. You have to round the result up to the fifth decimal digit.
// Examples
// kmtomiles(2) ➞ 1.24274
// kmtomiles(6) ➞ 3.72823
// kmtomiles(8) ➞ 4.97097
console.log(' \nQuestion 4');
function kmtomiles(km) {
    let miles = km * 0.621371;
    console.log(miles.toFixed(5));
}
kmtomiles(2)
kmtomiles(6)
kmtomiles(8)




//5
// Create a function that returns the original value from a matrix with too many sub-arrays.
// Examples
// deNest([[[[[[[[[[[[3]]]]]]]]]]]]) ➞ 3
// deNest([[[[[[[true]]]]]]]) ➞ true
// deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]]) ➞ "edabit"
console.log(' \nQuestion 5');
function deNest(matrix) {
    matrix = matrix.flat(Infinity);
    console.log(matrix[0]);

}
deNest([[[[[[[[[[[[3]]]]]]]]]]]]);
deNest([[[[[[[true]]]]]]]);
deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])




//6
// Create a function based on the input and output. Look at the examples, there is a pattern.
// Examples
// secret("div*2") ➞ "
// "
// secret("p*1") ➞ ""
// secret("li*3") ➞ ""
console.log(' \nQuestion 6');
function secret(string) {
    string = string.split('*');
    let num = +string[1];
    let stringRes = '';
    for (let i = 0; i< num; i++){
        stringRes += '<'+string[0]+ '>'+ '</' + string[0]+ '>';
    }
    
    console.log(stringRes);
}
secret("div * 2");
secret("p*1");
secret("li*3");