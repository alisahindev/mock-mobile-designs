import ProfileDrawer from '@/components/variants/ProfileDrawer';
import React from 'react';

export default function Screen1() {
  return (
    <div className="relative w-full h-screen mx-auto flex" style={{ maxWidth: '420px' }}>
      {/* Background Overlay */}
      <div className="absolute inset-0 z-10 bg-black/30"></div>
      <ProfileDrawer />
    </div>
  );
}