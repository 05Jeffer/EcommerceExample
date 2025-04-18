import { StaticImageData } from 'next/image';

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string | StaticImageData;
    category: string;
  }
  
  export interface User {
    id: number;
    email: string;
    name: string;
  }
  
  export interface AuthToken {
    token: string;
  }