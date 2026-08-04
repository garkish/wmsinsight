import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Choosing the right Warehouse Management System shouldn't be a guess.</h1>
          <p className="hero-sub">
            Independent, experience-based guidance on Infios WM, SAP EWM, Manhattan, and Blue Yonder
            &mdash; written from 12+ years of implementations, integrations, and go-lives, not datasheets.
          </p>
          <div className="hero-actions">
            <Link to="/guides/infios-vs-sap-ewm-vs-manhattan-vs-blue-yonder" className="btn btn-primary">
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
                Deep Infios WM (formerly K&ouml;rber / HighJump) delivery across 3PL multi-client and
                cloud warehouses, plus years of ERP, WCS, and TMS integration work &mdash; not vendor
                marketing rewritten.
              </p>
            </div>
            <div className="card">
              <h3>No vendor bias</h3>
              <p>
                WMSInsight isn&rsquo;t affiliated with, sponsored by, or reselling any WMS vendor.
                The comparisons reflect real trade-offs, including when Infios is not the right answer.
              </p>
            </div>
            <div className="card">
              <h3>Built for decision-makers</h3>
              <p>
                Content for people choosing or migrating a WMS &mdash; fit by operating model,
                integration risk, implementation timeline, and the pitfalls that show up after contract
                signature.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2>Guides</h2>
          <div className="guide-list home-guide-list">
            <Link to="/guides/infios-vs-sap-ewm-vs-manhattan-vs-blue-yonder" className="guide-list-item">
              <h3>Infios vs SAP EWM vs Manhattan vs Blue Yonder</h3>
              <p>
                Where each platform wins on the floor, what drives TCO, and what selection cycles usually
                underweight.
              </p>
            </Link>
            <Link to="/guides/wms-erp-integrations" className="guide-list-item">
              <h3>What Actually Breaks in WMS&ndash;ERP Integrations</h3>
              <p>
                The exception paths and ownership gaps that delay go-live more often than the software
                itself.
              </p>
            </Link>
            <Link to="/guides/multi-client-3pl-wms" className="guide-list-item">
              <h3>Designing Multi-Client (3PL) Warehouses in a WMS</h3>
              <p>
                Segregation, process templates, billing, and onboarding patterns from shared DCs that
                actually work.
              </p>
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
