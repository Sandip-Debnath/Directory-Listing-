// src/app/dashboard/layout.js
import './globals.css';
import Script from 'next/script';
import DashboardClientShell from './DashboardClientShell';
import AuthGuard from "@/components/AuthGuard";

export const metadata = {
  title: 'Dashboard',
  description: 'User dashboard',
};

export default function DashboardLayout({ children }) {
  return (
    <>
      {/* Client shell adds body class; do NOT render <html>/<body> here */}
      <AuthGuard>
      <DashboardClientShell>
        {children}
      </DashboardClientShell>
      </AuthGuard>

      {/* Dashboard-specific JS */}
      <Script src="/assets/dashboard/assets/plugins/jQuery/jquery.min.js" strategy="afterInteractive" />
      
      <Script src="/assets/dashboard/assets/plugins/bootstrap/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/metisMenu/metisMenu.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/perfect-scrollbar/perfect-scrollbar.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/toastr/toastr.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/datatables/jquery.dataTables.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/datatables/dataTables.bootstrap5.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/apexcharts/apexcharts.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/jquery.counterup/jquery.waypoints.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/jquery.counterup/jquery.counterup.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/plugins/magnific-Popup/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/dist/js/app.min.js" strategy="afterInteractive" />
      <Script src="/assets/dashboard/assets/dist/js/dashboard.js" strategy="afterInteractive" />

      <script src="/assets/dashboard/assets/plugins/jquery-fancyfileuploader/fancy-file-uploader/jquery.fancy-fileupload.js" strategy="afterInteractive" ></script>
    </>
  );
}
