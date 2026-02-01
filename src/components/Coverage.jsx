import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Coverage() {
  return (
    <section id="coverage" className="py-5 bg-light">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-4">
          <FontAwesomeIcon
            icon={faMapLocationDot}
            size="3x"
            className="text-primary mb-3"
          />
          <h2 className="fw-bold">Our Coverage Area</h2>
          <p className="text-secondary">
            SunCity ISP currently operates around Logpom and nearby neighborhoods in Douala.
          </p>
        </div>

        {/* Map */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card shadow-sm border-0 overflow-hidden rounded-4">

              <iframe
                title="SunCity ISP Coverage - Logpom Adventist College"
                src="https://www.google.com/maps?q=College%20Adventiste%20de%20Logpom%20Douala&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <a href="#contact" className="btn btn-primary btn-lg rounded-pill px-5">
            Check Availability in Your Area
          </a>
        </div>

      </div>
    </section>
  );
}
