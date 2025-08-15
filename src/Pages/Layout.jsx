
import Navbar from '../Componentes/Navbar';
import Header from '../Componentes/Header';
import Footer from '../Componentes/Footer';
import { Outlet, Link } from 'react-router-dom';

function Layout() {
    return (
        <>

            <div className='container-tudo' >
                <Navbar />
                <Outlet />
            </div>
            <Footer />

        </>
    );
}

export default Layout;