// src/components/Login.jsx

import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">Instagram</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Número de teléfono, nombre de usuario o correo electrónico"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Iniciar sesión
          </button>
        </form>
        <div className="mt-6 text-center">
          <span className="text-gray-500">¿No tienes una cuenta? </span>
          <a href="#" className="text-blue-500 font-semibold">Regístrate</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
