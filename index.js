const StringCalculator = require('./stringCalculator');

const calculate = new StringCalculator();

const runCalculator = () => {
    const input = ['', '1', '1,2', '1,2,3,4', '1\n2,3', '//;\n1;2;3', '1,-2,3'];

    input.forEach((value) => {
        try {
            const result = calculate.add(value);
            console.log(`For input "${value}", we got result: ${result}`);
            console.log();
        } catch (error) {
            console.log(`For input "${value}", we got error ${error}`);
            console.log();
        }
    })
}

runCalculator();