'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Package, Search, MessageCircle, LogOut } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path ? 'bg-blue-700 text-white' : 'text-gray-300 hover:bg-blue-600 hover:text-white';
  };

  const navItems = [
    { name: 'ダッシュボード', href: '/dashboard', icon: <Home className="w-5 h-5" /> },
    { name: '在庫管理', href: '/inventory', icon: <Package className="w-5 h-5" /> },
    { name: '資材検索', href: '/search', icon: <Search className="w-5 h-5" /> },
    { name: 'チャット', href: '/chat', icon: <MessageCircle className="w-5 h-5" /> },
  ];

  return (
    <nav className="bg-blue-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">メニューを開く</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/dashboard" className="text-white font-bold text-xl">リースシェア</Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${isActive(item.href)} flex items-center space-x-1 rounded-md px-3 py-2 text-sm font-medium`}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="flex items-center space-x-1 rounded-md bg-red-600 px-3 py-2 text-sm font-medium text-white hover:bg-red-700"
            >
              <LogOut className="w-4 h-4" />
              <span>ログアウト</span>
            </button>
          </div>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${isActive(item.href)} flex items-center space-x-2 rounded-md px-3 py-2 text-base font-medium`}
              onClick={toggleMenu}
            >
              {item.icon}
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 