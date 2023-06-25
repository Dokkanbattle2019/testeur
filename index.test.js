const fonctions = require("./index");


/*
test("capitalize marche", () => {
    expect(fonctions.capitalize("bonjour")).toBe("Bonjour");
})

test("capitalize marche 2 ", () => {
    expect(fonctions.capitalize("Bonjour")).toBe("Bonjour");
})


test("reverseString marche", () => {
    expect(fonctions.reverseString("hello")).toBe("olleh");
})

test("Reversestring 2", () => {
    expect(fonctions.reverseString("nAoMg")).toBe("gMoAn");
})


test("addition", () => {
    expect(fonctions.calculator.add(99, 99)).toBe(198);
})

test("soustraction", () => {
    expect(fonctions.calculator.substract(100, 22)).toBe(78);
})

test("multiplication", () => {
    expect(fonctions.calculator.multiply(99, 99)).toBe(9801);
})

test("division", () => {
    expect(fonctions.calculator.divide(800, 80)).toBe(10);
})



test("test 1 caesar", () => {
    expect(fonctions.caesarCipher("aaaaaaaa", 1)).toBe("bbbbbbbb");
})

test("test 2 caesar", () => {
    expect(fonctions.caesarCipher("aAaaaaaa", 1)).toBe("bBbbbbbb");
})

test("test 3 caesar de a à z", () => {
    expect(fonctions.caesarCipher("zzzzZZZZ", 3)).toBe("ccccCCCC");
})

*/

test("analyse 1", () => {
    expect(fonctions.analyze([1, 2, 3, 4, 5, 6, 7, 8])).toStrictEqual({ "average": 4.5, "min": 1, "max": 8, "length": 8 });
})

test("analyze 2", () => {
    expect(fonctions.analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});

