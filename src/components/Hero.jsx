import Availability from './Availability';
import Heroimage from '../assets/hero2.png';

export default function Hero() {
  return (
    <section className="hero bg-white py-5" id="home">
      <div className="container">

        {/* GRID: TEXT LEFT (DESKTOP) / CENTER (MOBILE) */}
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 pe-lg-5 text-center text-lg-start">
            <span className="badge bg-primary-subtle text-primary mb-3">
              Trusted Local Internet Provider
            </span>

            <h1 className="display-5 fw-bold mt-3 mb-4">
              Reliable High-Speed Internet
              <br className="d-none d-md-block" />
              Built for Modern Living & Business
            </h1>

            <p className="lead text-secondary mb-4">
              SunCity ISP delivers fast, stable, and affordable internet
              connectivity for homes, SMEs, and enterprises.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <div className="hero-image rounded-4 overflow-hidden">
              <img
                src={Heroimage}
                alt="SunCity ISP technical team"
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        {/* CTA BUTTONS — CENTERED */}
        <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
          <a href="#contact" className="btn btn-primary btn-lg px-5 rounded-pill">
            Request Installation
          </a>

          <a href="#plans" className="btn btn-outline-primary btn-lg px-5 rounded-pill">
            View Internet Plans
          </a>
        </div>

        <Availability />
      </div>
    </section>
  );
}
