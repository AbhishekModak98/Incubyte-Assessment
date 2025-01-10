class StringCalculator {
    add (numbers) {
        if (!numbers) return 0;

        const delimiterRegex = /^\/\/(.+)\n/;
        let delimiters = [',', '\n'];
        let customDelimiterMatch = numbers.match(delimiterRegex);
        
        if (customDelimiterMatch) {
            delimiters.push(customDelimiterMatch[1]);
            numbers = numbers.replace(delimiterRegex, '');
        }

        const regex = new RegExp(`[${delimiters.join('')}]`);
        const numberArray = numbers.split(regex).map(Number);

        const negatives = numberArray.filter((n) => n < 0);
        if (negatives.length > 0) {
            throw new Error(`Negative numbers are not allowed: ${negatives.join(', ')}`);
        }

        return numberArray.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;