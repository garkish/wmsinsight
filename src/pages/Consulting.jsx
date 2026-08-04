export default function Consulting() {
  return (
    <section className="section">
      <div className="container container-narrow">
        <h1>Independent WMS Implementation Advice</h1>
        <p className="page-sub">
          Considering a new WMS implementation or a migration between platforms? Get a vendor-neutral
          opinion before you sign anything.
        </p>

        <div className="grid-3">
          <div className="card">
            <h3>Platform selection</h3>
            <p>Which WMS actually fits your operational complexity, ERP stack, and budget &mdash; not just the vendor with the best sales deck.</p>
          </div>
          <div className="card">
            <h3>Implementation review</h3>
            <p>A second opinion on your implementation plan, timeline, and scope before you commit resources.</p>
          </div>
          <div className="card">
            <h3>Migration planning</h3>
            <p>Moving between platforms is high-risk &mdash; get a clear-eyed view of what it actually takes.</p>
          </div>
        </div>

        <div className="contact-block">
          <h2>Get in touch</h2>
          <p>
            Reach out with a short description of your situation &mdash; current WMS (if any), rough timeline,
            and what you&rsquo;re trying to decide.
          </p>
          <a href="mailto:hello@wmsinsight.io" className="btn btn-primary">
            Email hello@wmsinsight.io
          </a>
        </div>
      </div>
    </section>
  )
}
