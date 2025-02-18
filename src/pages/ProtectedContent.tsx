import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Lock, Book, Video, FileText } from 'lucide-react';

export default function ProtectedContent() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center">
        <Lock className="h-16 w-16 text-red-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          محتوى محمي
        </h2>
        <p className="text-gray-600">
          يرجى تسجيل الدخول للوصول إلى هذا المحتوى
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        المحتوى التعليمي المتقدم
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Book className="h-10 w-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">الدورات المتقدمة</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• البرمجة المتقدمة</li>
            <li>• الذكاء الاصطناعي</li>
            <li>• تطوير التطبيقات</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <Video className="h-10 w-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">محاضرات فيديو</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• شرح تفصيلي للمفاهيم</li>
            <li>• تطبيقات عملية</li>
            <li>• مشاريع تطبيقية</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <FileText className="h-10 w-10 text-indigo-600" />
          </div>
          <h3 className="text-xl font-semibold text-center mb-4">المصادر التعليمية</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• كتب إلكترونية</li>
            <li>• ملفات تدريبية</li>
            <li>• اختبارات تقييم</li>
          </ul>
        </div>
      </div>
    </div>
  );
}