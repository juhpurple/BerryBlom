import React from "react";
import './style.css';

const Produtos = () => {
    return (
        <section id="produtos">
            <div className="secao-produtos ">
                <div className="titulos">
                    <h2>QUERIDINHOS</h2>
                    <p>Os mais pedidos de nossa loja</p>
                </div>

            <div className="doces-imgs">
                <div className="card-oculos">
                    <h3>Rosquinhas</h3>
                    <picture>
                        <img src="./assets/produto1.jpg" alt="Rosquinhas"></img>
                    </picture>
                    <p>caixa com 20 unidades</p>
                    <p>R$ 250,00</p>
                </div>

                <div className="card-oculos">
                    <h3>Macarons</h3>
                    <picture>
                        <img src="./assets/produto2.jpg" alt="Macarons"></img>
                    </picture>
                    <p>caixinha com 6 unidades</p>
                    <p>R$ 85,90</p>
                </div>

                <div className="card-oculos">
                    <h3>Cupcakes</h3>
                    <picture>
                        <img src="./assets/produto3.jpg" alt="Bolinhos"></img>
                    </picture>
                    <p>A unidade</p>
                    <p>R$ 12,00</p>
                </div>

                <div className="card-oculos">
                    <h3>Moranguinho</h3>
                    <picture>
                        <img src="./assets/produto4.jpg" alt="Doce de Morango"></img>
                    </picture>
                    <p>caixa com 100 unidades</p>
                    <p>R$ 550,00</p>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Produtos;