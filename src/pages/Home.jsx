import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Choosing the right Warehouse Management System shouldn't be a guess.</h1>
          <p className="hero-sub">
            Independent, experience-based comparisons of SAP EWM, Manhattan Associates, and Blue Yonder &mdash;
            written by someone who has implemented all three, not just read the datasheets.
          </p>
          <div className="hero-actions">
            <Link to="/guides/sap-ewm-vs-manhattan-vs-blue-yonder" className="btn btn-primary">
              Read the Full Comparison
            </Link>
            <Link to="/consulting" className="btn btn-secondary">
              Get Implementation Advice
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Why WMSInsight</h2>
          <div className="grid-3">
            <div className="card">
              <h3>Hands-on experience</h3>
              <p>
                Direct implementation and support experience across SAP EWM, Manhattan Associates,
                and Blue Yonder deployments &mdash; not vendor marketing rewritten.
              </p>
            </div>
            <div className="card">
              <h3>No vendor bias</h3>
              <p>
                WMSInsight isn't affiliated with, sponsored by, or reselling any WMS vendor.
                The comparisons reflect real trade-offs, including the uncomfortable ones.
              </p>
            </div>
            <div className="card">
              <h3>Built for decision-makers</h3>
              <p>
                Content is written for the people actually choosing or migrating a WMS &mdash;
                covering cost, implementation timeline, fit by business size, and common pitfalls.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Featured Guide</h2>
          <div className="featured-card">
            <h3>SAP EWM vs Manhattan vs Blue Yonder: The Complete 2026 Comparison</h3>
            <p>
              A side-by-side breakdown of the three leading enterprise WMS platforms &mdash; implementation
              complexity, total cost of ownership, best-fit business profiles, and what nobody tells you
              during the sales cycle.
            </p>
            <Link to="/guides/sap-ewm-vs-manhattan-vs-blue-yonder" className="btn btn-primary">
              Read the Guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <h2>Evaluating a WMS switch or new implementation?</h2>
          <p>Get an independent second opinion before you sign a contract.</p>
          <Link to="/consulting" className="btn btn-primary">
            Talk to an Advisor
          </Link>
        </div>
      </section>
    </>
  )
}
