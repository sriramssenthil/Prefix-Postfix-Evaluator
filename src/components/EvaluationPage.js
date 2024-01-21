import React, { useState } from 'react';
import { evaluatePostfix, evaluatePrefix } from '../utils/evaluationUtils';

function EvaluationPage({ onBack }) {
    const [expression, setExpression] = useState('');
    const [evaluationResult, setEvaluationResult] = useState('');
    const [evaluationType, setEvaluationType] = useState('');

    const handleEvaluationChange = (event) => {
        setEvaluationType(event.target.value);
    };

    const handleExpressionChange = (event) => {
        setExpression(event.target.value);
    };

    const handleEvaluate = () => {
        let result = '';
        switch (evaluationType) {
            case 'postfix':
                result = evaluatePostfix(expression);
                break;
            case 'prefix':
                result = evaluatePrefix(expression);
                break;
            default:
                result = 'Invalid evaluation type';
        }
        setEvaluationResult(result);
    };

    return (
        <div className='comp-container'>
            <h1>What type of expression do you want to evaluate?</h1>
            <div className="radio-container">
                <label>
                    <input 
                        type="radio" 
                        value="postfix" 
                        checked={evaluationType === 'postfix'} 
                        onChange={handleEvaluationChange} 
                    />
                    Evaluate Postfix Expression
                </label>
                <label>
                    <input 
                        type="radio" 
                        value="prefix" 
                        checked={evaluationType === 'prefix'} 
                        onChange={handleEvaluationChange} 
                    />
                    Evaluate Prefix Expression
                </label>
            </div>
            {evaluationType && (
            <div className="input-container">
                <label>
                    <h3>Enter your numerical expression (Operation Characters:[+*-/^]):</h3>
                </label>
                <input 
                    type="text" 
                    value={expression} 
                    onChange={handleExpressionChange}
                    placeholder="Expression"
                />
                <div className="button-container">
                    <button onClick={handleEvaluate}>Evaluate</button>
                </div>
                {evaluationResult && <div className="result-container">Result: {evaluationResult}</div>}
            </div>
            )}
            <div className='back-button-container'>
                <button onClick={onBack}>Back to Home</button>
            </div>
            
        </div>
    );
}

export default EvaluationPage;