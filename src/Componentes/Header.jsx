import './Header.css';

function Header() {
    return (
        <header className="py-3 text-center bg-white">
            <div className="container">
                <h1 className="display-4">Bem-vindo à Brigs Confeitaria</h1>
                <p className="lead">Delícias feitas com amor e carinho.</p>
            </div>
        </header>
    );
}

export default Header;