// src/app/dashboard/page.js
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
    useEffect(() => {
        // Example: initialize DataTables if table exists
        if (typeof window !== "undefined" && window.$) {
            const $ = window.$;
            if ($("#exampleTable").length) {
                $("#exampleTable").DataTable();
            }
        }
    }, []);

    return (
        <div className="wrapper">

            <nav className="sidebar">
                <div className="sidebar-header">
                    <Link href="/" className="sidebar-brand">
                        <Image className="sidebar-brand_icon" src={miniLogo} alt="" />
                        <span className="sidebar-brand_text">Biz<span>Directory</span></span>
                    </Link>
                </div>

                <div className="sidebar-body">
                    <nav className="sidebar-nav">
                        <ul className="metismenu">
                            <li className="nav-label">
                                <span className="nav-label_text">Main Menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots nav-label_ellipsis m-auto" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </li>
                            <li className="mm-active">
                                <Link href="/dashboard">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-speedometer" viewBox="0 0 16 16">
                                        <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707zM2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.389.389 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.389.389 0 0 0-.029-.518z" />
                                        <path fillRule="evenodd" d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.945 11.945 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0z" />
                                    </svg>
                                    <span className="ms-2">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-listing">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-add" viewBox="0 0 16 16">
                                        <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h4a.5.5 0 1 0 0-1h-4a.5.5 0 0 1-.5-.5V7.207l5-5 6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                        <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 1 0 1 0v-1h1a.5.5 0 1 0 0-1h-1v-1a.5.5 0 0 0-.5-.5" />
                                    </svg>
                                    <span className="ms-2">Add listing</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/wallet">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wallet2" viewBox="0 0 16 16">
                                        <path d="M12.136.326A1.5 1.5 0 0 1 14 1.78V3h.5A1.5 1.5 0 0 1 16 4.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 13.5v-9a1.5 1.5 0 0 1 1.432-1.499L12.136.326zM5.562 3H13V1.78a.5.5 0 0 0-.621-.484zM1.5 4a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5z" />
                                    </svg>
                                    <span className="ms-2">Wallet</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/enquiry">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                                        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                                        <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                    <span className="ms-2">Enquiry</span>
                                    <span className="badge rounded-pill bg-success">2</span>
                                </Link>
                            </li>
                            <li className="nav-label">
                                <span className="nav-label_text">Listing</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots nav-label_ellipsis m-auto" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </li>
                            <li>
                                <a className="has-arrow material-ripple" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-plus" viewBox="0 0 16 16">
                                        <path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5" />
                                        <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
                                    </svg>
                                    <span className="ms-2">My Listing</span>
                                </a>
                                <ul className="nav-second-level">
                                    <li><Link href="/my-listing">Active</Link></li>
                                    <li><Link href="/my-listing">Pending</Link></li>
                                    <li><Link href="/my-listing">Expired</Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/reviews">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-stars" viewBox="0 0 16 16">
                                        <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />
                                    </svg>
                                    <span className="ms-2">Reviews</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookings">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-journal-bookmark-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 1h6v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z" />
                                        <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
                                        <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
                                    </svg>
                                    <span className="ms-2">Bookings</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/bookmark">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                                    </svg>
                                    <span className="ms-2">Bookmark</span>
                                </Link>
                            </li>
                            {/* <li>
                                <a className="has-arrow material-ripple" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-nested" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5" />
                                    </svg>
                                    <span className="ms-2">Multi Level Menu</span>
                                </a>
                                <ul className="nav-second-level">
                                    <li><a href="#">Menu - 2(1)</a></li>
                                    <li>
                                        <a className="has-arrow" href="#" aria-expanded="false">Level - 2</a>
                                        <ul className="nav-third-level">
                                            <li><a href="#">Menu - 3(1)</a></li>
                                            <li>
                                                <a className="has-arrow" href="#" aria-expanded="false">Level - 3</a>
                                                <ul className="nav-fourth-level">
                                                    <li><a href="#">Menu - 4(1)</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li> */}
                            <li className="nav-label">
                                <span className="nav-label_text">Account</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-three-dots nav-label_ellipsis m-auto" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </li>
                            <li>
                                <Link href="/profile">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clipboard2-plus" viewBox="0 0 16 16">
                                        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5z" />
                                        <path d="M3 2.5a.5.5 0 0 1 .5-.5H4a.5.5 0 0 0 0-1h-.5A1.5 1.5 0 0 0 2 2.5v12A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-12A1.5 1.5 0 0 0 12.5 1H12a.5.5 0 0 0 0 1h.5a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z" />
                                        <path d="M8.5 6.5a.5.5 0 0 0-1 0V8H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V9H10a.5.5 0 0 0 0-1H8.5z" />
                                    </svg>
                                    <span className="ms-2">Edit Profile</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/setting">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                        <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                        <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                    </svg>
                                    <span className="ms-2">Setting</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/support">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-headset" viewBox="0 0 16 16">
                                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5" />
                                    </svg>
                                    <span className="ms-2">Support</span>
                                </Link>
                            </li>
                            <li>
                                <a href="/Logout">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z" />
                                        <path fillRule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                    </svg>
                                    <span className="ms-2">Logout</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="card p-4 shadow-none m-4 help-box alert" role="alert">
                        <button type="button" className="btn-close end-0 me-3 mt-3 position-absolute top-0" data-bs-dismiss="alert" aria-label="Close"></button>
                        <div className="text-center"><Image src={analytics} alt="" height="120" className="mb-3" />
                            <h6 className="mb-1">Monthly Sales Report</h6>
                            <p className="fs-12">Your monthly sales report is ready for download!</p>
                            <div className="d-grid"><a className="btn btn-primary" href="#" target="_blank">Contact Us</a></div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="content-wrapper">
                <div className="main-content">

                    <nav className="navbar-custom-menu navbar navbar-expand-xl m-0 navbar-transfarent">
                        <div className="sidebar-toggle">
                            <div className="sidebar-toggle-icon" id="sidebarCollapse">
                                sidebar toggle<span></span>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">

                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-collapse" aria-expanded="true" aria-label="Toggle navigation"><span></span> <span></span></button>

                            <form className="search" action="#" method="get">
                                <div className="search__inner">
                                    <input type="text" className="search__text" placeholder="Search (Ctrl+/)" />
                                    <svg data-sa-action="search-close" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search__helper" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    <span className="search-shortcode">(Ctrl+/)</span>
                                </div>
                            </form>

                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link  material-ripple" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="typcn typcn-weather-stormy top-menu-icon"></i>Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link  material-ripple" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="typcn typcn-weather-stormy top-menu-icon"></i>Dashboard
                                    </a>

                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link " href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                                        Listing
                                    </a>

                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/listings-map-grid-1"><i className="typcn typcn-point-of-interest-outline top-menu-icon"></i>Explore</a>
                                </li>

                            </ul>
                        </div>
                        <div className="navbar-icon d-flex">
                            <ul className="navbar-nav flex-row align-items-center">
                                <li className="nav-item">
                                    <a className="nav-link" href="#" id="btnFullscreen">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-fullscreen" viewBox="0 0 16 16">
                                            <path d="M1.5 1a.5.5 0 0 0-.5.5v4a.5.5 0 0 1-1 0v-4A1.5 1.5 0 0 1 1.5 0h4a.5.5 0 0 1 0 1zM10 .5a.5.5 0 0 1 .5-.5h4A1.5 1.5 0 0 1 16 1.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 1-.5-.5M.5 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 0 14.5v-4a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v4a1.5 1.5 0 0 1-1.5 1.5h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 1 .5-.5" />
                                        </svg>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link dark-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon" viewBox="0 0 16 16">
                                            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278M4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link light-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high" viewBox="0 0 16 16">
                                            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                                        </svg>
                                    </button>
                                </li>
                                <li className="nav-item dropdown user-menu user-menu-custom">
                                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="profile-element d-flex align-items-center flex-shrink-0 p-0 text-start">
                                            <div className="avatar online">
                                                <Image src={avatar} className="img-fluid rounded-circle" alt="" />
                                            </div>
                                            <div className="profile-text">
                                                <h6 className="m-0 fw-medium fs-14">Sumanta Ghosh</h6>
                                                <span><span className="__cf_email__" data-cfemail="d1b4a9b0bca1bdb491b6bcb0b8bdffb2bebc">[email&#160;protected]</span></span>
                                            </div>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-header d-sm-none">
                                            <a href="#" className="header-arrow"><i className="icon ion-md-arrow-back"></i></a>
                                        </div>
                                        <div className="user-header">
                                            <div className="img-user">
                                                <Image src={avatar} alt="" />
                                            </div>
                                            <h6>Naeem Khan</h6>
                                            <span><a href="https://themes.easital.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="600518010d100c0520070d01090c4e030f0d">[email&#160;protected]</a></span>
                                        </div>
                                        <a href="/profile" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                                            </svg>
                                            My Profile</a>
                                        <a href="/profile" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-pen" viewBox="0 0 16 16">
                                                <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
                                            </svg>
                                            Edit Profile</a>
                                        <a href="#" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-shuffle" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5" />
                                                <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z" />
                                            </svg>
                                            Activity Logs</a>
                                        <a href="/setting-app" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-gear" viewBox="0 0 16 16">
                                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                                            </svg>
                                            Account Settings</a>
                                        <a href="/sign-in" className="dropdown-item">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
                                                <path fillRule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                            </svg>
                                            Sign Out</a>
                                    </div>

                                </li>
                            </ul>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i className="fa-solid fa-bars fs-18"></i>
                        </button>
                    </nav>

                    <div className="body-content">
                        <div className="decoration blur-2"></div>
                        <div className="decoration blur-3"></div>
                        <div className="container-xxl">

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
                        </div>
                    </div>

                </div>

                <footer className="footer-content">
                    <div className="align-items-center d-flex footer-text gap-3 justify-content-between">
                        <div className="copy">© 2025 Innovination - All Rights Reserved</div>
                        <div className="credit">Developed by: <a href="#">Innovination</a> 🌺💚</div>
                    </div>
                </footer>

                <div className="overlay"></div>
            </div>

        </div>
    );
}
