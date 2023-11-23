import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homePage/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
