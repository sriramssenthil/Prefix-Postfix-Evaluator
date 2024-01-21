// Infix to Postfix
export function infixToPostfix(sequence) {
    let conv = [];
    let postfix = "";

    if (sequence.length === 0) {
        return "";
    } else {
        for (let i = 0; i < sequence.length; i++) {
            let c = sequence.charAt(i);

            if (isOperand(c)) {
                postfix += c;
            } else if (c === '(') {
                conv.push('(');
            } else if ('+-*/^'.includes(c)) {
                let priority = operatorPriority(c);

                while (conv.length !== 0 && operatorPriority(conv[conv.length - 1]) <= priority) {
                    postfix += conv.pop();
                }
                conv.push(c);
            } else if (c === ')') {
                while (conv.length !== 0 && conv[conv.length - 1] !== '(') {
                    postfix += conv.pop();
                }
                conv.pop();
            }
        }
    }

    while (conv.length !== 0) {
        postfix += conv.pop();
    }

    return postfix;
}

//Infix to Prefix
export function infixToPrefix(sequence){
    let reversed = reverseExpression(sequence);
    let prefix = "";
    let conv = [];
    

    if (reversed.length === 0) {
        return "";
    } else {
        for (let i = 0; i < reversed.length; i++) {
            let c = reversed.charAt(i);

            if (isOperand(c)) {
                prefix += c;
            } else if (c === '(') {
                conv.push('(');
            } else if ('+-*/^'.includes(c)) {
                let priority = operatorPriority(c);

                while (conv.length !== 0 && operatorPriority(conv[conv.length - 1]) < priority) {
                    prefix += conv.pop();
                }
                conv.push(c);
            } else if (c === ')') {
                while (conv.length !== 0 && conv[conv.length - 1] !== '(') {
                    prefix += conv.pop();
                }
                conv.pop();
            }
        }
    }

    while (conv.length !== 0) {
        prefix += conv.pop();
    }

    return reverseExpression(prefix);
}

//Prefix to Infix
export function prefixToInfix(prefix) {
    let conv = [];
    prefix = prefix.replace(/\s+/g, "");
    let reversedPrefix = reverseExpression(prefix);

    for (let char of reversedPrefix) {
        if (isOperand(char)) {
            conv.push(char);
        } else {
            let first = conv.pop();
            let second = conv.pop();
            conv.push("(" + second + char + first + ")");
        }
    }

    return reverseExpression(conv.pop());
}

// Postfix to Infix
export function postfixToInfix(postfix) {
    let conv = [];
    postfix = postfix.replace(/\s+/g, "");

    for (let i = 0; i < postfix.length; i++) {
        if (isOperand(postfix.charAt(i))) {
            conv.push(postfix.charAt(i));
        } else {
            let first = conv.pop();
            let second = conv.pop();
            conv.push("(" + second + postfix.charAt(i) + first + ")");
        }
    }

    let infix = conv.pop();

    return infix;
}

// Check if character is letter or digit
function isOperand(char) {
    return /[a-zA-Z0-9]/.test(char);
}

// Priority of operators
function operatorPriority(operator) {
    switch (operator) {
        case '^':
            return 1;
        case '*':
        case '/':
            return 2;
        case '+':
        case '-':
            return 3;
        default:
            return 4;
    }
}

function peek(stack) {
    return stack[stack.length - 1];
}

function reverseExpression(expression) {
    let reversed = '';
    for (let i = expression.length - 1; i >= 0; i--) {
        if (expression[i] === '(') {
            reversed += ')';
        } else if (expression[i] === ')') {
            reversed += '(';
        } else {
            reversed += expression[i];
        }
    }
    return reversed;
}