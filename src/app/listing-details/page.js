"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import galleryImage01 from '@/../public/assets/images/listing-details/gallery/10.jpg';



export default function ListingDetails() {
    return (
        <>
            <div className="py-4">
                <div className="container">
                    <div className="justify-content-between row align-items-center g-4">
                        <div className="col-lg col-xxl-8">
                            <h1 className="h2 page-header-title fw-semibold">Hotel R K International</h1>
                            <ul className="list-inline list-separator d-flex align-items-center mb-2">
                                <li className="list-inline-item">
                                    <a className="fw-medium" href="#">Hotel & Restaurent<i className="fa-solid fa-arrow-up-right-from-square fs-14 ms-2"></i></a>
                                </li>
                                <li className="list-inline-item">
                                    <div className="d-flex align-items-center gap-2 ms-auto">
                                        <div className="d-flex align-items-center text-primary rating-stars">
                                            <i className="fa-star-icon"></i>
                                            <i className="fa-star-icon"></i>
                                            <i className="fa-star-icon"></i>
                                            <i className="fa-star-icon half"></i>
                                            <i className="fa-star-icon none"></i>
                                        </div>

                                        <span className="fw-medium text-primary"><span className="fs-6 fw-semibold me-1">(4.5)</span><small>2,391 reviews</small></span>

                                    </div>
                                </li>
                            </ul>
                            <ul className="fs-14 fw-medium list-inline list-separator mb-0 text-muted">
                                <li className="list-inline-item">Posted 7 hours ago</li>
                                <li className="list-inline-item">Kurla West, Mumbai</li>
                                <li className="list-inline-item">Full time</li>
                            </ul>
                        </div>
                        <div className="col-lg-auto">

                            <div className="form-check form-check-bookmark mb-2 mb-sm-0">
                                <input className="form-check-input" type="checkbox" value="" id="jobBookmarkCheck" />
                                <label className="form-check-label" htmlFor="jobBookmarkCheck">
                                    <span className="form-check-bookmark-default">
                                        <i className="fa-regular fa-heart me-1"></i> Save this listing
                                    </span>
                                    <span className="form-check-bookmark-active">
                                        <i className="fa-solid fa-heart me-1"></i> Saved
                                    </span>
                                </label>
                            </div>

                            <div className="small mt-1">46 people bookmarked this place</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="rounded-4 overflow-hidden">
                    <div className="row gx-2 zoom-gallery">
                        <div className="col-md-8">
                            <a
                                className="d-block position-relative"
                                href={galleryImage01.src}
                                title="figcaption"
                                data-source={galleryImage01.src}
                            >
                                <Image className="img-fluid w-100" src={galleryImage01} alt="Image Description" />
                                <div className="position-absolute bottom-0 end-0 mb-3 me-3">
                                    <span className="align-items-center btn btn-light btn-sm d-flex d-md-none fw-semibold gap-2">
                                        <i className="fa-solid fa-expand"></i>
                                        <span> View photos</span>
                                    </span>
                                </div>
                            </a>
                        </div>
                        <div className="col-md-4 d-none d-md-inline-block">
                            <a className="d-block mb-2" href={galleryImage01.src}
                                title="figcaption"
                                data-source={galleryImage01.src}>
                                <Image className="img-fluid w-100" src={galleryImage01} alt="Image Description" />
                            </a>
                            <a className="d-block position-relative" href={galleryImage01.src}
                                title="figcaption"
                                data-source={galleryImage01.src}>
                                <Image className="img-fluid w-100" src={galleryImage01} alt="Image Description" />
                                <div className="position-absolute bottom-0 end-0 mb-3 me-3">
                                    <span className="align-items-center btn btn-light btn-sm d-md-inline-flex d-none fw-semibold gap-2">
                                        <i className="fa-solid fa-expand"></i>
                                        <span> View photos</span>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end mt-2">
                    <span className="small text-dark fw-semibold">Published:</span>
                    <span className="small ms-1 text-muted">November 21, 2025</span>
                </div>
            </div>

            <div className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 content">

                            <div className="mb-4">
                                <h4 className="fw-semibold fs-3 mb-4">Latest Property <span className="font-caveat text-primary">Reviews</span></h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>

                            <div className="mb-4">
                                <h4 className="fw-semibold fs-3 mb-4">Amenities <span className="font-caveat text-primary">Available</span></h4>
                                <div className="row g-4">
                                    <div className="col-auto col-lg-3">

                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-video fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Security cameras</div>
                                        </div>

                                    </div>
                                    <div className="col-auto col-lg-3">

                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-fan fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Garden</div>
                                        </div>

                                    </div>
                                    <div className="col-auto col-lg-3">

                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-hot-tub-person fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Jacuzzi</div>
                                        </div>

                                    </div>
                                    <div className="col-auto col-lg-3">

                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-tv fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Television</div>
                                        </div>

                                    </div>
                                    <div className="col-auto col-lg-3">

                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-dumbbell fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Gym (100m²)</div>
                                        </div>

                                    </div>
                                    <div className="col-auto col-lg-3">

                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-temperature-arrow-down fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Heater</div>
                                        </div>

                                    </div>
                                    <div className="col-auto col-lg-3">
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-wifi fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Wi-fi</div>
                                        </div>
                                    </div>
                                    <div className="col-auto col-lg-3">
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-person-swimming fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Shared Pool</div>
                                        </div>
                                    </div>
                                    <div className="col-auto col-lg-3">
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-chair fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Furnished</div>
                                        </div>
                                    </div>
                                    <div className="col-auto col-lg-3">
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-square-parking fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Covered Parking</div>
                                        </div>
                                    </div>
                                    <div className="col-auto col-lg-3">
                                        <div className="d-flex align-items-center text-dark">
                                            <div className="flex-shrink-0">
                                                <i className="fa-solid fa-utensils fs-18"></i>
                                            </div>
                                            <div className="flex-grow-1 fs-16 fw-medium ms-3">Kitchen Appliances</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5" />

                            <div className="mb-4">
                                <h4 className="fw-semibold fs-3 mb-4">Pricing</h4>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Wild Mushroom Bucatini with Kale</h4>
                                                    <div className="fs-14 menu-detail text-muted">Mushroom / Veggie / White Sources</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹850.5</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Lemon and Garlic Green Beans</h4>
                                                    <div className="fs-14 menu-detail text-muted">Lemon / Garlic / Beans</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹854.5</h4>
                                                    <div className="d-inline-block font-caveat fs-13 fw-bold menu-label text-primary">New</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">LambBeef Kofka Skewers with Tzatziki</h4>
                                                    <div className="fs-14 menu-detail text-muted">Lamb / Wine / Butter</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹858.5</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Imported Oysters Grill (5 Pieces)</h4>
                                                    <div className="fs-14 menu-detail text-muted">Oysters / Veggie / Ginger</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹855.9</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Meatloaf with Black Pepper-Honey BBQ</h4>
                                                    <div className="fs-14 menu-detail text-muted">Pepper / Chicken / Honey</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹856.4</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Wild Mushroom Bucatini with Kale</h4>
                                                    <div className="fs-14 menu-detail text-muted">Mushroom / Veggie / White Sources</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹854.5</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Lemon and Garlic Green Beans</h4>
                                                    <div className="fs-14 menu-detail text-muted">Lemon / Garlic / Beans</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹854.5</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">LambBeef Kofka Skewers with Tzatziki</h4>
                                                    <div className="fs-14 menu-detail text-muted">Lamb / Wine / Butter</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹858.5</h4>
                                                    <div className="d-inline-block font-caveat fs-13 fw-bold menu-label text-primary">Recommended</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Imported Oysters Grill (5 Pieces)</h4>
                                                    <div className="fs-14 menu-detail text-muted">Oysters / Veggie / Ginger</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹855.9</h4>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3 menu pb-2">
                                            <div className="row">
                                                <div className="col-sm-8">
                                                    <h4 className="fs-17 mb-0 menu-title">Meatloaf with Black Pepper-Honey BBQ</h4>
                                                    <div className="fs-14 menu-detail text-muted">Pepper / Chicken / Honey</div>
                                                </div>
                                                <div className="col-sm-4 menu-price-detail text-end">
                                                    <h4 className="fs-17 mb-0 menu-price">₹856.4</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-5" />

                            <div className="mb-4">
                                <h4 className="fw-semibold fs-3 mb-4">Latest Property <span className="font-caveat text-primary">Reviews</span></h4>
                                <div className="border p-4 mb-5 rounded-4">
                                    <div className="row g-4 align-items-center">
                                        <div className="col-sm-auto">
                                            <div className="rating-block text-center">

                                                <h5 className="font-caveat fs-4 mb-4">Average user rating</h5>

                                                <div className="rating-point position-relative ml-auto mr-auto">

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth=".5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star text-primary">
                                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"> </polygon>
                                                    </svg>

                                                    <h3 className="position-absolute mb-0 fs-18 text-primary">4.3</h3>
                                                </div>

                                                <span className="fs-13">2,525 Ratings &amp;</span><br />
                                                <span className="fs-13">293 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="rating-position">

                                                <h5 className="font-caveat fs-4 mb-4">Rating breakdown</h5>

                                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">

                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="fs-14 fw-semibold rating-points">5</span>
                                                        <div className="d-flex align-items-center text-primary rating-stars">
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                        </div>
                                                    </div>

                                                    <div className="progress flex-grow-1 me-2">
                                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: '90%' }}
                                                            aria-valuenow={90}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}></div>
                                                    </div>

                                                    <div className="bg-dark fs-11 fw-medium px-2 py-1 rounded-pill text-white user-rating">4.5</div>

                                                </div>

                                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">

                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="fs-14 fw-semibold rating-points">5</span>
                                                        <div className="d-flex align-items-center text-primary rating-stars">
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon half"></i>
                                                            <i className="fa-star-icon none"></i>
                                                        </div>
                                                    </div>

                                                    <div className="progress flex-grow-1 me-2">
                                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: '80%' }}
                                                            aria-valuenow={80}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}></div>
                                                    </div>

                                                    <div className="bg-dark fs-11 fw-medium px-2 py-1 rounded-pill text-white user-rating">3.5</div>

                                                </div>

                                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">

                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="fs-14 fw-semibold rating-points">3</span>
                                                        <div className="d-flex align-items-center text-primary rating-stars">
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon half"></i>
                                                            <i className="fa-star-icon none"></i>
                                                            <i className="fa-star-icon none"></i>
                                                        </div>
                                                    </div>

                                                    <div className="progress flex-grow-1 me-2">
                                                        <div className="progress-bar bg-warning" role="progressbar" style={{ width: '60%' }}
                                                            aria-valuenow={60}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}></div>
                                                    </div>

                                                    <div className="bg-dark fs-11 fw-medium px-2 py-1 rounded-pill text-white user-rating">1.5</div>

                                                </div>

                                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">

                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="fs-14 fw-semibold rating-points">3</span>
                                                        <div className="d-flex align-items-center text-primary rating-stars">
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon half"></i>
                                                            <i className="fa-star-icon none"></i>
                                                            <i className="fa-star-icon none"></i>
                                                            <i className="fa-star-icon none"></i>
                                                        </div>
                                                    </div>
                                                    <div className="progress flex-grow-1 me-2">
                                                        <div className="progress-bar bg-info" role="progressbar" style={{ width: '40%' }}
                                                            aria-valuenow={40}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="bg-dark fs-11 fw-medium px-2 py-1 rounded-pill text-white user-rating">5.2</div>
                                                </div>
                                                <div className="align-items-center d-flex mb-2 rating-dimension gap-2">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <span className="fs-14 fw-semibold rating-points">1</span>
                                                        <div className="d-flex align-items-center text-primary rating-stars">
                                                            <i className="fa-star-icon"></i>
                                                            <i className="fa-star-icon none"></i>
                                                            <i className="fa-star-icon none"></i>
                                                            <i className="fa-star-icon none"></i>
                                                            <i className="fa-star-icon none"></i>
                                                        </div>
                                                    </div>
                                                    <div className="progress flex-grow-1 me-2">
                                                        <div className="progress-bar text-bg-danger" role="progressbar" style={{ width: '20%' }}
                                                            aria-valuenow={20}
                                                            aria-valuemin={0}
                                                            aria-valuemax={100}></div>
                                                    </div>
                                                    <div className="bg-dark fs-11 fw-medium px-2 py-1 rounded-pill text-white user-rating">6.9</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex mb-4 border-bottom pb-4">
                                    <div className="flex-shrink-0">
                                        <Image src={galleryImage01} alt="..." height="70" width="70" className="object-fit-cover rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-4">
                                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                            <div>
                                                <h4 className="fs-18 mb-0">- Sumanta Ghosh</h4>
                                                <div className="comment-datetime fs-12 text-muted">25 Oct 2025 at 12.27 pm</div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 ms-auto">
                                                <div className="d-flex align-items-center text-primary rating-stars">
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon none"></i>
                                                </div>
                                                <span className="fs-14 fw-semibold rating-points">4.5/5</span>
                                            </div>
                                        </div>
                                        <div className="fs-15">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</div>
                                        <a href="#" className="btn btn-light btn-sm mt-4 px-3 rounded-pill gap-2 d-inline-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                            </svg>
                                            Helpful Review
                                            <div className="vr d-none d-sm-inline-block"></div>
                                            <span className="fw-semibold">16</span>
                                        </a>


                                        <div className="d-flex mt-4 border-top pt-4">
                                            <div className="flex-shrink-0">
                                                <Image src={galleryImage01} alt="..." height="60" width="60" className="object-fit-cover rounded-circle" />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                                    <div>
                                                        <h4 className="fs-18 mb-0">- Sumanta Ghosh</h4>
                                                        <div className="comment-datetime fs-12 text-muted">25 Oct 2025 at 12.27 pm</div>
                                                    </div>
                                                </div>
                                                <div className="fs-15"> This is some content from a media component. You can replace this with any content and adjust it as needed.</div>
                                                <a href="#" className="btn btn-light btn-sm mt-4 px-3 rounded-pill gap-2 d-inline-flex">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                        <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                                    </svg>
                                                    Helpful Review
                                                    <div className="vr d-none d-sm-inline-block"></div>
                                                    <span className="fw-semibold">16</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="d-flex mb-4 border-bottom pb-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/avatar/04.jpg" alt="..." height="70" width="70" className="object-fit-cover rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                            <div>
                                                <h4 className="fs-18 mb-0">- Pranoti Deshpande</h4>
                                                <div className="comment-datetime fs-12 text-muted">25 Oct 2023 at 12.27 pm</div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 ms-auto">
                                                <div className="d-flex align-items-center text-primary rating-stars">
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon half"></i>
                                                    <i className="fa-star-icon none"></i>
                                                </div>
                                                <span className="fs-14 fw-semibold rating-points">3.5/5</span>
                                            </div>
                                        </div>
                                        <div className="fs-15">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </div>
                                        <a href="#" className="btn btn-light btn-sm mt-4 px-3 rounded-pill gap-2 d-inline-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                            </svg>
                                            Helpful Review
                                            <div className="vr d-none d-sm-inline-block"></div>
                                            <span className="fw-semibold">16</span>
                                        </a>
                                    </div>
                                </div> */}
                                {/* <div className="d-flex mb-4">
                                    <div className="flex-shrink-0">
                                        <img src="assets/images/avatar/05.jpg" alt="..." height="70" width="70" className="object-fit-cover rounded-circle" />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                        <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                            <div>
                                                <h4 className="fs-18 mb-0">- Marcus Knight</h4>
                                                <div className="comment-datetime fs-12 text-muted">25 Oct 2023 at 12.27 pm</div>
                                            </div>
                                            <div className="d-flex align-items-center gap-2 ms-auto">
                                                <div className="d-flex align-items-center text-primary rating-stars">
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon"></i>
                                                    <i className="fa-star-icon half"></i>
                                                    <i className="fa-star-icon none"></i>
                                                </div>
                                                <span className="fs-14 fw-semibold rating-points">3.5/5</span>
                                            </div>
                                        </div>
                                        <div className="fs-15"> This is some content from a media component. You can replace this with any content and adjust it as needed.</div>
                                        <a href="#" className="btn btn-light btn-sm mt-4 px-3 rounded-pill gap-2 d-inline-flex">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                            </svg>
                                            Helpful Review
                                            <div className="vr d-none d-sm-inline-block"></div>
                                            <span className="fw-semibold">16</span>
                                        </a>
                                    </div>
                                </div> */}
                            </div>

                            <div className="mb-4 mb-lg-0">
                                <h4 className="fw-semibold fs-3 mb-4">Leave a <span className="font-caveat text-primary">Comment</span></h4>
                                <form className="row g-4">
                                    <div className="col-sm-6">

                                        <div className="">
                                            <label className="required fw-medium mb-2">Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter your name" required="" />
                                        </div>

                                    </div>
                                    <div className="col-sm-6">

                                        <div className="">
                                            <label className="required fw-medium mb-2">Email Address</label>
                                            <input type="text" className="form-control" placeholder="Enter your email address" />
                                        </div>

                                    </div>
                                    <div className="col-sm-12">

                                        <div className="">
                                            <label className="required fw-medium mb-2">Comment</label>
                                            <textarea className="form-control" rows="7" placeholder="Tell us what we can help you with!"></textarea>
                                        </div>

                                    </div>
                                    <div className="col-sm-12 text-end">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>


                        <div className="col-lg-4 ps-xxl-5 sidebar">
                            <div className="border mb-4 p-4 rounded-4">
                                <h4 className="fw-semibold mb-4">Enquire Now <span className="font-caveat text-primary"></span></h4>
                                <form className="row g-4">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="required fw-medium mb-2">Full Name</label>
                                            <input type="text" className="form-control" placeholder="Enter your name" required="" />
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="required fw-medium mb-2">Email Address</label>
                                            <input type="text" className="form-control" placeholder="Enter your email address" />
                                        </div>

                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label className="required fw-medium mb-2">Comment</label>
                                            <textarea className="form-control" rows="7" placeholder="Tell us what we can help you with!"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <button type="submit" className="btn btn-primary w-100"> Enquire Now </button>
                                        <div className="small text-center mt-2"></div>
                                    </div>
                                </form>
                            </div>

                            {/* <div className="border p-4 rounded-4">
                                <div className="align-items-center d-flex justify-content-between mb-4">
                                    <h4 className="w-semibold mb-0">Opening <span className="font-caveat text-primary">Hours</span></h4>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
                                        <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
                                        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
                                    </svg>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Monday</span>
                                    <span className="fs-14">8:00 am - 6:00 pm</span>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Tuesday</span>
                                    <span className="fs-14">8:00 am - 6:00 pm</span>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Wednesday</span>
                                    <span className="fs-14">8:00 am - 6:00 pm</span>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Thursday</span>
                                    <span className="fs-14">8:00 am - 6:00 pm</span>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Friday</span>
                                    <span className="fs-14">8:00 am - 6:00 pm</span>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Saturday</span>
                                    <span className="fs-14">8:00 am - 6:00 pm</span>
                                </div>
                                <div className="align-items-center d-flex justify-content-between mb-3">
                                    <span className="fw-semibold">Sunday</span>
                                    <span className="fw-medium text-danger">Close</span>
                                </div>
                            </div> */}

                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}