import React from "react";
import './style.css';

const Footer = () => {
    return (
        <footer className="rodape">
            <div className="container-rodape">
                {/* Informações de contato */}
                <div className="info-contato">
                    <h4>Contato</h4>
                    <p>Email: contato@berryblom.com</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Endereço: Rua Doce, 123 - SP</p>
                </div>

                {/* Links de navegação */}
                <div className="navegacao-rodape">
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="#sobre">Sobre Nós</a></li>
                        <li><a href="#produtos">Produtos</a></li>
                        <li><a href="#contato">Contato</a></li>
                    </ul>
                </div>

                {/* Redes sociais */}
                <div className="redes-sociais">
                    <h4>Redes Sociais</h4>
                    <div className="icones-sociais">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                    </div>
                </div>
            </div>

            <div className="copy">
                <p>© 2024 BerryBlom. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
