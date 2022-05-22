import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './containers/Home/Home';
import Signup from './containers/Auth/Signup';
import Signin from './containers/Auth/SIgnin';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='signup' element={<Signup/>} />
      <Route path='signin' element={<Signin/>} />
    </Routes>
    </>
  );
}

export default App;
