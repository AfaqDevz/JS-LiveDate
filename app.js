//Made by Afaq
let now = new Date();
let days = now.getDate();
let months = now.getMonth();
let monthsfix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
let years = now.getFullYear();

document.write(`Current Date`);
document.write(`<br> mm-dd-yyyy: ${monthsfix[months]} - ${days} - ${years}`);
document.write(`<br> dd-mm-yyyy: ${days} - ${monthsfix[months]} - ${years}`);