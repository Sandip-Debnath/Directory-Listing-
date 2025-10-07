'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import illustration from '@/../public/assets/images/png-img/forgot-password.png';
import lines from '@/../public/assets/images/lines.svg';

export default function ForgotPasswordPage() {
  // avoid extension-injected hydration diffs on inputs
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  useEffect(() => setMounted(true), []);

  const onSubmit = async (e) => {
    e.preventDefault();
    // TODO: call your API to send reset email
    // await fetch('/api/auth/forgot-password', { method: 'POST', body: JSON.stringify({ email }) })
    setStatus('success');
  };

  return (
    <div className="p-3 p-sm-5">
        <div className="row g-4 g-xl-5 justify-content-between align-items-center">
            <div className="col-xl-5 d-flex justify-content-center">
                <div className="authentication-wrap overflow-hidden position-relative text-center text-sm-start my-5">
                    
                    <div className="mb-5">
                        <h2 className="display-6 fw-semibold mb-3">Password <span className="font-caveat text-primary">Reset</span></h2>
                        <p className="mb-0">Fill with your mail to receive instructions on how to reset your password.</p>
                    </div>
                    
                    <form className="register-form">
                       
                        <div className="form-group mb-4">
                            <label className="required">Enter Email</label>
                            <input type="email" className="form-control"/>
                        </div>
                        
                        <div className="form-group mb-4">
                            <label className="required">Password</label>
                            <input id="password" type="password" className="form-control password" autoComplete="off"/>
                            <i data-bs-toggle="#password" className="fa-regular fa-eye-slash toggle-password"></i>
                        </div>
                        
                        <div className="form-group mb-4">
                            <label className="required">Confirm Password</label>
                            <input id="confirmPassword" type="password" className="form-control c-password" autoComplete="off"/>
                            <i data-bs-toggle="#confirmPassword" className="fa-regular fa-eye-slash toggle-password"></i>
                        </div>
                       
                        <button type="submit" className="btn btn-primary btn-lg w-100">Reset Password</button>
                        
                    </form>
                    
                    <div className="bottom-text text-center mt-4">Remember your password? <Link href="/login" className="fw-medium text-decoration-underline">Log in</Link> </div>
                   
                </div>
            </div>
            <div className="col-xl-7 d-none d-xl-block">
                <div className="background-image bg-light d-flex flex-column h-100 justify-content-center p-5 rounded-4" data-image-src="assets/images/lines.svg">
                    <div className="py-5 text-center">
                        <div className="mb-5">
                            <h2 className="fw-semibold">Effortlessly organize your<br/> workspace with ease.</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable<br/> content of a page when looking at its layout. </p>
                        </div>
                        <Image src={illustration} alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
