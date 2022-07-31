import React, { useEffect, useState } from 'react';
import '../css/Product.css';

function Products() {
  const [options, setOptions] = useState([]);

  async function requisicao() {
    const endPoint = 'https://wine-back-test.herokuapp.com/products?page=1&limit=10';
    const response = await fetch(endPoint);
    const data = await response.json();
    setOptions(data.items);
  }

  useEffect(() => {
    requisicao();
  }, []);

  return (
    <div id="generalProductsContainer">
      <div id="products">
        <div id="productsColumns">
          {
            options.map((option) => (
              <div key={option.id} className="productCard">
                <img
                  src={option.image}
                  alt={option.sommelierComment}
                />
                <p>{option.name}</p>
                <p className="productNormalValue">
                  R$
                  {' '}
                  {option.price}
                </p>
                <p className="productDiscount">
                  <span className="discountSimbol">%</span>
                  {' '}
                  <span className="discountNumber">{option.discount}</span>
                </p>
                <span className="nonSocioText">
                  NÃO SÓCIO R$:
                  {' '}
                  <strong>
                    {option.priceNonMember}
                  </strong>
                </span>
                <div className="productSocioContainer">
                  <div className="productSocioValue">
                    SÓCIO WINE:
                    {' '}
                    <div className="productSocioNumber">
                      R$
                      {' '}
                      {option.priceMember}
                    </div>
                  </div>
                </div>
                <button type="button" className="productButton">
                  COMPRAR!
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Products;
