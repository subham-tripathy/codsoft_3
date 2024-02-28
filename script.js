// CONSTANTS DECLARATIONS

const body = document.querySelector('body');
const btnArray = document.querySelectorAll('#buttonsPart button');
const display = document.querySelector('#displayPart input')










// METHODS

function clearLast() {
    a = display.value
    a = a.slice(0, a.length - 1)
    display.value = a
}


let clearOnClick = false
for (const btn of btnArray) {
    btn.addEventListener('click', () => {
        switch (btn.textContent) {
            case 'X':
                display.value += '*';
                break;
            case '.':
            case '+':
            case '-':
            case '/':
            case '%':
            case '00':
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                display.value += btn.textContent;
                break;
            case 'C':
                display.value = '';
                break;
            case '':
                clearLast();
                break;
            case '=':
                display.value = eval(display.value)
                break;
        }
    })
}

body.addEventListener('keydown', (e) => {
    switch (e.key) {
        case '=':
            display.value += '+';
            break;
        case 'x':
            display.value += '*';
            break;
        case '*':
        case '.':
        case '+':
        case '-':
        case '/':
        case '%':
        case '00':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            display.value += e.key;
            break;
        case 'Escape':
        case 'Delete':
            display.value = '';
            break;
        case 'Backspace':
            clearLast();
            break;
        case 'Enter':
            display.value = eval(display.value)
    }
})