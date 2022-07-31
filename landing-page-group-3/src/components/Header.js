import React from 'react';
import bagIcon from '../icons/bagIcon.svg';
import searchIcon from '../icons/searchIcon.svg';
import userIcon from '../icons/userIcon.svg';
import logo from '../icons/wine.svg';
import '../css/Header.css';

export default function Header() {
  return (
    <div className="geralHeaderContainer row">
      <header className="headerContainer row">
        <div className="logo row">
          <a href="https://www.wine.com.br/">
            <img src={logo} alt="wine logo" />
          </a>
        </div>
        <div className="navContainer">
          <ul className="nav row">
            <li>
              <a href="https://www.wine.com.br/clubewine/#" target="_blank" rel="noreferrer">Clube</a>
            </li>
            <li>
              <a href="https://www.wine.com.br/loja-vinhos" target="_blank" rel="noreferrer">Loja</a>
            </li>
            <li>
              <a href="https://www.wine.com.br/loja/produtor/" target="_blank" rel="noreferrer">Produtores</a>
            </li>
            <li>
              <a href="https://www.wine.com.br/vinhos-promocao" target="_blank" rel="noreferrer">Ofertas</a>
            </li>
            <li>
              <a href="https://we.wine.com.br/" target="_blank" rel="noreferrer">Eventos</a>
            </li>
            <li>
              <a href="https://www.wine.com.br/institucional/app/" target="_blank" rel="noreferrer">Baixe o App</a>
            </li>
          </ul>
        </div>
        <div className="navIcons">
          <img src={searchIcon} alt="lupa de busca" />
          <img src={userIcon} alt="icone de pessoa usuária" />
          <img src={bagIcon} alt="icone de sacola" />
        </div>
      </header>
    </div>
  );
}
