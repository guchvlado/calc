const buttons = document.querySelectorAll('.button__number'),
      dot = document.querySelector('.button__dot'),
      plus = document.querySelector('.button__plus'),
      minus = document.querySelector('.button__minus'),
      equal = document.querySelector('.button__equal');
const currentOutput = document.querySelector('.current'),
      prevOutput = document.querySelector('.prev'),
      sign = document.querySelector('.sign');

buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentOutput.textContent += btn.textContent;
    });
});

dot.addEventListener('click', () => {
    if (!currentOutput.textContent.includes('.')) {
        currentOutput.textContent += dot.textContent;
    }
});

plus.addEventListener('click', () => {
    prevOutput.textContent = currentOutput.textContent;
    currentOutput.textContent = "";
    sign.textContent = '+';
});
minus.addEventListener('click', () => {
    prevOutput.textContent = currentOutput.textContent;
    currentOutput.textContent = "";
    sign.textContent = '-';
});

equal.addEventListener('click', () => {
    switch(sign.textContent) {
        case ('+'):
            currentOutput.textContent = +currentOutput.textContent + +prevOutput.textContent;
            break;
        case ('-'):
            currentOutput.textContent = +prevOutput.textContent - +currentOutput.textContent;
            break;
        default:
            currentOutput.textContent = "";
            prevOutput.textContent = "";
            sign.textContent = "";
    }

    prevOutput.textContent = "";
    sign.textContent = "";
});

document.addEventListener('keydown', (event) => {
    if (!isNaN(+event.key)) {
        currentOutput.textContent += event.key;
    }
});