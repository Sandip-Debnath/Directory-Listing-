'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '@/../public/assets/images/logo.png';
import logoWhite from '@/../public/assets/images/logo-white.png';

export default function Header() {
  // Safe default for SSR, then read from localStorage in effect
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = typeof window !== 'undefined'
      ? localStorage.getItem('theme')
      : null;
    setTheme(saved || 'light');
  }, []);

  useEffect(() => {
    // apply theme to <html>
    document.documentElement.setAttribute('data-bs-theme', theme);

    // persist choices
    localStorage.setItem('theme', theme);
    localStorage.setItem('mapStyle', theme);

    // swap background lines
    const imgPath = theme === 'dark'
      ? '/assets/images/lines-2.svg'
      : '/assets/images/lines.svg';
    localStorage.setItem('imagePath', imgPath);

    // update elements immediately
    document.querySelectorAll('.js-bg-image-lines').forEach((el) => {
      el.setAttribute('data-image-src', imgPath);
      el.style.backgroundImage = `url(${imgPath})`;
    });
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand m-0" href="/">
          {/* use public paths, not imports */}
          <Image className="logo-white" src={logoWhite} alt="BizDirectory white" width={140} height={40} priority />
          <Image className="logo-dark" src={logo} alt="BizDirectory dark" width={140} height={40} priority />
        </Link>

        <div className="d-flex order-lg-2">
          {/* Use <a> for static HTML files in /public and to attach data attributes */}
          <a
            href="/signin"
            className="d-flex align-items-center justify-content-center p-0 btn-user position-relative"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-custom-class="custom-tooltip"  /* <-- correct attribute */
            data-bs-title="Favourite"
          >
            <i className="fa-solid fa-heart"></i>
            <span className="align-items-center bg-primary d-flex end-0 fs-11 justify-content-center nav-count position-absolute rounded-circle text-white">
              0
            </span>
          </a>

          {/* Internal Next route -> Link is fine */}
          <Link
            href="/login"
            className="d-flex align-items-center justify-content-center p-0 btn-user"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            data-bs-custom-class="custom-tooltip"  /* <-- lower-case/hyphen */
            data-bs-title="Sign In"
          >
            <i className="fa-solid fa-user-plus"></i>
          </Link>

          <button
            type="button"
            id="themeToggleBtn"
            onClick={toggleTheme}
            className="align-items-center bg-transparent border-0 btn-user d-flex justify-content-center p-0"
          >
            <i className={theme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'} />
          </button>

          {/* Static HTML in /public */}
          <a
            href="/add-listing.html"
            className="btn btn-primary d-none d-sm-flex fw-medium gap-2 hstack rounded-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
            <div className="vr d-none d-sm-inline-block"></div>
            <span className="d-none d-sm-inline-block">Add Listing</span>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span id="nav-icon" className="">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              {/* Use <a> for dropdown toggles */}
              <a
                className="nav-link dropdown-toggle active"
                href="#"
                aria-current="page"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Home
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" href="/">Home (Main)</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle material-ripple"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="typcn typcn-weather-stormy top-menu-icon"></i>
                Dashboard
              </a>
              <ul className="dropdown-menu">
                {/* static dashboard HTML in /public */}
                <li><a className="dropdown-item" href="/dashboard">Dashboard</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-expanded="false"
              >
                Listing
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/listings">Explore</a>
            </li>
          </ul>

          <div className="d-sm-none">
            <a href="/signin.html" className="btn btn-primary d-flex gap-2 hstack justify-content-center rounded-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
              <div className="vr d-none d-sm-inline-block"></div>
              <span>Add Listing</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
