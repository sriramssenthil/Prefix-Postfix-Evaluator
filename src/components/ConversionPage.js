import React, { useState } from 'react';
import { infixToPostfix, infixToPrefix, postfixToInfix, prefixToInfix } from '../utils/conversionUtils';


function ConversionPage({ onBack }) {
    const [conversionType, setConversionType] = useState('');
    const [expression, setExpression] = useState('');
    const [conversionResult, setConversionResult] = useState('');

    const handleConversionChange = (event) => {
        setConversionType(event.target.value);
    };

    const handleExpressionChange = (event) => {
        setExpression(event.target.value);
    };

    const handleConvert = () => {
        let result = '';
        switch (conversionType) {
            case 'infixToPostfix':
                result = infixToPostfix(expression);
                break;
            case 'infixToPrefix':
                result = infixToPrefix(expression);
                break;
            case 'postfixToInfix':
                result = postfixToInfix(expression);
                break;
            case 'prefixToInfix':
                result = prefixToInfix(expression);
                break;
            default:
                result = 'Invalid conversion type';
        }
        setConversionResult(result);
    };

    return (
        <div className="comp-container">
            <h1>What type of conversion do you want to make?</h1>
            <div className="radio-container">
                <div className="radio-row">
                    <label>
                        <input 
                            type="radio" 
                            value="infixToPostfix" 
                            checked={conversionType === 'infixToPostfix'} 
                            onChange={handleConversionChange} 
                        />
                        Infix to Postfix
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="infixToPrefix" 
                            checked={conversionType === 'infixToPrefix'} 
                            onChange={handleConversionChange} 
                        />
                        Infix to Prefix
                    </label>
                </div>
                <div className="radio-row">
                    <label>
                        <input 
                            type="radio" 
                            value="postfixToInfix" 
                            checked={conversionType === 'postfixToInfix'} 
                            onChange={handleConversionChange} 
                        />
                        Postfix to Infix
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            value="prefixToInfix" 
                            checked={conversionType === 'prefixToInfix'} 
                            onChange={handleConversionChange} 
                        />
                        Prefix to Infix
                    </label>
                </div>
            </div>

            {conversionType && (
            <div className="input-container">
                <label>
                    <h3>Enter your expression (Operation Characters:[+*-/^]):</h3>
                </label>
                    <input 
                        type="text" 
                        value={expression} 
                        onChange={handleExpressionChange}
                        placeholder="Expression"
                    />
                <div class = "button-container">
                    <button onClick={handleConvert}>Convert</button>
                </div>
                {conversionResult && <div className="result-container">Result: {conversionResult}</div>}
            </div>
        )}
            <div class = "back-button-container">
                <button onClick={onBack}>Back to Home</button>
            </div>
        </div>
        
    );
}

export default ConversionPage;