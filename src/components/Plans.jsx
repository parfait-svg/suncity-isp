import { useState } from 'react';

export default function Plans() {
  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '30,000CFA/month',
      speed: '50 Mbps',
      perks: ['Unlimited data', 'Free installation', 'Basic TV channels'],
      tvChannels: ['CNN', 'BBC', 'Cartoon Network', 'MTV'],
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '60,000CFA/month',
      speed: '250 Mbps',
      perks: ['Static IP', 'Priority support', 'Premium TV channels'],
      tvChannels: ['ESPN', 'Discovery', 'National Geographic', 'HBO'],
    },
    {
      id: 'business',
      name: 'Business',
      price: '120,000CFA/month',
      speed: '1 Gbps',
      perks: ['SLA', 'Dedicated support', 'All TV channels'],
      tvChannels: ['All Starter + Pro channels', 'Business News', 'Local Channels'],
    },
  ];

  const [selected, setSelected] = useState(plans[0].id);

  return (
    <section id="plans" className="plans py-5" aria-labelledby="plans-heading">
      <div className="container text-center">

        <h2 id="plans-heading" className="fw-bold mb-3">Plans for Every Need</h2>
        <p className="lead mb-5 text-secondary">
          Choose a plan that fits your usage and budget. Upgrade anytime.
        </p>

        <div className="row g-4" role="radiogroup" aria-label="Choose a plan">
          {plans.map((p) => (
            <div key={p.id} className={`col-12 col-md-4`}>
              <div className={`card h-100 shadow-sm p-4 text-center ${selected === p.id ? 'border-primary border-3' : ''}`}>
                
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h4 className="fw-bold">{p.name}</h4>
                  <div className="fs-5 fw-bold text-primary">{p.price}</div>
                </div>

                <p className="text-secondary mb-3">{p.speed}</p>

                <ul className="list-unstyled text-start mb-3">
                  {p.perks.map((perk) => (
                    <li key={perk}>• {perk}</li>
                  ))}
                </ul>

                <div className="mb-3 text-start">
                  <strong>TV Channels:</strong>
                  <ul className="list-unstyled mb-0">
                    {p.tvChannels.map((ch) => (
                      <li key={ch}>• {ch}</li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex justify-content-center gap-2">
                  <button
                    className={`btn btn-outline-primary ${selected === p.id ? 'active' : ''}`}
                    onClick={() => setSelected(p.id)}
                    aria-pressed={selected === p.id}
                  >
                    {selected === p.id ? 'Selected' : 'Select'}
                  </button>
                  <a href="#contact" className="btn btn-primary">Get Started</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Plan Summary */}
        <div className="mt-5 text-center">
          <h5 className="fw-bold mb-2">Selected plan details</h5>
          {plans.map(p =>
            selected === p.id && (
              <div key={p.id} className="p-3 bg-white rounded shadow-sm d-inline-block text-start">
                <strong>{p.name}</strong> — {p.speed} • {p.price}
                <p className="text-secondary mt-2">
                  {p.perks.join(' • ')} • TV: {p.tvChannels.join(', ')}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
