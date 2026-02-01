export default function Footer() {
  return (
    <footer className="bg-black text-light pt-5 pb-4">
      <div className="container">

        <div className="row gy-4 align-items-start">

          {/* Brand */}
          <div className="col-12 col-md-4">
            <div className="fw-bold fs-5 mb-2">SunCity</div>
            <p className="text-secondary mb-0">
              Fast, reliable internet with trusted local support.
            </p>
          </div>

          {/* Contact */}
          <div className="col-12 col-md-4">
            <div className="fw-semibold mb-2">Contact</div>
            <p className="text-secondary mb-1">support@suncityisp.com</p>
            <p className="text-secondary mb-0">+237 699 902 797</p>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-4">
            <div className="fw-semibold mb-2">Quick Links</div>
            <ul className="list-unstyled">
              <li>
                <a href="#plans" className="text-secondary text-decoration-none">
                  Plans
                </a>
              </li>
              <li>
                <a href="#features" className="text-secondary text-decoration-none">
                  Features
                </a>
              </li>
              <li>
                <a href="#coverage" className="text-secondary text-decoration-none">
                  Coverage
                </a>
              </li>
              <li>
                <a href="#contact" className="text-secondary text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-secondary my-4" />

        {/* Copyright */}
        <div className="text-center text-secondary small">
          © {new Date().getFullYear()} <strong>Brice Parfait</strong> | SunCity ISP. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
