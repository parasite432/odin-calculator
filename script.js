const numberButton = document.querySelectorAll('.number');
const btn = document.querySelectorAll('.btn');
const mainDisplay = document.querySelector('.display');
const operator = document.querySelectorAll('.operation');
const equalsButton = document.querySelector('.equals')
const deleteButton = document.getElementById('del');
const clearButton = document.getElementById('clear');
const ANSButton = document.querySelector('.ANS');
const x10Button = document.querySelector('.x10');


let num1 = null;
let num2 = null;
let numberOfCalled = 0;
let isEqualPressed = false;
let isOperationKeypressed = false;
let currentOperation = null;
let solution = 0;
let errorCheck = false;
let isDecimal = false;
let previousOperator = null;

/* Operations */
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2; number
}


function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operation, num1, num2) {
    let answer = 0;
    switch (operation) {

        case '+': answer = add(num1, num2); break;
        case '-': answer = subtract(num1, num2); break;
        case 'x': answer = multiply(num1, num2); break;
        case '÷': 
            if (num2 === 0) return 'Math Error!'
            else  answer = divide(num1, num2); break;
    }
    return answer;
}

/*button functions*/

function clear() {
    mainDisplay.textContent = '';
    errorCheck = false;
    currentOperation = null;
    num1 = null;
    num2 = null;
    solution = 0;
}

function del() {

    let str = mainDisplay.textContent;
    let newStr = str.slice(0, -1)
    mainDisplay.textContent = newStr;
    num1 = parseFloat(newStr)
    console.log(mainDisplay.textContent + ' len: ' + mainDisplay.textContent.length);

}

function operation(operator) {

    let op = operator.id;
  
    if (currentOperation === null) {
    num1 = parseFloat(mainDisplay.textContent);
    
    console.log(num1);

    previousOperator = op;
    console.log( 'previousOperator: ' + previousOperator);
    }
    else {
        
      num2 = parseFloat(mainDisplay.textContent); 
      
      
      console.log('num1: ' + num1);
      console.log('num2: ' + num2);

      solution = operate(previousOperator, num1,num2);
      console.log('display: ' + solution + 'previousOperator: ' + previousOperator);
      mainDisplay.textContent = solution;
      num1 = solution;

    

      


    }
    
    previousOperator = op;
    isDecimal = false;
    isOperationKeypressed = true;
}

function equals () {

    
    isEqualPressed = true;
    num2 =  parseFloat(mainDisplay.textContent);

    if(num1 === null || num2 === null) {return}
    if (currentOperation === '÷') {

        if (num2 === 0) 
        {
            mainDisplay.textContent= 'Math Error!';
            errorCheck = true;
            return
        }

    }
    
    console.log('num1 in equals:' + num1 );
    console.log(currentOperation);
    console.log('num2 in equals:' + num2 );
    solution = operate(currentOperation,num1,num2);
    console.log(solution + ' df:' +currentOperation);
    mainDisplay.textContent=solution;
    isDecimal = false;
    currentOperation = null;
    isEqualPressed = false;

}

/*eventListeners*/

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', del);
equalsButton.addEventListener('click',equals);

numberButton.forEach((number) => {
    number.addEventListener('click',

        () => {
            
            let display = ''
            if (isDecimal === true && number.textContent === '.') {return}
            if(number.textContent === '.') {isDecimal = true}
            if (isOperationKeypressed === true) {mainDisplay.textContent = ''; isOperationKeypressed = false}
            if (errorCheck === false ) {
            mainDisplay.textContent = mainDisplay.textContent + number.textContent

            }


           
            
        })
})

btn.forEach((btn) => {

    btn.addEventListener('mouseenter', function (e) {
        btn.classList.add('hover');
    })

    btn.addEventListener('mouseout', function (e) {
        btn.classList.remove('hover');
    })
})

operator.forEach((operator) => {
    operator.addEventListener('click', () => {
    
        if (isEqualPressed) {num1 = solution}
        operation(operator);
        currentOperation = operator.id;
        console.log(currentOperation);

    })
})


ANSButton.addEventListener('click', () => {

    mainDisplay.textContent = solution;

});

x10Button.addEventListener('click', () => {

    mainDisplay.textContent = parseFloat(mainDisplay.textContent)*10;


})