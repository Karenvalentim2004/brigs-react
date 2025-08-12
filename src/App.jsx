import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './App.css'
import Footer from './Componentes/Footer.jsx';
import Navbar from './Componentes/Navbar.jsx';
import Header from './Componentes/Header.jsx';
import Card from './Componentes/Card.jsx';


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
