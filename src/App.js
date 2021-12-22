import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import Navbar from './components/NavBar';
import MyProfile from './components/MyProfile';
import Rockets from './components/rockets/Rockets';
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
