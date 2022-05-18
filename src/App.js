import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Addpost from './component/Addpost';
import Searchpost1 from './component/Searchpost1';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Viewallpost from './component/Viewallpost';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
<Route path="/" exact element={<Addpost/>}/>
<Route path="/search" exact element={<Searchpost1/>}/>
<Route path="/view" exact element={<Viewallpost/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
