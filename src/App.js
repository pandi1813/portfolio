import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProjectsPage from './components/Projects/ProjectPage/ProjectsPage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/contact' element={<ContactPage/>} />

      </Routes>
    </Router>
  );
}

export default App;
