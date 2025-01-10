const StringCalculator = require('./stringCalculator');

describe('StringCalculator', () => {
    let calculate;

    beforeEach(() => {
        calculate = new StringCalculator();

    });

    test('Should return 0 for an empty string', () => {
        expect(calculate.add('')).toBe(0);
    });
    test('Should return the number itself for a single number', () => {
        expect(calculate.add('1')).toBe(1);
        expect(calculate.add('5')).toBe(5);
    });
    test('Should return the sum for 2 numbers', () => {
        expect(calculate.add('1,5')).toBe(6);
        expect(calculate.add('10,50')).toBe(60);
    });
    test('Should return the sum of numbers entered', () => {
        expect(calculate.add('1,3,5')).toBe(9);
        expect(calculate.add('10,30,50')).toBe(90);
    });
    test('Should handle newlines as delimiters', () => {
        expect(calculate.add('1\n3,5')).toBe(9);
        expect(calculate.add('1\n3\n5')).toBe(9);
    });
    test('Should handle custom delimiters', () => {
        expect(calculate.add('//;\n1;3;5')).toBe(9);
        expect(calculate.add('//|\n1|3|5')).toBe(9);
    });
    test('Should throw an error for negative numbers', () => {
        expect(() => calculate.add('1,-3,5')).toThrow('Negative numbers are not allowed: -3');
        expect(() => calculate.add('-1,-5')).toThrow('Negative numbers are not allowed: -1, -5');
    });

})