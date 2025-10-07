// src/app/dashboard/DashboardClientShell.jsx
// 'use client';

// import { useEffect } from 'react';

// export default function DashboardClientShell({ children }) {
//   useEffect(() => {
//     document.body.classList.add('dashboard');
//     return () => document.body.classList.remove('dashboard');
//   }, []);

//   return <>{children}</>;
// }

"use client";

import { useEffect, useState, useCallback } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import DashboardHeader from "@/components/dashboard/Header";
import DashboardFooter from "@/components/dashboard/Footer";

export default function DashboardClientShell({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setSidebarOpen(false), []);
  const toggleSidebar = useCallback(() => setSidebarOpen(v => !v), []);

  // body class for dashboard
  useEffect(() => {
    document.body.classList.add("dashboard");
    return () => document.body.classList.remove("dashboard");
  }, []);

  // ESC to close
  useEffect(() => {
    const onEsc = (e) => e.key === "Escape" && closeSidebar();
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [closeSidebar]);

  return (
    <div className={`wrapper sidebar-mini ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* pass open state to Sidebar so it can add the 'active' class */}
      <Sidebar isOpen={sidebarOpen} />

      <div className="content-wrapper">
        <div className="main-content">
          {/* give Header an onToggle handler */}
          <DashboardHeader onToggleSidebar={toggleSidebar} />

          <div className="body-content">
            <div className="decoration blur-2"></div>
            <div className="decoration blur-3"></div>
            <div className="container-xxl">{children}</div>
          </div>
        </div>

        <DashboardFooter />

        {/* overlay closes the sidebar on click */}
        <div
          className={`overlay ${sidebarOpen ? "active" : ""}`}
          onClick={closeSidebar}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
