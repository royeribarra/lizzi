import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import './assets/css/animate.css';
import './assets/css/flexslider.css';
import './assets/css/icomoon.css';
import './assets/css/magnific-popup.css';
import './assets/css/owl.theme.default.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "antd/dist/antd.css";

import RegaloCompleto from './components/regaloCompleto';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Inicio from './pages/inicio';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/regalos" element={<RegaloCompleto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
