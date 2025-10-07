'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store";
import { login as loginThunk } from "@/store/authSlice";
import { useSearchParams } from "next/navigation";

import loginImage from '@/../public/assets/images/png-img/login.png';
import lineImage from '@/../public/assets/images/lines.svg';

export default function LoginPage() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const [showPwd, setShowPwd] = useState(false);
    const [loading, setLoading] = useState(false);
    const [serverErr, setServerErr] = useState("");
    const [form, setForm] = useState({
        email_or_mobile: "",
        password: "",
        remember: false,
    });
    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((s) => ({ ...s, [name]: type === "checkbox" ? checked : value }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        setServerErr("");
        if (!form.email_or_mobile.trim()) return setServerErr("Email or mobile is required");
        if (!form.password) return setServerErr("Password is required");
        try {
            setLoading(true);
            await dispatch(
                loginThunk({ email_or_mobile: form.email_or_mobile.trim(), password: form.password,})
            ).unwrap();
            const next = searchParams.get("next");
            router.push(next || "/dashboard");
        } catch (err) {
            setServerErr(err?.message || "Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-3 p-sm-5">
            <div className="row g-4 g-xl-5 justify-content-between">
                <div className="col-xl-5 d-flex justify-content-center">
                    <div className="authentication-wrap overflow-hidden position-relative text-center text-sm-start my-5">

                        <div className="mb-5">
                            <h2 className="display-6 fw-semibold mb-3">Welcome back! Please <span className="font-caveat text-primary">Sign in</span> to continue.</h2>
                            <p className="mb-0">Unlock a world of exclusive content, enjoy special offers, and be the first to dive into exciting news and updates by joining our community!</p>
                        </div>

                        <div className="d-grid gap-3 mb-3">

                            <a className="align-items-center btn btn-dark btn-lg d-flex linkedin-btn position-relative text-start" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                                </svg>
                                <span className="ms-3">Sign up with Apple</span> </a>
                            <a className="align-items-center btn btn-lg btn-light d-flex google-btn position-relative text-start" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-google" viewBox="0 0 16 16">
                                    <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                                <span className="ms-3">Sign up with Google</span>
                            </a>

                        </div>

                        <p className="mb-0">We won't post anything without your permission and your personal details are kept private</p>

                        <div className="align-items-center d-flex my-5">
                            <hr className="flex-grow-1 m-0" /> <span className="fs-16 fw-bold px-3 text-dark">Or</span>
                            <hr className="flex-grow-1 m-0" />
                        </div>

                        <form className="register-form" onSubmit={onSubmit} noValidate>
                            {serverErr ? <div className="alert alert-danger text-start">{serverErr}</div> : null}

                            <div className="form-group mb-4">
                                <label className="required">Enter Email or Mobile</label>
                                <input type="text"
                                    name="email_or_mobile"
                                    className={`form-control${serverErr && !form.email_or_mobile ? " is-invalid" : ""}`}
                                    value={form.email_or_mobile}
                                    onChange={onChange}
                                    required />
                                {serverErr && !form.email_or_mobile ? (
                                    <div className="invalid-feedback text-start d-block">Enter your email or mobile</div>
                                ) : null}
                            </div>

                            {/* <div className="form-group mb-4">
                                <label className="required">Password</label>
                                <input id="password" type="password" className="form-control password" autoComplete="off" />
                                <i data-bs-toggle="#password" className="fa-regular fa-eye-slash toggle-password"></i>
                            </div> */}

                            <div className="form-group mb-4 position-relative">
                                <label className="required">Password</label>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPwd ? "text" : "password"}
                                    className="form-control password"
                                    autoComplete="off"
                                    value={form.password}
                                    onChange={onChange}
                                    required
                                />
                                <button
                                    type="button"
                                    aria-label="toggle password"
                                    className="btn btn-sm btn-link position-absolute top-0 end-0 mt-2 me-2"
                                    onClick={() => setShowPwd((v) => !v)}
                                >
                                    <i className={`fa-regular ${showPwd ? "fa-eye" : "fa-eye-slash"}`} />
                                </button>
                            </div>


                            {/* <div className="form-check mb-4 text-start">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="remember"
                                    name="remember"
                                    checked={form.remember}
                                    onChange={onChange}
                                />
                                <label className="form-check-label" htmlFor="remember">Remember me next time</label>
                            </div> */}

                            <button type="submit" className="btn btn-primary btn-lg w-100">{loading ? "Signing in…" : "Sign In"}</button>

                        </form>

                        <div className="bottom-text text-center mt-4"> Don't have an account? <Link href="/sign-up" className="fw-medium text-decoration-underline">Sign Up</Link>
                            <br /> Remind <Link href="/forgot-password" className="fw-medium text-decoration-underline">Password</Link>
                        </div>

                    </div>
                </div>
                <div className="col-xl-7 d-none d-xl-block">
                    <div className="background-image bg-light d-flex flex-column h-100 justify-content-center p-5 rounded-4" data-image-src="assets/images/lines.svg" >
                        <div className="py-5 text-center">
                            <div className="mb-5">
                                <h2 className="fw-semibold">Effortlessly organize your<br /> workspace with ease.</h2>
                                <p>It is a long established fact that a reader will be distracted by the readable<br /> content of a page when looking at its layout. </p>
                            </div>
                            <Image src={loginImage} alt="" className="img-fluid" width={600}
                                height={420} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
