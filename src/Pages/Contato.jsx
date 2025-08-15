function Contato() {
    return (
        <>
            <header className="py-3 text-center bg-white">
                <div className="container">
                    <h1 className="display-4">CONTATOS</h1>
                </div>
            </header>

            <section className="text-center my-4" >
                <h2>Siga-nos nas redes sociais</h2>

                <br />

                <div className="social-icons">
                    <a href="https://www.instagram.com/confeitariabrigs?igsh=MWJmZjB4dWl1eGVnOA==" target="_blank">
                        <img src="./assets/Instagram.png" alt="Instagram" />
                    </a>
                    <a href="#" target="_blank">
                        <img src="./assets/tiktok.png" alt="TikTok" />
                    </a>
                </div>

                <h1>@confeitariabrigs</h1>

                <br />

                <h1>Nosso Endereço:</h1>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4365.970752758139!2d-47.2965490239391!3d-22.704339630668724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c89a78cc612de3%3A0x5b70ae0519d8f938!2sR.%20%C3%81lvaro%20Lins%2C%20165%20-%20Jardim%20Nossa%20Sra.%20Aparecida%2C%20Americana%20-%20SP%2C%2013474-467!5e1!3m2!1spt-BR!2sbr!4v1753205957375!5m2!1spt-BR!2sbr"
                    width="500" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>

            </section >
        </>
    )
}

export default Contato;