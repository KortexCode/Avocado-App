//Este archivo d.ts permite declarar tipos y typescript es capaz de reconocer
//estos tipos leerlos en cualquier otro archivo del proyecto sin la necesidad 
//de importalos. Pero si se debe hacer export de las declaraciones de funciones
//o variables

type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}
