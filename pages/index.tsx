import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [productlist, setProductList] = useState<TProduct[]>([]);
  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(res => res.json())
      .then(res => console.log('los avo', res));

    /*  useEffect(() => {
    (async function () {
      const response = await fetch('/api/avo');
      const data = await response.json();
      console.log('los avo', data);
    })();
  }); */
  });

  return (
    <div>
      <Navbar />
      <h1>Hola chikorita</h1>
      <div></div>
    </div>
  );
}
