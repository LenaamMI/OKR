const outputDiv = document.getElementById('output');
let currentText = '';

document.addEventListener('keydown', function(event) {
    if (event.key.length > 1) {
        return; 
    }
    const isLetter = /^[a-zA-Zа-яА-ЯёЁ]$/.test(event.key);
    if (isLetter) {
        currentText += event.key.toUpperCase();
        outputDiv.textContent = currentText;
    }
});
