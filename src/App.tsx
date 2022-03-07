import './App.css';
import message from './components/Message';

function App() {
  return (
    <div className="container mx-auto">
      <h1 className="text-xl">Hello world</h1>
      <button
        className="py-2 px-4 rounded-lg bg-gray-200 mr-2"
        onClick={() => message.info('Info test.')}
      >
        info
      </button>
      <button
        className="py-2 px-4 rounded-lg bg-gray-200 mr-2"
        onClick={() => message.sucess('Sucess test.')}
      >
        sucess
      </button>
      <button
        className="py-2 px-4 rounded-lg bg-gray-200 mr-2"
        onClick={() => message.warn('Warn test.')}
      >
        warn
      </button>
      <button
        className="py-2 px-4 rounded-lg bg-gray-200 mr-2"
        onClick={() => message.error('Error test.')}
      >
        error
      </button>
    </div>
  );
}

export default App;
