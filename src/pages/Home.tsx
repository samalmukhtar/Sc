import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, GraduationCap, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          مرحباً بكم في المنصة التعليمية
        </h1>
        <p className="text-xl text-gray-600">
          منصة تعليمية متكاملة للتعلم والتطور
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <BookOpen className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">دورات متنوعة</h2>
          <p className="text-gray-600 text-center">
            اكتشف مجموعة واسعة من الدورات في مختلف المجالات
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">شهادات معتمدة</h2>
          <p className="text-gray-600 text-center">
            احصل على شهادات معتمدة بعد إكمال الدورات
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Users className="h-12 w-12 text-indigo-600" />
          </div>
          <h2 className="text-xl font-semibold text-center mb-2">مجتمع تفاعلي</h2>
          <p className="text-gray-600 text-center">
            تواصل مع المتعلمين والخبراء في مجالك
          </p>
        </div>
      </div>

      <div className="text-center">
        <Link
          to="/register"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition-colors"
        >
          ابدأ رحلة التعلم الآن
        </Link>
      </div>
    </div>
  );
}