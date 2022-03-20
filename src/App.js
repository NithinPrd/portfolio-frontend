import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Body from './components/body/Body';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Education from './components/body/Education';
import WorkExperience from './components/body/WorkExperience';
import { Stack } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Stack>
        <header >
          <Header/>
        </header>
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/work-experience" element={<WorkExperience />} />
        </Routes>
        <Footer/>
      </Stack>
      </BrowserRouter>
    </div>
  );
}

export default App;
