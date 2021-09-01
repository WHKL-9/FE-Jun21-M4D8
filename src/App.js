import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/NavBar';
import Home from './pages/Home';


function App() {
  return (
   <>
      <Navbar/>
      <Home/>
   </>
  );
}

export default App;
