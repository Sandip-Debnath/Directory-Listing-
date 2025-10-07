// src/components/SiteChrome.jsx
'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SiteChrome({ children }) {
  const pathname = usePathname();
  const hideChrome =
    pathname === '/dashboard' || pathname?.startsWith('/dashboard/');

  if (hideChrome) {
    // Dashboard routes: no Header/Footer
    return <>{children}</>;
  }

  // All other routes: include Header/Footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
