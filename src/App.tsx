import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

//Pages
import HomePage from './pages/homePage/HomePage';
import SkillsPage from './pages/skillsPage/SkillsPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/skills' element={<SkillsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
