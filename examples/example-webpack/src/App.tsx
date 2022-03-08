import React from 'react';
import './App.css';
import message from 'tiny-message';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <button onClick={() => message.info('Info test.')}>info</button>
      <button onClick={() => message.sucess('Sucess test.')}>sucess</button>
      <button onClick={() => message.warn('Warn test.')}>warn</button>
      <button onClick={() => message.error('Error test.')}>error</button>
    </div>
  );
}

export default App;
