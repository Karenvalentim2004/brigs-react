import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css'
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Galeria from './Pages/Galeria';
import Doces from './Pages/Doces';
import OvosDePascoa from './Pages/OvosDePascoa';
import Presentes from './Pages/Presentes';
import Pedido from './Pages/Pedido';
import Contato from './Pages/Contato';
import Cone from './Pages/Cone';
import Brigadeiro from './Pages/Brigadeiro';
import Novidades from './Pages/Novidades';
import Bolos from  './Pages/Bolos'


function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='presentes' element={<Presentes />} />
          <Route path='galeria' element={<Galeria />} />
          <Route path='doces' element={<Doces />} />
          <Route path='ovosdepascoa' element={<OvosDePascoa />} />
          <Route path='pedido' element={<Pedido />} />
          <Route path='contato' element={<Contato />} />
          <Route path='Cone' element={<Cone />} />
          <Route path='brigadeiro' element={<Brigadeiro />} />
          <Route path='novidades' element={<Novidades />} />
          <Route path='bolos' element={<Bolos />} />
        </Route>
      </Routes>
    </BrowserRouter>


  )
}

export default App;
