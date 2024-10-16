
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`) // API de ejemplo
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <div>Cargando...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <button>Comprar</button>
    </div>
  );
}

export default ProductDetailPage;
