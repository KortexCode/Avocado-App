import React from "react";
import { useRouter } from "next/router";

export default function productId() {
  const router = useRouter();
  console.log(router);
  const {
    query: { id },
    pathname,
  } = router;

  return (
    <div>
      <p>Esta es la página del producto con la ruta {pathname} </p>
      <p>Este es el parámetro es: {id} </p>
    </div>
  );
}
