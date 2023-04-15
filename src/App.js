import './css/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import MainRoute from './utils/MainRoute';
import Navbar from './components/Navbar';

function App() {
  return (
      <Router>
        <Navbar />
        <MainRoute />
      </Router>
  );
}

export default App;
