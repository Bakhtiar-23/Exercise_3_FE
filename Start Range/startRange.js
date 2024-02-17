function getRandomIntegerFromRange(startRange, endRange) {
    if (startRange > endRange) {
        throw new Error('Start range must be less than or equal to end range.');
    }

    return Math.floor(Math.random() * (endRange - startRange + 1)) + startRange;
}

// Example usage
const startRange = 1;
const endRange = 10;

try {
    const randomInteger = getRandomIntegerFromRange(startRange, endRange);
    console.log(randomInteger); // Output: Random integer between 1 and 10
} catch (error) {
    console.error(error.message);
}
