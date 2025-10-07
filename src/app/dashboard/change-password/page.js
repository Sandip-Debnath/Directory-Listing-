// src\app\dashboard\change-password\page.js

"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { changePassword } from "@/utils/api/handlers";
import { useAppSelector, useAppDispatch } from "@/store";
import avatar from '@/../public/assets/dashboard/assets/dist/img/01.jpg';


export default function Prifile() {

    const dispatch = useAppDispatch();
    const user = useAppSelector((s) => s.auth.user);

    const [pwdForm, setPwdForm] = useState({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const [showPwd, setShowPwd] = useState({
        current: false,
        next: false,
        confirm: false,
    });

    const [pwdErr, setPwdErr] = useState({});
    const [pwdSaving, setPwdSaving] = useState(false);
    const [pwdOk, setPwdOk] = useState("");
    const [pwdServerErr, setPwdServerErr] = useState("");

    const onPwdChange = (e) => {
        const { name, value } = e.target;
        setPwdForm((s) => ({ ...s, [name]: value }));
    };

    const validatePwd = () => {
        const e = {};
        if (!pwdForm.password) e.password = "New password is required";
        else if (pwdForm.password.length < 6) e.password = "New password must be at least 6 characters";
        if (!pwdForm.password_confirmation) e.password_confirmation = "Confirm your new password";
        else if (pwdForm.password !== pwdForm.password_confirmation) e.password_confirmation = "Passwords do not match";
        return e;
    };

    const onPwdSubmit = async (e) => {
        e.preventDefault();
        setPwdOk(""); setPwdServerErr("");
        const errs = validatePwd();
        if (Object.keys(errs).length) { setPwdErr(errs); return; }
        setPwdErr({});
        try {
            setPwdSaving(true);
            await changePassword({
               
                new_password: pwdForm.password,
                // password_confirmation: pwdForm.password_confirmation,
            });
            setPwdOk("Password updated successfully.");
            setPwdForm({ current_password: "", password: "", password_confirmation: "" });
        } catch (err) {
            // Show API message if available
            setPwdServerErr(err?.message || "Could not change password");
        } finally {
            setPwdSaving(false);
        }
    };


    return (
        <>

            <div className="card mb-3 p-3">

                <div className="profile-cover">
                    <div className="profile-cover-img-wrapper">
                        <Image className="profile-cover-img" src={avatar} alt="Image Description" />
                        <div className="end-0 me-3 mt-3 position-absolute top-0">
                            <button type="button" className="align-items-center btn btn-light btn-sm d-flex fw-medium gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-card-image" viewBox="0 0 16 16">
                                    <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5z" />
                                </svg>
                                Upload header
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center">

                    <Image className="bg-white p-1 position-relative profile-cover-avatar rounded-circle shadow" src={avatar} alt="" />

                    <h4 className="align-items-center justify-content-center d-flex gap-2 mt-3 mb-2 fw-semibold">
                    {user?.name || "—"}
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-patch-check-fill text-success" viewBox="0 0 16 16">
                            <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"></path>
                        </svg>
                    </h4>

                    <ul className="fs-14 fw-medium list-inline list-separator mb-0 mb-2 text-muted justify-content-center">
                        <li className="list-inline-item">
                            {/* <i className="fa-solid fa-location-dot fs-14 me-1"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-buildings me-1" viewBox="0 0 16 16">
                                <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022ZM6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z" />
                                <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z" />
                            </svg>
                            <span>Innovination.</span>
                        </li>
                        <li className="list-inline-item">
                            {/* <i className="fa-solid fa-user fs-14 me-1"></i> */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt me-1" viewBox="0 0 16 16">
                                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                            </svg>
                            <a href="#"> West Bengal, India</a>
                        </li>
                        <li className="list-inline-item">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar2-plus me-1" viewBox="0 0 16 16">
                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
                                <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8" />
                            </svg>
                            <span>Joined Oct 2025</span>
                        </li>
                    </ul>
                </div>
            </div>



            <div className="card mb-4">
                <div className="card-header position-relative">
                    <h6 className="fs-17 fw-semi-bold mb-0">Change Password</h6>
                </div>
                <div className="card-body">
                    <div className="row g-4">
                        
                        <div className="col-sm-6">
                            <label className="required fw-medium mb-2">New Password</label>
                            <div className="position-relative">
                                <input
                                    type={showPwd.next ? "text" : "password"}
                                    name="password"
                                    className={`form-control${pwdErr.password ? " is-invalid" : ""}`}
                                    autoComplete="new-password"
                                    value={pwdForm.password}
                                    onChange={onPwdChange}
                                />
                                <button
                                    type="button"
                                    aria-label="toggle new password"
                                    className="btn btn-sm btn-link position-absolute top-0 end-0 mt-2 me-2"
                                    onClick={() => setShowPwd((s) => ({ ...s, next: !s.next }))}
                                >
                                    <i className={`fa-regular ${showPwd.next ? "fa-eye" : "fa-eye-slash"}`} />
                                </button>
                            </div>
                            {pwdErr.password && <div className="invalid-feedback d-block">{pwdErr.password}</div>}
                        </div>
                        <div className="col-sm-6">
                            <label className="required fw-medium mb-2">Confirm Password</label>
                            <div className="position-relative">
                                <input
                                    type={showPwd.confirm ? "text" : "password"}
                                    name="password_confirmation"
                                    className={`form-control${pwdErr.password_confirmation ? " is-invalid" : ""}`}
                                    autoComplete="new-password"
                                    value={pwdForm.password_confirmation}
                                    onChange={onPwdChange}
                                />
                                <button
                                    type="button"
                                    aria-label="toggle confirm password"
                                    className="btn btn-sm btn-link position-absolute top-0 end-0 mt-2 me-2"
                                    onClick={() => setShowPwd((s) => ({ ...s, confirm: !s.confirm }))}
                                >
                                    <i className={`fa-regular ${showPwd.confirm ? "fa-eye" : "fa-eye-slash"}`} />
                                </button>
                            </div>
                            {pwdErr.password_confirmation && <div className="invalid-feedback d-block">{pwdErr.password_confirmation}</div>}
                        </div>

                        <div className="col-sm-12">
                            {pwdServerErr ? <div className="alert alert-danger mt-2">{pwdServerErr}</div> : null}
                            {pwdOk ? <div className="alert alert-success mt-2">{pwdOk}</div> : null}

                            <button className="btn btn-primary mt-2" onClick={onPwdSubmit} disabled={pwdSaving}>
                                {pwdSaving ? "Updating…" : "Update Password"}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}