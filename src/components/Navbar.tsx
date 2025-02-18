import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { BookOpen, LogIn, LogOut, UserPlus } from 'lucide-react';

export default function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 space-x-reverse">
            <BookOpen className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-900">المنصة التعليمية</span>
          </Link>

          <div className="flex items-center space-x-4 space-x-reverse">
            {user ? (
              <>
                <Link
                  to="/protected"
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  المحتوى المحمي
                </Link>
                <button
                  onClick={() => signOut()}
                  className="flex items-center space-x-2 space-x-reverse bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>تسجيل الخروج</span>
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center space-x-2 space-x-reverse text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium"
                >
                  <LogIn className="h-4 w-4" />
                  <span>تسجيل الدخول</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-2 space-x-reverse bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>إنشاء حساب</span>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}