import { Link } from 'react-router-dom'

export default function Guides() {
  return (
    <section className="section">
      <div className="container container-narrow">
        <h1>Guides</h1>
        <p className="page-sub">
          Experience-based comparisons and implementation notes from real Infios WM projects,
          ERP integrations, and multi-client 3PL warehouses.
        </p>

        <div className="guide-list">
          <Link to="/guides/infios-vs-sap-ewm-vs-manhattan-vs-blue-yonder" className="guide-list-item">
            <h3>Infios vs SAP EWM vs Manhattan vs Blue Yonder</h3>
            <p>
              A practitioner comparison of four enterprise WMS options &mdash; where each wins, what
              implementations actually cost in time and customization, and what RFPs usually miss.
            </p>
          </Link>

          <Link to="/guides/wms-erp-integrations" className="guide-list-item">
            <h3>What Actually Breaks in WMS&ndash;ERP Integrations</h3>
            <p>
              Master data drift, ASN timing, mid-pick cancels, and inventory reconciles &mdash; the
              failure modes that turn a clean architecture slide into a rough go-live.
            </p>
          </Link>

          <Link to="/guides/multi-client-3pl-wms" className="guide-list-item">
            <h3>Designing Multi-Client (3PL) Warehouses in a WMS</h3>
            <p>
              Inventory segregation, client-specific processes without forking the DC, billing capture,
              and an onboarding checklist that scales past client number three.
            </p>
          </Link>

          <Link to="/guides/gartner-magic-quadrant-wms" className="guide-list-item">
            <h3>The Gartner Magic Quadrant for WMS: What It Actually Tells You</h3>
            <p>
              How to read the 2026 report, where quadrant position genuinely helps a shortlist, and where
              it stops being useful for your specific decision.
            </p>
          </Link>
        </div>
      </div>
    </section>
  )
}
