import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ProductCard } from "components/ProductCard";

export default function ProductId() {

  const [product, setProduct] = useState<TProduct>();
  const router = useRouter();

  const {
    query: { id },
    pathname,
  } = router;

  useEffect(() => {
    window.fetch(`/api/avo/${id}`)
    .then(response => response.json())
    .then(data => setProduct(data));
  }, [id])

  console.log('el avo', product)
  

  return (
    <div>
      <p>Esta es la página del producto con la ruta {pathname} </p>
      <p>Este es el parámetro es: {id} </p>
      <ProductCard product={product}/>
    </div>
  );
}
