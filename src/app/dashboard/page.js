// src/app/dashboard/page.js
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from "@/store";
import { storage } from "@/utils/storage";

import miniLogo from '@/../public/assets/dashboard/assets/dist/img/mini-logo.png';
import analytics from '@/../public/assets/dashboard/assets/dist/img/predictive_analytics.png';
import avatar from '@/../public/assets/dashboard/assets/dist/img/01.jpg';
import photoshop from '@/../public/assets/dashboard/assets/dist/img/photoshop.png';
import glass from '@/../public/assets/dashboard/assets/dist/img/glass.png';
import graphv1 from '@/../public/assets/dashboard/assets/dist/img/graph-v1.png';
import degrees from '@/../public/assets/dashboard/assets/dist/img/degrees.png';
import salesPerformance from '@/../public/assets/dashboard/assets/dist/img/sales-performance-v2.png';
import avatar02 from '@/../public/assets/dashboard/assets/dist/img/02.jpg';
import avatar03 from '@/../public/assets/dashboard/assets/dist/img/03.jpg';
import avatar04 from '@/../public/assets/dashboard/assets/dist/img/04.jpg';


export default function DashboardPage() {

    const { token, user } = useAppSelector((s) => s.auth);

    useEffect(() => {

        const t = token ?? storage.get("auth_token", null);
        const u = user ?? storage.get("auth_user", null);
        if (process.env.NODE_ENV !== "production") {
            console.log("[Dashboard] token:", t);
            console.log("[Dashboard] user:", u);
        }


        // Example: initialize DataTables if table exists
        if (typeof window !== "undefined" && window.$) {
            const $ = window.$;
            if ($("#exampleTable").length) {
                $("#exampleTable").DataTable();
            }
        }
    }, [token, user]);



    return (

        <>
            <div className="header-banner align-items-center d-flex justify-content-between mb-3 p-4 rounded-4 w-100">
                <div className="header-banner-context">
                    <h3 className="align-items-center d-flex fs-5 gap-2 text-white mb-3">
                        <Image src={photoshop} alt="" width="35" />
                        Adobe Photoshop
                    </h3>
                    <div className="content-text fs-14 opacity-75 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout their default.</div>
                    <button className="content-button btn btn-light mt-3">Start free trial</button>
                </div>
                <Image className="content-wrapper-img" src={glass} alt="" width="180" />
            </div>
            <div className="row g-3 mb-3">
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex">
                    <div className="card flex-column flex-fill p-4 position-relative shadow w-100 widget-card">
                        <div className="d-flex">
                            <div className="flex-grow-1 ms-3">
                                <div className="fs-14 text-muted">Times Bookmarked</div>
                                <h3 className="fw-semi-bold mb-0">2:45</h3>
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={graphv1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex">
                    <div className="card flex-column flex-fill p-4 position-relative shadow w-100 widget-card">
                        <div className="d-flex">
                            <div className="flex-grow-1 ms-3">
                                <div className="fs-14 text-muted">Progress</div>
                                <h3 className="fw-semi-bold mb-0">70%</h3>
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={degrees} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex">
                    <div className="card flex-column flex-fill p-4 position-relative shadow w-100 widget-card">
                        <div className="d-flex">
                            <div className="flex-grow-1 ms-3">
                                <div className="fs-14 text-muted">Revenue</div>
                                <h3 className="fw-semi-bold mb-0">₹100</h3>
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={salesPerformance} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3 d-flex">
                    <div className="card flex-column flex-fill p-4 position-relative shadow w-100 widget-card">
                        <div className="d-flex">
                            <div className="flex-grow-1 ms-3">
                                <div className="fs-14 text-muted">Time-Spent</div>
                                <h3 className="fw-semi-bold mb-0">2:45</h3>
                            </div>
                            <div className="flex-shrink-0">
                                <Image src={graphv1} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3 p-4 total-box">
                <div className="g-4 gx-xxl-5 row">
                    <div className="col-sm-4 total-box-left">
                        <div className="align-items-center d-flex justify-content-between mb-4">
                            <h6 className="mb-0">Total Income</h6>
                            <div className="align-items-center d-flex justify-content-center rounded arrow-btn percentage-increase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="price">₹<span className="counter">58,99</span><span className="fs-13 ms-1 text-muted">(INR)</span></h1>
                        <p className="mb-0 fw-semibold fs-14">
                            <span className="percentage-increase">20.9%</span>&nbsp;&nbsp; +18.4k this week
                        </p>
                    </div>
                    <div className="col-sm-4 total-box-left">
                        <div className="align-items-center d-flex justify-content-between mb-4">
                            <h6 className="mb-0">Visitors</h6>
                            <div className="align-items-center d-flex justify-content-center rounded arrow-btn percentage-increase">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="price counter">780,192</h1>
                        <p className="mb-0 fw-semibold fs-14">
                            <span className="percentage-increase">20%</span>&nbsp;&nbsp; +3.5k this week
                        </p>
                    </div>
                    <div className="col-sm-4 total-box__right">
                        <div className="align-items-center d-flex justify-content-between mb-4">
                            <h6 className="mb-0">Total Orders</h6>
                            <div className="align-items-center d-flex justify-content-center rounded text-primary arrow-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-arrow-down-right" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z" />
                                </svg>
                            </div>
                        </div>
                        <h1 className="price counter">7,96,542</h1>
                        <p className="mb-0 fw-semibold fs-14">
                            <span className="text-primary">9.01%</span>&nbsp;&nbsp; decrease compared to last week
                        </p>
                    </div>
                </div>
            </div>

            {/* <div className="card mb-3">
                                <div className="card-header position-relative">
                                    <h6 className="fs-17 fw-semi-bold my-1">Statistics</h6>
                                </div>
                                <div className="card-body">
                                    <div id="chart"></div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header position-relative">
                                    <h6 className="fs-17 fw-semi-bold my-1">Recent Booking</h6>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-borderless text-nowrap category-list">
                                            <thead>
                                                <tr>
                                                    <th>SL</th>
                                                    <th>Logo</th>
                                                    <th>Name</th>
                                                    <th>Booking Date</th>
                                                    <th>Payment Type</th>
                                                    <th>Status</th>
                                                    <th className="text-end">View Booking</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th>01</th>
                                                    <td>
                                                        <span className="avatar avatar-sm avatar-circle">
                                                            <Image className="avatar-img" src={avatar} alt="Image Description" />
                                                        </span>
                                                    </td>
                                                    <td>Ethan Blackwood</td>
                                                    <td>18 Dec 2023</td>
                                                    <td>Paypal</td>
                                                    <td>
                                                        <div className="align-items-center d-flex fw-medium gap-1 text-success fs-14">
                                                            <i className="fa-circle fa-solid fs-10"></i>
                                                            <span>Approved</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="/bookings" className="btn btn-primary fw-medium btn-sm d-inline-flex align-items-center justify-content-center gap-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>02</th>
                                                    <td>
                                                        <span className="avatar avatar-sm avatar-circle">
                                                            <Image className="avatar-img" src={avatar02} alt="Image Description" />
                                                        </span>
                                                    </td>
                                                    <td>Alexander Kaminski</td>
                                                    <td>15 Dec 2023</td>
                                                    <td>Payoneer</td>
                                                    <td>
                                                        <div className="align-items-center d-flex fw-medium gap-1 text-primary fs-14">
                                                            <i className="fa-circle fa-solid fs-10"></i>
                                                            <span>Pending</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="/bookings" className="btn btn-primary fw-medium btn-sm d-inline-flex align-items-center justify-content-center gap-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>03</th>
                                                    <td>
                                                        <span className="avatar avatar-sm avatar-circle">
                                                            <Image className="avatar-img" src={avatar03} alt="Image Description" />
                                                        </span>
                                                    </td>
                                                    <td>Pranoti Deshpande</td>
                                                    <td>15 Nov 2023</td>
                                                    <td>Payoneer</td>
                                                    <td>
                                                        <div className="align-items-center d-flex fw-medium gap-1 text-success fs-14">
                                                            <i className="fa-circle fa-solid fs-10"></i>
                                                            <span>Approved</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="/bookings" className="btn btn-primary fw-medium btn-sm d-inline-flex align-items-center justify-content-center gap-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>04</th>
                                                    <td>
                                                        <span className="avatar avatar-sm avatar-circle">
                                                            <Image className="avatar-img" src={avatar04} alt="Image Description" />
                                                        </span>
                                                    </td>
                                                    <td>Gabriel Nort</td>
                                                    <td>10 Jul 2023</td>
                                                    <td>Swift</td>
                                                    <td>
                                                        <div className="align-items-center d-flex fw-medium gap-1 text-danger fs-14">
                                                            <i className="fa-circle fa-solid fs-10"></i>
                                                            <span>Canceled</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="/bookings" className="btn btn-primary fw-medium btn-sm d-inline-flex align-items-center justify-content-center gap-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>03</th>
                                                    <td>
                                                        <span className="avatar avatar-sm avatar-circle">
                                                            <Image className="avatar-img" src={avatar03} alt="Image Description" />
                                                        </span>
                                                    </td>
                                                    <td>Pranoti Deshpande</td>
                                                    <td>15 Nov 2023</td>
                                                    <td>Payoneer</td>
                                                    <td>
                                                        <div className="align-items-center d-flex fw-medium gap-1 text-success fs-14">
                                                            <i className="fa-circle fa-solid fs-10"></i>
                                                            <span>Approved</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-end">
                                                        <a href="/bookings" className="btn btn-primary fw-medium btn-sm d-inline-flex align-items-center justify-content-center gap-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                                                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                                                            </svg>
                                                            View
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div> */}
        </>
    );
}
