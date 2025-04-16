'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/authContext';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="text-center p-10 bg-white rounded-2xl shadow-xl max-w-2xl w-full">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Acceso no autorizado</h1>
          <p className="text-2xl text-gray-600 mb-8">Debes iniciar sesión para ver esta página</p>
          <button
            onClick={() => router.push('/auth/login')}
            className="w-full max-w-xs mx-auto bg-indigo-600 text-white py-4 px-6 rounded-xl hover:bg-indigo-700 transition-colors text-xl"
          >
            Ir a inicio de sesión
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4">
      <div className="container mx-auto py-8">
        {/* Header con foto de perfil */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
          <div className="px-8 pb-8 -mt-20 flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="flex items-end">
              <div className="h-40 w-40 rounded-full border-8 border-white bg-white shadow-xl overflow-hidden">
                <div className="h-full w-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-6xl font-bold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="ml-8 mb-4">
                <h1 className="text-4xl font-bold text-gray-900">{user.name}</h1>
                <p className="text-2xl text-indigo-600 font-medium mt-2">Usuario Premium</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="mt-6 md:mt-0 px-8 py-4 bg-white border-2 border-gray-300 rounded-xl text-xl text-gray-700 hover:bg-gray-50 transition-colors shadow-md cursor-pointer"
            >
              Cerrar sesión
            </button>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sección de información */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Información personal</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-medium text-gray-500">Nombre completo</h3>
                  <p className="text-2xl text-gray-900 mt-2">{user.name}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-medium text-gray-500">Correo electrónico</h3>
                  <p className="text-2xl text-gray-900 mt-2">{user.email}</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-16 w-16 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600">
                  <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-medium text-gray-500">Ubicación</h3>
                  <p className="text-2xl text-gray-900 mt-2">Lima, Peru</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sección de estadísticas */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8">Tu actividad</h2>
            
            <div className="space-y-8">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-medium text-gray-500">Pedidos completados</span>
                  <span className="text-2xl font-semibold text-indigo-600">12</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-medium text-gray-500">Productos favoritos</span>
                  <span className="text-2xl font-semibold text-indigo-600">5</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-medium text-gray-500">Miembro desde</span>
                  <span className="text-2xl font-semibold text-indigo-600">2023</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div className="bg-indigo-600 h-4 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </div>

              <div className="pt-6 border-t-2 border-gray-200">
                <h3 className="text-xl font-medium text-gray-500 mb-4">Nivel de cliente</h3>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-6 py-3 rounded-2xl text-xl font-medium bg-indigo-100 text-indigo-800">
                    Premium
                  </span>
                  <span className="ml-4 text-lg text-gray-500">3/5 estrellas</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de acciones */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-20 w-20 rounded-2xl bg-green-50 flex items-center justify-center text-green-600">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-medium text-gray-900">Suscripción Premium</h3>
                <p className="text-xl text-gray-500 mt-2">Actualiza tu plan para más beneficios</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-20 w-20 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-medium text-gray-900">Invita amigos</h3>
                <p className="text-xl text-gray-500 mt-2">Gana créditos por cada amigo</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-20 w-20 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600">
                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-6">
                <h3 className="text-2xl font-medium text-gray-900">Configuración</h3>
                <p className="text-xl text-gray-500 mt-2">Personaliza tu experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}