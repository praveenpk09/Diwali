import './App.css';
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home';
import Celebration from './components/celebration';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cele/:id" element={<Celebration/>}></Route>
        </Routes></BrowserRouter>
     
    </div>
  );
}

export default App;
