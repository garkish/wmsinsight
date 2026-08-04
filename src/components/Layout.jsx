import { Link, Outlet, useLocation } from 'react-router-dom'

export default function Layout() {
  const location = useLocation()

  const navLink = (to, label) => (
    <Link
      to={to}
      className={`nav-link ${location.pathname === to ? 'active' : ''}`}
    >
      {label}
    </Link>
  )

  return (
    <div className="site">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">
            WMS<span className="brand-accent">Insight</span>
          </Link>
          <nav className="nav">
            {navLink('/', 'Home')}
            {navLink('/guides', 'Guides')}
            {navLink('/consulting', 'Consulting')}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>&copy; {new Date().getFullYear()} WMSInsight. Practitioner analysis for warehouse technology decisions.</p>
          <p className="footer-disclaimer">
            The author currently works at Infios. Views and comparisons here are personal, not an official
            Infios publication. All product names, trademarks, and registered trademarks (Infios&reg;,
            K&ouml;rber&reg;, HighJump&reg;, SAP&reg; EWM, Manhattan Associates&reg;, Blue Yonder&reg;) are
            property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  )
}
