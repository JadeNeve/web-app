import './css/App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import MainRoute from './utils/MainRoute';
import Navbar from './components/Navbar';
import { AuthProvider } from './utils/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <MainRoute />
      </Router>
    </AuthProvider>
      
  );
}

export default App;
