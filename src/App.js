import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Navbar from './components/NavBar';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';
import Missions from './components/Missions';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route exact path="/missions" element={<Missions />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
