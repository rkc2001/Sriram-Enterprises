import { useState } from 'react';
import products from './ProductData';
import products_rice from './ProductData_Rice';
import './Products.css';

export default function Products() {
  const [changeProducts, setChangeProducts] = useState('Polymer');

  return (
    <>
      <section id="product">
        <h1>Products</h1>

        <div className="switch">
          <button
            className={`btn ${changeProducts === 'Polymer' ? 'active' : ''}`}
            onClick={() => setChangeProducts('Polymer')}
          >
            Polymer
          </button>
          <button
            className={`btn ${changeProducts === 'Rice' ? 'active' : ''}`}
            onClick={() => setChangeProducts('Rice')}
          >
            Agriculture
          </button>
        </div>

        <div className="container">
          {changeProducts === 'Polymer' &&
            products.map(({ id, image, title, description }) => {
              return (
                <div key={id} className="box">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="desc">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          {changeProducts === 'Rice' &&
            products_rice.map(({ id, image, title, description }) => {
              return (
                <div key={id} className="box">
                  <div className="card">
                    <div className="image">
                      <img src={image} alt={title} />
                    </div>
                    <div className="desc">
                      <h2>{title}</h2>
                      <p>{description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
