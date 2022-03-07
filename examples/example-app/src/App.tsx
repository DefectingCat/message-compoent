import './App.css';
import message from 'tiny-message';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl">Hello world</h1>
      <button
        className="px-4 py-2 mr-2 bg-gray-200 rounded-lg"
        onClick={() => message.info('Info test.')}
      >
        info
      </button>
      <button
        className="px-4 py-2 mr-2 bg-gray-200 rounded-lg"
        onClick={() => message.sucess('Sucess test.')}
      >
        sucess
      </button>
      <button
        className="px-4 py-2 mr-2 bg-gray-200 rounded-lg"
        onClick={() => message.warn('Warn test.')}
      >
        warn
      </button>
      <button
        className="px-4 py-2 mr-2 bg-gray-200 rounded-lg"
        onClick={() => message.error('Error test.')}
      >
        error
      </button>
    </div>
  );
}

export default App;
