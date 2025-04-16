import { Product } from '../../types/Types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-indigo-600 font-bold">${product.price.toFixed(2)}</span>
          <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700 transition-colors">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
};