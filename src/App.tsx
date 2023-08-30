import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Home';
import BusBoard from './pages/BusBoard';
import PhotoViewer from './pages/PhotoViewer';
import './App.css'

function App() {
 return (
    <>

    <Router>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/busboard" element={<BusBoard />} />
        <Route path="/photoviewer" element={<PhotoViewer />} />
      </Routes>
    </Router>

    </>
  )
}

export default App
