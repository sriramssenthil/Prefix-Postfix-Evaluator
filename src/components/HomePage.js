import './Component.css';

function HomePage({ onConvert, onEvaluate }) {
    return (
        <div className="comp-container">
            <h1>Postfix/Prefix Convertor & Evaluator</h1>
            <h2>Do you want to convert an expression or evaluate an expression?</h2>
            <div className="button-container">
                <button onClick={onConvert}>Convert</button>
                <button onClick={onEvaluate}>Evaluate</button>
            </div>
        </div>
    );
}

export default HomePage;

