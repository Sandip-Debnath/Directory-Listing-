// src\app\layout.js

import './globals.css';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SiteChrome from '@/components/SiteChrome';
import ReduxProvider from '@/providers/ReduxProvider';
import GmapsLoader from '@/components/GmapsLoader';

export const metadata = {
  title: 'BizDirectory',
  description: 'Next.js site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
      <ReduxProvider><SiteChrome>{children}
      
      <GmapsLoader />
      </SiteChrome></ReduxProvider>

        <Script src="/assets/plugins/jQuery/jquery.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/aos/aos.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/macy/macy.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/simple-parallax/simpleParallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/OwlCarousel2/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/theia-sticky-sidebar/ResizeSensor.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/theia-sticky-sidebar/theia-sticky-sidebar.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/waypoints/jquery.waypoints.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/counter-up/jquery.counterup.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/jquery-fancyfileuploader/fancy-file-uploader/jquery.ui.widget.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/jquery-fancyfileuploader/fancy-file-uploader/jquery.fileupload.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/jquery-fancyfileuploader/fancy-file-uploader/jquery.iframe-transport.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/jquery-fancyfileuploader/fancy-file-uploader/jquery.fancy-fileupload.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/ion.rangeSlider/ion.rangeSlider.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/magnific-popup/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/plugins/select2/select2.min.js" strategy="afterInteractive" />
        {/* Your template’s custom JS initializers */}
        <Script src="/assets/js/script.js" strategy="afterInteractive" />
        {/* <Script src="/assets/js/listing-map.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
