"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import miniLogo from '@/../public/assets/dashboard/assets/dist/img/mini-logo.png';
import analytics from '@/../public/assets/dashboard/assets/dist/img/predictive_analytics.png';
import avatar from '@/../public/assets/dashboard/assets/dist/img/01.jpg';
import avatar03 from '@/../public/assets/dashboard/assets/dist/img/03.jpg';
import avatar04 from '@/../public/assets/dashboard/assets/dist/img/04.jpg';

export default function Review() {
    return (
        <>
                <div className="card">
                    <div className="card-header position-relative">
                        <h6 className="fs-17 fw-semi-bold my-1">Visitor Reviews</h6>
                    </div>
                    <div className="card-body">
                        <div className="mb-4">
                            <div className="border p-4 mb-5 rounded-4">
                                <div className="row g-4 align-items-center">
                                    <div className="col-sm-auto">
                                        <div className="text-center">

                                            <h6 className="mb-4">Average user rating</h6>

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

                                            <h6 className="mb-4">Rating breakdown</h6>


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
                                                    <div className="progress-bar bg-primary" role="progressbar" style={{ width: "90%" }}
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
                                                    <div className="progress-bar bg-success" role="progressbar" style={{ width: "90%" }}
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
                                                    <div className="progress-bar bg-warning" role="progressbar" style={{ width: "60%" }}
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
                                                    <div className="progress-bar bg-info" role="progressbar" style={{ width: "40%" }}
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
                                                    <div className="progress-bar text-bg-danger" role="progressbar" style={{ width: "20%" }}
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
                                    <Image src={avatar} alt="..." height="70" width="70" className="object-fit-cover rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-4">
                                    <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                        <div>
                                            <h4 className="fs-18 mb-0">- Ethan Blackwood</h4>
                                            <div className="comment-datetime fs-12 text-muted">25 Oct 2025 at 12.27 pm</div>
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
                                    <div className="fs-15">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which.</div>

                                    <a href="#" className="border btn btn-sm d-inline-flex gap-2 mt-4 px-3 rounded-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                                        </svg>
                                        Helpful Review
                                        <div className="vr d-none d-sm-inline-block"></div>
                                        <span className="fw-semibold">16</span>
                                    </a>

                                    <div className="row mt-3 g-2 review-image zoom-gallery">
                                        <div className="col-auto">
                                            <a href="assets/dist/img/reviews/review-image-02.jpg" className="galary-overlay-hover dark-overlay position-relative d-block overflow-hidden rounded-3">
                                                <Image src={miniLogo} alt="" className="img-fluid rounded-3 object-fit-cover" height="70" width="112" />
                                                <div className="galary-hover-element h-100 position-absolute start-50 top-50 translate-middle w-100">
                                                    <i className="fa-solid fa-expand text-white position-absolute top-50 start-50 translate-middle bg-primary rounded-1 p-2 lh-1"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-auto">
                                            <a href="assets/dist/img/reviews/review-image-03.jpg" className="galary-overlay-hover dark-overlay position-relative d-block overflow-hidden rounded-3">
                                                <Image src={miniLogo} alt="" className="img-fluid rounded-3 object-fit-cover" height="70" width="112" />
                                                <div className="galary-hover-element h-100 position-absolute start-50 top-50 translate-middle w-100">
                                                    <i className="fa-solid fa-expand text-white position-absolute top-50 start-50 translate-middle bg-primary rounded-1 p-2 lh-1"></i>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="col-auto">
                                            <a href="assets/dist/img/reviews/review-image-04.jpg" className="galary-overlay-hover dark-overlay position-relative d-block overflow-hidden rounded-3">
                                                <Image src={miniLogo} alt="" className="img-fluid rounded-3 object-fit-cover" height="70" width="112" />
                                                <div className="galary-hover-element h-100 position-absolute start-50 top-50 translate-middle w-100">
                                                    <i className="fa-solid fa-expand text-white position-absolute top-50 start-50 translate-middle bg-primary rounded-1 p-2 lh-1"></i>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-4 border-top pt-4">
                                        <div className="flex-shrink-0">
                                            <Image src={miniLogo} alt="..." height="60" width="60" className="object-fit-cover rounded-circle" />
                                        </div>
                                        <div className="flex-grow-1 ms-3">
                                            <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                                <div>
                                                    <h4 className="fs-18 mb-0">- Gabriel North</h4>
                                                    <div className="comment-datetime fs-12 text-muted">25 Oct 2025 at 12.27 pm</div>
                                                </div>
                                            </div>
                                            <div className="fs-15"> This is some content from a media component. You can replace this with any content and adjust it as needed.</div>

                                            <a href="#" className="border btn btn-sm d-inline-flex gap-2 mt-4 px-3 rounded-pill">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                                    <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                                                </svg>
                                                Helpful Review
                                                <div className="vr d-none d-sm-inline-block"></div>
                                                <span className="fw-semibold">16</span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4 border-bottom pb-4">
                                <div className="flex-shrink-0">
                                    <Image src={avatar03} alt="..." height="70" width="70" className="object-fit-cover rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                        <div>
                                            <h4 className="fs-18 mb-0">- Pranoti Deshpande</h4>
                                            <div className="comment-datetime fs-12 text-muted">25 Oct 2025 at 12.27 pm</div>
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

                                    <a href="#" className="border btn btn-sm d-inline-flex gap-2 mt-4 px-3 rounded-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                                        </svg>
                                        Helpful Review
                                        <div className="vr d-none d-sm-inline-block"></div>
                                        <span className="fw-semibold">16</span>
                                    </a>

                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="flex-shrink-0">
                                    <Image src={avatar04} alt="..." height="70" width="70" className="object-fit-cover rounded-circle" />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <div className="comment-header d-flex flex-wrap gap-2 mb-3">
                                        <div>
                                            <h4 className="fs-18 mb-0">- Marcus Knight</h4>
                                            <div className="comment-datetime fs-12 text-muted">25 Oct 2025 at 12.27 pm</div>
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

                                    <a href="#" className="border btn btn-sm d-inline-flex gap-2 mt-4 px-3 rounded-pill">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"></path>
                                        </svg>
                                        Helpful Review
                                        <div className="vr d-none d-sm-inline-block"></div>
                                        <span className="fw-semibold">16</span>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </>
    );
}