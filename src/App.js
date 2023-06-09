import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Scarf from './components/Scarf';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/scarf' element={<Scarf />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

