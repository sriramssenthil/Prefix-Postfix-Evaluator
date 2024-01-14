export function evaluatePostfix(expression) {
    let stack = [];

    for (let char of expression) {
        if (isDigit(char)) {
            stack.push(parseInt(char, 10));
        } else {
            let second = stack.pop();
            let first = stack.pop();
            switch (char) {
                case '+':
                    stack.push(first + second);
                    break;
                case '-':
                    stack.push(first - second);
                    break;
                case '*':
                    stack.push(first * second);
                    break;
                case '/':
                    stack.push(first / second);
                    break;
                case '^':
                    stack.push(Math.pow(first, second));
                    break;
                default:
                    throw new Error("Unsupported operator encountered");
            }
        }
    }

    return stack.pop();
}

export function evaluatePrefix(prefix) {
    let operands = [];

    prefix = prefix.replace(/\s+/g, "");

    for (let i = prefix.length - 1; i >= 0; i--) {
        if (isDigit(prefix[i])) {
            operands.push(parseInt(prefix[i], 10));
        } else {
            let operator = prefix[i];
            let first = operands.pop();
            let second = operands.pop();

            switch (operator) {
                case '+':
                    operands.push(first + second);
                    break;
                case '-':
                    operands.push(first - second);
                    break;
                case '*':
                    operands.push(first * second);
                    break;
                case '/':
                    operands.push(first / second);
                    break;
                case '^':
                    operands.push(Math.pow(first, second));
                    break;
                default:
                    throw new Error("Unsupported operator encountered");
            }
        }
    }
    return operands.pop();
}

function isDigit(char) {
    return /\d/.test(char);
}

