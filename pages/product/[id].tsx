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
    console.log('el id es', id)
    window.fetch(`/api/avo/${id}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setProduct(data)});
  }, [id])

  console.log('el avo con id', product)
  

  return (
    <div>
      <p>Esta es la página del producto con la ruta {pathname} </p>
      <p>Este es el parámetro es: {id} </p>
      {product && <ProductCard product={product}/>}
    </div>
  );
}
