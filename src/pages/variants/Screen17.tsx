import ProfileDrawer2 from '@/components/variants/ProfileDrawer2';
import React from 'react';

export default function Screen17() {
  return (
    <div className="relative w-full h-screen overflow-hidden font-display bg-background-light dark:bg-background-dark">
      {/* Main App Content (Blurred Background) */}
      <div className="h-full blur-sm">
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Ana Sayfa İçeriği</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Bu alan, çekmece açıldığında arkada kalan uygulama içeriğini temsil eder.
          </p>
        </div>
      </div>
      <ProfileDrawer2 />
    </div>
  );
}