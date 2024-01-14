import React, { useState } from 'react';
import ConversionPage from './components/ConversionPage';
import EvaluationPage from './components/EvaluationPage';
import HomePage from './components/HomePage';
function App() {
    const [currentView, setCurrentView] = useState('home')

    return (
      <div>
          {currentView === 'home' && <HomePage onConvert={() => setCurrentView('convert')} onEvaluate={() => setCurrentView('evaluate')} />}
          {currentView === 'convert' && <ConversionPage onBack={() => setCurrentView('home')} />}
          {currentView === 'evaluate' && <EvaluationPage onBack={() => setCurrentView('home')} />}
      </div>
  );
}

export default App;