import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Mission from './components/Missions';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rockets />} />
        <Route exact path="/missions" element={<Mission />} />
        <Route exact path="/my-profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
