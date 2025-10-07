export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="bg-dark text-light pt-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="mb-3">BizDirectory</h5>
              <p className="text-white-50">
                Discover local businesses and services around you. Find, review, and connect.
              </p>
            </div>
  
            <div className="col-6 col-md-2">
              <h6 className="text-uppercase mb-3">Company</h6>
              <ul className="list-unstyled">
                <li><a className="link-light text-decoration-none" href="/about">About</a></li>
                <li><a className="link-light text-decoration-none" href="/contact">Contact</a></li>
                <li><a className="link-light text-decoration-none" href="/privacy">Privacy</a></li>
                <li><a className="link-light text-decoration-none" href="/terms">Terms</a></li>
              </ul>
            </div>
  
            <div className="col-6 col-md-3">
              <h6 className="text-uppercase mb-3">Help</h6>
              <ul className="list-unstyled">
                <li><a className="link-light text-decoration-none" href="/faq">FAQ</a></li>
                <li><a className="link-light text-decoration-none" href="/support">Support</a></li>
                <li><a className="link-light text-decoration-none" href="/list-with-us">List your business</a></li>
              </ul>
            </div>
  
            <div className="col-md-3">
              <h6 className="text-uppercase mb-3">Follow</h6>
              <div className="d-flex gap-3 fs-4">
                <a className="link-light" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="link-light" href="#"><i className="fab fa-twitter"></i></a>
                <a className="link-light" href="#"><i className="fab fa-instagram"></i></a>
                <a className="link-light" href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
  
          <hr className="border-secondary my-4" />
  
          <div className="d-flex justify-content-between align-items-center pb-4">
            <small className="text-white-50">© {year} BizDirectory. All rights reserved.</small>
            <small className="text-white-50">Made with ♥</small>
          </div>
        </div>
      </footer>
    );
  }
  