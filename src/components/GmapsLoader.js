// src/components/GmapsLoader.js
'use client'
import Script from 'next/script'

export default function GmapsLoader() {
  return (
    <Script
      src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`}
      strategy="afterInteractive"
      onLoad={() => window.dispatchEvent(new Event('gmaps:loaded'))}
    />
  );
}
