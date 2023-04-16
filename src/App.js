import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/projects' element={<ProjectPage/>} />
        <Route path='/contact' element={<ContactPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
