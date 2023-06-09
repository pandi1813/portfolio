import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProjectsPage from './components/Projects/ProjectPage/ProjectsPage';
import AboutPage from './components/About/AboutPage';
import ContactPage from './components/Contact/ContactPage';
import NavBar from './components/NavBar/NavBar';
import ThankYou from './components/Contact/ThankYouPage/ThankYou';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/projects' element={<ProjectsPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/email_sent' element={<ThankYou/>} exact/>

      </Routes>
    </Router>
  );
}

export default App;
