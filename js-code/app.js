'use strict';

const btn = document.querySelector('.genereator-button-js');
const result = document.querySelector('.genereted-number-js');

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min);
    
}

btn.addEventListener("click", function () {
    const minEl = document.getElementById('min').value;
    const maxEl = document.getElementById('max').value;
    const min = Number(minEl);
    const max = Number(maxEl);

    result.textContent = getRandomNumber(min, max);

    if (minEl === '' || maxEl === ''){
        alert('Iltimos maxsimal va minimal sonlarni kiriting');
    }
    if (min > max) {
        alert("Minimal son maksimal sondan kichik bo'lishi kerak");
        result.textContent = '0'
    }
});
