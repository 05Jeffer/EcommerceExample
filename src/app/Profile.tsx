import { NextPage } from 'next';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage: NextPage = () => {
  const { user, logout } = useAuth();

  if (!user) {
    return <div>No autenticado</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-bold mb-4">Perfil de usuario</h1>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Nombre</h2>
              <p>{user.name}</p>
            </div>
            
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p>{user.email}</p>
            </div>
            
            <button
              onClick={logout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;