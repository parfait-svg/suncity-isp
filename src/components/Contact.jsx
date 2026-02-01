import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationDot, faPhone, faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const [status, setStatus] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const location = e.target.location.value;
    const phone = e.target.phone.value;

    setStatus('sending');

    const msg = `Hello SunCity ISP,%0A
Request for internet installation:%0A
Name: ${name}%0A
Location: ${location}%0A
Phone: ${phone}`;

    setTimeout(() => {
      window.open(`https://wa.me/237699902797?text=${msg}`, '_blank');
      setStatus('sent');
    }, 600);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-12 col-md-8 col-lg-6">
            <div className="card shadow-sm border-0 p-4 p-md-5">

              <h2 className="text-center fw-bold mb-2">Request Installation</h2>
              <p className="text-center text-secondary mb-4">
                Fill the form below and our team will contact you shortly.
              </p>

              <form onSubmit={submit} aria-label="Request installation form">

                {/* Full Name */}
                <div className="mb-3 input-group">
                  <span className="input-group-text bg-white">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    name="name"
                    placeholder="Full Name"
                    required
                    className="form-control"
                  />
                </div>

                {/* Location */}
                <div className="mb-3 input-group">
                  <span className="input-group-text bg-white">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <input
                    name="location"
                    placeholder="Location"
                    required
                    className="form-control"
                  />
                </div>

                {/* Phone */}
                <div className="mb-4 input-group">
                  <span className="input-group-text bg-white">
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className="form-control"
                  />
                </div>

                {/* Info */}
                <p className="text-muted small mb-4">
                  We’ll contact you via WhatsApp or phone to confirm installation details.
                </p>

                {/* Submit */}
                <div className="d-grid">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg rounded-pill"
                    aria-live="polite"
                  >
                    {status === 'sending' ? 'Sending…' : (
                      <>
                        Send via WhatsApp <FontAwesomeIcon icon={faPaperPlane} className="ms-2" />
                      </>
                    )}
                  </button>
                </div>

                {/* Status */}
                {status === 'sent' && (
                  <div className="text-success text-center mt-3" role="status">
                     Request sent — we will contact you shortly.
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
