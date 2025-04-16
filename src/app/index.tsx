import { NextPage } from 'next';
import { ProductList } from '../components/products/ProductsList';
import { Header } from '../components/layout/Header';
import { useAuth } from '../contexts/AuthContext';

// Datos estáticos de productos
const staticProducts = [
  {
    id: 1,
    name: 'Producto 1',
    description: 'Descripción del producto 1',
    price: 19.99,
    image: '/placeholder-product.jpg',
    category: 'Electrónica'
  },
  {
    id: 2,
    name: 'Producto 2',
    description: 'Descripción del producto 2',
    price: 29.99,
    image: '/placeholder-product.jpg',
    category: 'Hogar'
  },
  // Más productos...
];

const Home: NextPage = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <main className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">
          {user ? `Bienvenido, ${user.name}` : 'Bienvenido a nuestra tienda'}
        </h1>
        
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Productos destacados</h2>
          <ProductList products={staticProducts} />
        </div>
      </main>
    </div>
  );
};

export default Home;