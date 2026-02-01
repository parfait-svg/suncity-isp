import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faInfinity, faHeadset } from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  const items = [
    { title: 'Gigabit Speeds', desc: 'Blazing-fast connections for streaming, work, and gaming.', icon: faBolt },
    { title: 'Unlimited Data', desc: 'No caps, no throttling — just pure connectivity.', icon: faInfinity },
    { title: '24/7 Support', desc: 'Local experts ready to help whenever you need them.', icon: faHeadset },
  ];

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Why SunCity? Reliable Internet with Local Support</h2>
        <p className="lead mb-5 text-secondary">
          We focus on performance, affordability, and a delightful customer experience.
        </p>

        <div className="row g-4">
          {items.map((it) => (
            <div key={it.title} className="col-12 col-md-4">
              <div className="card h-100 shadow-sm border-0 p-4 text-center">
                <FontAwesomeIcon icon={it.icon} size="3x" className="text-primary mb-3" />
                <h5 className="fw-bold mb-3">{it.title}</h5>
                <p className="text-secondary">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
