'use client';
import { NextPage } from 'next';
import { ProductList } from '../components/products/productList';
import { Header } from '../components/layout/header';
import { useAuth } from '../contexts/authContext';
import { Product } from '@/types/types';
import Iphone from '../image/iphone.jpg';
import Airpods from '../image/airpods.jpg';
import Oppo from '../image/oppo.jpg';
// Datos estáticos de productos
const staticProducts: Product[] = [
    {
      id: 1,
      name: 'iPhone 13 Pro',
      description: '128GB, Grafito, 5G, 6.1 pulgadas',
      price: 999.99,
      image: Iphone,
      category: 'Smartphones',
      
    },
    {
      id: 2,
      name: 'MacBook Air M2',
      description: 'Chip M2, 8GB RAM, 256GB SSD',
      price: 1199.99,
      image: Oppo,
      category: 'Laptops',
      
    },
    {
      id: 3,
      name: 'AirPods Pro',
      description: 'Cancelación activa de ruido',
      price: 249.99,
      image: Airpods,
      category: 'Audio',
      
    },
    {
      id: 4,
      name: 'Oppo A17',
      description: 'Resistente al agua',
      price: 509.99,
      image: Oppo,
      category: 'Smartphones',
      
    },
  ];

const Home: NextPage = () => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
          <div className="min-h-screen bg-gray-100">
            <Header />
            <main className="container mx-auto py-8">
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
              </div>
            </main>
          </div>
        );
      }
    
      return (
        <div className="min-h-screen bg-gray-100">
          <Header />
          
          <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
            {/* Banner principal */}
            <div className="bg-indigo-700 rounded-lg p-8 mb-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {user ? `¡Bienvenido de vuelta, ${user.name}!` : 'Descubre nuestras ofertas'}
              </h1>
              <p className="text-xl mb-6">
                {user ? 'Tenemos nuevas ofertas para ti' : 'Regístrate y obtén un 10% de descuento en tu primera compra'}
              </p>
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors cursor-pointer">
                Ver ofertas
              </button>
            </div>
    
            {/* Sección de productos destacados */}
            <section className="mb-12">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Productos destacados</h2>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  Ver todos →
                </button>
              </div>
              
              <ProductList products={staticProducts} />
            </section>
    
            {/* Sección de categorías */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Explora por categorías</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Electrónica', 'Hogar', 'Moda', 'Deportes'].map((category) => (
                  <div 
                    key={category}
                    className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
                  >
                    <div className="bg-indigo-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                      <span className="text-indigo-600 text-2xl">📱</span>
                    </div>
                    <h3 className="font-medium text-gray-900">{category}</h3>
                  </div>
                ))}
              </div>
            </section>
          </main>
    
          {/* Footer */}
          <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Mi E-commerce</h3>
                  <p className="text-gray-400">Las mejores ofertas en tecnología y electrónica.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
                  <ul className="space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-white">Inicio</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Productos</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white">Contacto</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                  <p className="text-gray-400">contacto@miecommerce.com</p>
                  <p className="text-gray-400">+1 234 567 890</p>
                </div>
              </div>
              <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Mi E-commerce. Todos los derechos reservados.</p>
              </div>
            </div>
          </footer>
        </div>
      );
    }

    export default Home;