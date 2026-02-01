import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CTA() {
  return (
    <section id="cta" className="cta py-5 bg-primary text-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Ready to switch to SunCity?</h2>
        <p className="lead mb-4">
          Fast, friendly, and affordable connections—check availability now.
        </p>

        <a
          href="#contact"
          className="btn btn-light btn-lg rounded-pill px-5"
        >
          Check Availability <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </a>
      </div>
    </section>
  );
}
