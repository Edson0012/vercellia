import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">Logo</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#home" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Serviços
              </a>
              <a href="#contato" className="text-gray-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contato
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
