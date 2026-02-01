import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faDollarSign, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

export default function WhyUse() {
  return (
    <section id="why" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">Why Choose SunCity?</h2>

        <div className="row g-4">

          {/* Local Expertise Card */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <FontAwesomeIcon icon={faUserTie} size="3x" className="text-primary mb-3" />
              <h5 className="fw-bold mb-3">Local Expertise</h5>
              <p className="text-secondary">
                Installation and support by local technicians who know your area inside out.
              </p>
            </div>
          </div>

          {/* Competitive Pricing Card */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <FontAwesomeIcon icon={faDollarSign} size="3x" className="text-primary mb-3" />
              <h5 className="fw-bold mb-3">Competitive Pricing</h5>
              <p className="text-secondary">
                Flexible plans for homes and businesses with no surprise fees.
              </p>
            </div>
          </div>

          {/* Reliability Card */}
          <div className="col-12 col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center p-4">
              <FontAwesomeIcon icon={faShieldAlt} size="3x" className="text-primary mb-3" />
              <h5 className="fw-bold mb-3">Reliability</h5>
              <p className="text-secondary">
                Redundant networks and continuous monitoring to keep you online 24/7.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
