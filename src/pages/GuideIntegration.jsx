import { Link } from 'react-router-dom'

export default function GuideIntegration() {
  return (
    <article className="section guide">
      <div className="container container-narrow">
        <Link to="/guides" className="back-link">&larr; All Guides</Link>
        <h1>What Actually Breaks in WMS&ndash;ERP Integrations</h1>
        <p className="guide-meta">
          Lessons from wiring Infios WM to SAP and other ERP/legacy stacks &mdash; REST, XML, flat files,
          EDI, shared tables, and the reconciliation work nobody puts on the happy-path diagram.
        </p>

        <p>
          Every WMS proposal has a tidy architecture slide: ERP on the left, WMS on the right, a clean arrow
          labeled &ldquo;orders / ASNs / inventory.&rdquo; I&rsquo;ve built those arrows for years. The failures
          almost never happen on the arrow. They happen in timing, ownership, and the exceptions the slide
          omitted.
        </p>

        <h2>The interfaces that always look simple</h2>
        <p>
          Regardless of whether you&rsquo;re on Infios, Manhattan, Blue Yonder, or SAP EWM talking to a
          non-SAP satellite system, the same payloads show up:
        </p>
        <ul>
          <li>Item / customer / vendor / location master data</li>
          <li>Inbound ASNs and expected receipts</li>
          <li>Outbound orders (and cancels, holds, partials, substitutions)</li>
          <li>Inventory balances and adjustments</li>
          <li>Ship confirmations and packing details</li>
          <li>Sometimes billing events, labor, or WCS/TMS handoffs on the same bus</li>
        </ul>
        <p>
          I&rsquo;ve shipped these over REST (JSON/XML), service broker patterns, flat files, EDI, and shared
          database tables. Protocol choice matters less than contracts: who is system of record, what
          happens when a message arrives late, and how you detect silent drift.
        </p>

        <h2>Failure modes I keep seeing</h2>
        <h3>1. Master data that &ldquo;mostly&rdquo; syncs</h3>
        <p>
          Go-live week is when you discover UOMs that don&rsquo;t match, pack quantities that exist only in
          one system, and items that were never activated for the warehouse. Partial sync jobs that &ldquo;catch
          up overnight&rdquo; create receiving screens that look valid and post inventory the ERP rejects two
          hours later. Fix: explicit ownership per attribute, a pre-go-live reconciliation report that
          compares counts and key attributes, and a freeze window that people actually respect.
        </p>

        <h3>2. ASN timing vs. the truck at the dock</h3>
        <p>
          Warehouse operations will receive without an ASN if the dock is blocked. Your integration design
          must allow blind receipt and a later match &mdash; or you will get shadow spreadsheets on day two.
          The opposite failure is also common: ASNs that update after putaway has started, leaving open
          quantities that never close cleanly.
        </p>

        <h3>3. Order cancels and changes mid-pick</h3>
        <p>
          Happy-path demos allocate, pick, pack, ship. Real life cancels line 3 while the picker is already
          in the aisle. If the ERP and WMS disagree on whether a change is allowed after wave release, you
          get short ships, ghost allocations, or inventory locked to dead orders. Define state machines
          early: which statuses accept change, which require a supervisor override, and who initiates the
          cancel.
        </p>

        <h3>4. Inventory snapshots that lie</h3>
        <p>
          Nightly full snapshots feel safe and are often wrong enough to hurt. In-flight transactions,
          delayed confirmations, and adjustment races produce variance tickets that ops blames on the WMS
          and IT blames on the ERP. Prefer event-driven adjustments with a controlled full reconcile for
          audit &mdash; and measure lag, not just success/fail counts on the interface monitor.
        </p>

        <h3>5. &ldquo;We&rsquo;ll map it in middleware&rdquo; as a substitute for process design</h3>
        <p>
          Middleware can transform fields. It cannot invent a process owner. When two systems disagree on
          what a return authorization means, no mapper fixes the floor procedure. Integration workshops
          should start with warehouse scenarios, not XSD fields.
        </p>

        <h2>What I put in every integration plan now</h2>
        <ul>
          <li>
            <strong>A system-of-record matrix</strong> for item, inventory, order status, and shipment
            &mdash; one owner per fact, written down.
          </li>
          <li>
            <strong>Exception catalog</strong> before build: blind receipt, over-receipt, short pick, cancel
            after allocate, substitute, damage, cycle count adjustment, ASN revise.
          </li>
          <li>
            <strong>Replay and idempotency rules</strong> so retries don&rsquo;t double-post inventory or
            shipments.
          </li>
          <li>
            <strong>Reconciliation jobs with named owners</strong> (ops + IT), not just a dashboard nobody
            opens.
          </li>
          <li>
            <strong>Hypercare interface triage</strong>: who watches the queue at cutover, what is P1 vs.
            &ldquo;fix tomorrow,&rdquo; how you pause the dock if the ERP confirm path dies.
          </li>
        </ul>

        <h2>SAP-specific notes from the Infios side</h2>
        <p>
          When Infios (or any best-of-breed WMS) sits next to SAP, the political gravity always pulls toward
          &ldquo;make the WMS behave like IM/EWM.&rdquo; Push back on copying SAP document quirks into warehouse
          RF flows. Map business events, not transaction codes. Agree early on whether SAP or the WMS owns
          available-to-promise inventory during the receiving lag. That single decision prevents a whole
          class of customer-service fights after go-live.
        </p>

        <h2>Bottom line</h2>
        <p>
          Platform choice matters. Integration design decides whether go-live is a weekend or a quarter.
          If your SOW prices interfaces as a flat &ldquo;ERP connector&rdquo; with no exception catalog, you
          are not buying a plan &mdash; you are buying a future change request.
        </p>

        <div className="inline-cta">
          <h3>Reviewing an integration design before cutover?</h3>
          <p>
            A second set of eyes on ownership, exceptions, and reconcile strategy is cheaper than a dock
            full of inventory you can&rsquo;t post.
          </p>
          <Link to="/consulting" className="btn btn-primary">Get Implementation Advice &rarr;</Link>
        </div>
      </div>
    </article>
  )
}
