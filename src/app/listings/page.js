// src\app\listings\page.js

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import listingImage from '@/../public/assets/dashboard/assets/dist/img/05.jpg';

export default function Listings() {
  return (
    <>

      <div className="border-0 card header rounded-0 sticky-top">

        <div className="border-bottom border-top p-3 p-xl-0 search-bar">
          <div className="row g-3 g-xl-0">

            <div className="col-12 d-xl-none">
              <div className="collapse show" id="CollapseText">
                <h2 className="fw-semibold text-center search-bar-title mb-0">Find what<br /> you <span className="font-caveat text-primary">want</span></h2>
              </div>
            </div>
            <div className="col-md-8 col-lg-5 col-xl-6">
              <div className="search-select-input has-icon has-icon-y position-relative">

                <input className="form-control" type="text" placeholder="What are you looking for?" />

                <svg className="form-icon-start position-absolute top-50 bi bi-pin-map-fill" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z" />
                  <path fillRule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z" />
                </svg>

                <svg className="form-icon-end position-absolute top-50 bi bi-crosshair" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#9b9b9b" viewBox="0 0 16 16">
                  <path d="M8.5.5a.5.5 0 0 0-1 0v.518A7.001 7.001 0 0 0 1.018 7.5H.5a.5.5 0 0 0 0 1h.518A7.001 7.001 0 0 0 7.5 14.982v.518a.5.5 0 0 0 1 0v-.518A7.001 7.001 0 0 0 14.982 8.5h.518a.5.5 0 0 0 0-1h-.518A7.001 7.001 0 0 0 8.5 1.018V.5Zm-6.48 7A6.001 6.001 0 0 1 7.5 2.02v.48a.5.5 0 0 0 1 0v-.48a6.001 6.001 0 0 1 5.48 5.48h-.48a.5.5 0 0 0 0 1h.48a6.002 6.002 0 0 1-5.48 5.48v-.48a.5.5 0 0 0-1 0v.48A6.001 6.001 0 0 1 2.02 8.5h.48a.5.5 0 0 0 0-1h-.48ZM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                </svg>

                <select className="input-select position-absolute top-50">
                  <option value="">0.5 km</option>
                  <option value="1">1 km</option>
                  <option value="2">5 km</option>
                  <option value="3">10 km</option>
                </select>
              </div>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-3 d-none d-lg-block">

              <div className="search-select has-icon position-relative">
                <select className="select2 form-select" aria-label="Default select example">
                  <option value="">Select Location</option>
                  <option value="1">It & Development</option>
                  <option value="2">Web & Mobile Dev</option>
                  <option value="3">Writing</option>
                  <option value="4">Sales & Marketing</option>
                  <option value="5">Music & Audio</option>
                </select>
                <svg className="form-icon-start position-absolute top-50 search-icon z-1 bi bi-geo-alt" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
              </div>

            </div>
            <div className="col-md-2 col-lg-2 col-xl-3 d-none d-lg-block">

              <div className="search-select has-icon position-relative">
                <select className="select2 form-select" aria-label="Default select example">
                  <option value="">All Categories</option>
                  <option value="1">It & Development</option>
                  <option value="2">Web & Mobile Dev</option>
                  <option value="3">Writing</option>
                  <option value="4">Sales & Marketing</option>
                  <option value="5">Music & Audio</option>
                </select>

                <svg className="form-icon-start position-absolute top-50 search-icon z-1 bi bi-app-indicator" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z" />
                  <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
              </div>

            </div>
            <div className="col-lg-3 col-md-4 col-mg-3 d-xl-none gap-3 gap-md-2 hstack justify-content-center">
              <a href="#" className="sidebarCollapse align-items-center d-flex justify-content-center filters-text fw-semibold gap-2">
                <i className="fa-solid fa-arrow-up-short-wide fs-18"></i>
                <span>All filters</span>
              </a>
              <div className="h-75 mt-auto vr d-md-none"></div>
              <a href="#" id="mapCollapse" className="align-items-center d-flex justify-content-center filters-text fw-semibold gap-2">
                <i className="fa-solid fa-map-location-dot fs-18"></i>
                <span>Map</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 py-xl-5 bg-gradient">
        <div className="container">
          <div className="row">

            <aside className="col-xl-3 filters-col content pe-lg-4 pe-xl-5 shadow-end">

              <div className="js-sidebar-filters-mobile">

                <div className="border-bottom d-flex justify-content-between align-items-center p-3 sidebar-filters-header d-xl-none">
                  <div className="align-items-center btn-icon d-flex filter-close justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
                    </svg>
                  </div>
                  <span className="fs-3 fw-semibold">Filters</span>
                  <span className="text-primary fw-medium">Clear</span>
                </div>

                <div className="sidebar-filters-body p-3 p-xl-0">
                  {/* <div className="mb-4 border-bottom pb-4">
                    <div className="mb-3">
                      <h4 className="fs-5 fw-semibold mb-1">Price Filter</h4>
                      <p className="mb-0 small">Select min and max price range</p>
                    </div>

                    <div className="js-range-slider"></div>

                  </div> */}
                  <div className="mb-4 border-bottom pb-4">
                    <div className="mb-3">
                      <h4 className="fs-5 fw-semibold mb-2">Categories</h4>
                      <p className="mb-0 small">Duis a leo sit amet odio volutpat auctor ut a lorem.</p>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" value="" id="skillsOne" />
                      <label className="form-check-label" htmlFor="skillsOne">Hotels<span className="count fs-13 ms-1 text-muted">(62)</span></label>
                    </div>

                    <div className="form-check mb-2">
                      {/* <input className="form-check-input" type="checkbox" value="" id="skillsTwo" checked /> */}

                      <input className="form-check-input" type="checkbox" value="" id="skillsTwo" />
                      <label className="form-check-label" htmlFor="skillsTwo">Beauty Spa<span className="count fs-13 ms-1 text-muted">(31)</span></label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" value="" id="skillsThree" />
                      <label className="form-check-label" htmlFor="skillsThree">Home Decor<span className="count fs-13 ms-1 text-muted">(20)</span></label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" value="" id="skillsFour" />
                      <label className="form-check-label" htmlFor="skillsFour">Wedding<span className="count fs-13 ms-1 text-muted">(43)</span></label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" value="" id="skillsFive" />
                      <label className="form-check-label" htmlFor="skillsFive">Education<span className="count fs-13 ms-1 text-muted">(16)</span></label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" value="" id="skillsSix" />
                      <label className="form-check-label" htmlFor="skillsSix">Rent & Hire<span className="count fs-13 ms-1 text-muted">(22)</span></label>
                    </div>

                    <div className="form-check mb-2">
                      <input className="form-check-input" type="checkbox" value="" id="skillsSeven" />
                      <label className="form-check-label" htmlFor="skillsSeven">Hospitals<span className="count fs-13 ms-1 text-muted">(21)</span></label>
                    </div>

                    <div className="form-check mb-0">
                      <input className="form-check-input" type="checkbox" value="" id="skillsEight" />
                      <label className="form-check-label" htmlFor="skillsEight">Other<span className="count fs-13 ms-1 text-muted">(17)</span></label>
                    </div>

                  </div>
                  <div className="mb-4 border-bottom pb-4">
                    <div className="mb-3">
                      <h4 className="fs-5 fw-semibold mb-1">Order by</h4>
                      <p className="mb-0 small">Duis a leo sit amet odio volutpat auctor ut a lorem.</p>
                    </div>

                    <select className="form-select">
                      <option value="1">Latest</option>
                      <option value="2">Nearby</option>
                      <option value="3">Top rated</option>
                      <option value="4">Random</option>
                      <option value="5">A-Z</option>
                    </select>

                  </div>

                  <button type="button" className="btn btn-primary w-100">Apply filters</button>

                  <a href="#" className="align-items-center d-flex fw-medium gap-2 justify-content-center mt-2 small text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z" />
                      <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                    </svg>
                    Clear filters
                  </a>

                </div>
              </div>

            </aside>

            <div className="col-xl-9 ps-lg-4 ps-xl-5 sidebar">

              <div className="d-flex flex-wrap align-items-center mb-3 gap-2">
                <div className="col fs-18 text-nowrap">All <span className="fw-bold text-dark">1,161</span> listing found</div>

                <div className="border-0 card d-inline-flex flex-row flex-wrap gap-1 p-1 rounded-3 shadow-sm">
                  <a href="/listings" className="btn btn-light btn-sm px-2 py-1"><i className="fa-solid fa-border-all"></i></a>
                  <a href="/listings" className="btn btn-light btn-sm px-2 py-1"><i className="fa-solid fa-list"></i></a>
                </div>

              </div>

              <div className="card border-0 shadow-sm overflow-hidden rounded-4 mb-4 card-hover card-hover-bg">
                <a href="/listings" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="col-lg-5 col-md-5 col-xl-4 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">

                        <Image src={listingImage} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-blur card-badge d-inline-block position-absolute start-0 text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>
                        {/* <div className="bg-blur card-badge d-inline-block position-absolute start-0 text-white z-2">$100 off $399: eblwc</div> */}
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-8 p-3 p-lg-4 p-md-3 p-sm-4">
                      <div className="d-flex flex-column h-100">
                        <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-1">
                          <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                            </svg>
                          </a>
                        </div>
                        <div className="align-items-center d-flex flex-wrap gap-1 text-primary  card-start mb-2">

                          <i className="fa-solid fa-star"></i>

                          <span className="fw-medium text-primary"><span className="fs-6 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                        </div>

                        <h4 className="fs-18 fw-semibold mb-0">
                          Burnowl Tours & Travels
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3 fs-15">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                        <div className="d-flex flex-wrap gap-3 mt-auto z-1">
                          <a href="tel:+4733378901" className="d-flex gap-2 align-items-center fs-13 fw-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#9b9b9b" className="bi bi-telephone" viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <span>(123) 456-7890</span>
                          </a>
                          <a href="#" className="d-flex gap-2 align-items-center fs-13 fw-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9b9b9b" className="bi bi-compass" viewBox="0 0 16 16">
                              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                            </svg>
                            <span>Directions</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card border-0 shadow-sm overflow-hidden rounded-4 mb-4 card-hover card-hover-bg">
                <a href="/listings" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="col-lg-5 col-md-5 col-xl-4 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">

                        <Image src={listingImage} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-blur card-badge d-inline-block position-absolute start-0 text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>
                        {/* <div className="bg-blur card-badge d-inline-block position-absolute start-0 text-white z-2">$100 off $399: eblwc</div> */}
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-8 p-3 p-lg-4 p-md-3 p-sm-4">
                      <div className="d-flex flex-column h-100">
                        <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-1">
                          <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                            </svg>
                          </a>
                        </div>
                        <div className="align-items-center d-flex flex-wrap gap-1 text-primary  card-start mb-2">

                          <i className="fa-solid fa-star"></i>

                          <span className="fw-medium text-primary"><span className="fs-6 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                        </div>

                        <h4 className="fs-18 fw-semibold mb-0">
                          Burnowl Tours & Travels
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3 fs-15">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                        <div className="d-flex flex-wrap gap-3 mt-auto z-1">
                          <a href="tel:+4733378901" className="d-flex gap-2 align-items-center fs-13 fw-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#9b9b9b" className="bi bi-telephone" viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <span>(123) 456-7890</span>
                          </a>
                          <a href="#" className="d-flex gap-2 align-items-center fs-13 fw-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9b9b9b" className="bi bi-compass" viewBox="0 0 16 16">
                              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                            </svg>
                            <span>Directions</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="card border-0 shadow-sm overflow-hidden rounded-4 mb-4 card-hover card-hover-bg">
                <a href="/listings" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="col-lg-5 col-md-5 col-xl-4 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">

                        <Image src={listingImage} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-blur card-badge d-inline-block position-absolute start-0 text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>
                        {/* <div className="bg-blur card-badge d-inline-block position-absolute start-0 text-white z-2">$100 off $399: eblwc</div> */}
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-8 p-3 p-lg-4 p-md-3 p-sm-4">
                      <div className="d-flex flex-column h-100">
                        <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-1">
                          <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                            </svg>
                          </a>
                        </div>
                        <div className="align-items-center d-flex flex-wrap gap-1 text-primary  card-start mb-2">

                          <i className="fa-solid fa-star"></i>

                          <span className="fw-medium text-primary"><span className="fs-6 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                        </div>

                        <h4 className="fs-18 fw-semibold mb-0">
                          Burnowl Tours & Travels
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3 fs-15">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>

                        <div className="d-flex flex-wrap gap-3 mt-auto z-1">
                          <a href="tel:+4733378901" className="d-flex gap-2 align-items-center fs-13 fw-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="#9b9b9b" className="bi bi-telephone" viewBox="0 0 16 16">
                              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                            </svg>
                            <span>(123) 456-7890</span>
                          </a>
                          <a href="#" className="d-flex gap-2 align-items-center fs-13 fw-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9b9b9b" className="bi bi-compass" viewBox="0 0 16 16">
                              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                            </svg>
                            <span>Directions</span>
                          </a>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <nav className="justify-content-center mt-5 pagination align-items-center">
                <a className="prev page-numbers" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                  </svg>
                  previous
                </a>
                <span className="page-numbers current">1</span>
                <a className="page-numbers" href="#">2</a>
                <a className="next page-numbers" href="#">
                  next
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                  </svg>
                </a>
              </nav>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
