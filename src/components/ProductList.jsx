
import React from 'react';
import { Link } from 'react-router-dom';

function ProductList({ products }) {
  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <Link to={`/product/${product.id}`}>Ver Detalle</Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
