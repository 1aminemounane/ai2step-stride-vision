
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/ai2step-logo.png" alt="AI2Step Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-700 hover:text-ai2step-600 px-3 py-2 text-sm font-medium">
              Fonctionnalités
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-ai2step-600 px-3 py-2 text-sm font-medium">
              Comment ça marche
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-ai2step-600 px-3 py-2 text-sm font-medium">
              Témoignages
            </a>
            <Link to="/auth">
              <Button variant="outline" className="ml-4">
                Se connecter
              </Button>
            </Link>
            <Link to="/auth?register=true">
              <Button className="ml-2 bg-ai2step-600 hover:bg-ai2step-700">
                S'inscrire
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#features"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Fonctionnalités
            </a>
            <a
              href="#how-it-works"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Témoignages
            </a>
            <Link 
              to="/auth" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Se connecter
            </Link>
            <Link 
              to="/auth?register=true"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-ai2step-600 hover:bg-ai2step-700"
              onClick={() => setIsMenuOpen(false)}
            >
              S'inscrire
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
