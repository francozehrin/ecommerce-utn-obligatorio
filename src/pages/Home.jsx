
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    
    fetch('https://fakestoreapi.com/products') 
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      <ProductList products={products} />
    </div>
  );
}

export default Home;
