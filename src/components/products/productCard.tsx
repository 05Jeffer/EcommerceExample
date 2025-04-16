import { Product } from '../../types/types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={typeof product.image === 'string' ? product.image : product.image.src} 
        alt={product.name}
        className="max-h-full max-w-full object-contain p-4"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-900">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold">${product.price.toFixed(2)}</span>
          <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors cursor-pointer">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};