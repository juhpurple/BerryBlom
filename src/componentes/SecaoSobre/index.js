import React from 'react';
import './style.css'

const SecaoSobre = () => {
    return (
    <section id='sobre'>
        <div className='sobre center'>
            <h2>SOBRE NÓS</h2>
                <p>fundada em 2001, em caraguatatuba - Sâo Paulo, a otica iniciou ...</p>
        

        <div className='elementos-sobre'>
            <picture>
                <img src='./assets/loja.jpg' 
                alt='Nossa loja'/>
            </picture>
        

        <div className='sobre-elementos primeiro-sobre'>
            <h4>NOSSAS FILIAIS</h4>
            <p>
            As filiais da BerryBlom No Brasil oferecem uma seleção encantadora de doces artesanais, mantendo a tradição e qualidade que os clientes adoram. Com um ambiente acolhedor e atendimento amigável, cada visita se transforma em uma experiência deliciosa e memorável. 🍭🍬


            </p>
        </div>

        <div className='sobre-elementos'>
            <h4>NOSSA HISTÓRIA</h4>
            <p>
            um texto curto
            A BerryBlom iniciou como uma confeitaria artesanal em Caraguatatuba, SP, e rapidamente conquistou fãs com suas receitas únicas. Hoje, é uma marca nacionalmente reconhecida por seus doces irresistíveis e sua dedicação à qualidade. 🍭🍬
            </p>
            </div>
        
        <picture>
            <img src='./assets/Atendimento.jpg' alt='Atendimento'/>
        </picture>
        
        </div>
        </div>
    </section>
    )
}

export default SecaoSobre;