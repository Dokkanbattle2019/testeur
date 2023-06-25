

function capitalize(string) {
    let rep = "";
    rep += string[0].toUpperCase();
    for (let i = 0; i < string.length - 1; i++) {
        rep += string[i + 1];
    }
    return rep;

};

function reverseString(string) {
    let rep = "";
    for (let i = 0; i < string.length; i++) {
        rep += string[string.length - i - 1];
        console.log(rep);
    }
    return rep;
};

let calculator = {
    add: (a, b) => {
        return a + b
    },
    substract: (a, b) => {
        return a - b
    },
    multiply: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        return a / b
    }

};

function caesarCipher(string, number) {
    rep = "";
    for (let i = 0; i < string.length; i++) {
        let code = string[i].charCodeAt(0);
        // de z à a,b,c,d etc.. PRIME FORTNITE 2019 SUUUU
        if (65 <= code && code <= 90) {
            if (code + number > 90) {
                let chr = String.fromCharCode(code + number - 26);
                rep += chr;
            } else {
                let chr = String.fromCharCode(code + number);
                rep += chr;
            }
        } else if (97 <= code && code <= 122) {
            if (code + number > 122) {
                let chr = String.fromCharCode(code + number - 26);
                rep += chr;
            } else {
                let chr = String.fromCharCode(code + number);
                rep += chr;
            }
        } else {
            let chr = String.fromCharCode(code + number);
            rep += chr;
        }
    }
    return rep;
};

function analyze(array) {
    let length = array.length;
    let minimum = array[0];
    let maximum = minimum;
    let sum = 0
    for (let i = 0; i < length; i++) {
        if (maximum < array[i]) {
            maximum = array[i];
        }
        if (minimum > array[i]) {
            minimum = array[i];
        }
        sum += array[i];

    }
    let average = sum / length;
    return { "average": average, "min": minimum, "max": maximum, "length": length };
};





module.exports.analyze = analyze;
module.exports.calculator = calculator;
module.exports.capitalize = capitalize;
module.exports.reverseString = reverseString;
module.exports.caesarCipher = caesarCipher;