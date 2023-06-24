import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { ProductCard } from 'components/ProductCard';

export default function Home() {
  const [productList, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(res => res.json())
      .then(res => setProductList(res.data));
  }, []);
   /*  useEffect(() => {
    (async function () {
      const response = await fetch('/api/avo');
      const data = await response.json();
      console.log('los avo', data);
    })();
  }); */

  console.log('los avo', productList)

  return (
    <div>
      <Navbar />
      <h1>Hola chikorita</h1>
      {productList.map(item => <ProductCard key={item.id} product={item}/>)}
    </div>
  );
}
