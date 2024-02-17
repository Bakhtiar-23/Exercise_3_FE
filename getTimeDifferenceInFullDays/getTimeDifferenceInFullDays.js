function getTimeDifferenceInFullDays(startDate, endDate) {
    const oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    const startTime = startDate.getTime();
    const endTime = endDate.getTime();
    const differenceInMilliseconds = endTime - startTime;
    
    return Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
}

const generateButton = document.getElementById('generateButton');
const resultContainer = document.getElementById('resultContainer');

generateButton.addEventListener('click', function() {
    const startDate = new Date('2024-02-01');
    const endDate = new Date('2024-02-10');

    try {
        const daysDifference = getTimeDifferenceInFullDays(startDate, endDate);
        resultContainer.innerHTML = `
            <p class="resultText">Number of full days between 
            ${startDate.toDateString()} and ${endDate.toDateString()}:
            <br><span style="font-size: 36px; color: green;">
            ${daysDifference}</span></p>
        `;
    } catch (error) {
        console.error(error.message);
    }
});
