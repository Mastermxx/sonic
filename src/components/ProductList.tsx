import React from 'react';
import { formatDate } from '../utils/dateFormatter';

interface Product {
  id: string;
  name: string;
  number: string;
  price: number;
  images: { url: string; quality: string }[];
  numberOfDrawers: string;
  maxLoad: string;
  expectedDeliveryDate: string;
}

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul className="flex flex-row flex-wrap gap-2.5">
      {products.map((product) => (
        <li key={product.id} className='bg-white max-w-32 p-2.5 rounded text-center'>
          <div>
            <img src={product.images[0].url} alt={product.name} />
          </div>
          <div className='text-sm'>{product.name}</div>
          <div className='text-[red]'>€ {product.price}</div>
          <div className='text-xs'>{formatDate(product.expectedDeliveryDate)}</div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
