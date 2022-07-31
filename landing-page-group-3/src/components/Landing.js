import React from 'react';
// import Card from '../components/Card';
import iconeAtacado from '../icons/iconeAtacado.svg';
import iconeClube from '../icons/iconeClube.svg';
import iconeComprar from '../icons/iconeComprarVinho.svg';
import iconeLoja from '../icons/iconeLojasFisicas.svg';
import iconePodcast from '../icons/iconePodcast.svg';
import iconeWinePedia from '../icons/iconeWinepedia.svg';
import vinhos from '../icons/vinhos.png';
import '../css/Landing.css';

function Landing() {
  return (
    <div className="geralLandingContainer row">
      <div className="landingContainer col">
        <div className="landingTitle">
          <h1>
            <strong>
              Vinho
            </strong>
            ,uma
            {' '}
            <strong>
              experiência leve
            </strong>
            {' '}
            e
            {' '}
            <strong>
              prazerosa
            </strong>
          </h1>
        </div>
        <div className="landingColsWrap row">
          {/* COLUNA DA ESQUERDA */}
          <div className="landingColEsquerda col">
            <div className="landingCard">
              <a className="row" href="https://www.wine.com.br/clubewine/">
                <img src={iconeClube} alt="Clube" />
                <div className="landingCardText">
                  <h3>Clube</h3>
                  <p>Descontos Entrega + Rápida e brindes</p>
                </div>
              </a>
            </div>
            <div className="landingCard">
              <a className="row" href="https://www.wine.com.br/clubewine/">
                <img src={iconeWinePedia} alt="WinePedia" />
                <div className="landingCardText col">
                  <h3>WinePedia</h3>
                  <p>Leia tudo sobre vinhos</p>
                </div>
              </a>
            </div>
            <div className="landingCard">
              <a className="row" href="https://www.wine.com.br/clubewine/">
                <img src={iconePodcast} alt="Podcast" />
                <div className="landingCardText col">
                  <h3>Podcast</h3>
                  <p>Ouça sobre o universo do vinho</p>
                </div>
              </a>
            </div>
          </div>
          {/* IMAGENS DOS VINHOS */}
          <div className="landingColCentral row">
            <img className="imgVinhos" src={vinhos} alt="Imagem de Vinhos" />
            {/* <img className="imgVinhoCentral" src={vinhoCentral} alt="Imagem de Vinho" />
            <img className="imgTaca" src={tacaDireita} alt="Taça de Vinho" /> */}
          </div>
          {/* COLUNA DA DIREITA */}
          <div className="landingColDireita col">
            <div className="landingCard">
              <a className="row" href="https://www.wine.com.br/clubewine/">
                <img src={iconeAtacado} alt="Atacado" />
                <div className="landingCardText col">
                  <h3>Atacado</h3>
                  <p>Seja um parceiro B2B</p>
                </div>
              </a>
            </div>
            <div className="landingCard">
              <a className="row" href="https://www.wine.com.br/clubewine/">
                <img src={iconeLoja} alt="Lojas fisicas" />
                <div className="landingCardText col">
                  <h3>Lojas fisicas</h3>
                  <p>Venha nos visitar</p>
                </div>
              </a>
            </div>
            <div className="landingCard">
              <a className="row" href="#generalProductsContainer">
                <img src={iconeComprar} alt="Comprar Vinho" />
                <div className="landingCardText col">
                  <h2>Comprar Vinho</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
