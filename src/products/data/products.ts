export interface Product {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "UUID-ABC-1",
    name: "Teslo Hoodie",
    price: 15,
    rating: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_907658-MLA75078582075_032024-O.webp",
  },
  {
    id: "UUID-ABC-2",
    name: "Teslo Cap",
    price: 25,
    rating: 3,
    image: "https://http2.mlstatic.com/D_NQ_NP_966056-CBT75911293541_042024-O.webp",
  },
  {
    id: "UUID-ABC-3",
    name: "Let the sunshine",
    price: 36,
    rating: 2,
    image: "https://http2.mlstatic.com/D_NQ_NP_841743-MLA44618177421_012021-O.webp",
  },
  {
    id: "UUID-ABC-4",
    name: "Cybertruck Hoodie",
    price: 45,
    rating: 5,
    image: "https://http2.mlstatic.com/D_NQ_NP_710448-MLM79252748630_092024-O.webp",
  },
];
