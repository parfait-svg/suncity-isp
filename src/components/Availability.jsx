import { useState } from 'react';

export default function Availability() {
  const [q, setQ] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const check = (e) => {
    e && e.preventDefault();
    if (!q.trim()) return;
    setLoading(true);
    setResult(null);
    // mock async availability check
    setTimeout(() => {
      const lower = q.toLowerCase();
      const available = lower.includes('logpom') || lower.includes('douala') || Math.random() > 0.4;
      setResult(available ? { ok: true, plan: available && lower.includes('business') ? 'Business' : 'Starter' } : { ok: false });
      setLoading(false);
    }, 900);
  };

  return (
    <div className="availability mt-4 p-3 rounded shadow-sm bg-white" aria-live="polite">
      <form className="d-flex gap-2" onSubmit={check} aria-label="Check availability">
        <label className="visually-hidden" htmlFor="avail-q">Address or Neighborhood</label>
        <input id="avail-q" className="form-control" placeholder="Enter address or neighborhood (e.g. Logpom)" value={q} onChange={(e)=>setQ(e.target.value)} aria-label="Address or neighborhood" />
        <button className="btn btn-primary" type="submit" disabled={loading} aria-busy={loading}>{loading ? 'Checking…' : 'Check'}</button>
      </form>

      <div className="mt-3" role="status">
        {result === null && <small className="text-muted">We’ll check availability in your area.</small>}
        {result && result.ok && (
          <div className="text-success">Good news — service is available! Suggested plan: <strong>{result.plan}</strong></div>
        )}
        {result && !result.ok && (
          <div className="text-danger">Unfortunately we don’t yet cover your area. Leave a request and we’ll notify you when available.</div>
        )}
      </div>
    </div>
  );
}
