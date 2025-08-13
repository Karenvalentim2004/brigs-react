import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Presentes from './Pages/Presentes';
import Pedido from './Pages/Pedido';


function App() {

  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='presentes' element={<Presentes />} />
          <Route path='pedido' element={<Pedido />} />
        </Route>
      </Routes>
     </BrowserRouter>  

    
  )
}

export default App;
