document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('input');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === '=') {
                try {
                    input.value = eval(input.value);
                } catch (error) {
                    input.value = 'Error';
                }
            } else if (button.value === 'AC') {
                input.value = '';
            } else {
                input.value += button.value;
            }
        });
    });
});
