const inputFact = document.getElementById('fnum');
const inputFib = document.getElementById('fbnum');
const inputPal = document.getElementById('pstr');

function calFactorial() {


    let n = inputFact.value;

    let fact = 1;
    while (n > 0) {
        fact = fact * n;
        n--;
    }
    if (fact === 1) {
        document.getElementById('factout').innerHTML = "";
    } else {
        document.getElementById('factout').innerHTML = fact;
    }
}
calFactorial();

function calFibonacci() {

    let n = inputFib.value;
    let a = 1;
    let b = 1;
    let fibsvalue = a + " " + b + " ";
    console.log(a);
    console.log(b);
    while (n > 0) {

        c = a + b;
        a = b;
        b = c;

        fibsvalue += c + " ";
        n--;

    }

    if (a === 1) {
        document.getElementById('fibout').innerHTML = "";
    } else {
        document.getElementById('fibout').innerHTML = fibsvalue;
    }
}
calFibonacci()

function checkPalindrome() {
    let str = inputPal.value;

    let newStr = "";

    let length = str.length;

    for (let i = length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    if (newStr === "") {
        document.getElementById('palout').innerHTML = "";
    } else if (str === newStr) {
        document.getElementById('palout').innerHTML = "True";
    } else {
        document.getElementById('palout').innerHTML = 'False';

    }
}
checkPalindrome();