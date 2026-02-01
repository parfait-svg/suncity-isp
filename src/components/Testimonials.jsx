import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
  const items = [
    {
      name: 'Amina',
      quote: 'SunCity installed internet in my home in just one day — flawless and extremely fast service.',
    },
    {
      name: 'David',
      quote: 'Reliable connection and excellent local support. Highly recommended.',
    },
  ];

  return (
    <section id="testimonials" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">What Our Customers Say</h2>
        <p className="text-center text-secondary mb-5">
          Trusted by homes and businesses across the city
        </p>

        <div className="row g-4">
          {items.map((t) => (
            <div key={t.name} className="col-12 col-md-6">
              <div className="card h-100 shadow-sm border-0 p-4">
                
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  className="text-primary mb-3"
                  size="2x"
                />

                <p className="fst-italic mb-4">“{t.quote}”</p>

                <div className="d-flex justify-content-between align-items-center">
                  <strong>{t.name}</strong>
                  <div className="text-warning">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
