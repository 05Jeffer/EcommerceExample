import Link from 'next/link';
import { useAuth } from '../../contexts/AuthContext';

export const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600">
          Mi E-commerce
        </Link>
        
        <nav className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-indigo-600">
            Inicio
          </Link>
          
          {user ? (
            <>
              <Link href="/profile" className="text-gray-700 hover:text-indigo-600">
                Perfil
              </Link>
              <button 
                onClick={logout}
                className="text-gray-700 hover:text-indigo-600"
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-gray-700 hover:text-indigo-600">
                Iniciar sesión
              </Link>
              <Link href="/auth/register" className="text-gray-700 hover:text-indigo-600">
                Registrarse
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};