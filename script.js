


/* Operations */
function add(num1,num2) {
    return num1  + num2;
}

function subtract(num1,num2) {
    return num1  - num2;
}


function multiply(num1,num2) {
    return num1  * num2;
}

function divide(num1,num2) {
    return num1  / num2;
}


function operate (operation, num1, num2  ) {

    const answer = 0;

    switch(operation) {

        case '+': answer = add(num1, num2); break;
        case '-': answer = subtract(num1, num2); break;
        case '*': answer = multiply(num1, num2); break;
        case '/': answer = divide(num1, num2); break;

    }

}