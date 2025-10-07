// src\app\page.js

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import bgImage from '@/../public/assets/images/header/lg-03.jpg';
import backgroundImage from '@/../public/assets/images/header/lg-04.jpg';
import handyperson from '@/../public/assets/images/icon/handyperson.png';
import landscaping from '@/../public/assets/images/icon/landscaping.png';
import plumbing from '@/../public/assets/images/icon/plumbing.png';
import electrical from '@/../public/assets/images/icon/electrical.png';
import remodeling from '@/../public/assets/images/icon/remodeling.png';
import roofing from '@/../public/assets/images/icon/roofing.png';
import locations01 from '@/../public/assets/images/locations/01.jpg';
import locations02 from '@/../public/assets/images/locations/02.jpg';
import locations03 from '@/../public/assets/images/locations/03.jpg';
import locations04 from '@/../public/assets/images/locations/04.jpg';
import locations05 from '@/../public/assets/images/locations/05.jpg';
import locations06 from '@/../public/assets/images/locations/06.jpg';
import aboutUser from '@/../public/assets/images/about-2.jpg';
import listing1 from '@/../public/assets/images/place/01.jpg';
import listing2 from '@/../public/assets/images/place/02.jpg';
import listing3 from '@/../public/assets/images/place/03.jpg';
import listing4 from '@/../public/assets/images/place/04.jpg';
import listing5 from '@/../public/assets/images/place/05.jpg';





export default function Home() {
  return (

    <>



      <div className="hero-header-grid align-items-center d-flex mx-3 overflow-hidden position-relative rounded-4">

        <Image className="bg-image" src={backgroundImage} alt="Image" />

        <div className="container position-relative z-1">
          <div className="p-4 p-sm-5 position-relative rounded-5 z-1 search-content">
            <h1 className="display-3 fw-bold hero-header_title mb-2 text-capitalize text-white text-center">Just Input Your Location & Find <span className="font-caveat text-span">Important</span> & Exciting Spots</h1>
            <div className="lead mb-4 mb-sm-5 text-center text-white">You'll get comprehensive results based on the provided location.</div>
            <div className="row justify-content-center">
              <div className="col-lg-10">

                <div className="border-0 card d-flex flex-md-row position-relative search-wrapper">
                  <div className="align-items-center d-flex search-field w-100">
                    <div className="svg-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </div>

                    <input type="email" className="form-control search-input" placeholder="What are you looking for?" />

                  </div>
                  <div className="vertical-divider"></div>
                  <div className="align-items-center d-flex search-field w-100">
                    <div className="svg-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                      </svg>
                    </div>

                    <select className="form-select search-select-field">
                      <option value="">Location</option>
                      <option value="1">Florence, Italy</option>
                      <option value="2">Second choice</option>
                      <option value="3">Third choice</option>
                    </select>

                  </div>
                  <input type="submit" value="Search places" className="btn btn-primary rounded-5 mt-3 mt-md-0" />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 position-relative overflow-hidden bg-light mx-3 mt-3 rounded-4">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-8 col-xl-7">
              <div className="section-header text-center mb-5" data-aos="fade-down">
                <div className="d-inline-block font-caveat fs-1 fw-medium section-header__subtitle text-capitalize text-primary">Let’s Explore!</div>
                <h2 className="display-5 fw-semibold mb-3 section-header__title text-capitalize">Featured Categories</h2>
                <div className="sub-title fs-16">Discover exciting categories. <span className="text-primary fw-semibold">Find what you’re looking for.</span></div>
              </div>
            </div>
          </div>
          <div className="row g-3 g-ld-4">
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-building-user"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Appartment</a></h3>
                  <p className="mb-0 small">99+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-utensils"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Restaurant</a></h3>
                  <p className="mb-0 small">55+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-headphones"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Music</a></h3>
                  <p className="mb-0 small">55+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-bag-shopping"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Shopping</a></h3>
                  <p className="mb-0 small">80+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-tv"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">TV Shows</a></h3>
                  <p className="mb-0 small">96+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-dumbbell"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Gymnasiums</a></h3>
                  <p className="mb-0 small">21+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-calendar-days"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Events</a></h3>
                  <p className="mb-0 small">35+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-bullhorn"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Classifieds</a></h3>
                  <p className="mb-0 small">51+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-martini-glass-citrus"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Nightlife</a></h3>
                  <p className="mb-0 small">49+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-building-user"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Appartment</a></h3>
                  <p className="mb-0 small">99+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-utensils"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Restaurant</a></h3>
                  <p className="mb-0 small">55+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 d-flex">
              <div className="align-items-center border-0 card card-hover d-flex flex-fill flex-row flex-wrap p-3 p-sm-3 rounded-4 shadow-sm w-100">
                <div className="flex-shrink-0">
                  <div className="align-items-center bg-light d-flex fs-4 justify-content-center rounded-3 text-primary category-icon-box">
                    <i className="fa-solid fa-headphones"></i>
                  </div>
                </div>
                <div className="flex-grow-1 ms-2 ms-md-3">
                  <h3 className="fs-19 fw-semibold mb-1"><a href="">Music</a></h3>
                  <p className="mb-0 small">55+ listings</p>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold gap-2 link-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="py-5 position-relative overflow-hidden">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-8 col-xl-7">

              <div className="section-header text-center mb-5" data-aos="fade-down">

                <div className="d-inline-block font-caveat fs-1 fw-medium section-header__subtitle text-capitalize text-primary">Places</div>

                <h2 className="display-5 fw-semibold mb-3 section-header__title text-capitalize">Discover your favourite place</h2>

                <div className="sub-title fs-16">Discover exciting categories. <span className="text-primary fw-semibold">Find what you’re looking for.</span></div>

              </div>

            </div>
          </div>
          <div className="listings-carousel owl-carousel owl-theme owl-nav-bottom">

            <div className="card rounded-3 w-100 flex-fill overflow-hidden border-0 dark-overlay">

              <a href="" className="stretched-link z-2"></a>

              <div className="card-img-wrap card-image-hover overflow-hidden">
                <Image src={listing1} alt="" className="img-fluid" />
                <div className="bg-primary card-badge d-inline-block text-white position-absolute z-1">Featured</div>

                <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-2">
                  <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                  </a>

                </div>
              </div>

              <div className="bottom-0 d-flex flex-column p-4 position-absolute position-relative text-white w-100 z-1">
                <div className="align-items-center bg-primary bottom-0 cat-icon d-flex end-0 justify-content-center mb-4 me-4 position-absolute rounded-circle text-white top-auto"><i className="fa-solid fa-shop"></i></div>
                <div className="align-items-center card-start d-flex flex-wrap gap-1 mb-1">

                  <i className="fa-solid fa-star"></i>


                  <span className="fw-medium"><span className="fs-5 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                </div>

                <h3 className="fs-5 fw-semibold mb-0">Green Mart Apartment<i className="fa-solid fa-circle-check fs-6 ms-1 text-success"></i></h3>

              </div>
            </div>

            <div className="card rounded-3 w-100 flex-fill overflow-hidden border-0 dark-overlay">

              <a href="" className="stretched-link z-2"></a>

              <div className="card-img-wrap card-image-hover overflow-hidden">
                <Image src={listing2} alt="" className="img-fluid" />
                <div className="bg-primary card-badge d-inline-block text-white position-absolute z-1">Featured</div>
                <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-2">
                  <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                  </a>

                </div>
              </div>

              <div className="bottom-0 d-flex flex-column p-4 position-absolute position-relative text-white w-100 z-1">
                <div className="align-items-center bg-primary bottom-0 cat-icon d-flex end-0 justify-content-center mb-4 me-4 position-absolute rounded-circle text-white top-auto"><i className="fa-solid fa-utensils"></i></div>
                <div className="align-items-center card-start d-flex flex-wrap gap-1 mb-1">

                  <i className="fa-solid fa-star"></i>

                  <span className="fw-medium"><span className="fs-5 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                </div>

                <h3 className="fs-5 fw-semibold mb-0">Chuijhal Hotel And Restaurant</h3>

              </div>
            </div>

            <div className="card rounded-3 w-100 flex-fill overflow-hidden border-0 dark-overlay">

              <a href="" className="stretched-link z-2"></a>

              <div className="card-img-wrap card-image-hover overflow-hidden">
                <Image src={listing3} alt="" className="img-fluid" />
                <div className="bg-primary card-badge d-inline-block text-white position-absolute z-1">Featured</div>

                <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-2">
                  <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                  </a>

                </div>
              </div>

              <div className="bottom-0 d-flex flex-column p-4 position-absolute position-relative text-white w-100 z-1">
                <div className="align-items-center bg-primary bottom-0 cat-icon d-flex end-0 justify-content-center mb-4 me-4 position-absolute rounded-circle text-white top-auto"><i className="fa-solid fa-ethernet"></i></div>
                <div className="align-items-center card-start d-flex flex-wrap gap-1 mb-1">

                  <i className="fa-solid fa-star"></i>

                  <span className="fw-medium"><span className="fs-5 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                </div>

                <h3 className="fs-5 fw-semibold mb-0">The Barber's Lounge</h3>

              </div>
            </div>

            <div className="card rounded-3 w-100 flex-fill overflow-hidden border-0 dark-overlay">

              <a href="" className="stretched-link z-2"></a>

              <div className="card-img-wrap card-image-hover overflow-hidden">
                <Image src={listing4} alt="" className="img-fluid" />
                <div className="bg-primary card-badge d-inline-block text-white position-absolute z-1">Featured</div>
                <div className="d-flex end-0 gap-2 me-3 mt-3 position-absolute top-0 z-2">
                  <a href="#" className="btn-icon shadow-sm d-flex align-items-center justify-content-center text-primary bg-light rounded-circle" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Bookmark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"></path>
                    </svg>
                  </a>

                </div>
              </div>

              <div className="bottom-0 d-flex flex-column p-4 position-absolute position-relative text-white w-100 z-1">
                <div className="align-items-center bg-primary bottom-0 cat-icon d-flex end-0 justify-content-center mb-4 me-4 position-absolute rounded-circle text-white top-auto"><i className="fa-solid fa-gamepad"></i></div>
                <div className="align-items-center card-start d-flex flex-wrap gap-1 mb-1">

                  <i className="fa-solid fa-star"></i>

                  <span className="fw-medium"><span className="fs-5 fw-semibold me-1">(4.5)</span>2,391 reviews</span>

                </div>

                <h3 className="fs-5 fw-semibold mb-0">Gaming Expo Spectacle</h3>

              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="py-5 bg-primary position-relative overflow-hidden text-white bg-primary bg-size-contain home-about js-bg-image" data-image-src="assets/images/lines.svg">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-10 col-lg-8 col-xl-7">
                <div className="section-header text-center mb-5" data-aos="fade-down">
                  <div className="d-inline-block font-caveat fs-1 fw-medium section-header__subtitle text-capitalize">Top Regions</div>
                  <h2 className="display-5 fw-semibold mb-3 section-header__title text-capitalize">Explore Cities</h2>
                  <div className="sub-title fs-16">Discover exciting categories. <span className="fw-semibold">Find what you’re looking for.</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-carousel owl-theme place-carousel owl-nav-center" data-aos="fade-left">
            <div className="region-card rounded-4 overflow-hidden position-relative text-white">
              <div className="region-card-image">
                <Image src={locations01} alt="Image" className="h-100 object-fit-cover w-100" />
              </div>
              <div className="region-card-content d-flex flex-column h-100 position-absolute start-0 top-0 w-100">
                <div className="region-card-info">
                  <h4 className="font-caveat mb-0">Jamaica</h4>
                  <h3 className="h2">Kingston</h3>
                  <span>100+ listings</span>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold justify-content-between mt-auto region-card-link">
                  <div className="fs-12 region-card-link-text text-uppercase text-white">Explore more</div>
                  <div className="align-items-center bg-blur text-white btn-icon-md d-flex end-0 justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="region-card rounded-4 overflow-hidden position-relative text-white">
              <div className="region-card-image">
                <Image src={locations02} alt="Image" className="h-100 object-fit-cover w-100" />
              </div>
              <div className="region-card-content d-flex flex-column h-100 position-absolute start-0 top-0 w-100">
                <div className="region-card-info">
                  <h4 className="font-caveat mb-0">Jordan</h4>
                  <h3 className="h2">Amman</h3>
                  <span>59+ listings</span>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold justify-content-between mt-auto region-card-link">
                  <div className="fs-12 region-card-link-text text-uppercase text-white">Explore more</div>
                  <div className="align-items-center bg-blur text-white btn-icon-md d-flex end-0 justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="region-card rounded-4 overflow-hidden position-relative text-white">
              <div className="region-card-image">
                <Image src={locations03} alt="Image" className="h-100 object-fit-cover w-100" />
              </div>
              <div className="region-card-content d-flex flex-column h-100 position-absolute start-0 top-0 w-100">
                <div className="region-card-info">
                  <h4 className="font-caveat mb-0">Brazil</h4>
                  <h3 className="h2">Atlanta</h3>
                  <span>89+ listings</span>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold justify-content-between mt-auto region-card-link">
                  <div className="fs-12 region-card-link-text text-uppercase text-white">Explore more</div>
                  <div className="align-items-center bg-blur text-white btn-icon-md d-flex end-0 justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="region-card rounded-4 overflow-hidden position-relative text-white">
              <div className="region-card-image">
                <Image src={locations04} alt="Image" className="h-100 object-fit-cover w-100" />
              </div>
              <div className="region-card-content d-flex flex-column h-100 position-absolute start-0 top-0 w-100">
                <div className="region-card-info">
                  <h4 className="font-caveat mb-0">Italy</h4>
                  <h3 className="h2">Vanish City</h3>
                  <span>65+ listings</span>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold justify-content-between mt-auto region-card-link">
                  <div className="fs-12 region-card-link-text text-uppercase text-white">Explore more</div>
                  <div className="align-items-center bg-blur text-white btn-icon-md d-flex end-0 justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

            <div className="region-card rounded-4 overflow-hidden position-relative text-white">
              <div className="region-card-image">
                <Image src={locations05} alt="Image" className="h-100 object-fit-cover w-100" />
              </div>
              <div className="region-card-content d-flex flex-column h-100 position-absolute start-0 top-0 w-100">
                <div className="region-card-info">
                  <h4 className="font-caveat mb-0">Italy</h4>
                  <h3 className="h2">Vanish City</h3>
                  <span>65+ listings</span>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold justify-content-between mt-auto region-card-link">
                  <div className="fs-12 region-card-link-text text-uppercase text-white">Explore more</div>
                  <div className="align-items-center bg-blur text-white btn-icon-md d-flex end-0 justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="region-card rounded-4 overflow-hidden position-relative text-white">
              <div className="region-card-image">
                <Image src={locations06} alt="Image" className="h-100 object-fit-cover w-100" />
              </div>
              <div className="region-card-content d-flex flex-column h-100 position-absolute start-0 top-0 w-100">
                <div className="region-card-info">
                  <h4 className="font-caveat mb-0">Italy</h4>
                  <h3 className="h2">Vanish City</h3>
                  <span>65+ listings</span>
                </div>
                <a href="" className="align-items-center d-flex fw-semibold justify-content-between mt-auto region-card-link">
                  <div className="fs-12 region-card-link-text text-uppercase text-white">Explore more</div>
                  <div className="align-items-center bg-blur text-white btn-icon-md d-flex end-0 justify-content-center rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0v-6z"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>

          </div>

          <div className="row g-4 mt-5" data-aos="fade-up">
            <div className="col-md-6">
              <h2 className="display-4 mb-5">Find your perfect Place based on <span className="font-caveat">your interest</span></h2>
              <Image src={aboutUser} alt="" className="home-about-image w-100 rounded-4 object-fit-cover" />
            </div>
            <div className="col-md-6 ps-xxl-5">
              <p className="lead mb-4">Want to have a fantastic travel experience? Let us connect you with diverse categories of businesses, public spots, and famous landmarks so that you can create unforgettable memories.</p>
              <ul className="d-flex flex-column gap-4 lead mb-4">
                <li>Find popular businesses and important<br /> sites near you.</li>
                <li>Get place recommendations <br />based on your preferences.</li>
                <li>Explore major spots and landmarks around<br /> your location.</li>
                <li>Discover diverse categories to <br />navigate various areas.</li>
              </ul>
              <a href="" className="btn btn-light mt-4">Get Started Now</a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 position-relative overflow-hidden bg-light rounded-4 mx-3 mt-3">
        <div className="container py-4">
          <div className="row justify-content-center">
            <div className="col-sm-10 col-md-10 col-lg-8 col-xl-7">

              <div className="section-header text-center mb-5" data-aos="fade-down">

                <div className="d-inline-block font-caveat fs-1 fw-medium section-header__subtitle text-capitalize text-primary">Places</div>

                <h2 className="display-5 fw-semibold mb-3 section-header__title text-capitalize">Discover your favourite place</h2>

                <div className="sub-title fs-16">Discover exciting categories. <span className="text-primary fw-semibold">Find what you’re looking for.</span></div>

              </div>

            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-6">

              <div className="card border-0 shadow-sm overflow-hidden rounded-4 card-hover">
                <a href="" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="bg-white col-lg-5 col-md-5 col-xl-5 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">

                        <Image src={listing5} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-primary card-badge d-inline-block fw-semibold position-absolute start-0 text-uppercase text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>

                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-7 p-3 p-lg-4 p-md-3 p-sm-4">
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
                          Green Mart Apartment
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>

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

            </div>
            <div className="col-lg-6">

              <div className="card border-0 shadow-sm overflow-hidden rounded-4 card-hover">
                <a href="" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="bg-white col-lg-5 col-md-5 col-xl-5 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">
                        <Image src={listing5} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-primary card-badge d-inline-block fw-semibold position-absolute start-0 text-uppercase text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>

                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-7 p-3 p-lg-4 p-md-3 p-sm-4">
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
                          Green Mart Apartment
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>

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

            </div>
            <div className="col-lg-6">

              <div className="card border-0 shadow-sm overflow-hidden rounded-4 card-hover">
                <a href="" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="bg-white col-lg-5 col-md-5 col-xl-5 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">

                        <Image src={listing5} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-primary card-badge d-inline-block fw-semibold position-absolute start-0 text-uppercase text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>

                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-7 p-3 p-lg-4 p-md-3 p-sm-4">
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
                          The Barber's Lounge
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>

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

            </div>
            <div className="col-lg-6">

              <div className="card border-0 shadow-sm overflow-hidden rounded-4 mb-4 card-hover card-hover-bg">
                <a href="" className="stretched-link"></a>
                <div className="card-body p-0">
                  <div className="g-0 row">
                    <div className="bg-white col-lg-5 col-md-5 col-xl-5 position-relative">
                      <div className="card-image-hover dark-overlay h-100 overflow-hidden position-relative">

                        <Image src={listing5} alt="" className="h-100 w-100 object-fit-cover" />

                        <div className="bg-primary card-badge d-inline-block fw-semibold position-absolute start-0 text-uppercase text-white z-2"><i className="fa-solid fa-star me-1"></i>Featured</div>

                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-xl-7 p-3 p-lg-4 p-md-3 p-sm-4">
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
                          Gaming Expo Spectacle
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                          </svg>
                        </h4>

                        <p className="mt-3">Amet minim mollit non deserunt ullamco est sit aliqua dolor.</p>

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
            </div>
          </div>
        </div>
      </div>


    </>

  );
}
