document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('button');
    let currentInput = '';
    let operator = '';
    let firstOperand = '';
    let secondOperand = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            if (value === 'AC') {
                currentInput = '';
                firstOperand = '';
                secondOperand = '';
                operator = '';
                input.value = '';
            } else if (value === '=') {
                if (operator && firstOperand !== '' && currentInput !== '') {
                    secondOperand = currentInput;
                    input.value = calculate(firstOperand, operator, secondOperand);
                    currentInput = input.value;
                    operator = '';
                    firstOperand = '';
                    secondOperand = '';
                }
            } else if (button.classList.contains('operator')) {
                if (currentInput !== '') {
                    operator = value;
                    firstOperand = currentInput;
                    currentInput = '';
                }
            } else {
                currentInput += value;
                input.value = currentInput;
            }
        });
    });

    function calculate(first, operator, second) {
        const firstNum = parseFloat(first);
        const secondNum = parseFloat(second);
        switch (operator) {
            case '+':
                return firstNum + secondNum;
            case '-':
                return firstNum - secondNum;
            case '*':
                return firstNum * secondNum;
            case '/':
                return firstNum / secondNum;
            default:
                return '';
        }
    }
});
