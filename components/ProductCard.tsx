import React from 'react';
type Props = {
  product : TProduct
}

function ProductCard(props: Props) {
  
  const {name, price, image } = props.product;
  return (
    <div>
      <p>{name}</p>
      <p>${price}</p>
      <img src={image} alt="avocado image" />
    </div>
  );
}

export {ProductCard};
