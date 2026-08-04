import { Link } from 'react-router-dom'

export default function Guides() {
  return (
    <section className="section">
      <div className="container container-narrow">
        <h1>Guides</h1>
        <p className="page-sub">In-depth, experience-based comparisons and implementation guides.</p>

        <div className="guide-list">
          <Link to="/guides/sap-ewm-vs-manhattan-vs-blue-yonder" className="guide-list-item">
            <h3>SAP EWM vs Manhattan vs Blue Yonder: The Complete Comparison</h3>
            <p>
              A full breakdown of the three leading enterprise WMS platforms &mdash; cost, implementation
              complexity, best-fit business profiles, and what the sales cycle won&rsquo;t tell you.
            </p>
          </Link>

          <div className="guide-list-item guide-list-item-placeholder">
            <h3>More guides coming soon</h3>
            <p>Platform-specific deep dives, migration guides, and implementation pitfall checklists.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
