class ZipValidator {
    static isValidZip(zipCode) {
        // Check if zipCode contains only numbers and has exactly five characters
        return /^\d{5}$/.test(zipCode);
    }

    static fixZip(zipCode) {
        // If zipCode length is less than 5, prefix it with leading zeros
        while (zipCode.length < 5) {
            zipCode = '0' + zipCode;
        }
        return zipCode;
    }
}

// Example usage
const zipCode1 = '12345';
const zipCode2 = '54321';

const validationResultDiv = document.getElementById("validationResult");

// Check validity of zip codes
validationResultDiv.innerHTML += `<p class="${ZipValidator.isValidZip(zipCode1) 
    ? 'valid' : 'invalid'}">${zipCode1} is ${ZipValidator.isValidZip(zipCode1) 
        ? 'valid' : 'invalid'}.</p>`;
validationResultDiv.innerHTML += `<p class="${ZipValidator.isValidZip(zipCode2) 
    ? 'valid' : 'invalid'}">${zipCode2} is ${ZipValidator.isValidZip(zipCode2) 
        ? 'valid' : 'invalid'}.</p>`;

const zipCode3 = '123';
const fixedZipCode = ZipValidator.fixZip(zipCode3);
// Create HTML for displaying the fixed zip code with each digit in a different color
const fixedZipHtml = fixedZipCode.split('').map((digit, index) => 
`<span class="zipDigit${index + 1}">${digit}</span>`).join('');
validationResultDiv.innerHTML += `<p>Original zip code: ${zipCode3}, Fixed zip code: ${fixedZipHtml}</p>`;

