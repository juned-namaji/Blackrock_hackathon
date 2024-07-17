import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './components/Form'; // Adjust path as per your project structure
import HomePage from './components/HomePage'; // Adjust path as per your project structure

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col items-center justify-start p-6">
      <Form />
    </div>
  );
}

export default App;
