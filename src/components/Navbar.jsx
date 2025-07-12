import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MdDashboard,
  MdWork,
  MdPeople,
  MdCalendarToday,
  MdPerson,
  MdReceipt,
} from 'react-icons/md';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/', icon: <MdDashboard /> },
    { name: 'Jobs', path: '/jobs', icon: <MdWork /> },
    { name: 'Technicians', path: '/technicians', icon: <MdPeople /> },
    { name: 'Calendar', path: '/calendar', icon: <MdCalendarToday /> },
    { name: 'Customers', path: '/customer', icon: <MdPerson /> },
    { name: 'Invoices & Payments', path: '/invoices', icon: <MdReceipt /> },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md px-6 md:px-12 py-4">
      <div className="flex items-center justify-between">
        <ul className="hidden md:flex space-x-10 font-medium text-gray-600">
          {navItems.map((item) => (
            <li key={item.path} className="relative flex items-center gap-1">
              <Link
                to={item.path}
                className={`flex items-center gap-2 hover:text-blue-600 transition ${
                  isActive(item.path) ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {item.icon}
                {item.name}
              </Link>
              {isActive(item.path) && (
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></span>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center justify-end w-10 h-10 rounded-full overflow-hidden border-2 border-blue-600 shadow-md">
          <img
            src={`https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`}
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-600 text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '×' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 px-2 py-1 ${
                isActive(item.path) ? 'text-blue-600 font-semibold' : ''
              }`}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
