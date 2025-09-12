import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, QrCode, Home, Info, Shield } from 'lucide-react';
import Button from './ui/Button';

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Scan', href: '/scan', icon: QrCode },
    { name: 'About', href: '/about', icon: Info },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-earth-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-earth-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-display font-bold text-earth-900">
                HerbTrace
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-earth-600 hover:text-earth-900 hover:bg-earth-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-earth-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-earth-200 bg-white">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'text-earth-600 hover:text-earth-900 hover:bg-earth-100'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-earth-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-6 h-6 bg-emerald-600 rounded flex items-center justify-center">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <span className="text-lg font-display font-bold text-earth-900">
                  HerbTrace
                </span>
              </div>
              <p className="text-earth-600 text-sm">
                Transparent, blockchain-verified provenance for Ayurvedic herbs.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-earth-900 mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link to="/scan" className="block text-sm text-earth-600 hover:text-earth-900">
                  Scan QR Code
                </Link>
                <Link to="/about" className="block text-sm text-earth-600 hover:text-earth-900">
                  About Us
                </Link>
                <Link to="/recall/D999XX" className="block text-sm text-earth-600 hover:text-earth-900">
                  Recall Check
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-earth-900 mb-4">Contact</h3>
              <div className="space-y-2 text-sm text-earth-600">
                <p>Email: info@herbtrace.com</p>
                <p>Phone: +91 98765 43210</p>
                <p>Support: 24/7 Available</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-earth-200 mt-8 pt-8 text-center">
            <p className="text-sm text-earth-600">
              © 2025 HerbTrace. All rights reserved. Built for SIH Hackathon.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
