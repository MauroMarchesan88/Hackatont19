import React from 'react';
// import { Link } from 'react-router-dom';
import '../css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="boxList">
          <nav>
            <a href="/" className="titleList">LOJA</a>
            <ul className="col">
              <li>
                <a href="https://www.wine.com.br/vinhos/cVINHOS-p1.html">Vinhos</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/outras-bebidas/cOUTRAS_BEBIDAS-p1.html" title="Veja também outras opções na Wine!">Outras bebidas</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="boxList">
          <nav>
            <a href="https://www.wine.com.br/clubewine/" className="titleList">CLUBE WINE</a>
            <ul>
              <li>
                <a href="https://www.wine.com.br/clubewine/#">Como funciona</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Indique Amigos</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/clubewine/essenciais/">WineBox Essenciais</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/clubewine/surpreendentes/#">WineBox Surpreendentes</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/clubewine/notaveis/#">WineBox Notáveis</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/clubewine/singulares/#">WineBox Singulares</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/clubewine/espumantes/#">WineBox Espumantes</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/clubewine/refrescantes/#">WineBox Refrescantes</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="boxList">
          <nav>
            <a href="https://www.wine.com.br/sign-in.ep#/identificacao" className="titleList">MINHA CONTA</a>
            <ul>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Dados pessoais</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Pedidos</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Cartões</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Endereços</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao" alt="Clube Wine">Clube Wine</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Favoritos</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Cupons</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Presentes</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/sign-in.ep#/identificacao">Indique amigos</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="boxList">
          <nav>
            <a href="https://www.wine.com.br/institucional/" title="Conheça um pouco mais da Wine" className="titleList">CONHEÇA TAMBÉM</a>
            <ul>
              <li>
                <a href="https://www.wine.com.br/institucional/" title="Sobre a Wine">Institucional</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/loja/produtor/" title="Conheça produtores exclusivos das melhores regiões vitivinícolas do mundo.">Lojas Oficiais</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/lojas/" title="Descubra mais sobre nossas lojas físicas.">Lojas Físicas</a>
              </li>
              <li>
                <a href="https://www.bodegaswine.com.br/" rel="bookmark" title="Compre Vinhos com benefícios exclusivos para sua empresa.">Bodegas</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/institucional/app/" title="Conheça algumas das funcionalidades do nosso App.">App Wine</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/institucional/wineup/" title="O programa de recompensas da Wine.">WineUP</a>
              </li>
              <li>
                <a href="https://www.wineeventos.com.br" rel="bookmark" title="Você escolhe os produtos perfeitos para seu evento e ainda compra com desconto.">Wine Eventos</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/wineverso/" title="Saiba mais sobre o universo do Vinho escutando nosso Podcast.">Podcast</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/winepedia" rel="bookmark" title="O seu Portal de Conteúdo sobre Vinho">Winepedia</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/teamwine/" rel="bookmark" title="Eles provam que é possível conciliar a família, profissão e diversão ao esporte e que a vida é melhor assim.">Team Wine</a>
              </li>
              <li>
                <a href="https://wine.gupy.io/" title="Venha fazer perte do nosso time">Trabalhe na Wine</a>
              </li>
              <li>
                <a href="https://www.wine.com.br/institucional/portal-de-privacidade/" title="Portal de privacidade da Wine">Portal de Privacidade</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="boxList2">
          <div>
            <div>
              <h3>Alguma dúvida? A gente ajuda você!</h3>
              <h4>Horário de atendimento:</h4>
              <p>De segunda a sexta-feira de 09h as 18h. Exceto feriados.</p>
              <p>
                <a href="https://wine.helpshift.com/hc/pt/3-wine/faq/186-posso-trocar-devolver-os-produtos-que-comprei/?hpn=1&amp;p=web&amp;hbhf=1">Políticas de trocas e devolução</a>
                , regras contratuais gerais
                <a href="https://wine.helpshift.com/hc/pt/3-wine/faq/181-termos-e-condicoes-de-uso-das-plataformas/?hpn=1&amp;p=web&amp;hbhf=1" title="Política de reembolso">incluindo reembolso</a>
                , e muito mais, você encontra na nossa:
              </p>
              <div className="pinkText">
                <a href="https://centraldeajuda.wine.com.br/" rel="help" className="titleList">
                  CENTRAL DE AJUDA ➝
                </a>
              </div>
            </div>
            <div>
              <hr />
              <div className="socialIcons">
                <a href="http://www.facebook.com/wine.vinhos" title="Página da Wine no Facebook">
                  <img width="13" height="25" data-src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-facebook-pink.svg" alt="Logo do Facebook" src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-facebook-pink.svg" data-loaded="true" />
                </a>
                <a href="http://twitter.com/wine_vinhos" title="Página da Wine no Twitter">
                  <img width="29" height="23" data-src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-twitter-pink.svg" alt="Logo do Twitter" src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-twitter-pink.svg" data-loaded="true" />
                </a>
                <a href="http://www.instagram.com/winevinhos" title="Página da Wine no Instagram">
                  <img width="26" height="25" data-src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-instagran-pink.svg" alt="Logo do Instagram" src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-instagran-pink.svg" data-loaded="true" />
                </a>
                <a href="https://www.youtube.com/user/WineVinhos" title="Página da Wine no Youtube">
                  <img width="30" height="20" data-src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-youtube-pink.svg" alt="Logo do Youtube" src="https://img.wine.com.br/fenix/image/_big_bang/icons/icon-youtube-pink.svg" data-loaded="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
